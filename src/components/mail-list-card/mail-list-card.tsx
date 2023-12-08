import classNames from "classnames";
import styles from "./mail-list-card.module.scss";
import { Input } from "../input/input";
import { Button } from "../button/button";

export interface MailListCardProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const MailListCard = ({ className }: MailListCardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div
                className="flex flex-col items-center gap-14 rounded-3xl bg-primary px-24 py-48"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <p className="text-center text-4xl font-bold text-white">
                    Subscribe to get updates about Jobify and the world of work
                </p>
                <div className="flex w-fit items-center gap-4 rounded-lg bg-white px-4 py-2 drop-shadow-md">
                    <Input icon="mail" placeholder="Enter your email..." />
                    <Button text="subscribe" />
                </div>
            </div>
        </div>
    );
};
