declare interface IceCreamsByCategory {
  [category: string]: IceCream[];
}

declare interface IceCream {
  id: string;
  name: string;
  price: number;
  description: string;
  likes: number;
  image: string;
  category: string; // Agregar la propiedad "category"
  [key: string]: number | string;
}
