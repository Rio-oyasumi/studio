"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useToast } from "@/hooks/use-toast";

interface ComparisonContextType {
  comparisonList: string[];
  addToCompare: (phoneId: string) => void;
  removeFromCompare: (phoneId: string) => void;
  isInCompareList: (phoneId: string) => boolean;
  clearCompareList: () => void;
}

const ComparisonContext = createContext<ComparisonContextType | undefined>(undefined);

export const ComparisonProvider = ({ children }: { children: ReactNode }) => {
  const [comparisonList, setComparisonList] = useState<string[]>([]);
  const { toast } = useToast();
  const MAX_COMPARE_ITEMS = 4;

  const addToCompare = (phoneId: string) => {
    setComparisonList((prevList) => {
      if (prevList.includes(phoneId)) {
        return prevList;
      }
      if (prevList.length >= MAX_COMPARE_ITEMS) {
        toast({
          title: "Comparison Limit Reached",
          description: `You can only compare up to ${MAX_COMPARE_ITEMS} phones at a time.`,
          variant: "destructive",
        });
        return prevList;
      }
      toast({
        title: "Added to Compare",
        description: "Device added to your comparison list.",
      });
      return [...prevList, phoneId];
    });
  };

  const removeFromCompare = (phoneId: string) => {
    setComparisonList((prevList) => prevList.filter((id) => id !== phoneId));
    toast({
        title: "Removed from Compare",
        description: "Device removed from your comparison list.",
      });
  };

  const isInCompareList = (phoneId: string) => {
    return comparisonList.includes(phoneId);
  };
  
  const clearCompareList = () => {
    setComparisonList([]);
  };

  return (
    <ComparisonContext.Provider value={{ comparisonList, addToCompare, removeFromCompare, isInCompareList, clearCompareList }}>
      {children}
    </ComparisonContext.Provider>
  );
};

export const useComparison = () => {
  const context = useContext(ComparisonContext);
  if (context === undefined) {
    throw new Error('useComparison must be used within a ComparisonProvider');
  }
  return context;
};
