import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <Footer className="py-28 bg-[#f7f7ff]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          {/* Firse Section  */}
          <div className="space-y-4 max-w-[300px]">
            <h2 className="text-2xl font-bold">The Coding Journey</h2>
            <p className="text-dark2">
              TCJ is a platform dedicated to empowering aspiring developers.
              From beginner tutorials to advanced programming concepts, we
              provide a comprehensive learning experience designed to help you
              master coding skills, build projects, and launch your tech career.
            </p>
          </div>
          {/* Secoud Section  */}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Courses</h2>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Web Development
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Software Development
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Apps Development
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    E-learning
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Links</h2>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Home
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Services
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    About
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Contact
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* third section  */}
          <div className="space-y-4 max-w-[300px]">
            <h3 className="text-2xl font-bold">Get In Touch</h3>
            <div className="flex items-center">
                <input type="text" placeholder="Enter You Email" className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2" />
                <button className="bg-primary text-white font-semibold py-4 px-6 rounded-e-xl">Go</button>
            </div>
            <div className="flex space-x-6 py-3">
              <a href="#">
                <FaWhatsapp className="cursor-pointer hover:text-primary hover:scale-105 duration-200"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default Footer;
