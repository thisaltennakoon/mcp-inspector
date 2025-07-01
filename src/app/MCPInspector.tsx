import {ThemeProvider} from '@material-ui/core/styles';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import useChoreoTheme from './theme/Theme.ts';
import Inspector, { InspectorProps } from '../features/inspector/Inspector';

// Create a scoped class name generator to avoid conflicts
const generateClassName = createGenerateClassName({
    productionPrefix: 'mcp-inspector',
    seed: 'mcp'
});

function MCPInspector(props: InspectorProps) {
    const theme = useChoreoTheme(false);
    return (
        <div className="mcp-inspector-root">
            <StylesProvider generateClassName={generateClassName}>
                <ThemeProvider theme={theme}>
                    <Inspector {...props}/>
                </ThemeProvider>
            </StylesProvider>
        </div>
    )
}

export default MCPInspector
