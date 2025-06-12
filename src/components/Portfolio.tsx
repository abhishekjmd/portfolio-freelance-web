import { AnimatePresence, motion } from "framer-motion";
import PublicSection from "./PublicSection";
import "../index.css";

const Portfolio = ({ onClick, togglePortfolio }) => {
  return (
    <div
      className={`flex flex-col  border-[#1b1e2e] mx-[1px] mt-2 lg:pb-1`}
    >
      <AnimatePresence>
        {togglePortfolio && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            {/* <div className="max-h-[55vh] w-[100%] overflow-x-hidden overflow-y-scroll"> */}
              {/* public */}
              <div className="flex flex-col justify-center items-center w-full">
                <PublicSection />
              {/* </div> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
