import BannerPng from "../../assets/banner.png";
import { motion } from "framer-motion";

const Banner2 = () => {
  return (
    <section>
      <div className="cotainer py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        {/* Banner Text  */}
            <motion.div initial={{opacity: 0, x: -50}}
            whileInView={{opacity:1, x: 0}} className="flex flex-col justify-center items-center mr-24 lg:ml-0">
                <div className="text-center md:text-left space-y-4 lg:max-w-[450px] ml-28">
                    <h3 className="text-4xl font-bold !leading-snug">Join Our Community to Start Your Journey</h3>
                    <p className="text-dark2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero aperiam, commodi dolorum nostrum unde facilis repudiandae sed molestias magnam vitae.</p>
                    <a href="" className="primary-btn !mt-8">Join Now</a>
                </div>
            </motion.div>
        {/* Banner Image  */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            
            src={BannerPng}
            className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Banner2;
