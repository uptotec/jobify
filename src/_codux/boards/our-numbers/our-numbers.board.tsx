import { createBoard } from '@wixc3/react-board';
import { OurNumbers } from '../../../components/our-numbers/our-numbers';

export default createBoard({
    name: 'OurNumbers',
    Board: () => <OurNumbers />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080
    }
});
