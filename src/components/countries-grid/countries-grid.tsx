import classNames from "classnames";
import styles from "./countries-grid.module.scss";
import { CountryCard, CountryCardProps } from "../country-card/country-card";

export interface CountriesGridProps {
    className?: string;
}

const countries: CountryCardProps[] = [
    {
        name: "UK",
        image: "london",
        companies: "200",
        jobs: "500",
    },
    {
        name: "France",
        image: "paris",
        companies: "200",
        jobs: "500",
    },
    {
        name: "Egypt",
        image: "cairo",
        companies: "200",
        jobs: "500",
    },
    {
        name: "UAE",
        image: "dubai",
        companies: "200",
        jobs: "500",
    },
    {
        name: "Saudi Arabia",
        image: "riyadh",
        companies: "200",
        jobs: "500",
    },
];

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const CountriesGrid = ({ className }: CountriesGridProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className="grid w-full grid-cols-6 gap-8">
                {countries.map((country, index) => {
                    const colSpan =
                        countries.length % 3 === 0
                            ? "col-span-2"
                            : countries.length - index < 3
                              ? "col-span-3"
                              : "col-span-2";
                    return (
                        <div
                            className={colSpan}
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                        >
                            <CountryCard {...country} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
