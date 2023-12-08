import classNames from "classnames";
import styles from "./categories-selection.module.scss";
import { fakeJobs } from "../../jobs";
import { useSearchParams } from "react-router-dom";

type categoriesListType = {
    id: number;
    name: string;
    image: string;
    active: boolean;
};

export interface CategoriesSelectionProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const CategoriesSelection = ({
    className,
}: CategoriesSelectionProps) => {
    const uniqueFieldsSet: Set<string> = new Set();

    fakeJobs.forEach((job) => {
        uniqueFieldsSet.add(job.field);
    });

    const fields = Array.from(uniqueFieldsSet);

    fields.unshift("All");

    let [searchParams, setSearchParams] = useSearchParams();

    return (
        <div className={classNames(styles.root, className)}>
            <div
                className="flex gap-8"
                data-aos="fade-right"
                data-aos-duration="1000"
            >
                {fields.map((category, i) => (
                    <button
                        key={i}
                        onClick={() => {
                            searchParams.set("field", category);
                            setSearchParams(searchParams);
                        }}
                        // data-aos="fade-right"
                        // data-aos-duration="1000"
                        // data-aos-delay={`${i * 100 + 300}`}
                        className={`flex items-center gap-2 rounded-md border-[1px] px-2 py-1 hover:border-primary hover:text-primary ${
                            searchParams.get("field") === category ||
                            (searchParams.get("field") === null && i === 0)
                                ? "border-primary text-primary"
                                : "border-lightBorder text-lightText"
                        }`}
                    >
                        {/* <img src={category.image} alt="" className="w-8" /> */}
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};
