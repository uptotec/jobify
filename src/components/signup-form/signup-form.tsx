import classNames from "classnames";
import styles from "./signup-form.module.scss";
import jobifyLogo from "../../assets/jobify logo.svg";
import { Input } from "../input/input";
import { Button } from "../button/button";

export interface SignupFormProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const SignupForm = ({ className }: SignupFormProps) => {
    return (
        <div className="flex flex-col items-center gap-14">
            <img
                src={jobifyLogo}
                alt=""
                className="h-16"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="300"
            />
            <p
                className="w-full max-w-lg text-6xl font-bold"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
            >
                find the job for you now.
            </p>
            <div
                className="flex w-full flex-col gap-4"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="600"
            >
                <div className="w-full rounded-md bg-white px-4 py-2">
                    <Input icon="user" placeholder="Enter your Name" />
                </div>
                <div className="w-full rounded-md bg-white px-4 py-2">
                    <Input icon="mail" placeholder="Enter your Email" />
                </div>
                <div className="w-full rounded-md bg-white px-4 py-2">
                    <Input icon="password" placeholder="Enter your password" />
                </div>
                <div className="w-full rounded-md bg-white px-4 py-2">
                    <Input
                        icon="password"
                        placeholder="Enter your password again"
                    />
                </div>
            </div>
            <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="900"
                className="w-full"
            >
                <Button text="Sign in" className="w-full" />
            </div>
        </div>
    );
};
