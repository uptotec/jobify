import classNames from "classnames";
import styles from "./login-form.module.scss";
import jobifyLogo from "../../assets/jobify logo.svg";
import { Input } from "../input/input";
import { Button } from "../button/button";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export interface LoginFormProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const LoginForm = ({ className }: LoginFormProps) => {
    const notify = () => toast.success("Signed in successfully!");
    const notifyError = () => toast.error("enter valid email and password!");

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        if (email === "mahmoud@ashraf.com" && password === "12345678") {
            notify();
            navigate("/");
            return;
        }
        setEmail("");
        setPassword("");
        notifyError();
    };

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
                className="w-full text-6xl font-bold"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
            >
                Hello,
                <br />
                Welcome Back
            </p>
            <div
                className="flex w-full flex-col gap-4"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="600"
            >
                <div className="w-full rounded-md bg-white px-4 py-2">
                    <Input
                        icon="mail"
                        placeholder="Enter your Email..."
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div className="w-full rounded-md bg-white px-4 py-2">
                    <Input
                        icon="password"
                        placeholder="Enter your password..."
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
            </div>
            <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="900"
                className="w-full"
            >
                <Button
                    text="Sign in"
                    className="w-full"
                    onClick={handleSubmit}
                />
            </div>
        </div>
    );
};
