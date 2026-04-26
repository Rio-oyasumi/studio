"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Filter } from "lucide-react";

interface PhoneFiltersProps {
  brands: string[];
  priceRange: number[];
  onPriceChange: (value: number[]) => void;
  selectedBrands: string[];
  onBrandChange: (brands: string[]) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export function PhoneFilters({
  brands,
  priceRange,
  onPriceChange,
  selectedBrands,
  onBrandChange,
  searchTerm,
  onSearchChange,
}: PhoneFiltersProps) {

  const handleBrandChange = (brand: string) => {
    const newSelectedBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand];
    onBrandChange(newSelectedBrands);
  };

  const filtersContent = (
    <div className="space-y-6">
      <div>
        <Label htmlFor="search">Search</Label>
        <Input
          id="search"
          placeholder="Pixel, iPhone, Galaxy..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Brand</h3>
        <div className="space-y-2">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox
                id={`brand-${brand}`}
                checked={selectedBrands.includes(brand)}
                onCheckedChange={() => handleBrandChange(brand)}
              />
              <Label htmlFor={`brand-${brand}`} className="font-normal">{brand}</Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Price Range</h3>
        <Slider
          min={0}
          max={1500}
          step={50}
          value={priceRange}
          onValueChange={onPriceChange}
        />
        <div className="flex justify-between text-sm text-muted-foreground mt-2">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="lg:hidden mb-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
            </SheetHeader>
            <div className="py-4">{filtersContent}</div>
          </SheetContent>
        </Sheet>
      </div>

      <Card className="hidden lg:block sticky top-20">
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent>
          {filtersContent}
        </CardContent>
      </Card>
    </>
  );
}
