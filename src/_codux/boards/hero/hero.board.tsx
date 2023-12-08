import { createBoard } from '@wixc3/react-board';
import { Hero } from '../../../components/hero/hero';

export default createBoard({
    name: 'Hero',
    Board: () => <Hero />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1080,
        windowHeight: 720,
        canvasWidth: 1078
    }
});
