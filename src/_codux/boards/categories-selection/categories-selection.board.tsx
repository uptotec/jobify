import { createBoard } from "@wixc3/react-board";
import { CategoriesSelection } from "../../../components/categories-selection/categories-selection";
import categoryIcon from "../../../assets/category icon.png";

const categoriesList = [
    { id: 1, image: categoryIcon, name: "education", active: true },
    { id: 2, image: categoryIcon, name: "education", active: false },
    { id: 3, image: categoryIcon, name: "education", active: false },
    { id: 4, image: categoryIcon, name: "education", active: false },
    { id: 5, image: categoryIcon, name: "education", active: false },
    { id: 6, image: categoryIcon, name: "education", active: false },
    { id: 7, image: categoryIcon, name: "education", active: false },
    { id: 8, image: categoryIcon, name: "education", active: false },
];

export default createBoard({
    name: "CategoriesSelection",
    Board: () => <CategoriesSelection categoriesList={categoriesList} />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1316,
    },
});
