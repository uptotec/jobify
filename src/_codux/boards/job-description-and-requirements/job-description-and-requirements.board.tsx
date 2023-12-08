import { createBoard } from '@wixc3/react-board';
import { JobDescriptionAndRequirements } from '../../../components/job-description-and-requirements/job-description-and-requirements';

const content = [
    "0 To 3 Years",
    "Entry Level",
    "Bachelor's Degree",
    "6000 To 11000 EGP",
    "Education"
]

export default createBoard({
    name: 'JobDescriptionAndRequirements',
    Board: () => <JobDescriptionAndRequirements type="description" content={content} />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 800,
        windowWidth: 1024
    }
});
