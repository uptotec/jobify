import classNames from "classnames";
import styles from "./job-listings-grid.module.scss";
import {
    JobListingCard,
    JobListingCardProps,
} from "../job-listing-card/job-listing-card";
import { job } from "../../jobType";
import { fakeJobs } from "../../jobs";
import { useSearchParams } from "react-router-dom";

export interface JobListingsGridProps {
    className?: string;
    size?: number;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const JobListingsGrid = ({ className, size }: JobListingsGridProps) => {
    let [searchParams] = useSearchParams();

    const field = searchParams.get("field");
    const jobSearchTitle = searchParams.get("title");
    const jobSearchLocation = searchParams.get("location");

    const filteredJobs = fakeJobs.filter((job) => {
        let shouldInclude = true;

        if (field && field !== "All") {
            shouldInclude = job.field.toLowerCase() === field.toLowerCase();
        }

        if (shouldInclude && jobSearchTitle) {
            if (
                !job.jobTitle
                    .toLowerCase()
                    .includes(jobSearchTitle.toLowerCase().trim())
            ) {
                shouldInclude = false;
            }
        }

        if (shouldInclude && jobSearchLocation) {
            if (
                !job.details.Location.toLowerCase().includes(
                    jobSearchLocation.toLowerCase().trim(),
                )
            ) {
                shouldInclude = false;
            }
        }

        return shouldInclude;
    });
    return (
        <div className={classNames(styles.root, className)}>
            <div
                className="grid grid-cols-4 gap-8"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="600"
            >
                {filteredJobs
                    .slice(0, size ? size : filteredJobs.length)
                    .map((job) => (
                        <JobListingCard job={job} />
                    ))}
            </div>
        </div>
    );
};
