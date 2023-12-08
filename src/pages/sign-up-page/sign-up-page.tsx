import classNames from "classnames";
import styles from "./sign-up-page.module.scss";
import backGround from "../../assets/background.svg";
import { Header } from "../../components/header/header";
import { SignupTimeline } from "../../components/signup-timeline/signup-timeline";
import { SignupForm } from "../../components/signup-form/signup-form";

export interface SignUpPageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const SignUpPage = ({ className }: SignUpPageProps) => {
    return (
        <div
            className="flex h-screen w-screen flex-col rounded-2xl bg-cover bg-center"
            style={{
                backgroundImage: `url(${backGround})`,
                height: "100vh",
                width: "100wh",
            }}
        >
            <Header />
            <div className="flex h-full w-full px-24">
                <div className="flex w-1/2 justify-center pt-28">
                    <SignupTimeline />
                </div>
                <div className="w-1/2 px-52 pt-12">
                    <SignupForm />
                </div>
            </div>
        </div>
    );
};
