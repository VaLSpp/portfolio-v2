import { motion } from "framer-motion";
import {
    SiTypescript ,
    SiJavascript ,
    SiReact ,
    SiNextdotjs ,
    SiVuedotjs ,
    SiNuxtdotjs ,
    SiRedux ,
    SiTailwindcss ,
    SiBootstrap ,
    SiHtml5 ,
    SiCss3 ,
    SiApollographql ,
    SiNodedotjs ,
    SiTsnode ,
    SiExpress ,
    SiSequelize ,
    SiPostgresql ,
    SiMongodb ,
    SiMongoose ,
    SiGraphql ,
    SiRedis ,
    SiGithub ,
    SiGitlab ,
    SiReactquery ,
    SiJquery ,
    SiSocketdotio 
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { IconType } from "react-icons";

const TechStack = () => {
    return (
        <section id="Technologies" className=" py-24">
            <div className="flex translate-y-[50%] rotate-[7deg] overflow-hidden border-y-4 border-slate-900 bg-white">
                <TranslateWrapper>
                    <LogoItemsTop />
                </TranslateWrapper>
                <TranslateWrapper>
                    <LogoItemsTop />
                </TranslateWrapper>
                <TranslateWrapper>
                    <LogoItemsTop />
                </TranslateWrapper>
            </div>
            <div className="flex -translate-y-[50%] -rotate-[7deg] overflow-hidden border-y-4 border-slate-900 bg-white">
                <TranslateWrapper reverse>
                    <LogoItemsBottom />
                </TranslateWrapper>
                <TranslateWrapper reverse>
                    <LogoItemsBottom />
                </TranslateWrapper>
                <TranslateWrapper reverse>
                    <LogoItemsBottom />
                </TranslateWrapper>
            </div>
        </section>
    );
};

const TranslateWrapper = ({
    children,
    reverse,
}: {
    children: JSX.Element;
    reverse?: boolean;
}) => {
    return (
        <motion.div
            initial={{ translateX: reverse ? "-100%" : "0%" }}
            animate={{ translateX: reverse ? "0%" : "-100%" }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="flex px-2"
        >
            {children}
        </motion.div>
    );
};

const LogoItem = ({ Icon, name }: { Icon: IconType; name: string }) => {
    return (
        <div
            rel="nofollow"
            className="flex items-center justify-center gap-4 px-4 py-4 text-black transition-colors hover:bg-neutral-200 md:py-6"
        >
            <Icon />
            <span className="whitespace-nowrap text-2xl font-semibold uppercase md:text-3xl">
                {name}
            </span>
        </div>
    );
};

const LogoItemsTop = () => (
    <>
        <LogoItem Icon={SiTypescript} name="Typescript" />
        <LogoItem Icon={SiJavascript} name="Javascript" />
        <LogoItem Icon={SiReact} name="ReactJS & React Native" />
        <LogoItem Icon={SiNextdotjs} name="NextJS" />
        <LogoItem Icon={SiVuedotjs} name="VueJS" />
        <LogoItem Icon={SiNuxtdotjs} name="NuxtJS" />
        <LogoItem Icon={SiRedux} name="Redux" />
        <LogoItem Icon={SiTailwindcss} name="TailwindCSS" />
        <LogoItem Icon={SiBootstrap} name="Bootstrap" />
        <LogoItem Icon={SiHtml5} name="HTML" />
        <LogoItem Icon={SiRedis} name="Redis" />
        <LogoItem Icon={SiGitlab} name="Gitlab" />
        <LogoItem Icon={SiJquery} name="JQuery" />
    </>
);

const LogoItemsBottom = () => (
    <>
        <LogoItem Icon={SiCss3} name="CSS" />
        <LogoItem Icon={SiApollographql} name="Appolo Client" />
        <LogoItem Icon={SiNodedotjs} name="Node JS" />
        <LogoItem Icon={SiTsnode} name="Node TS" />
        <LogoItem Icon={SiExpress} name="Express" />
        <LogoItem Icon={SiSequelize} name="Sequelize" />
        <LogoItem Icon={SiPostgresql} name="PostgreSQL" />
        <LogoItem Icon={SiMongodb} name="MongoDB" />
        <LogoItem Icon={SiMongoose} name="Mongoose" />
        <LogoItem Icon={SiGraphql} name="GraphQL" />
        <LogoItem Icon={SiGithub} name="Github" />
        <LogoItem Icon={SiReactquery} name="React Query" />
        <LogoItem Icon={SiSocketdotio } name="Socket IO" />
    </>
);

export default TechStack;