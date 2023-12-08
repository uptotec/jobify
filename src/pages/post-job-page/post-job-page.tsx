import classNames from "classnames";
import styles from "./post-job-page.module.scss";
import { Header } from "../../components/header/header";
import { CompanyInfoPostJob } from "../../components/company-info-post-job/company-info-post-job";
import { JobInfoPostJob } from "../../components/job-info-post-job/job-info-post-job";
import { Footer } from "../../components/footer/footer";
import { Button } from "../../components/button/button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export interface PostJobPageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const PostJobPage = ({ className }: PostJobPageProps) => {
    const notify = () => toast.success("job posted successfully!");
    const navigate = useNavigate();

    const handleSubmit = () => {
        notify();
        navigate("/");
    };

    return (
        <div className="w-screen">
            <Header />
            <div className="flex flex-col items-center gap-8 px-24">
                <CompanyInfoPostJob />
                <JobInfoPostJob />
                <Button
                    text="post this job"
                    className="w-1/4"
                    onClick={handleSubmit}
                />
            </div>
            <Footer />
        </div>
    );
};
