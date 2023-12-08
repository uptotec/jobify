import classNames from 'classnames';
import styles from './job-info-post-job.module.scss';
import { Input } from '../input/input';

export interface JobInfoPostJobProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const JobInfoPostJob = ({ className }: JobInfoPostJobProps) => {
    return <div className="flex w-full flex-col gap-4 rounded-xl border-2 border-lightBorder px-8 py-4" data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="600">
            <div className="flex items-center justify-between gap-14">
                <p className="text-2xl font-bold">Job information</p>
            </div>
            <div className="flex flex-col gap-4">
                <Input icon="job" placeholder="job title" />
                <Input icon="number" placeholder="open positions" />
                <Input icon="category" placeholder="job category" />
                <Input icon="education" placeholder="education level" />
                <Input icon="salary" placeholder="salary" />
                <Input icon="level" placeholder="career level" />
                <Input icon="location2" placeholder="work location" />
                <Input icon="years" placeholder="years of experiance" />
                <Input icon="list" placeholder="skills" />
                <Input icon="description" placeholder="job description (one item per line)" textArea />
                <Input icon="target" placeholder="job requirments (one item per line)" textArea />

            </div>
        </div>;
};
