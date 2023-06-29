import { useState } from "react";
import Login from "../../pages/user/login";
import Cart from "./cart";
import Register from "../../pages/user/register";
import useApp from "../../context/useApp";

type Step = "cart" | "login" | "register";

interface Cart {
  setModalIsOpen: (boolean: any) => void;
  setStep?: (step: Step) => void;
}

const RenderStep = ({ setModalIsOpen }: Cart) => {
  const { setToken } = useApp();
  const [step, setStep] = useState<Step>(
    () => "cart" // token && token.length ? "cart" : "login"
  );
  console.log("🚀 ~ file: index.tsx:19 ~ RenderStep ~ step:", step);
  if (step === "login") {
    return (
      <Login
        onRegister={() => setStep("register")}
        onLogin={() => setStep("cart")}
      />
    );
  } else if (step === "register") {
    return (
      <Register
        onLogin={() => setStep("login")}
        afterRegister={() => {
          setStep("cart");
          setToken("AAAAAAAAAAAAAAAA");
        }}
      />
    );
  } else if (step === "cart") {
    return (
      <Cart setModalIsOpen={setModalIsOpen} step={step} setStep={setStep} />
    );
  }
};

export default function ModalCart(props: Cart) {
  const { setModalIsOpen } = props;
  return <RenderStep setModalIsOpen={setModalIsOpen} />;
}
