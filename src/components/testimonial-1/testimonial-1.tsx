import classNames from "classnames";
import styles from "./testimonial-1.module.scss";
import saulGodman from "../../assets/saul goodman.png";
import dwight from "../../assets/dwight.png";

export interface Testimonial1Props {
    className?: string;
    type: "saul" | "dwight";
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Testimonial1 = ({ className, type }: Testimonial1Props) => {
    const text = {
        saul: {
            quote: "Jobify, yeah? It's like the blue meth of job hunting. Sleek, efficient, and addictive. Jobify's the Heisenberg of job sites, If you're in the game, Jobify is your ticket to a career empire.",
            signature: "- Saul Godman",
        },
        dwight: {
            quote: "Jobify, the Schrute Farms of job sites. the application process is smoother than a well-oiled beet press. Jobify is the Dwight Schrute of job sites – superior, strategic, and the Assistant Regional Manager of your career.",
            signature: "- dwight schrute",
        },
    };
    return (
        <div className={classNames(styles.root, className)}>
            <div className="flex items-center gap-4">
                {type === "saul" && (
                    <img
                        src={saulGodman}
                        alt=""
                        className="h-80"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        data-aos-delay="300"
                    />
                )}
                <div
                    className="flex max-w-5xl flex-col gap-4"
                    data-aos={`fade-${type === "saul" ? "right" : "left"}`}
                    data-aos-duration="1000"
                    data-aos-delay="500"
                >
                    <p className="text-2xl leading-relaxed">
                        <span className="text-primary">❝</span>
                        {text[type].quote}
                        <span className="text-primary">❞</span>
                    </p>
                    <p className="text-3xl text-primary">
                        {text[type].signature}
                    </p>
                </div>
                {type === "dwight" && (
                    <img
                        src={dwight}
                        className="h-80"
                        alt=""
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        data-aos-delay="300"
                    />
                )}
            </div>
        </div>
    );
};
