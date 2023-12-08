import { createBoard } from '@wixc3/react-board';
import { MailSection } from '../../../components/mail-section/mail-section';

export default createBoard({
    name: 'MailSection',
    Board: () => <MailSection />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080
    }
});
