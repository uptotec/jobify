import classNames from "classnames";
import styles from "./mail-section.module.scss";
import { MailListCard } from "../mail-list-card/mail-list-card";

export interface MailSectionProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const MailSection = ({ className }: MailSectionProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className="flex w-screen snap-start items-center justify-center gap-14 bg-background px-32 py-32">
                <MailListCard />
            </div>
        </div>
    );
};
