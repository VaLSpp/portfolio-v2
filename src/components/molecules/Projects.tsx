import { motion, useInView } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { IconType } from "react-icons";
import { FiDollarSign, FiEye, FiPlay, FiSearch } from "react-icons/fi";
import { TextScreen } from "../atoms/TextScreen";

const Projects = () => {
    return (
        <div id="Projects" className="">
            <TextScreen />
            <SwapColumnFeatures />
        </div>
    );
};

const SwapColumnFeatures = () => {
    const [featureInView, setFeatureInView] = useState<FeatureType>(features[0]);

    return (
        <section className="relative mx-auto max-w-7xl">
            <SlidingFeatureDisplay featureInView={featureInView} />

            {/* Offsets the height of SlidingFeatureDisplay so that it renders on top of Content to start */}
            <div className="-mt-[100vh] hidden md:block" />

            {features.map((s) => (
                <Content
                    key={s.id}
                    featureInView={s}
                    setFeatureInView={setFeatureInView}
                    {...s}
                />
            ))}
        </section>
    );
};

const SlidingFeatureDisplay = ({
    featureInView,
}: {
    featureInView: FeatureType;
}) => {
    return (
        <div
            style={{
                justifyContent:
                    featureInView.contentPosition === "l" ? "flex-end" : "flex-start",
            }}
            className="pointer-events-none sticky top-0 z-10 hidden h-screen w-full items-center justify-center md:flex"
        >
            <motion.div
                layout
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                }}
                className="h-fit w-3/5 rounded-xl p-8"
            >
                <ExampleFeature featureInView={featureInView} />
            </motion.div>
        </div>
    );
};

const Content = ({
    setFeatureInView,
    featureInView,
}: {
    setFeatureInView: Dispatch<SetStateAction<FeatureType>>;
    featureInView: FeatureType;
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        margin: "-150px",
    });

    useEffect(() => {
        if (isInView) {
            setFeatureInView(featureInView);
        }
    }, [isInView]);

    return (
        <section
            ref={ref}
            className="relative z-0 flex h-fit md:h-screen"
            style={{
                justifyContent:
                    featureInView.contentPosition === "l" ? "flex-start" : "flex-end",
            }}
        >
            <div className="grid h-full w-full place-content-center px-4 py-12 md:w-2/5 md:px-8 md:py-8">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <span className="rounded-full bg-indigo-600 px-2 py-1.5 text-xs font-medium text-white">
                        {featureInView.callout}
                    </span>
                    <p className="my-3 text-5xl font-bold text-white">{featureInView.title}</p>
                    <p className="text-slate-300">{featureInView.stack}</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="mt-8 block md:hidden"
                >
                    <ExampleFeature featureInView={featureInView} />
                </motion.div>
            </div>
        </section>
    );
};

const ExampleFeature = ({ featureInView }: { featureInView: FeatureType }) => {
    return (
        <div className="relative h-[480px] w-full rounded-xl bg-slate-800 shadow-xl">
            <div className="flex w-full gap-1.5 rounded-t-xl bg-slate-900 p-3">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <div className="p-2">
                <p className="font-mono text-sm text-slate-200">
                    <span className="text-green-300">~</span> Let me explains what{" "}
                    <span className="inline-block rounded bg-indigo-600 px-1 font-semibold">
                        &quot;{featureInView.title}&quot;
                    </span>{" "}
                    means.
                </p>
                <p className="font-mono mt-5 text-sm text-white">{featureInView.descriptions}</p>
            </div>

        </div>
    );
};

export default Projects;

type FeatureType = {
    id: number;
    callout: string;
    title: string;
    stack: string;
    descriptions: string;
    contentPosition: "l" | "r";
    Icon: IconType;
};

const features: FeatureType[] = [
    {
        id: 1,
        callout: "Januari 2024",
        title: "Encep Lari",
        stack:
            "Tech stack: Gdevelop",
        contentPosition: "r",
        descriptions: "Game Encep Lari ini terinspirasi dari game kejar kejaran antara beruang dan manusia , di game encep lari ini kita berperan sebagai anak kecil yang di kejar tante nya , dia tidak mau bertemu tante nya karena sakit dicubitin terus.",
        Icon: FiEye,
    },
    {
        id: 2,
        callout: "Oktober 2023",
        title: "Ecommerce",
        stack:
            "Tech stack: NuxtJs, Supabase, Typescript, PWA",
        contentPosition: "l",
        descriptions: "Ecommerce untuk memudahkan user membeli product dengan online tanpa perlu datang ketoko",
        Icon: FiSearch,
    },
    {
        id: 3,
        callout: "Februari 2024",
        title: "Polaris",
        stack:
            "Tech stack: Godot , GDscripts, Blender",
        contentPosition: "r",
        descriptions: "Game ini memiliki alur yang sangat bagus , ia menceritakan seorang astronot yang ingin ke bulan dan ditengah perjalanan astronot itu menabrak batu batu meteor , dan roket yang ia tumpangi jatoh dan alien datang , ia harus menyelamatkan dirinya dari alien alien yang telah masuk ke roket nya.",
        Icon: FiPlay,
    },
];