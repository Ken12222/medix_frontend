import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import medix from "../../imgs/logo.png";
import { Link } from "react-router-dom";
import { LuAlignRight, LuX } from "react-icons/lu";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function openMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <>
      <div className="w-5/6 mx-auto py-3 flex justify-between z-10 lg:py-0 lg:hidden">
        <Link to="/">
          <img src={medix} alt="medix_logo" />
        </Link>
        <button onClick={() => openMenu()}>
          {isMenuOpen ? (
            <LuX size="40" className=" text-deep lg:hidden" />
          ) : (
            <LuAlignRight size="40" className=" text-deep lg:hidden" />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="w-screen h-fit bg-deep p-4 z-10">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col">
              <NavigationMenuItem className="py-2">
                <Link
                  to="find-doctors"
                  className="text-left cursor-pointer m-0 text-white text-base"
                >
                  Find Doctors
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="py-2">
                <Link
                  to="service"
                  className="text-left cursor-pointer m-0 text-white text-base"
                >
                  Service
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="py-2">
                <Link
                  to="medicine"
                  className="text-left cursor-pointer m-0 text-white text-base"
                >
                  Medicine
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="py-2">
                <Link
                  to="emergency"
                  className="text-left cursor-pointer m-0 text-white text-base"
                >
                  Emergency
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="py-2">
                <Link
                  to="contact-us"
                  className="text-left cursor-pointer m-0 text-white text-base"
                >
                  Contact Us
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu className="flex gap-8 py-2">
            <NavigationMenuItem className="list-none">
              <Link className="text-left m-0 text-white text-base">
                Sign Up
              </Link>
            </NavigationMenuItem>
            <Button className="px-12 bg-light text-white font-bold">
              Login
            </Button>
          </NavigationMenu>
        </div>
      )}

      {/* Large screen navbar */}
      <div className="w-5/6 mx-auto h-fit py-4 hidden lg:flex lg:justify-between">
        <Link className="my-auto" to="/">
          <img src={medix} alt="medix_logo" />
        </Link>
        <div className="flex align-middle">
          <NavigationMenu>
            <NavigationMenuList className="flex justify-center gap-8">
              <NavigationMenuItem className="py-2">
                <Link
                  className="btn cursor-pointer text-left m-0 text-xl hover:border-b-2 border-light hover:text-light ease-in-out duration-100"
                  to="/find-doctors"
                >
                  Find Doctors
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="py-2">
                <Link
                  className="btn cursor-pointer text-left m-0 text-xl hover:border-b-2 border-light hover:text-light ease-in-out duration-100"
                  to="/service"
                >
                  Service
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="py-2">
                <Link
                  className="btn cursor-pointer text-left m-0 text-xl hover:border-b-2 border-light hover:text-light ease-in-out duration-100"
                  to="/medicine"
                >
                  Medicine
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="py-2">
                <Link
                  className="btn cursor-pointer text-left m-0 text-xl hover:border-b-2 border-light hover:text-light ease-in-out duration-100"
                  to="/emergency"
                >
                  Emergency
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="py-2">
                <Link
                  className="btn cursor-pointer text-left m-0 text-xl hover:border-b-2 border-light hover:text-light ease-in-out duration-100"
                  to="/contact-us"
                >
                  Contact Us
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div>
          <NavigationMenu className="flex gap-8 py-2">
            <NavigationMenuItem className="list-none">
              <Link
                to="/sign_up"
                className="btn cursor-pointer text-left m-0 text-xl text-deep hover:text-light ease-in-out duration-100"
              >
                Sign Up
              </Link>
            </NavigationMenuItem>
            <Button className="px-12 bg-light hover:bg-deep text-white font-bold ease-in-out duration-100">
              Login
            </Button>
          </NavigationMenu>
        </div>
      </div>
    </>
  );
}
