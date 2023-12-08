import { createBoard } from "@wixc3/react-board";
import { CategoriesSelection } from "../../../components/categories-selection/categories-selection";
import categoryIcon from "../../../assets/category icon.png";

export default createBoard({
    name: "CategoriesSelection",
    Board: () => <CategoriesSelection />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1316,
    },
});
