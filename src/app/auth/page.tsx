"use client";
import { Input } from "@/components/Input";
import Image from "next/image";
import { useCallback, useState } from "react";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVarient) =>
      currentVarient === "login" ? "register" : "login"
    );
  }, []);

  return (
    <>
      <div className="relative h-full w-full bg-[url('/images/hero.png')] bg-fixed bg-center bg-cover bg-no-repeat">
        <div className="h-full w-full bg-black lg:bg-opacity-50">
          <nav>
            <Image
              src={"/images/logo.png"}
              height={200}
              width={200}
              alt="Netflix"
              className="h-12"
            />
            <div className="flex justify-center">
              <div className="bg-black bg-opacity-70 p-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                <h2 className="text-white text-4xl mb-8 font-semibold">
                  {variant === "login" ? "Sign in" : "Register"}
                </h2>
                <div className="flex flex-col gap-4">
                  {variant === "login" && (
                    <Input
                      id="username"
                      label="Username"
                      onChange={(ev:any) => {ev.target.value}}
                      value={username}
                    />
                  )}
                  <Input
                    id="email"
                    type="email"
                    label="Email"
                    onChange={(ev:any) => {ev.target.value}}
                    value={email}
                  />
                  <Input
                    id="password"
                    type="password"
                    label="Password"
                    onChange={(ev:any) => {ev.target.value}}
                    value={password}
                  />
                </div>
                <button className="bg-red-600 transition rounded-md text-white w-full py-3 mt-10 hover:bg-red-700">
                  {variant === "login" ? "Login" : "Sign up"}
                </button>
                <p className="text-neutral-500 mt-12 text-sm text-center">
                  {variant === 'login' ? 'First time using Netflix?':'Already user?'}
                  <span
                    onClick={toggleVariant}
                    className="text-white ml-1 hover:underline cursor-pointer"
                  >
                    {variant === "register"?'Login':'Create an account'}
                  </span>
                </p>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Auth;
