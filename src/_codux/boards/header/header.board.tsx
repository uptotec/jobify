import { createBoard } from '@wixc3/react-board';
import { Header } from '../../../components/header/header';
import {BrowserRouter} from 'react-router-dom'
export default createBoard({
    name: 'Header',
    Board: () => <>
    <BrowserRouter>
    <Header />
    </BrowserRouter>
    </>,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1080,
        windowHeight: 720
    }
});
