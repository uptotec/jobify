import classNames from "classnames";
import styles from "./header.module.scss";
import jobifyLogo from "../../assets/jobify logo.svg";

export interface HeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Header = ({ className }: HeaderProps) => {
    const currentPath = window.location.pathname;
    return (
        <div className={classNames(styles.root, className)}>
            <div
                className={
                    "flex w-screen items-center justify-between px-24 py-10"
                }
            >
                <img
                    src={jobifyLogo}
                    alt=""
                    className="w-20"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                />
                <div className="flex gap-8">
                    <a
                        href="/"
                        className={`${
                            currentPath === "/" && "text-primary underline"
                        } underline-offset-4 hover:text-primary`}
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                    >
                        Home
                    </a>
                    <a
                        href="/jobs"
                        className={`${
                            currentPath === "/jobs" && "text-primary underline"
                        } underline-offset-4 hover:text-primary`}
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        data-aos-delay="300"
                    >
                        Find a job
                    </a>
                    <a
                        href="/post-job"
                        className={`${
                            currentPath === "/post-job" &&
                            "text-primary underline"
                        } underline-offset-4 hover:text-primary`}
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        data-aos-delay="400"
                    >
                        Post a job
                    </a>
                </div>
                <div className={"flex items-center gap-4"}>
                    <a
                        href="/"
                        className={"transition-all hover:text-primary"}
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        data-aos-delay="600"
                    >
                        Log in
                    </a>
                    <button
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        data-aos-delay="700"
                        className={
                            "rounded-md border border-primary px-4 py-2 text-primary transition-all hover:bg-primary hover:text-white"
                        }
                    >
                        Sign up
                    </button>
                </div>
            </div>
        </div>
    );
};
