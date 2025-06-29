import {ThemeProvider} from '@material-ui/core/styles';
import useChoreoTheme from './theme/Theme.ts';
import {IntlProvider} from 'react-intl';
import Inspector from '../features/inspector/Inspector';
import {ChoreoSnackbarProvider} from "../features/inspector/components/ui/Snackbar/SnackbarProvider";

function MCPInspector() {
    const theme = useChoreoTheme(false);
    return (
        <>
            <ThemeProvider theme={theme}>
                <IntlProvider locale="en" messages={{}}>
                    <ChoreoSnackbarProvider>
                        <Inspector/>
                    </ChoreoSnackbarProvider>
                </IntlProvider>
            </ThemeProvider>
        </>
    )
}

export default MCPInspector
