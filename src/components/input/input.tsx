import classNames from "classnames";
import styles from "./input.module.scss";
import { RiSearchLine } from "react-icons/ri";
import { RiUserLocationLine } from "react-icons/ri";
import { RiMailLine } from "react-icons/ri";
import { FiLock } from "react-icons/fi";
import { RiUserLine } from "react-icons/ri";
import { RiBuilding4Line } from "react-icons/ri";
import { FaUserTie } from "react-icons/fa";
import { MdNumbers } from "react-icons/md";
import { MdOutlineCategory } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa6";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaStairs } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { MdOutlineChecklist } from "react-icons/md";
import { MdDescription } from "react-icons/md";
import { SiTarget } from "react-icons/si";

export interface InputProps {
    className?: string;
    icon: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    textArea?: boolean;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Input = ({
    className,
    icon,
    placeholder,
    onChange,
    value,
    textArea,
}: InputProps) => {
    const icons: { [key: string]: JSX.Element } = {
        search: <RiSearchLine size={24} color="#717171" />,
        location: <RiUserLocationLine size={24} color="#717171" />,
        mail: <RiMailLine size={24} color="#717171" />,
        password: <FiLock size={24} color="#717171" />,
        user: <RiUserLine size={24} color="#717171" />,
        company: <RiBuilding4Line size={24} color="#717171" />,
        job: <FaUserTie size={24} color="#717171" />,
        number: <MdNumbers size={24} color="#717171" />,
        category: <MdOutlineCategory size={24} color="#717171" />,
        education: <FaUserGraduate size={24} color="#717171" />,
        salary: <FaMoneyBillAlt size={24} color="#717171" />,
        level: <FaStairs size={24} color="#717171" />,
        location2: <IoLocationOutline size={24} color="#717171" />,
        years: <SlCalender size={24} color="#717171" />,
        list: <MdOutlineChecklist size={24} color="#717171" />,
        description: <MdDescription size={24} color="#717171" />,
        target: <SiTarget size={24} color="#717171" />,
    };

    return (
        <div className={classNames(styles.root, className)}>
            <div className={`flex ${!textArea && "items-center"} gap-2`}>
                {icons[icon]}
                {!textArea && (
                    <input
                        className="h-8 p-2 transition-all focus:border-b-2 focus:border-primary focus:outline-none"
                        placeholder={placeholder}
                        onChange={onChange}
                        value={value}
                        type={
                            icon === "mail"
                                ? "email"
                                : icon === "password"
                                  ? "password"
                                  : "text"
                        }
                    />
                )}
                {textArea && (
                    <textarea
                        className="h-20 w-96 p-2 transition-all focus:border-b-2 focus:border-primary focus:outline-none"
                        placeholder={placeholder}
                        value={value}
                        rows={5}
                    />
                )}
            </div>
            <div />
        </div>
    );
};
