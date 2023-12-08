import classNames from "classnames";
import styles from "./countries-section.module.scss";
import { SectionTitle } from "../section-title/section-title";
import { CountriesGrid } from "../countries-grid/countries-grid";

export interface CountriesSectionProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const CountriesSection = ({ className }: CountriesSectionProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className="flex h-screen w-screen snap-start flex-col justify-center gap-14 bg-white px-24 ">
                <SectionTitle
                    align="center"
                    title="Wherever you are you’ll find a job"
                    subTitle="we have job listings in over 50 countries"
                />
                <CountriesGrid />
            </div>
        </div>
    );
};
