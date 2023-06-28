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
  category: string;
  sauces: string[]; // Agregar la propiedad "sauces"
  sauceSelected: string; // Agregar la propiedad "sauces"
  [key: string]: number | string | string[];
}
