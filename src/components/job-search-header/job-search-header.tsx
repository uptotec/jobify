import classNames from 'classnames';
import styles from './job-search-header.module.scss';
import { Header } from '../header/header';
import { SectionTitle } from '../section-title/section-title';
import { JobSearch } from '../job-search/job-search';
import categoryIcon from '../../assets/category icon.png';
import { CategoriesSelection } from '../categories-selection/categories-selection';

export interface JobSearchHeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */





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
export const JobSearchHeader = ({ className }: JobSearchHeaderProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className="flex flex-col items-center gap-14 justify-between pb-10 bg-gradient-to-br from-white to-background">
            <Header />
            <SectionTitle align="center" title="Jobs you maybe interested in" subTitle="there is thousands of jobs. just select the job and apply"  />
            <JobSearch />
            <CategoriesSelection categoriesList={categoriesList} />
        </div>
    </div>;
};
