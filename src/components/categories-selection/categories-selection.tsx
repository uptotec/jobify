import classNames from "classnames";
import styles from "./categories-selection.module.scss";

type categoriesListType = {
    id: number;
    name: string;
    image: string;
    active: boolean;
};

export interface CategoriesSelectionProps {
    className?: string;
    categoriesList: categoriesListType[];
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const CategoriesSelection = ({
    className,
    categoriesList,
}: CategoriesSelectionProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className="flex gap-8">
                {categoriesList.map((category, i) => (
                    <button
                        key={category.id}
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        data-aos-delay={`${i * 100 + 300}`}
                        className={`flex items-center gap-2 rounded-md border-[1px] px-2 py-1 hover:border-primary hover:text-primary ${
                            category.active
                                ? "border-primary text-primary"
                                : "border-lightBorder text-lightText"
                        }`}
                    >
                        <img src={category.image} alt="" className="w-8" />
                        {category.name}
                    </button>
                ))}
            </div>
        </div>
    );
};
