import classNames from "classnames";
import styles from "./job-search.module.scss";
import { RiSearchLine } from "react-icons/ri";
import { Input } from "../input/input";
import { Button } from "../button/button";

export interface JobSearchProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const JobSearch = ({ className }: JobSearchProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div
                className="flex items-center gap-4 rounded-lg bg-white px-4 py-3 drop-shadow-md"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
            >
                <Input icon="search" placeholder="job title..." />|
                <Input icon="location" placeholder="select location" />
                <Button text="search" />
            </div>
        </div>
    );
};
