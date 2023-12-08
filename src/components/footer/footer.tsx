import classNames from "classnames";
import styles from "./footer.module.scss";
import jobifyLogo from "../../assets/jobify logo.svg";

export interface FooterProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Footer = ({ className }: FooterProps) => {
    const currentPath = window.location.pathname;

    return (
        <div className={classNames(styles.root, className)}>
            <div
                className={
                    "flex w-screen items-center justify-between px-24 py-8"
                }
            >
                <img src={jobifyLogo} alt="" className="w-20" />
                <div className="flex gap-8">
                    <a
                        href="/"
                        className={`${
                            currentPath === "/" && "text-primary underline"
                        } underline-offset-4 hover:text-primary`}
                    >
                        Home
                    </a>
                    <a
                        href="/jobs"
                        className={`${
                            currentPath === "/jobs" && "text-primary underline"
                        } underline-offset-4 hover:text-primary`}
                    >
                        Find a job
                    </a>
                    <a
                        href="/post-job"
                        className={`${
                            currentPath === "/post-job" &&
                            "text-primary underline"
                        } underline-offset-4 hover:text-primary`}
                    >
                        Post a job
                    </a>
                </div>
            </div>
            <div className="flex justify-center py-4 text-sm text-lightText">
                © copyrights all rights reserved 2023.
            </div>
        </div>
    );
};
