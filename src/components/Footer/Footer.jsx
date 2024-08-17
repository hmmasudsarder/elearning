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
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default Footer;
