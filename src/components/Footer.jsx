import logo from "../../imgs/logo.png";
import { Link } from "react-router-dom";
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

export default function Footer() {
  return (
    <section className="bg-deep bottom-0 right-0 left-0">
      <div className="w-5/6 mx-auto grid grid-cols md:grid-cols-3 lg:grid-cols-3 py-12">
        <Link to="/" className="py-4">
          <img className="bg-white px-6 py-2" src={logo} alt="" />
          <p className="text-white text-xl pt-2">Jon komot for there</p>
        </Link>
        <div className="pt-5">
          <h4 className="text-2xl text-white pb-4">Product</h4>
          <NavigationMenu className="grid grid-row">
            <NavigationMenuList></NavigationMenuList>
            <NavigationMenuItem className="hover:text-light text-white list-none pb-2">
              <Link to="">Find Doctors</Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="hover:text-light text-white list-none pb-2">
              <Link to="">Service</Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="hover:text-light text-white list-none pb-2">
              <Link to="">Medicine</Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="hover:text-light text-white list-none pb-2">
              <Link to="">Emergency</Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="hover:text-light text-white list-none">
              <Link to="">Contact Us</Link>
            </NavigationMenuItem>
          </NavigationMenu>
        </div>

        <div className="pt-5">
          <h4 className="text-2xl text-white pb-4">Company</h4>
          <NavigationMenu className="grid grid-row">
            <NavigationMenuList></NavigationMenuList>
            <NavigationMenuItem className="hover:text-light text-white list-none pb-2">
              <Link to="">About</Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="hover:text-light text-white list-none pb-2">
              <Link to="">Contact Us</Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="hover:text-light text-white list-none pb-2">
              <Link to="">Career</Link>
            </NavigationMenuItem>
          </NavigationMenu>
        </div>
      </div>
    </section>
  );
}
