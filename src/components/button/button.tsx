import classNames from "classnames";
import styles from "./button.module.scss";

export interface ButtonProps {
    className?: string;
    text: string;
    onClick?: () => void;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Button = ({ className, text, onClick }: ButtonProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <button
                onClick={onClick}
                className="w-full rounded-lg bg-primary px-6 py-2 text-lg font-normal text-white transition-all hover:bg-primaryDark"
            >
                {text}
            </button>
        </div>
    );
};
