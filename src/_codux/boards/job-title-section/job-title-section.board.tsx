import { createBoard } from '@wixc3/react-board';
import { JobTitleSection } from '../../../components/job-title-section/job-title-section';

export default createBoard({
    name: 'JobTitleSection',
    Board: () => <JobTitleSection />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 800
    }
});
