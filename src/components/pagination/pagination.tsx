import classNames from "classnames";
import styles from "./pagination.module.scss";

export interface PaginationProps {
    className?: string;
    // numberOfPages: number;
    // activePage: number;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Pagination = ({ className }: PaginationProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className="flex rounded-md bg-white drop-shadow-md">
                <nav aria-label="Page navigation example">
                    <ul className="list-style-none flex items-center">
                        <li className="rounded-l-md bg-primary p-1">
                            <a
                                className="relative block rounded bg-transparent px-3 py-1.5 text-xl text-white transition-all duration-300 hover:bg-neutral-100"
                                href="#"
                                aria-label="Previous"
                            >
                                <span aria-hidden="true" className="text-white">
                                    &laquo;
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="relative block rounded bg-transparent px-3 py-1.5 text-xl text-darkText transition-all duration-300 hover:bg-neutral-100"
                                href="#"
                            >
                                1
                            </a>
                        </li>
                        <li className="rounded-r-md bg-primary p-1">
                            <a
                                className="relative block rounded bg-transparent px-3 py-1.5 text-xl text-primary transition-all duration-300 hover:bg-neutral-100"
                                href="#"
                                aria-label="Next"
                            >
                                <span aria-hidden="true" className="text-white">
                                    &raquo;
                                </span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};
