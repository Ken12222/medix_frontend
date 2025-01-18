import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "../../../imgs/logo.png";
import { Link, redirect, useNavigate } from "react-router-dom";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import useSignUp from "@/apis/Auth/useSignUp";

export default function SignUp() {
  const { data, mutate: signUp, isSuccess, isError } = useSignUp();
  const redirect = useNavigate();
  const [signUpData, setSignUpData] = useState({
    name: "",
    password: "",
    email: "",
    role: "doctor",
  });

  function handleSignUp(e) {
    e.preventDefault();

    signUp(signUpData);
    setSignUpData({ name: "", password: "", email: "", role: "doctor" });
  }

  useEffect(() => {
    if (isSuccess) {
      redirect("/login");
    }
    if (isError) {
      redirect("/sign_up");
    }
  }, [isSuccess, isError]);

  return (
    <main className="w-5/6 md:w-3/6 mx-auto my-24">
      <div className=" md:w-2/3 lg:w-2/3 mx-auto border-2 rounded-lg grid grid-cols">
        <div className=" rounded-lg pt-4 md:my-auto my-4">
          <span className="flex justify-center gap-2">
            <h1 className="text-center my-auto font-bold text-2xl">
              Welcome to
            </h1>
            <img src={logo} alt="" />
          </span>
        </div>
        <div className="p-2 pb-2 md:w-5/6 mx-auto">
          <form onSubmit={handleSignUp}>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              name="name"
              value={signUpData.name}
              onChange={(e) =>
                setSignUpData({ ...signUpData, name: e.target.value })
              }
              className=" py-4 my-4"
              placeholder="John Doe"
            />
            <Label htmlFor="email">Email</Label>
            <Input
              type="text"
              name="email"
              value={signUpData.email}
              onChange={(e) =>
                setSignUpData({ ...signUpData, email: e.target.value })
              }
              className=" py-4 my-4"
              placeholder="johndoe@gmail.com"
            />
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              autoComplete=""
              name="password"
              value={signUpData.password}
              onChange={(e) =>
                setSignUpData({ ...signUpData, password: e.target.value })
              }
              className=" py-4 my-4"
              placeholder="Enter Password"
            />
            <Label htmlFor="role">Role</Label>
            <select
              className="border-2 w-full p-2 rounded-lg"
              name="role"
              value={signUpData.role}
              onChange={(e) =>
                setSignUpData({ ...signUpData, role: e.target.value })
              }
            >
              <option value="doctor">Doctor</option>
              <option value="patient">Patient</option>
            </select>

            <Button className="my-4 w-full">Sign Up</Button>
            <Link to="/login" className="pb-4">
              Alreay have an account? Login Instead
            </Link>
          </form>
        </div>
      </div>
    </main>
  );
}
