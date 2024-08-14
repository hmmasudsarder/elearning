import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";

const NavbarMenu = [
  {
    title: "Home",
    path: "#",
  },
  {
    title: "Services",
    path: "#",
  },
  {
    title: "About Us",
    path: "#",
  },
  {
    title: "Our Team",
    path: "#",
  },
];

const Navbar = () => {
  return (
    <nav className="relative z-20">
      <motion.div initial={{opacity: 0, y: -50}}
        animate={{opacity:1, y:0}}
      className="container py-10 flex justify-between items-center">
        {/* logo section  */}
        <div className="">
          <h1 className="text-2xl font-bold">The Coding Journey</h1>
        </div>
        {/* Menu section  */}
        <div className="lg:block">
          <ul className="flex items-center gap-4">
            {NavbarMenu.map((menu, inx) => (
              <li key={inx}>
                <a
                  href={menu.path}
                  className="inline-block py-2 px-4 hover:text-secondary relative group"
                >
                  <div className="w-2 h-2 bg-secondary absolute mt-2 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                  {menu.title}
                </a>
              </li>
            ))}
            <button className="primary-btn">Sign In</button>
          </ul>
        </div>
        {/* Mobile Hamburger section  */}
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl"/>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
