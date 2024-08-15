import { IoIosArrowRoundForward } from "react-icons/io";
import Navbar from "../Navbar/Navbar";
import Blog from "../../assets/blob.svg";
import HeroPng from "../../assets/hero.png";
import { motion } from "framer-motion";

export const FadeUp = (delay) => {
    return {
        initial: {
            opacity: 0,
            y: 50,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                duration: 0.5,
                delay: delay,
                ease: "easeInOut"
            }
        }
    }
}

const Hero = () => {
  return (
    <section className="bg-light overflow-hidden relative">
      <Navbar />
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        {/* Brand Info  */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-20">
          <div className="text-center md:text-left space-y-10 lg:max-w-[400px]">
            <motion.h2 variants={FadeUp(0.6)} initial="initial" animate="animate" className="text-3xl lg:text-5xl  space-y-10 font-bold !leading-snug">
              Let Learn to build <span className="text-secondary">Skill</span>{" "}
              for your mind{" "}
            </motion.h2>
            <motion.div variants={FadeUp(0.8)} initial="initial" animate="animate"  className="flex justify-center md:justify-start">
              <button className="primary-btn flex items-center gap-2 group">
                Get Started{" "}
                <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />{" "}
              </button>
            </motion.div>
          </div>
        </div>
        {/* Brand Image  */}
        <div className="flex justify-center items-center">
            <motion.img initial={{x: 50, opacity:0}} animate={{x:0, opacity: 1}} transition={{duration: 0.6, delay: 0.4, ease:"easeInOut"}} src={HeroPng} className="w-[400px] xl:w-[600px] relative z-10 drop-shadow" alt="" />
            <motion.img initial={{x: -50, opacity:0}} animate={{x:0, opacity: 1}} transition={{duration: 0.6, delay: 0.2, ease:"easeInOut"}} src={Blog} className="absolute -bottom-32 w-[800px] md:w-[1500px] z-[1] hidden md:block" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
