import IceCream1 from "../assets/icecream-1.svg";
import IceCream2 from "../assets/icecream-2.svg";
import IceCream3 from "../assets/icecream-3.svg";
import IceCream4 from "../assets/icecream-4.svg";
import IceCream5 from "../assets/icecream-5.svg";
import IceCream7 from "../assets/icecream-7.svg";
import IceCream8 from "../assets/icecream-8.svg";
import IceCream9 from "../assets/icecream-9.svg";
import IceCream13 from "../assets/icecream-13.svg";

const icecreams: IceCreamsByCategory = {
  Classics: [
    {
      id: "1",
      name: "Vanilla",
      price: 2.99,
      description: "Classic vanilla ice cream",
      likes: 20,
      image: IceCream1,
      category: "Classics",
    },
    {
      id: "2",
      name: "Chocolate",
      price: 2.99,
      description: "Smooth and rich chocolate ice cream",
      likes: 15,
      image: IceCream2,
      category: "Classics",
    },
    {
      id: "3",
      name: "Strawberry",
      price: 2.99,
      description: "Fresh and sweet strawberry ice cream",
      likes: 18,
      image: IceCream3,
      category: "Classics",
    },
  ],
  Fruits: [
    {
      id: "4",
      name: "Mango",
      price: 3.49,
      description: "Exotic and tropical mango ice cream",
      likes: 12,
      image: IceCream4,
      category: "Fruits",
    },
    {
      id: "5",
      name: "Blueberry",
      price: 3.49,
      description: "Delicious blueberry-infused ice cream",
      likes: 10,
      image: IceCream5,
      category: "Fruits",
    },
    {
      id: "6",
      name: "Watermelon",
      price: 3.49,
      description: "Refreshing watermelon sorbet",
      likes: 8,
      image: IceCream13,
      category: "Fruits",
    },
  ],
  NutsAndSweets: [
    {
      id: "7",
      name: "Pistachio",
      price: 4.99,
      description: "Creamy pistachio ice cream with crushed nuts",
      likes: 14,
      image: IceCream7,
      category: "Nuts and Sweets",
    },
    {
      id: "8",
      name: "Hazelnut",
      price: 4.99,
      description: "Rich and nutty hazelnut ice cream",
      likes: 10,
      image: IceCream8,
      category: "Nuts and Sweets",
    },
    {
      id: "9",
      name: "Salted Caramel",
      price: 4.99,
      description: "Smooth caramel ice cream with a hint of sea salt",
      likes: 16,
      image: IceCream9,
      category: "Nuts and Sweets",
    },
  ],
  // ... agregar más categorías y helados según tus necesidades
};

export default icecreams;
