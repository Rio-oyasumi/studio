export interface Phone {
  id: string;
  slug: string;
  brand: string;
  model: string;
  price: number;
  images: string[];
  shortDescription: string;
  specifications: {
    raw: string;
    display: {
      type: string;
      size: string;
      resolution: string;
      refreshRate: string;
    };
    camera: {
      main: string;
      ultrawide: string;
      telephoto: string;
      front: string;
    };
    processor: {
      chipset: string;
      cpu: string;
      gpu: string;
    };
    memory: {
      ram: string;
      storage: string;
    };
    battery: {
      capacity: string;
      charging: string;
    };
  };
}
