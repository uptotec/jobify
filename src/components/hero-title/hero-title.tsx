import classNames from "classnames";
import styles from "./hero-title.module.scss";
import jobifyIcon from "../../assets/jobify icon.svg";

export interface HeroTitleProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const HeroTitle = ({ className }: HeroTitleProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div
                className={"flex flex-col items-center gap-4"}
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="300"
            >
                <img src={jobifyIcon} alt="" className="w-14" />
                <p className={"text-5xl font-bold"}>
                    Find the <span className={"text-primary"}>best job</span>{" "}
                    for you
                </p>
                <p className={"w-8/12 text-center text-lightText"}>
                    you are at the right place you are a few clicks away from
                    your dream job.
                </p>
                <p className={"text-lightText"}>
                    <span className={"font-bold text-darkText"}>200 K+</span>{" "}
                    happy employees in 2023
                </p>
            </div>
        </div>
    );
};
