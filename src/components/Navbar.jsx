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
import useloggedInUser from "@/store/useLogin";
import { useEffect, useState } from "react";
import useLogOut from "@/Pages/Auth/Logout";
import { useCookies } from "react-cookie";

export default function Navbar() {
  const isUserAuthenticated = useloggedInUser(
    (state) => state.isUserAuthenticated
  );
  const logout = useloggedInUser((state) => state.logout);
  const [cookies, setCookie, removieCookie] = useCookies(["XSRF-TOKEN"]);
  useEffect(() => {
    if (!cookies["XSRF-TOKEN"]) {
      logout(null);
    }
  }, [cookies]);

  const handleLogout = useLogOut();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function openMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <div className="fixed top-0 right-0 left-0 bg-white w-full h-fit">
        <div className="w-5/6 mx-auto py-4 my-4 h-fit flex justify-between z-10 lg:py-0 lg:hidden">
          <Link to="/">
            <img src={medix} alt="medix_logo" />
          </Link>
          <Button onClick={() => openMenu()}>
            {isMenuOpen ? (
              <LuX size="40" className=" text-white lg:hidden" />
            ) : (
              <LuAlignRight size="40" className=" text-white lg:hidden" />
            )}
          </Button>
        </div>
        {isMenuOpen && (
          <div className="w-screen h-fit bg-deep p-4 z-10 right-0 left-0 fixed">
            <NavigationMenu>
              <NavigationMenuList className="flex flex-col">
                <NavigationMenuItem className="py-2">
                  <Link
                    to="/doctors"
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
              {isUserAuthenticated && cookies["XSRF-TOKEN"] ? (
                <div>
                  <Button
                    onClick={() => handleLogout.mutate()}
                    className="px-12 py-2 rounded-lg bg-light hover:bg-deep text-white font-bold"
                  >
                    Logout
                  </Button>
                  <Link to="patient">Profile</Link>
                </div>
              ) : (
                <div className="">
                  <NavigationMenuItem className="list-none">
                    <Link
                      to="sign_up"
                      className="text-left m-0 text-white text-base"
                    >
                      Sign Up
                    </Link>
                  </NavigationMenuItem>
                  <Link
                    to="/login"
                    className="px-12 py-2 rounded-lg bg-light hover:bg-deep text-white font-bold"
                  >
                    Login
                  </Link>
                </div>
              )}
            </NavigationMenu>
          </div>
        )}
      </div>

      {/* Large screen navbar */}
      <div className="w-5/6 mx-auto h-fit py-4 hidden lg:flex lg:justify-between fixed top-0 right-0 left-0 bg-white">
        <Link className="my-auto" to="/">
          <img src={medix} alt="medix_logo" />
        </Link>
        <div className="flex align-middle">
          <NavigationMenu>
            <NavigationMenuList className="flex justify-center gap-4">
              <NavigationMenuItem className="py-2">
                <Link
                  className="btn cursor-pointer text-left m-0 text-xl hover:border-b-2 border-light hover:text-light ease-in-out duration-100"
                  to="/doctor"
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
          {isUserAuthenticated && cookies["XSRF-TOKEN"] ? (
            <div>
              <Button
                onClick={() => handleLogout.mutate()}
                className="px-12 py-2 rounded-lg bg-light hover:bg-deep text-white font-bold"
              >
                Logout
              </Button>
              <Link to="patient">Profile</Link>
            </div>
          ) : (
            <div className="flex flex-row gap-2 items-center">
              <NavigationMenuItem className="list-none">
                <Link
                  to="sign_up"
                  className="text-left m-0 text-deep text-base"
                >
                  Sign Up
                </Link>
              </NavigationMenuItem>
              <Link
                to="/login"
                className="px-12 py-2 rounded-lg bg-light hover:bg-deep text-white font-bold"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
