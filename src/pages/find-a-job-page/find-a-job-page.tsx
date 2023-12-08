import classNames from "classnames";
import styles from "./find-a-job-page.module.scss";
import { JobSearchHeader } from "../../components/job-search-header/job-search-header";
import { JobListingCardProps } from "../../components/job-listing-card/job-listing-card";
import { JobListingsGrid } from "../../components/job-listings-grid/job-listings-grid";
import { Footer } from "../../components/footer/footer";
import { Pagination } from '../../components/pagination/pagination';

export interface FindAJobPageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

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

for (let i = 0; i < 16; i++) {
    jobs.push(job);
}


export const FindAJobPage = ({ className }: FindAJobPageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className="flex w-screen flex-col items-center">
                <JobSearchHeader />
                <div className="py-10">
                    <JobListingsGrid jobs={jobs} />
                </div>
                <Pagination />
                <Footer />
            </div>
        </div>
    );
};
