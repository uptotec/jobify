import classNames from "classnames";
import styles from "./company-info-post-job.module.scss";
import { RiUploadLine } from "react-icons/ri";
import { Input } from '../input/input';

export interface CompanyInfoPostJobProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const CompanyInfoPostJob = ({ className }: CompanyInfoPostJobProps) => {
    return (
        <div className="flex w-full flex-col gap-4 rounded-xl border-2 border-lightBorder px-8 py-4" data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="300">
            <div className="flex items-center justify-between gap-14">
                <p className="text-2xl font-bold">Company information</p>
                <div className="flex cursor-pointer flex-col items-center">
                    <RiUploadLine size={32} />
                    <p>upload logo</p>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <Input icon="company" placeholder="company name" />
                <Input icon="company" placeholder="name abbreviated" />
                <Input icon="mail" placeholder="Recruiter Email" />
            </div>
        </div>
    );
};
