"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import logo from "@images/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import MenuList from "../menu/menu-list";
import MenuMobile from "../menu/menu-mobile";
import MenuSearch from "../menu/menu-search";

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const toggleSearch = () => {
    setIsOpenSearch(!isOpenSearch);
  };

  useEffect(() => {
    setIsOpenSearch(false);
    setIsOpenMenu(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-10 bg-white shadow-md">
      <nav className="container mx-auto flex w-full items-center py-4">
        <button
          id="hamberger-button"
          onClick={toggleMenu}
          className="mx-5 flex items-center lg:hidden"
        >
          <FontAwesomeIcon icon={faBars} className="size-4" />
        </button>
        <Link href={"/"}>
          <Image src={logo} alt="Sce Logo" width={130} height={70} />
        </Link>
        <ul className="hidden w-full justify-evenly underline-offset-4 *:text-primary lg:flex hover:[&_a]:underline">
          <MenuList />
        </ul>
        <button
          onClick={toggleSearch}
          className="mx-4 flex h-[2-rem] w-full items-center rounded-lg border-2 border-gray-200 bg-gray-50 px-2 py-1 text-start text-gray-400 hover:cursor-pointer hover:border-primary lg:mx-0 lg:w-1/4"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} className="ms-1 size-4" />
          <span className="ms-3 text-sm">ค้นหาสินค้า...</span>
        </button>
      </nav>

      <MenuMobile toggleMenu={toggleMenu} isOpenMenu={isOpenMenu} />
      <MenuSearch toggleSearch={toggleSearch} isOpenSearch={isOpenSearch} />
    </header>
  );
}
