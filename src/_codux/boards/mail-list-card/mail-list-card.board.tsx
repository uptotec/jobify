import { createBoard } from '@wixc3/react-board';
import { MailListCard } from '../../../components/mail-list-card/mail-list-card';

export default createBoard({
    name: 'MailListCard',
    Board: () => <MailListCard />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080
    }
});
