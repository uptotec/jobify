import classNames from "classnames";
import styles from "./job-listings-section.module.scss";
import { SectionTitle } from "../section-title/section-title";
import categoryIcon from "../../assets/category icon.png";
import { CategoriesSelection } from "../categories-selection/categories-selection";
import { JobListingCardProps } from "../job-listing-card/job-listing-card";
import { JobListingsGrid } from "../job-listings-grid/job-listings-grid";

export interface JobListingsSectionProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

const categoriesList = [
    { id: 1, image: categoryIcon, name: "education", active: true },
    { id: 2, image: categoryIcon, name: "education", active: false },
    { id: 3, image: categoryIcon, name: "education", active: false },
    { id: 4, image: categoryIcon, name: "education", active: false },
    { id: 5, image: categoryIcon, name: "education", active: false },
    { id: 6, image: categoryIcon, name: "education", active: false },
    { id: 7, image: categoryIcon, name: "education", active: false },
    { id: 8, image: categoryIcon, name: "education", active: false },
];

const job = {
    companyName: "Bue",
    timePosted: "3 days ago",
    jobTitle: "Computer Engineering Phd Doctor",
    jobDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    jobCategory: "education",
    salary: "E£1.25/Year",
};

const jobs: JobListingCardProps[] = [];

for (let i = 0; i < 8; i++) {
    jobs.push(job);
}

export const JobListingsSection = ({ className }: JobListingsSectionProps) => {
    return (
        <div className="flex h-screen w-full shrink-0 snap-start flex-col items-center justify-center gap-12 bg-white">
            <SectionTitle
                align="center"
                title="Jobs you maybe interested in"
                subTitle="there is thousands of jobs. just select the job and apply"
            />
            <CategoriesSelection categoriesList={categoriesList} />
            <JobListingsGrid jobs={jobs} />
        </div>
    );
};
