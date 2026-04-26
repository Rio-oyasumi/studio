import { getPhoneBySlug, getPhones } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import {
  Smartphone,
  Camera,
  Cpu,
  MemoryStick,
  Battery,
} from "lucide-react";
import { AiSummary } from "@/components/ai-summary";

interface PhonePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const phones = getPhones();
  return phones.map((phone) => ({
    slug: phone.slug,
  }));
}

export default function PhonePage({ params }: PhonePageProps) {
  const phone = getPhoneBySlug(params.slug);

  if (!phone) {
    notFound();
  }

  const phoneImages = phone.images
    .map((id) => PlaceHolderImages.find((img) => img.id === id))
    .filter(Boolean);

  const specSections = [
    {
      title: "Display",
      icon: Smartphone,
      data: phone.specifications.display,
    },
    {
      title: "Camera",
      icon: Camera,
      data: phone.specifications.camera,
    },
    {
      title: "Processor",
      icon: Cpu,
      data: phone.specifications.processor,
    },
    {
      title: "Memory & Storage",
      icon: MemoryStick,
      data: phone.specifications.memory,
    },
    {
      title: "Battery",
      icon: Battery,
      data: phone.specifications.battery,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <Carousel className="w-full max-w-md mx-auto">
            <CarouselContent>
              {phoneImages.map((image, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="p-0">
                      <Image
                        src={image!.imageUrl}
                        alt={`${phone.model} - ${image!.description}`}
                        width={800}
                        height={800}
                        className="aspect-square object-cover rounded-lg"
                        data-ai-hint={image!.imageHint}
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div>
          <p className="text-sm font-semibold text-primary">{phone.brand}</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-headline my-2">
            {phone.model}
          </h1>
          <p className="text-3xl font-semibold my-4">${phone.price}</p>
          <p className="text-muted-foreground mt-4">{phone.shortDescription}</p>

          <AiSummary
            phoneName={phone.model}
            specifications={phone.specifications.raw}
          />

          <div className="mt-8 space-y-6">
            {specSections.map((section) => (
              <div key={section.title}>
                <h2 className="text-2xl font-semibold flex items-center gap-3 mb-4 font-headline">
                  <section.icon className="w-6 h-6 text-primary" />
                  {section.title}
                </h2>
                <Card>
                  <CardContent className="p-0">
                    <Table>
                      <TableBody>
                        {Object.entries(section.data).map(([key, value]) => (
                          <TableRow key={key}>
                            <TableCell className="font-medium capitalize w-1/3">
                              {key.replace(/([A-Z])/g, ' $1')}
                            </TableCell>
                            <TableCell>{value}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
