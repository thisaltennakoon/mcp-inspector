import {ThemeProvider} from '@material-ui/core/styles';
import useChoreoTheme from './theme/Theme.ts';
import Inspector, { InspectorProps } from '../features/inspector/Inspector';

function MCPInspector(props: InspectorProps) {
    const theme = useChoreoTheme(false);
    return (
        <>
            <ThemeProvider theme={theme}>
                <Inspector {...props}/>
            </ThemeProvider>
        </>
    )
}

export default MCPInspector
