import type { Phone } from './types';

const phones: Phone[] = [
  {
    id: '1',
    slug: 'google-pixel-8-pro',
    brand: 'Google',
    model: 'Pixel 8 Pro',
    price: 999,
    images: ['pixel-8-pro-obsidian-1', 'pixel-8-pro-obsidian-2'],
    shortDescription: 'The most powerful and helpful Google phone yet.',
    specifications: {
      raw: `Display: 6.7" LTPO OLED, 1344x2992 pixels, 120Hz. Camera: 50MP main, 48MP ultrawide, 48MP telephoto. Processor: Google Tensor G3. Memory: 12GB RAM, 128/256/512GB/1TB storage. Battery: 5050mAh, 30W wired charging.`,
      display: {
        type: 'LTPO OLED, 120Hz, HDR10+',
        size: '6.7 inches',
        resolution: '1344 x 2992 pixels',
        refreshRate: '120Hz',
      },
      camera: {
        main: '50 MP, f/1.7, 25mm (wide)',
        ultrawide: '48 MP, f/2.0, 126˚ (ultrawide)',
        telephoto: '48 MP, f/2.8, 113mm (telephoto), 5x optical zoom',
        front: '10.5 MP, f/2.2, 20mm (ultrawide)',
      },
      processor: {
        chipset: 'Google Tensor G3',
        cpu: 'Nona-core',
        gpu: 'Immortalis-G715s MC10',
      },
      memory: {
        ram: '12 GB',
        storage: '128GB / 256GB / 512GB / 1TB',
      },
      battery: {
        capacity: '5050 mAh',
        charging: '30W wired, 23W wireless',
      },
    },
  },
  {
    id: '2',
    slug: 'apple-iphone-15-pro',
    brand: 'Apple',
    model: 'iPhone 15 Pro',
    price: 999,
    images: ['iphone-15-pro-natural-1', 'iphone-15-pro-natural-2'],
    shortDescription: 'Forged in titanium and featuring the groundbreaking A17 Pro chip.',
    specifications: {
      raw: `Display: 6.1" LTPO Super Retina XDR OLED, 1179x2556 pixels, 120Hz. Camera: 48MP main, 12MP ultrawide, 12MP telephoto. Processor: Apple A17 Pro. Memory: 8GB RAM, 128/256/512GB/1TB storage. Battery: 3274mAh, 27W wired charging.`,
      display: {
        type: 'LTPO Super Retina XDR OLED, 120Hz, HDR10',
        size: '6.1 inches',
        resolution: '1179 x 2556 pixels',
        refreshRate: '120Hz',
      },
      camera: {
        main: '48 MP, f/1.8, 24mm (wide)',
        ultrawide: '12 MP, f/2.2, 13mm, 120˚ (ultrawide)',
        telephoto: '12 MP, f/2.8, 77mm (telephoto), 3x optical zoom',
        front: '12 MP, f/1.9, 23mm (wide)',
      },
      processor: {
        chipset: 'Apple A17 Pro (3 nm)',
        cpu: 'Hexa-core',
        gpu: 'Apple GPU (6-core graphics)',
      },
      memory: {
        ram: '8 GB',
        storage: '128GB / 256GB / 512GB / 1TB',
      },
      battery: {
        capacity: '3274 mAh',
        charging: 'PD2.0, 15W wireless (MagSafe)',
      },
    },
  },
  {
    id: '3',
    slug: 'samsung-galaxy-s24-ultra',
    brand: 'Samsung',
    model: 'Galaxy S24 Ultra',
    price: 1299,
    images: ['galaxy-s24-ultra-gray-1', 'galaxy-s24-ultra-gray-2'],
    shortDescription: 'Welcome to the era of mobile AI. With Galaxy S24 Ultra, unleash whole new levels of creativity.',
    specifications: {
      raw: `Display: 6.8" Dynamic LTPO AMOLED 2X, 1440x3120 pixels, 120Hz. Camera: 200MP main, 12MP ultrawide, 50MP periscope telephoto. Processor: Snapdragon 8 Gen 3 for Galaxy. Memory: 12GB RAM, 256/512GB/1TB storage. Battery: 5000mAh, 45W wired charging.`,
      display: {
        type: 'Dynamic LTPO AMOLED 2X, 120Hz, HDR10+',
        size: '6.8 inches',
        resolution: '1440 x 3120 pixels',
        refreshRate: '120Hz',
      },
      camera: {
        main: '200 MP, f/1.7, 24mm (wide)',
        ultrawide: '12 MP, f/2.2, 13mm, 120˚ (ultrawide)',
        telephoto: '50 MP, f/3.4, 111mm (periscope telephoto), 5x optical zoom',
        front: '12 MP, f/2.2, 26mm (wide)',
      },
      processor: {
        chipset: 'Qualcomm Snapdragon 8 Gen 3 for Galaxy',
        cpu: 'Octa-core',
        gpu: 'Adreno 750',
      },
      memory: {
        ram: '12 GB',
        storage: '256GB / 512GB / 1TB',
      },
      battery: {
        capacity: '5000 mAh',
        charging: '45W wired, 15W wireless',
      },
    },
  },
  {
    id: '4',
    slug: 'oneplus-12',
    brand: 'OnePlus',
    model: '12',
    price: 799,
    images: ['oneplus-12-black-1', 'oneplus-12-black-2'],
    shortDescription: 'The return of the flagship killer, with a focus on smooth performance.',
    specifications: {
      raw: `Display: 6.82" LTPO AMOLED, 1440x3168 pixels, 120Hz. Camera: 50MP main, 48MP ultrawide, 64MP periscope telephoto. Processor: Snapdragon 8 Gen 3. Memory: 12/16/24GB RAM, 256/512GB/1TB storage. Battery: 5400mAh, 100W wired charging.`,
      display: {
        type: 'LTPO AMOLED, 120Hz, Dolby Vision, HDR10+',
        size: '6.82 inches',
        resolution: '1440 x 3168 pixels',
        refreshRate: '120Hz',
      },
      camera: {
        main: '50 MP, f/1.6, 23mm (wide)',
        ultrawide: '48 MP, f/2.2, 14mm, 114˚ (ultrawide)',
        telephoto: '64 MP, f/2.6, 70mm (periscope telephoto), 3x optical zoom',
        front: '32 MP, f/2.4, 21mm (wide)',
      },
      processor: {
        chipset: 'Qualcomm Snapdragon 8 Gen 3',
        cpu: 'Octa-core',
        gpu: 'Adreno 750',
      },
      memory: {
        ram: '12GB / 16GB / 24GB',
        storage: '256GB / 512GB / 1TB',
      },
      battery: {
        capacity: '5400 mAh',
        charging: '100W wired, 50W wireless',
      },
    },
  },
  {
    id: '5',
    slug: 'nothing-phone-2',
    brand: 'Nothing',
    model: 'Phone (2)',
    price: 599,
    images: ['nothing-phone-2-dark-gray-1', 'nothing-phone-2-dark-gray-2'],
    shortDescription: 'A unique design with the Glyph Interface, offering a new way to interact.',
    specifications: {
      raw: `Display: 6.7" LTPO OLED, 1080x2412 pixels, 120Hz. Camera: 50MP main, 50MP ultrawide. Processor: Snapdragon 8+ Gen 1. Memory: 8/12GB RAM, 128/256/512GB storage. Battery: 4700mAh, 45W wired charging.`,
      display: {
        type: 'LTPO OLED, 120Hz, HDR10+',
        size: '6.7 inches',
        resolution: '1080 x 2412 pixels',
        refreshRate: '120Hz',
      },
      camera: {
        main: '50 MP, f/1.9, 24mm (wide)',
        ultrawide: '50 MP, f/2.2, 114˚ (ultrawide)',
        telephoto: 'N/A',
        front: '32 MP, f/2.5, (wide)',
      },
      processor: {
        chipset: 'Qualcomm Snapdragon 8+ Gen 1',
        cpu: 'Octa-core',
        gpu: 'Adreno 730',
      },
      memory: {
        ram: '8GB / 12GB',
        storage: '128GB / 256GB / 512GB',
      },
      battery: {
        capacity: '4700 mAh',
        charging: '45W wired, 15W wireless',
      },
    },
  },
  {
    id: '6',
    slug: 'google-pixel-8a',
    brand: 'Google',
    model: 'Pixel 8a',
    price: 499,
    images: ['pixel-8a-obsidian-1', 'pixel-8a-obsidian-2'],
    shortDescription: 'The helpfulness of Google in a more affordable package.',
    specifications: {
      raw: `Display: 6.1" OLED, 1080x2400 pixels, 120Hz. Camera: 64MP main, 13MP ultrawide. Processor: Google Tensor G3. Memory: 8GB RAM, 128/256GB storage. Battery: 4492mAh, 18W wired charging.`,
      display: {
        type: 'OLED, 120Hz, HDR',
        size: '6.1 inches',
        resolution: '1080 x 2400 pixels',
        refreshRate: '120Hz',
      },
      camera: {
        main: '64 MP, f/1.9, 26mm (wide)',
        ultrawide: '13 MP, f/2.2, 120˚ (ultrawide)',
        telephoto: 'N/A',
        front: '13 MP, f/2.2, 20mm (ultrawide)',
      },
      processor: {
        chipset: 'Google Tensor G3',
        cpu: 'Nona-core',
        gpu: 'Immortalis-G715s MC10',
      },
      memory: {
        ram: '8 GB',
        storage: '128GB / 256GB',
      },
      battery: {
        capacity: '4492 mAh',
        charging: '18W wired, 7.5W wireless',
      },
    },
  },
];

export function getPhones() {
  return phones;
}

export function getPhoneBySlug(slug: string) {
  return phones.find((p) => p.slug === slug);
}

export function getPhonesByIds(ids: string[]) {
  return phones.filter((p) => ids.includes(p.id));
}
