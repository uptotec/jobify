import classNames from "classnames";
import styles from "./job-listing-card.module.scss";
import bueLogo from "../../assets/bue.png";
import { Button } from "../button/button";

export interface JobListingCardProps {
    className?: string;
    companyName: string;
    timePosted: string;
    jobTitle: string;
    jobDescription: string;
    jobCategory: string;
    salary: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const JobListingCard = ({
    className,
    companyName,
    timePosted,
    jobCategory,
    jobDescription,
    jobTitle,
    salary,
}: JobListingCardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div
                className={
                    "flex flex-col gap-4 rounded-2xl border-2 border-lightBorder bg-white p-4"
                }
            >
                <div className="flex items-center justify-between gap-10">
                    <div className={"flex items-center gap-2"}>
                        <img src={bueLogo} alt="" className={"h-10"} />
                        <div className="flex flex-col">
                            <p className="p-0 text-lightText">{companyName}</p>
                            <p className="p-0 text-sm text-lightText">
                                {timePosted}
                            </p>
                        </div>
                    </div>
                    <div className="rounded-full bg-green-300 px-4 py-1">
                        <p className="text-sm">{jobCategory}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-lg font-medium">{jobTitle}</p>
                    <p className="max-w-xs text-sm text-lightText">
                        {jobDescription}
                    </p>
                    <p className="text-xl font-black">{salary}</p>
                </div>

                <div className={"flex items-center justify-end gap-4"}>
                    <a
                        href="/"
                        className={
                            "text-darkText transition-all hover:text-primary"
                        }
                    >
                        View details
                    </a>
                    <Button text="apply" />
                </div>
            </div>
        </div>
    );
};
