import { createBoard } from "@wixc3/react-board";
import { JobListingsGrid } from "../../../components/job-listings-grid/job-listings-grid";
import { JobListingCardProps } from "../../../components/job-listing-card/job-listing-card";

export default createBoard({
    name: "JobListingsGrid",
    Board: () => <JobListingsGrid />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 720,
    },
});
