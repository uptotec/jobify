import classNames from "classnames";
import styles from "./job-search.module.scss";
import { RiSearchLine } from "react-icons/ri";
import { Input } from "../input/input";
import { Button } from "../button/button";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export interface JobSearchProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const JobSearch = ({ className }: JobSearchProps) => {
    const [location, setLocation] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const navigate = useNavigate();
    let [searchParams] = useSearchParams();

    const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocation(e.target.value);
    };
    const handleJobTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setJobTitle(e.target.value);
    };

    const field = searchParams.get("field");
    const jobSearchTitle = searchParams.get("title");
    const jobSearchLocation = searchParams.get("location");

    useEffect(() => {
        if (jobSearchTitle) {
            setJobTitle(jobSearchTitle);
        }
        if (jobSearchLocation) {
            setLocation(jobSearchLocation);
        }
    }, [jobSearchTitle, jobSearchLocation]);

    const handleSearch = () => {
        navigate(
            `/jobs?${location ? `location=${location}` : ""}&${
                jobTitle ? `title=${jobTitle}` : ""
            } ${field ? `field=${field}` : ""}`,
        );
    };

    return (
        <div className={classNames(styles.root, className)}>
            <div
                className="flex items-center gap-4 rounded-lg bg-white px-4 py-3 drop-shadow-md"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
            >
                <Input
                    icon="search"
                    placeholder="job title..."
                    onChange={handleJobTitleChange}
                />
                |
                <Input
                    icon="location"
                    placeholder="select location"
                    onChange={handleLocationChange}
                />
                <Button text="search" onClick={handleSearch} />
            </div>
        </div>
    );
};
