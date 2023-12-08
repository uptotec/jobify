import classNames from "classnames";
import styles from "./job-listings-section.module.scss";
import { SectionTitle } from "../section-title/section-title";
import categoryIcon from "../../assets/category icon.png";
import { CategoriesSelection } from "../categories-selection/categories-selection";
import { JobListingCardProps } from "../job-listing-card/job-listing-card";
import { JobListingsGrid } from "../job-listings-grid/job-listings-grid";
import { fakeJobs } from "../../jobs";

export interface JobListingsSectionProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const JobListingsSection = ({ className }: JobListingsSectionProps) => {
    return (
        <div className="flex h-screen w-full shrink-0 snap-start flex-col items-center justify-center gap-12 bg-white">
            <SectionTitle
                align="center"
                title="Jobs you maybe interested in"
                subTitle="there is thousands of jobs. just select the job and apply"
            />
            <CategoriesSelection />
            <JobListingsGrid size={8} />
        </div>
    );
};
