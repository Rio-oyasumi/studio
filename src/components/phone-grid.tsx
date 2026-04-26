"use client";

import { useState, useMemo } from 'react';
import type { Phone } from '@/lib/types';
import { PhoneCard } from './phone-card';
import { PhoneFilters } from './phone-filters';
import { getPhones } from '@/lib/data';

interface PhoneGridProps {
  phones: Phone[];
}

export function PhoneGrid({ phones }: PhoneGridProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [brandFilter, setBrandFilter] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 1500]);

  const allBrands = useMemo(() => {
    const brands = new Set(phones.map((p) => p.brand));
    return Array.from(brands);
  }, [phones]);

  const filteredPhones = useMemo(() => {
    return phones.filter((phone) => {
      const matchesSearch = phone.model.toLowerCase().includes(searchTerm.toLowerCase()) || phone.brand.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBrand = brandFilter.length === 0 || brandFilter.includes(phone.brand);
      const matchesPrice = phone.price >= priceRange[0] && phone.price <= priceRange[1];
      return matchesSearch && matchesBrand && matchesPrice;
    });
  }, [phones, searchTerm, brandFilter, priceRange]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-1">
        <PhoneFilters
          brands={allBrands}
          priceRange={priceRange}
          onPriceChange={setPriceRange}
          selectedBrands={brandFilter}
          onBrandChange={setBrandFilter}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
      </div>
      <div className="lg:col-span-3">
        {filteredPhones.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredPhones.map((phone) => (
              <PhoneCard key={phone.id} phone={phone} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center col-span-full h-96 bg-card rounded-lg border-dashed border-2">
            <h3 className="text-xl font-semibold">No Phones Found</h3>
            <p className="text-muted-foreground mt-2">Try adjusting your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
