import { createBoard } from '@wixc3/react-board';
import { CountriesGrid } from '../../../components/countries-grid/countries-grid';

export default createBoard({
    name: 'CountriesGrid',
    Board: () => <CountriesGrid />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
        canvasWidth: 1920,
        canvasHeight: 1080,
    }
});
