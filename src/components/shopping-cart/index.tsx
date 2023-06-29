import { useState } from "react";
import Login from "../../pages/user/login";
import Cart from "./cart";

type Step = "cart" | "login" | "register";

interface Cart {
  setModalIsOpen: (boolean: any) => void;
  setStep?: (step: Step) => void;
}

const RenderStep = ({ setModalIsOpen }: Cart) => {
  const [step, setStep] = useState<Step>(
    () => "cart" // token && token.length ? "cart" : "login"
  );
  if (step === "login") {
    return (
      <Login
        callback={{
          fn: () => {
            setStep("cart");
          },
          status: "ok",
        }}
      />
    );
  } else if (step === "cart") {
    return <Cart setModalIsOpen={setModalIsOpen} setStep={setStep} />;
  }
};

export default function ModalCart(props: Cart) {
  const { setModalIsOpen } = props;
  return <RenderStep setModalIsOpen={setModalIsOpen} />;
}
