import {
    AnimatePresence,
    MotionValue,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import { useEffect, useRef, useState, Dispatch, SetStateAction, } from "react";

const ButtonMobile = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.button
                whileHover={{ rotate: "180deg" }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                className="fixed top-8 right-8 z-50 text-3xl hover:text-indigo-500 drop-shadow-lg transition-colors p-4 backdrop-blur-md rounded-full text-white lg:hidden"
            >
                <FiMenu />
            </motion.button>
            <Nav isOpen={isOpen} setIsOpen={setIsOpen} />

        </>
    )
}

const Nav = ({
    isOpen,
    setIsOpen,
}: {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
    return (
        <div className="relative overflow-hidden">
            <motion.nav
                className="fixed top-0 bottom-0 w-screen z-50 bg-neutral-950"
                animate={isOpen ? "open" : "closed"}
                variants={navVariants}
                initial="closed"
            >
                <motion.button
                    className="text-3xl text-indigo-100 hover:text-indigo-500 border-[1px] border-transparent hover:border-indigo-500 transition-colors p-4 rounded-full absolute top-8 right-8"
                    whileHover={{ rotate: "180deg" }}
                    whileDrag={{ rotate: "180deg" }}
                    onClick={() => setIsOpen(false)}
                    whileTap={{ scale: 0.9 }}
                >
                    <FiX />
                </motion.button>
                <motion.div
                    className="flex flex-col gap-4 absolute bottom-8 left-8"
                    variants={navLinkVariants}
                    onClick={() => setIsOpen(false)}
                >
                    <NavLink text="Home" />
                    <NavLink text="WorkExperiences" />
                    <NavLink text="Projects" />
                    <NavLink text="Certifications" />
                    <NavLink text="Technologies" />
                    <NavLink text="Contact" />
                </motion.div>
            </motion.nav>
        </div>
    );
};

const NavLink = ({ text }: { text: string }) => {
    return (
        <motion.a
            className="inline-block z-50 text-indigo-200 w-fit font-black text-4xl hover:text-indigo-500 transition-colors"
            variants={navLinkVariants}
            transition={{
                type: "spring",
                damping: 3,
            }}
            whileHover={{
                y: -15,
                rotate: "-7.5deg",
            }}
            rel="nofollow"
            href={`#${text}`}
        >
            {text}
        </motion.a>
    );
};


const navVariants = {
    open: {
        x: "0%",
        borderTopLeftRadius: "0vw",
        borderBottomLeftRadius: "0vw",
        opacity: 1,
    },
    closed: {
        x: "100%",
        borderTopLeftRadius: "50vw",
        borderBottomLeftRadius: "50vw",
        opacity: 0,
    },
};

const navLinkVariants = {
    open: { x: 0 },
    closed: { x: 25 },
};

export default ButtonMobile