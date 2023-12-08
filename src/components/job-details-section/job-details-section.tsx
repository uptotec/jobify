import classNames from "classnames";
import styles from "./job-details-section.module.scss";

export interface JobDetailsSectionProps {
    className?: string;
}

const job = {
    "Experience Needed": "0 To 3 Years",
    "Career Level": "entry Level",
    Location: "Cairo, Egypt",
    "Education Level": "Bachelors Degree",
    Salary: "Not Disclosed",
    "Job Category": "Education",
};

const skills = [
    "MS Office",
    "MS Word",
    "MS Excel",
    "MS Powerpoint",
    "MS Outlook",
    "MS Teams",
];

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const JobDetailsSection = ({ className }: JobDetailsSectionProps) => {
    const colors = [
        "bg-green-300",
        "bg-orange-300",
        "bg-indigo-300",
        "bg-red-300",
    ];
    return (
        <div
            className="flex w-full flex-col gap-4 rounded-xl border-2 border-lightBorder px-8 py-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
        >
            <p className="text-xl font-semibold">Job Details</p>
            <div className="flex gap-6">
                <div className="flex flex-col gap-2">
                    {Object.keys(job).map((detail, i) => (
                        <p key={i} className="text-lightText">
                            {detail}:
                        </p>
                    ))}
                </div>
                <div className="flex flex-col gap-2">
                    {Object.values(job).map((detail, i) => (
                        <p key={i}>{detail}</p>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-4 rounded-md bg-[#F0F0F0] px-4 pb-2 pt-4">
                <p className="font-semibold">Skills And Tools:</p>
                <div className="flex-wrap">
                    {skills.map((skill, i) => (
                        <span
                            className={`mr-2 inline-block rounded-full ${
                                colors[i % colors.length]
                            } mb-2 px-4 py-1 text-sm font-semibold text-darkText`}
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};
