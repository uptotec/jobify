import classNames from "classnames";
import styles from "./about-company.module.scss";
import bueLogo from "../../assets/bue.png";

export interface AboutCompanyProps {
    className?: string;
    name: string;
    description: string;
    type: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const AboutCompany = ({
    className,
    name,
    description,
    type,
}: AboutCompanyProps) => {
    return (
        <div
            className="flex w-full flex-col gap-4 rounded-xl border-2 border-lightBorder px-8 py-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
        >
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-lg font-semibold">About {name}</p>
                    <p className="text-sm text-lightText">{type}</p>
                </div>
                <img src={bueLogo} alt="" className="h-10" />
            </div>
            <p className="text-lightText">{description}</p>
        </div>
    );
};
