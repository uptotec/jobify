import classNames from "classnames";
import styles from "./country-card.module.scss";
import cairoImage from "../../assets/cairo.jpeg";
import dubaiImage from "../../assets/dubai.jpeg";
import londonImage from "../../assets/london.jpeg";
import riyadhImage from "../../assets/riyadh.jpeg";
import parisImage from "../../assets/paris.jpeg";

export interface CountryCardProps {
    className?: string;
    name: string;
    image: "cairo" | "dubai" | "london" | "riyadh" | "paris";
    companies: string;
    jobs: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const CountryCard = ({
    className,
    companies,
    image,
    jobs,
    name,
}: CountryCardProps) => {
    const images = {
        cairo: cairoImage,
        dubai: dubaiImage,
        london: londonImage,
        riyadh: riyadhImage,
        paris: parisImage,
    };

    return (
        <div className={classNames(styles.root, className)}>
            <div className="relative w-full cursor-pointer transition duration-500 hover:scale-105">
                <div className="absolute z-50 flex h-full w-full flex-col justify-end p-5">
                    <p className="text-xl font-bold text-white">{name}</p>
                    <div className="flex gap-6">
                        <p className="text-white">{companies} companies</p>
                        <p className="text-white">{jobs} jobs</p>
                    </div>
                </div>
                <span
                    className={`absolute z-30 h-full w-full rounded-2xl bg-gradient-to-b from-transparent to-black/50`}
                />
                <div
                    className="flex w-40 flex-col rounded-2xl bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${images[image]})`,
                        height: "20em",
                        width: "100%",
                    }}
                ></div>
            </div>
        </div>
    );
};
