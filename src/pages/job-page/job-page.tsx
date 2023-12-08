import classNames from "classnames";
import styles from "./job-page.module.scss";
import { Header } from "../../components/header/header";
import { JobTitleSection } from "../../components/job-title-section/job-title-section";
import { JobDetailsSection } from "../../components/job-details-section/job-details-section";
import { JobDescriptionAndRequirements } from "../../components/job-description-and-requirements/job-description-and-requirements";
import { Footer } from "../../components/footer/footer";
import { AboutCompany } from "../../components/about-company/about-company";
import { useParams } from "react-router-dom";
import { fakeJobs } from "../../jobs";
import { useState } from "react";
import { ApplyModal } from "../../components/apply-modal/apply-modal";

export interface JobPageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const JobPage = ({ className }: JobPageProps) => {
    const { id } = useParams();
    const job = fakeJobs.find((job) => job.id === id);

    const [isOpened, setIsOpened] = useState(false);

    return (
        <div className="w-screen">
            <ApplyModal
                title={job!.jobTitle}
                companyName={job!.company.name}
                isOpened={isOpened}
                onClose={() => setIsOpened(false)}
            />
            <Header />
            <div className="flex gap-8 px-24 py-8">
                <div className="flex w-3/4 flex-col gap-8">
                    <JobTitleSection
                        job={job!}
                        openModal={() => setIsOpened(true)}
                    />
                    <JobDetailsSection job={job!} />
                    <JobDescriptionAndRequirements
                        type="description"
                        content={job!.Description}
                    />
                    <JobDescriptionAndRequirements
                        type="requirements"
                        content={job!.requirments}
                    />
                </div>
                <div className="w-1/4">
                    <AboutCompany
                        name={job!.company.nameAbbreviation}
                        description={job!.company.about}
                        type={job!.field}
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};
