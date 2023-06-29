import IceCream1 from "../assets/icecream-1.svg";
import IceCream2 from "../assets/icecream-2.svg";
import IceCream3 from "../assets/icecream-3.svg";
import IceCream4 from "../assets/icecream-4.svg";
import IceCream5 from "../assets/icecream-5.svg";
import IceCream7 from "../assets/icecream-7.svg";
import IceCream8 from "../assets/icecream-8.svg";
import IceCream9 from "../assets/icecream-9.svg";
import IceCream13 from "../assets/icecream-13.svg";
import IceCream10 from "../assets/icecream-10.svg";
import IceCream11 from "../assets/icecream-11.svg";
import IceCream12 from "../assets/icecream-12.svg";

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
      sauces: ["Chocolate", "Caramel", "Strawberry"],
      sauceSelected: "",
    },
    {
      id: "2",
      name: "Chocolate",
      price: 2.99,
      description: "Smooth and rich chocolate ice cream",
      likes: 15,
      image: IceCream2,
      category: "Classics",
      sauces: ["Caramel", "Raspberry", "Mint"],
      sauceSelected: "",
    },
    {
      id: "3",
      name: "Strawberry",
      price: 2.99,
      description: "Fresh and sweet strawberry ice cream",
      likes: 18,
      image: IceCream3,
      category: "Classics",
      sauces: ["Whipped Cream", "Chocolate", "Banana"],
      sauceSelected: "",
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
      sauces: ["Passion Fruit", "Coconut", "Lime"],
      sauceSelected: "",
    },
    {
      id: "5",
      name: "Blueberry",
      price: 3.49,
      description: "Delicious blueberry-infused ice cream",
      likes: 10,
      image: IceCream5,
      category: "Fruits",
      sauces: ["Blueberry Syrup", "Whipped Cream", "Almonds"],
      sauceSelected: "",
    },
    {
      id: "6",
      name: "Watermelon",
      price: 3.49,
      description: "Refreshing watermelon sorbet",
      likes: 8,
      image: IceCream13,
      category: "Fruits",
      sauces: ["Watermelon Syrup", "Mint", "Lime"],
      sauceSelected: "",
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
      sauces: ["Caramel", "Crushed Nuts", "Chocolate Drizzle"],
      sauceSelected: "",
    },
    {
      id: "8",
      name: "Hazelnut",
      price: 4.99,
      description: "Rich and nutty hazelnut ice cream",
      likes: 10,
      image: IceCream8,
      category: "Nuts and Sweets",
      sauces: ["Nutella", "Caramel", "Toasted Hazelnuts"],
      sauceSelected: "",
    },
    {
      id: "9",
      name: "Salted Caramel",
      price: 4.99,
      description: "Smooth caramel ice cream with a hint of sea salt",
      likes: 16,
      image: IceCream9,
      category: "Nuts and Sweets",
      sauces: ["Salted Caramel Sauce", "Whipped Cream", "Sea Salt"],
      sauceSelected: "",
    },
  ],
  Specials: [
    {
      id: "10",
      name: "Speculoos Delight",
      price: 5.99,
      description:
        "Creamy speculoos-flavored ice cream with caramelized cookie chunks",
      likes: 25,
      image: IceCream10,
      category: "Specials",
      sauces: ["Caramel Sauce", "Speculoos Spread", "Whipped Cream"],
      sauceSelected: "",
    },
    {
      id: "11",
      name: "Matcha Bliss",
      price: 5.99,
      description:
        "Indulge in the delightful taste of matcha green tea ice cream",
      likes: 18,
      image: IceCream11,
      category: "Specials",
      sauces: ["Matcha Syrup", "Red Bean Paste", "Mochi"],
      sauceSelected: "",
    },
    {
      id: "12",
      name: "Salted Caramel Pretzel",
      price: 5.99,
      description:
        "A heavenly combination of salted caramel ice cream and crunchy pretzel pieces",
      likes: 20,
      image: IceCream12,
      category: "Specials",
      sauces: ["Salted Caramel Sauce", "Crushed Pretzels", "Whipped Cream"],
      sauceSelected: "",
    },
  ],
  // ... agregar más categorías y helados según tus necesidades
};

export default icecreams;
