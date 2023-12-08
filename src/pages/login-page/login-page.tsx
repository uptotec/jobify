import classNames from "classnames";
import styles from "./login-page.module.scss";
import backGround from "../../assets/background.svg";
import { Header } from "../../components/header/header";
import { LoginForm } from "../../components/login-form/login-form";
import jobSearchImage from "../../assets/job search.svg";

export interface LoginPageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const LoginPage = ({ className }: LoginPageProps) => {
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
                    <img
                        src={jobSearchImage}
                        alt=""
                        className="h-[75%] w-[75%]"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="300"
                    />
                </div>
                <div className="w-1/2 px-52 pt-28">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
};
