import classNames from "classnames";
import styles from "./job-listings-grid.module.scss";
import {
    JobListingCard,
    JobListingCardProps,
} from "../job-listing-card/job-listing-card";

export interface JobListingsGridProps {
    className?: string;
    jobs: JobListingCardProps[];
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const JobListingsGrid = ({ className, jobs }: JobListingsGridProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div
                className="grid grid-cols-4 gap-8"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="600"
            >
                {jobs.map((job) => (
                    <JobListingCard {...job} />
                ))}
            </div>
        </div>
    );
};
