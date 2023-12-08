import classNames from "classnames";
import styles from "./testimonials-and-numbers-section.module.scss";
import { SectionTitle } from "../section-title/section-title";
import { Testimonial1 } from "../testimonial-1/testimonial-1";
import { OurNumbers } from "../our-numbers/our-numbers";

export interface TestimonialsAndNumbersSectionProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const TestimonialsAndNumbersSection = ({
    className,
}: TestimonialsAndNumbersSectionProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className="flex h-screen w-screen snap-start justify-between gap-14 bg-background">
                <div className="flex flex-col gap-8 pl-24 pt-14">
                    <SectionTitle
                        align="start"
                        title="Testimonials & our numbers"
                        subTitle="people loves Jobify and we have people and numbers to back it up."
                    />
                    <Testimonial1 type="saul" />
                    <Testimonial1 type="dwight" />
                </div>
                <div className="w-1/4">
                    <OurNumbers />
                </div>
            </div>
        </div>
    );
};
