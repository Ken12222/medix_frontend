import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "../../../imgs/logo.png";
import { Link } from "react-router-dom";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SignUp() {
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
          <form action="">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              name="name"
              className=" py-4 my-4"
              placeholder="John Doe"
            />
            <Label htmlFor="email">Email</Label>
            <Input
              type="text"
              name="email"
              className=" py-4 my-4"
              placeholder="johndoe@gmail.com"
            />
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              name="password"
              className=" py-4 my-4"
              placeholder="Enter Password"
            />
            <Label htmlFor="role">Password</Label>
            <Select className="pb-2">
              <SelectTrigger id="role">
                <SelectValue placeholder="Sign Up As" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="doctor">Doctor</SelectItem>
                <SelectItem value="patient">Patient</SelectItem>
              </SelectContent>
            </Select>
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
