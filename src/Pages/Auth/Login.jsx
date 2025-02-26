import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "../../../imgs/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useLogin from "../../apis/Auth/useLogin";
import useloggedInUser from "@/store/useLogin";

export default function Login() {
  const redirect = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const { mutate: login, data, isSuccess, isError, error } = useLogin();
  const isUserAuthenticated = useloggedInUser(
    (state) => state.isUserAuthenticated
  );
  const setUser = useloggedInUser((state) => state.setUser);
  const User = useloggedInUser((state) => state.user);

  function handleLogin(e) {
    e.preventDefault();

    login(loginData);
    setLoginData({ email: "", password: "" });
  }

  useEffect(() => {
    if (isSuccess) {
      //console.log(data?.data);
      const user = data?.data;
      setUser(user);

      if (user && user.role === "patient") {
        redirect("/patient");
      } else if (user && user.role === "doctor") {
        redirect("/doctor");
      } else {
        redirect("/login");
      }
    }
    if (isUserAuthenticated) {
      User.role === "patient" ? redirect("/patient") : redirect("/doctor");
    }
    // if (isUserAuthenticated && User !== null && User.role === "patient") {
    //   redirect("/patient");
    // }
    // if (isUserAuthenticated && User !== null && User.role === "doctor") {
    //   redirect("/doctor");
    // }
  }, [redirect, isSuccess, data, isUserAuthenticated, User]);

  return (
    <main className="w-5/6 h-screen md:w-3/6 mx-auto flex items-center">
      <div className="w-full md:w-2/3 lg:w-2/3 h-96 mx-auto bg-gray-50 border-2 rounded-lg grid grid-cols">
        <div className=" rounded-lg pt-4 md:my-auto">
          <span className="flex justify-center gap-2">
            <h1 className="text-center my-auto font-bold text-l">Sign In</h1>
          </span>
        </div>
        <form
          onSubmit={handleLogin}
          className="w-full p-2 pb-2 md:w-5/6 mx-auto"
        >
          <Label htmlFor="email">Email</Label>
          <Input
            type="text"
            autoComplete="email"
            value={loginData.email}
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
            name="email"
            className=" py-4 mt-4"
            placeholder="johndoe@gmail.com"
          />

          {isError ? <p className="text-red-600 text-sm">{error}</p> : ""}
          <Label className="mt-2" htmlFor="password">
            Password
          </Label>
          <Input
            value={loginData.password}
            autoComplete="new-password"
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
            type="password"
            name="password"
            className=" py-4 mt-4"
            placeholder="Enter Password"
          />
          {isError ? <p className="text-red-600 text-sm  mb-4">{error}</p> : ""}
          <Button className="my-2 w-full">Sign In</Button>
          <Link to="/sign_up" className="my-2">
            Don't have an account? Sign up Here
          </Link>
        </form>
      </div>
    </main>
  );
}
