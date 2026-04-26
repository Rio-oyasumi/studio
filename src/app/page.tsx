import { getPhones } from '@/lib/data';
import { PhoneGrid } from '@/components/phone-grid';
import { Suspense } from 'react';

export default function Home() {
  const phones = getPhones();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary font-headline">Find Your Next Phone</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore the latest devices, compare specs, and discover the perfect phone for your needs.
        </p>
      </div>
      <Suspense fallback={<p>Loading phones...</p>}>
        <PhoneGrid phones={phones} />
      </Suspense>
    </div>
  );
}
