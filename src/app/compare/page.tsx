"use client";

import { useComparison } from "@/contexts/comparison-context";
import { getPhonesByIds } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X } from "lucide-react";

export default function ComparePage() {
  const { comparisonList, removeFromCompare, clearCompareList } = useComparison();
  const phonesToCompare = getPhonesByIds(comparisonList);

  if (phonesToCompare.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold font-headline">Compare Phones</h1>
        <p className="mt-4 text-muted-foreground text-lg">
          You haven't selected any phones to compare yet.
        </p>
      </div>
    );
  }

  const specKeys = {
    "Display": "display",
    "Camera": "camera",
    "Processor": "processor",
    "Memory": "memory",
    "Battery": "battery",
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold font-headline">Compare Phones</h1>
        {phonesToCompare.length > 0 && (
          <Button variant="destructive" onClick={clearCompareList}>
            Clear All
          </Button>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[1000px] border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-4 w-48 text-left align-top sticky left-0 bg-background">Feature</th>
              {phonesToCompare.map((phone) => {
                const image = PlaceHolderImages.find((img) => img.id === phone.images[0]);
                return (
                  <th key={phone.id} className="p-4 w-64 text-center align-top relative">
                     <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-7 w-7" onClick={() => removeFromCompare(phone.id)}>
                        <X className="h-4 w-4"/>
                     </Button>
                    {image && (
                      <Card className="mb-2 overflow-hidden">
                        <CardContent className="p-0">
                        <Image
                            src={image.imageUrl}
                            alt={phone.model}
                            width={150}
                            height={150}
                            className="aspect-square object-cover mx-auto"
                            data-ai-hint={image.imageHint}
                        />
                        </CardContent>
                      </Card>
                    )}
                    <p className="font-semibold">{phone.model}</p>
                    <p className="text-sm text-muted-foreground">{phone.brand}</p>
                    <p className="font-bold text-primary mt-1">${phone.price}</p>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {Object.entries(specKeys).map(([sectionTitle, sectionKey]) => (
                <>
                <tr key={sectionKey} className="bg-muted font-bold">
                    <td colSpan={1 + phonesToCompare.length} className="p-2 text-primary sticky left-0 bg-muted">{sectionTitle}</td>
                </tr>
                {Object.keys(phonesToCompare[0].specifications[sectionKey as keyof typeof phonesToCompare[0]['specifications']]).map((spec) => (
                    <tr key={spec} className="border-b">
                        <td className="p-4 font-medium capitalize w-48 text-left align-top sticky left-0 bg-background">
                        {spec.replace(/([A-Z])/g, ' $1')}
                        </td>
                        {phonesToCompare.map((phone, phoneIndex) => {
                            const value = (phone.specifications as any)[sectionKey][spec];
                            const isDifferent = phonesToCompare.some(p => (p.specifications as any)[sectionKey][spec] !== value);
                            
                            return (
                                <td key={`${phone.id}-${spec}`} className={`p-4 text-center align-top ${isDifferent ? 'bg-blue-50 dark:bg-blue-900/10' : ''}`}>
                                {value}
                                </td>
                            );
                        })}
                    </tr>
                ))}
                </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
