import classNames from "classnames";
import styles from "./input.module.scss";
import { RiSearchLine } from "react-icons/ri";
import { RiUserLocationLine } from "react-icons/ri";
import { RiMailLine } from "react-icons/ri";

export interface InputProps {
    className?: string;
    icon: string;
    placeholder?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Input = ({ className, icon, placeholder }: InputProps) => {
    const icons: { [key: string]: JSX.Element } = {
        search: <RiSearchLine size={24} color="#717171" />,
        location: <RiUserLocationLine size={24} color="#717171" />,
        mail: <RiMailLine size={24} color="#717171" />,
    };

    return (
        <div className={classNames(styles.root, className)}>
            <div className="flex items-center gap-2">
                {icons[icon]}
                <input
                    className="h-8 p-2 transition-all focus:border-b-2 focus:border-primary focus:outline-none"
                    placeholder={placeholder}
                />
            </div>
            <div />
        </div>
    );
};
