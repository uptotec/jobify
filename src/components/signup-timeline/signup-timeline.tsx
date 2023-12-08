import classNames from "classnames";
import styles from "./signup-timeline.module.scss";

export interface SignupTimelineProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const SignupTimeline = ({ className }: SignupTimelineProps) => {
    return (
        <section className="">
            <div className="container mx-auto max-w-5xl">
                <div className="mx-4 grid gap-4 sm:grid-cols-12">
                    <div className="col-span-12 sm:col-span-3">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="300"
                            className="mb-14 text-center before:mx-auto before:mb-5 before:block before:h-3 before:w-24 before:rounded-md before:dark:bg-primary sm:text-left sm:before:mx-0"
                        >
                            <h3 className="text-3xl font-semibold">
                                Steps to success
                            </h3>
                            <span className="tracki text-sm font-bold uppercase dark:text-gray-400">
                                how to use Jobify
                            </span>
                        </div>
                    </div>
                    <div className="relative col-span-12 space-y-6 px-4 sm:col-span-9">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="600"
                            className="relative col-span-12 space-y-12 px-4 before:dark:bg-gray-700 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:-left-3 sm:before:bottom-0 sm:before:top-2 sm:before:w-0.5"
                        >
                            <div
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                data-aos-delay="600"
                                className="flex flex-col before:dark:bg-primary sm:relative sm:before:absolute sm:before:left-[-35px] sm:before:top-2 sm:before:z-[1] sm:before:h-4 sm:before:w-4 sm:before:rounded-full"
                            >
                                <h3 className="tracki text-xl font-semibold">
                                    1. create an account
                                </h3>
                                <p className="mt-3">
                                    your at this step now just fill the form to
                                    create an account.
                                </p>
                            </div>
                            <div
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                data-aos-delay="800"
                                className="flex flex-col before:dark:bg-primary sm:relative sm:before:absolute sm:before:left-[-35px] sm:before:top-2 sm:before:z-[1] sm:before:h-4 sm:before:w-4 sm:before:rounded-full"
                            >
                                <h3 className="tracki text-xl font-semibold">
                                    2. search for the job for you
                                </h3>
                                <p className="mt-3">
                                    search for the job by title, company or
                                    location.
                                </p>
                            </div>
                            <div
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                data-aos-delay="1000"
                                className="flex flex-col before:dark:bg-primary sm:relative sm:before:absolute sm:before:left-[-35px] sm:before:top-2 sm:before:z-[1] sm:before:h-4 sm:before:w-4 sm:before:rounded-full"
                            >
                                <h3 className="tracki text-xl font-semibold">
                                    3. Apply by uploading your CV
                                </h3>
                                <p className="mt-3">
                                    click apply on the job that you want and
                                    upload your CV.
                                </p>
                            </div>
                            <div
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                data-aos-delay="1200"
                                className="flex flex-col before:dark:bg-primary sm:relative sm:before:absolute sm:before:left-[-35px] sm:before:top-2 sm:before:z-[1] sm:before:h-4 sm:before:w-4 sm:before:rounded-full"
                            >
                                <h3 className="tracki text-xl font-semibold">
                                    4. wait for a status Email
                                </h3>
                                <p className="mt-3">
                                    the company will contact you on your email
                                    to update your status.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
