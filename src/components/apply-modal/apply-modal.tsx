import classNames from "classnames";
import styles from "./apply-modal.module.scss";
import { Button } from "../button/button";
import { useState } from "react";
import { toast } from "react-toastify";

export interface ApplyModalProps {
    className?: string;
    title: string;
    companyName: string;
    isOpened: boolean;
    onClose: () => void;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ApplyModal = ({
    className,
    companyName,
    title,
    isOpened,
    onClose,
}: ApplyModalProps) => {
    const [fileName, setFileName] = useState("");
    const notify = () => toast.success("your application has been sent!");
    const notifyError = () => toast.error("select your CV first!");

    if (!isOpened) return null;

    const handleSubmission = () => {
        if (!fileName) {
            notifyError();
            return;
        }
        notify();
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex min-h-screen items-center justify-center overflow-y-hidden">
            <div
                onClick={onClose}
                className="fixed inset-0 z-10 bg-black/70 backdrop-blur-sm"
            ></div>
            <div className="z-20 flex w-1/2 flex-col items-center justify-center gap-4 rounded-lg bg-white px-8 py-4">
                <p className="text-lg font-semibold">
                    Send your CV to {companyName} for position {title}
                </p>
                <label
                    htmlFor="dropzone-file"
                    className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100"
                >
                    <div className="flex flex-col items-center justify-center pb-6 pt-5">
                        <svg
                            className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">
                                Click to upload
                            </span>{" "}
                            or drag and drop your CV
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            PDF format only, max size 5MB
                        </p>
                    </div>
                    <input
                        id="dropzone-file"
                        type="file"
                        accept="application/pdf"
                        className="hidden"
                        onChange={(e) => {
                            const files = e.target.files!;
                            setFileName(files[0].name || "");
                        }}
                    />
                </label>
                {fileName && <p>{fileName}</p>}
                <Button text="apply" onClick={handleSubmission} />
            </div>
        </div>
    );
};
