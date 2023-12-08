import classNames from "classnames";
import styles from "./job-page.module.scss";
import { Header } from "../../components/header/header";
import { JobTitleSection } from "../../components/job-title-section/job-title-section";
import { JobDetailsSection } from "../../components/job-details-section/job-details-section";
import { JobDescriptionAndRequirements } from "../../components/job-description-and-requirements/job-description-and-requirements";
import { Footer } from "../../components/footer/footer";
import { AboutCompany } from "../../components/about-company/about-company";

export interface JobPageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

const content = [
    "0 To 3 Years",
    "Entry Level",
    "Bachelor's Degree",
    "6000 To 11000 EGP",
    "Education",
];

const content1 = [
    "0 To 3 Years",
    "Entry Level",
    "Bachelor's Degree",
    "6000 To 11000 EGP",
    "Education",
];

export const JobPage = ({ className }: JobPageProps) => {
    return (
        <div className="w-screen">
            <Header />
            <div className="flex gap-8 px-24 py-8">
                <div className="flex w-3/4 flex-col gap-8">
                    <JobTitleSection />
                    <JobDetailsSection />
                    <JobDescriptionAndRequirements
                        type="description"
                        content={content}
                    />
                    <JobDescriptionAndRequirements
                        type="requirements"
                        content={content1}
                    />
                </div>
                <div className="w-1/4">
                    <AboutCompany
                        name="BUE"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Lorem ipsum dolor sit amet."
                        type="Educational Institute"
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};
