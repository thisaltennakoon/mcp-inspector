import {ThemeProvider} from '@material-ui/core/styles';
import useChoreoTheme from './theme/Theme.ts';
import Inspector from '../features/inspector/Inspector';
import {ChoreoSnackbarProvider} from "../features/inspector/components/ui/Snackbar/SnackbarProvider";

function MCPInspector() {
    const theme = useChoreoTheme(false);
    return (
        <>
            <ThemeProvider theme={theme}>
                <ChoreoSnackbarProvider>
                    <Inspector/>
                </ChoreoSnackbarProvider>
            </ThemeProvider>
        </>
    )
}

export default MCPInspector
