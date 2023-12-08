import classNames from "classnames";
import styles from "./trusted-by.module.scss";
import netflixLogo from "../../assets/netflix.png";
import googleLogo from "../../assets/google.png";
import facebookLogo from "../../assets/facebook.png";
import twitterLogo from "../../assets/twitter.png";
import appleLogo from "../../assets/apple.png";

export interface TrustedByProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TrustedBy = ({ className }: TrustedByProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div
                className="flex flex-col items-center gap-4"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="600"
            >
                <p className="font-black">Trusted by</p>
                <div className="flex items-center gap-16">
                    <img
                        src={netflixLogo}
                        alt=""
                        width={38}
                        className="w-30 h-20 object-contain"
                    />
                    <img
                        src={googleLogo}
                        alt=""
                        width={100}
                        className="w-30 h-20 object-contain"
                    />
                    <img
                        src={appleLogo}
                        alt=""
                        className="w-30 h-20 object-contain"
                        width={35}
                        height={10}
                    />
                    <img
                        src={facebookLogo}
                        alt=""
                        width={100}
                        className="w-30 h-20 object-contain"
                    />
                    <img
                        src={twitterLogo}
                        alt=""
                        width={100}
                        className="w-30 h-20 object-contain"
                    />
                </div>
            </div>
        </div>
    );
};
