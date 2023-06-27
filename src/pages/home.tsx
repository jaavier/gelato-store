import IceCream1 from "../assets/icecream-1.svg";

interface Icecream {
  name: string;
  price: number;
  description: string;
  likes: number;
  image: string;
}

const IceCream = (icecream: Icecream) => (
  <div>
    <div>{icecream.name}</div>
    <div>{icecream.price}</div>
  </div>
);

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
