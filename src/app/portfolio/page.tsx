"use client"
import { motion } from "motion/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { GalaryContainer } from "@/components/galary/container";


const page = () => {
    return(
        <div className="flex flex-col w-full relative h-[94vh]">
            <div className="flex items-center">
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5, ease: "easeInOut"}}>
            <div className="absolute bottom-0 left-0">
                <h1 className="text-8xl px-5 font-['UbuntuL']">Portfolio</h1>
            </div>
            </motion.div>
            
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5, ease: "easeInOut"}}
            className="grid grid-cols-2 w-full"
            >
            <div className="p-5 font-['Comfortaa']">
                <p><b>Commission Prices:</b><br/>Pay what you want! <br/> You as the client get to pay as much regardless of what you order :3
                
                <br/><br/><b>Minimum:</b> <br/>$15 USD per artwork
                
                <br/><br/><b>I accept:</b> <br/>Paypal, kofi, steam credit/games, robux
                </p>
            </div>
                <div className="grid relative justify-items-end">
                    <GalaryContainer />
                    <div className="absolute  top-3/4 left-0 right-0 bottom-0 bg-gradient-to-t from-background to-transparent"/>
                </div>
            </motion.div>
            </div>
        </div>
    );
};

export default page
