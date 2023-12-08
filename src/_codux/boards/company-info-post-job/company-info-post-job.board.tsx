import { createBoard } from '@wixc3/react-board';
import { CompanyInfoPostJob } from '../../../components/company-info-post-job/company-info-post-job';

export default createBoard({
    name: 'CompanyInfoPostJob',
    Board: () => <CompanyInfoPostJob />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 700
    }
});
