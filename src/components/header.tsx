"use client";

import Link from "next/link";
import { GitCompareArrows, Smartphone } from "lucide-react";
import { useComparison } from "@/contexts/comparison-context";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function Header() {
  const { comparisonList } = useComparison();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="flex items-center gap-2 mr-6">
          <Smartphone className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg font-headline">PixelPortal</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm ml-auto">
          <Button asChild variant="ghost">
            <Link href="/compare" className="relative">
              <GitCompareArrows className="mr-2" />
              Compare
              {comparisonList.length > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -right-2 -top-2 h-5 w-5 justify-center p-0"
                >
                  {comparisonList.length}
                </Badge>
              )}
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
