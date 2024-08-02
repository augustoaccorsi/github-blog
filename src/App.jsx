import { ThemeProvider } from 'styled-components';
import { GlobalStype } from './styles/global';
import { defaultTheme } from './styles/themes/default';
import Router from './components/Router';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStype />
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
