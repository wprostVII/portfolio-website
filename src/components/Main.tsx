"use client"
import { motion } from "motion/react";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import {faXTwitter} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faSteam} from '@fortawesome/free-brands-svg-icons';
import {faDiscord} from '@fortawesome/free-brands-svg-icons';
import {faTumblr} from '@fortawesome/free-brands-svg-icons';
import {faFile} from '@fortawesome/free-solid-svg-icons';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import {faPaw} from '@fortawesome/free-solid-svg-icons';

import Image from 'next/image';

const MainText = () => {
    return(
        <div className="flex flex-col w-full">
            <motion.div
        initial={{opacity: 1}}
        animate={{opacity: 0}}
        transition={{duration: 2, ease: "easeOut", delay:2}}>
            <div className="flex flex-col w-full min-h-screen bg-[d9d4b6] items-center justify-center absolute indent-8">
                
                <p><FontAwesomeIcon icon={faQuoteLeft} className="text-2xl" />  Shared joy is a double joy,<br/>shared sorrow is half a sorrow</p>
            </div>
        </motion.div>
        
            <div className="relative items-center h-[94vh]">
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1, ease: "easeInOut", delay:4}}>
            <div className="absolute bottom-0 left-0">
                <h1 className="text-8xl px-5 font-['UbuntuL']">wprostVII</h1>
            </div>
            </motion.div>
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1, ease: "easeInOut", delay:4}}>
                <Image src="/me.png" width={990} height={660} alt="an artwork of me" className="float-right"/>   
            </motion.div>
            
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1, ease: "easeInOut", delay:4}}>
            <div className="absolute p-5 font-['Comfortaa']">
            <div className="flex gap-4 justify-between">
                    <Link href="https://archery-luna.com/">
                        <FontAwesomeIcon icon={faPaw} />
                    </Link>
                    <Link href="https://x.com/wprost_VII">
                        <FontAwesomeIcon icon={faXTwitter} />
                    </Link>
                    <Link href="https://www.instagram.com/wprostvii/">
                        <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                    <Link href="https://www.tumblr.com/blog/wprostvii">
                        <FontAwesomeIcon icon={faTumblr} />
                    </Link>
                    <Link href="https://toyhou.se/wprost7">
                        <FontAwesomeIcon icon={faHouse} />
                    </Link>
                    <Link href="https://wprostvii.straw.page">
                        <FontAwesomeIcon icon={faFile} />
                    </Link>
                    <Link href="" className="hover:cursor-pointer" title="username: Cement Mix">
                        <FontAwesomeIcon icon={faSteam} />
                    </Link>
                    <Link href="" className="hover:cursor-pointer" title="username: wprostvii">
                        <FontAwesomeIcon icon={faDiscord} />
                    </Link>
                    
                </div>
                <p className="py-5">Welcome stranger to my little corner of the web!<br/>I am a digital 2D artist who draws mostly for fun.
                <br/>Feel free to talk to me on any social media platform ^_^</p>
                
                
            </div>
            </motion.div>
            </div>
        </div>
    );
};

export {MainText};
