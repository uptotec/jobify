import classNames from "classnames";
import styles from "./home-page.module.scss";
import { Hero } from "../../components/hero/hero";
import { JobListingsSection } from "../../components/job-listings-section/job-listings-section";
import { Footer } from "../../components/footer/footer";
import { TestimonialsAndNumbersSection } from "../../components/testimonials-and-numbers-section/testimonials-and-numbers-section";
import { CountriesSection } from "../../components/countries-section/countries-section";
import { MailSection } from "../../components/mail-section/mail-section";

export interface HomePageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const HomePage = ({ className }: HomePageProps) => {
    return (
        <div
            className={
                "snap-y snap-mandatory overflow-y-auto overflow-x-hidden"
            }
        >
            <Hero />
            <JobListingsSection />
            <TestimonialsAndNumbersSection />
            <CountriesSection />
            <MailSection />
            <Footer />
        </div>
    );
};
