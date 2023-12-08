import classNames from "classnames";
import styles from "./section-title.module.scss";

export interface SectionTitleProps {
    className?: string;
    title: string;
    subTitle: string;
    align: "start" | "center";
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const SectionTitle = ({
    className,
    title,
    subTitle,
    align,
}: SectionTitleProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div
                className={`flex flex-col gap-3 ${
                    align == "center" && "items-center"
                }`}
            >
                <p
                    className="text-4xl font-bold"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    {title}
                </p>
                <p
                    className="text-lg text-lightText"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                >
                    {subTitle}
                </p>
            </div>
        </div>
    );
};
