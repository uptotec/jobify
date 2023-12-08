import classNames from "classnames";
import styles from "./job-title-section.module.scss";
import bueLogo from "../../assets/bue.png";
import { Button } from "../button/button";
import { RiShareFill } from "react-icons/ri";

export interface JobTitleSectionProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const JobTitleSection = ({ className }: JobTitleSectionProps) => {
    return (
        <div
            className="flex w-full flex-col gap-4 rounded-xl border-2 border-lightBorder px-8 py-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
        >
            <div className="flex items-center justify-between gap-14">
                <p className="text-2xl font-bold">
                    Computer Engineering Phd Doctor
                </p>
                <img src={bueLogo} alt="" className={"h-16"} />
            </div>
            <div className="flex w-fit rounded-md bg-background px-2 py-1">
                <p className="text-sm font-light">FULL TIME</p>
            </div>
            <p className="font-medium">
                The British University in Egypt{" "}
                <span className="text-lightText">- Cairo, Egypt</span>
            </p>
            <p className="text-lightText">Posted 3 days ago</p>
            <p className="text-lightText">11 open positions</p>
            <div className="flex gap-4">
                <Button text="Apply for this job" />
                <button className="flex w-10 items-center justify-center rounded-md border-2 border-lightBorder">
                    <RiShareFill style={{ color: "#ffffff" }} size={24} />
                </button>
            </div>
        </div>
    );
};
