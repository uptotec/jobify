import { createBoard } from "@wixc3/react-board";
import { JobListingCard } from "../../../components/job-listing-card/job-listing-card";

const job = {
    companyName: "Bue",
    timePosted: "3 days ago",
    jobTitle: "Computer Engineering Phd Doctor",
    jobDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    jobCategory: "education",
    salary: "E£1.25/Year",
};

export default createBoard({
    name: "JobListingCard",
    Board: () => <JobListingCard {...job} />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 946,
        canvasHeight: 56,
    },
});
