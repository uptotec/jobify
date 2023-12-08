import classNames from "classnames";
import styles from "./job-title-section.module.scss";
import bueLogo from "../../assets/bue.png";
import { Button } from "../button/button";
import { RiShareFill } from "react-icons/ri";
import { job } from "../../jobType";

export interface JobTitleSectionProps {
    className?: string;
    job: job;
    openModal: () => void;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const JobTitleSection = ({
    className,
    job,
    openModal,
}: JobTitleSectionProps) => {
    return (
        <div
            className="flex w-full flex-col gap-4 rounded-xl border-2 border-lightBorder px-8 py-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
        >
            <div className="flex items-center justify-between gap-14">
                <p className="text-2xl font-bold">{job.jobTitle}</p>
                <img src={bueLogo} alt="" className={"h-16"} />
            </div>
            <div className="flex w-fit rounded-md bg-background px-2 py-1">
                <p className="text-sm font-light">{job.time}</p>
            </div>
            <p className="font-medium">
                {job.company.name}
                <span className="text-lightText">- {job.details.Location}</span>
            </p>
            <p className="text-lightText">{new Date(job.postDate).toDateString()}</p>
            <p className="text-lightText">{job.openPositions} open positions</p>
            <div className="flex gap-4">
                <Button text="Apply for this job" onClick={openModal} />
                <button className="flex w-10 items-center justify-center rounded-md border-2 border-lightBorder">
                    <RiShareFill style={{ color: "#ffffff" }} size={24} />
                </button>
            </div>
        </div>
    );
};
