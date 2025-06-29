import {ThemeProvider} from '@material-ui/core/styles';
import useChoreoTheme from './theme/Theme.ts';
import Inspector from '../features/inspector/Inspector';

function MCPInspector() {
    const theme = useChoreoTheme(false);
    return (
        <>
            <ThemeProvider theme={theme}>
                <Inspector/>
            </ThemeProvider>
        </>
    )
}

export default MCPInspector
