import classNames from "classnames";
import styles from "./job-description-and-requirements.module.scss";

export interface JobDescriptionAndRequirementsProps {
    className?: string;
    type: "description" | "requirements";
    content: string[];
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const JobDescriptionAndRequirements = ({
    className,
    type,
    content,
}: JobDescriptionAndRequirementsProps) => {
    return (
        <div
            className="flex w-full flex-col gap-4 rounded-xl border-2 border-lightBorder px-8 py-4"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <p className="text-xl font-semibold">
                {type === "description"
                    ? "Job Description"
                    : "Job Requirements"}
            </p>
            <ul className="flex list-disc flex-col gap-2 pl-8">
                {content.map((item, i) => (
                    <li key={i} className="">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};
