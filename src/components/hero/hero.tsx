import classNames from "classnames";
import styles from "./hero.module.scss";
import { Header } from "../../components/header/header";
import { HeroTitle } from "../../components/hero-title/hero-title";
import { JobSearch } from "../../components/job-search/job-search";
import { TrustedBy } from "../../components/trusted-by/trusted-by";

export interface HeroProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Hero = ({ className }: HeroProps) => {
    return (
        <div className="flex h-screen w-full snap-start flex-col items-center justify-between bg-gradient-to-br from-white to-background pb-6">
            <Header />
            <div className="flex flex-col gap-8">
                <HeroTitle />
                <JobSearch />
            </div>
            <TrustedBy />
        </div>
    );
};
