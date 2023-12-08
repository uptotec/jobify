import { createBoard } from "@wixc3/react-board";
import {
    CountryCard,
    CountryCardProps,
} from "../../../components/country-card/country-card";

const country: CountryCardProps = {
    name: "UK",
    image: "london",
    companies: "200",
    jobs: "500",
};

export default createBoard({
    name: "CountryCard",
    Board: () => <CountryCard {...country} />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
        canvasWidth: 400,
        canvasHeight: 400,
    },
});
