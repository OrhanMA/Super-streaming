"use client";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

export default function MobileMenu() {
  return (
    <NavigationMenu className="sm:hidden">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger aria-label="Mobile menu">
            <HamburgerMenuIcon color="#000000" />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul>
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <MobileLink text="Home" href="/" />
                </NavigationMenuLink>
              </li>
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <MobileLink text="Popular" href="/popular" />
                </NavigationMenuLink>
              </li>
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <MobileLink text="Top" href="/top" />
                </NavigationMenuLink>
              </li>
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <MobileLink text="Upcoming" href="/upcoming" />
                </NavigationMenuLink>
              </li>
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <MobileLink text="Favorites" href="/favorites" />
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function MobileLink({ text, href }: { text: string; href: string }) {
  return (
    <a
      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
      href={href}
    >
      {text}
    </a>
  );
}
