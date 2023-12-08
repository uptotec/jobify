import { createBoard } from '@wixc3/react-board';
import { Testimonial1 } from '../../../components/testimonial-1/testimonial-1';

export default createBoard({
    name: 'Testimonial1',
    Board: () => <Testimonial1 type="saul"/>,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920
    }
});
