import { createBoard } from '@wixc3/react-board';
import { TestimonialsAndNumbersSection } from '../../../components/testimonials-and-numbers-section/testimonials-and-numbers-section';

export default createBoard({
    name: 'TestimonialsAndNumbersSection',
    Board: () => <TestimonialsAndNumbersSection />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080
    }
});
