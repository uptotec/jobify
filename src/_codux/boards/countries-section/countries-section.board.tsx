import { createBoard } from '@wixc3/react-board';
import { CountriesSection } from '../../../components/countries-section/countries-section';

export default createBoard({
    name: 'CountriesSection',
    Board: () => <CountriesSection />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080
    }
});
