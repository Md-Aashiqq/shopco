import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import SearchBox from "./SearchBox";
import { Button } from "@/components/ui/button";
import { ShoppingCart, UserCircle } from "lucide-react";

const menuItems = [
  {
    id: 1,
    name: "On Sales",
    path: "/sales",
  },
  {
    id: 2,
    name: "New Arrivals",
    path: "/new-arrivals",
  },
  {
    id: 3,
    name: "Brands",
    path: "/best-sellers",
  },
];

function Navigation() {
  return (
    <div className="navigation_section px-20 py-3 flex items-center mb-0">
      <h2 className="text-3xl font-semibold ">SHOP.CO</h2>
      <NavigationMenu className="ml-10">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Shops</NavigationMenuTrigger>
          </NavigationMenuItem>
          {menuItems.map((item,index) => (
            <NavigationMenuItem key={index}>
              <a href={item.path}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.name}
                </NavigationMenuLink>
              </a>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <SearchBox />

    <div className="ml-10">
          <Button size={"lg"} variant={"ghost"}>
            <ShoppingCart />
          </Button>
          <Button size={"lg"} variant={"ghost"}>
            <UserCircle />
          </Button>
    </div>

    </div>
  );
}

export default Navigation;
