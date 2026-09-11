import Image from "next/image";
import { IoFootball, IoLogoReact } from "react-icons/io5";
import { SidebarMenuItem } from "./SidebarMenuItem";

const menuItems = [
  {
    path: "/dashboard/pokemons",
    icon: <IoFootball size={40} />,
    title: "Pokemons",
    subTitle: "Static Generation",
  },
];

export const Sidebar = () => {
  return (
    <div
      id="menu"
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-[72px] md:w-[220px] shrink-0 left-0 overflow-y-auto"
    >
      <div id="logo" className="my-4 px-2 md:px-6">
        <h1 className="flex items-center justify-center md:justify-start text-lg md:text-2xl font-bold text-white">
          <IoLogoReact className="m-2" />
          <span className="hidden md:inline">PokeAPI</span>
        </h1>
        <p className="hidden md:block text-slate-500 text-sm">Static pages</p>
      </div>
      <div id="profile" className="px-2 md:px-6 py-6 md:py-10">
        <p className="hidden md:block text-slate-500">Welcome back,</p>
        <a
          href="#"
          className="flex justify-center md:justify-start items-center md:space-x-2"
        >
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="https://rmontero.me/MyAvatar.jpeg"
              alt="User Avatar"
              width={50}
              height={50}
            />
          </span>
          <span className="hidden md:inline text-sm md:text-base font-bold">
            Rafael Montero
          </span>
        </a>
      </div>
      <div id="nav" className="w-full px-2 md:px-6">
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.path} {...item} />
        ))}
      </div>
    </div>
  );
};
