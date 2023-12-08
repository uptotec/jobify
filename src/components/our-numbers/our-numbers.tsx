import classNames from "classnames";
import styles from "./our-numbers.module.scss";

export interface OurNumbersProps {
    className?: string;
}

const Metric = ({ value, label }: { value: string; label: string }) => {
    return (
        <div className="flex flex-col items-center gap-2">
            <p className="text-3xl text-white">{value}</p>
            <p className="text-3xl text-white">{label}</p>
        </div>
    );
};

const numbers = [
    { value: "200 K+", label: "Employees" },
    { value: "100 K+", label: "Employers" },
    { value: "500 K+", label: "Available jobs" },
    { value: "200 K+", label: "Locations" },
];

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const OurNumbers = ({ className }: OurNumbersProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div
                className="flex h-screen w-full flex-col justify-center gap-20 rounded-l-3xl bg-primary"
                data-aos="fade-left"
                data-aos-duration="1000"
            >
                {numbers.map((number, i) => (
                    <div
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        data-aos-delay={`${i * 200 + 300}`}
                    >
                        <Metric
                            key={i}
                            value={number.value}
                            label={number.label}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
