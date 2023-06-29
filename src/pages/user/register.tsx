import { useState } from "react";
import { Link, redirect } from "react-router-dom";
import useApp from "../../context/useApp";

interface IRegister {
  onRegister?: () => void;
  onLogin?: () => void;
  afterRegister?: () => void;
}

export default function Register({ onLogin, afterRegister }: IRegister) {
  const { setToken } = useApp()
  const [form, setForm] = useState<User>({
    name: "",
    username: "",
    password: "",
    lastOrder: null,
    role: "visitor",
  });
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (afterRegister) afterRegister();
    setToken("AAAAAAAAAAAA")
    window.location.href = '/'
    return
    console.log("🚀 ~ file: register.tsx:43 ~ onSubmit ~ afterRegister:", afterRegister)
    try {
      // const response = await fetch("/api/register", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(form),
      // });
      // const json = await response.json();
      // if (response.status === 400) {
      //   throw new Error(json.error);
      // } else {
      //   window.location.href = "/user";
      // }
    } catch (error) {
      const err = error as { message: string };
      console.log("Error while login:");
      setErrorMessage(err.message);
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="bg-white py-10">
      <form onSubmit={onSubmit}>
        <div className="flex items-center flex-col gap-2">
          <div className="mb-5 text-2xl font-extrabold tracking-wider font-nunito">
            Create account
          </div>
          <div className="w-1/2">
            <div className="font-nunito tracking-wide text-lg font-bold">
              Username
            </div>
            <div>
              <input
                name="username"
                onChange={handleChange}
                className="border px-2 py-2 outline-none w-full rounded-sm"
              />
            </div>
          </div>
          <div className="w-1/2">
            <div className="font-nunito tracking-wide text-lg font-bold">
              Password
            </div>
            <div>
              <input
                name="password"
                onChange={handleChange}
                type="password"
                className="border px-2 py-2 outline-none w-full rounded-sm"
              />
            </div>
          </div>
          <div className="w-1/2 font-nunito ">
            <div className="text-xl">
              <button className="outline-none w-full p-3 rounded-full text-gray-500 font-bold tracking-wider">
                Create account
              </button>
            </div>
            <div className="text-center mb-2">
              {onLogin ? (
                <div className="hover:cursor-pointer" onClick={onLogin}>
                  Login
                </div>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </div>
            <div className="">
              {errorMessage.length ? (
                <div className="bg-red-200 p-3 text-center text-red-900 font-semibold">
                  {errorMessage}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
