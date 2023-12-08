import classNames from "classnames";
import styles from "./header.module.scss";
import jobifyLogo from "../../assets/jobify logo.svg";
import { useNavigate } from "react-router-dom";

export interface HeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Header = ({ className }: HeaderProps) => {
    const currentPath = window.location.pathname;
    const navigate = useNavigate();
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
                    <button
                        onClick={() => navigate("/")}
                        className={`${
                            currentPath === "/" && "text-primary underline"
                        } underline-offset-4 hover:text-primary`}
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                    >
                        Home
                    </button>
                    <a
                        onClick={() => navigate("/jobs")}
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
                        onClick={() => navigate("/post-job")}
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
                    <button
                        onClick={() => navigate("/login")}
                        className={`${
                            currentPath === "/login" && "text-primary underline"
                        } underline-offset-4 hover:text-primary`}
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        data-aos-delay="600"
                    >
                        Log in
                    </button>
                    <button
                        onClick={() => navigate("/signup")}
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
