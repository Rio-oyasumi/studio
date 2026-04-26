"use client";

import Link from 'next/link';
import Image from 'next/image';
import type { Phone } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Check, Plus } from 'lucide-react';
import { useComparison } from '@/contexts/comparison-context';

interface PhoneCardProps {
  phone: Phone;
}

export function PhoneCard({ phone }: PhoneCardProps) {
  const { addToCompare, removeFromCompare, isInCompareList } = useComparison();
  const image = PlaceHolderImages.find((img) => img.id === phone.images[0]);
  const isComparing = isInCompareList(phone.id);

  const handleCompareClick = () => {
    if (isComparing) {
      removeFromCompare(phone.id);
    } else {
      addToCompare(phone.id);
    }
  };

  return (
    <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
      <Link href={`/${phone.slug}`} className="block">
        <CardHeader className="p-0">
          {image && (
            <Image
              src={image.imageUrl}
              alt={phone.model}
              width={800}
              height={800}
              className="aspect-square object-cover"
              data-ai-hint={image.imageHint}
            />
          )}
        </CardHeader>
        <CardContent className="pt-6">
          <CardTitle className="text-lg font-headline">{phone.model}</CardTitle>
          <CardDescription>{phone.brand}</CardDescription>
          <p className="font-semibold text-lg mt-2">${phone.price}</p>
        </CardContent>
      </Link>
      <CardFooter className="mt-auto">
        <Button
          onClick={handleCompareClick}
          className="w-full bg-brand text-brand-foreground hover:bg-brand/90"
        >
          {isComparing ? (
            <>
              <Check className="mr-2 h-4 w-4" /> Added
            </>
          ) : (
            <>
              <Plus className="mr-2 h-4 w-4" /> Compare
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
