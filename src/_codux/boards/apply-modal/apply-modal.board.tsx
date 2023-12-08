import { createBoard } from '@wixc3/react-board';
import { ApplyModal } from '../../../components/apply-modal/apply-modal';

export default createBoard({
    name: 'ApplyModal',
    Board: () => <ApplyModal title="software engineer" companyName="BUE" />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 800,
        canvasHeight: 700,
        windowWidth: 1920,
        windowHeight: 1080,
        windowBackgroundColor: '#000000'
    }
});
