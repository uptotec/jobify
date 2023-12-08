import classNames from "classnames";
import styles from "./find-a-job-page.module.scss";
import { JobSearchHeader } from "../../components/job-search-header/job-search-header";
import { JobListingCardProps } from "../../components/job-listing-card/job-listing-card";
import { JobListingsGrid } from "../../components/job-listings-grid/job-listings-grid";
import { Footer } from "../../components/footer/footer";
import { Pagination } from "../../components/pagination/pagination";
import { fakeJobs } from "../../jobs";
import { useSearchParams } from "react-router-dom";

export interface FindAJobPageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const FindAJobPage = ({ className }: FindAJobPageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className="flex w-screen flex-col items-center">
                <JobSearchHeader />
                <div className="py-10">
                    <JobListingsGrid />
                </div>
                <Pagination />
                <Footer />
            </div>
        </div>
    );
};
