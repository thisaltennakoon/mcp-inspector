import {ThemeProvider} from '@material-ui/core/styles';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import useChoreoTheme from './theme/Theme.ts';
import { MCPInspectorThemeCustomization } from './theme/ThemeCustomization';
import Inspector, { InspectorProps } from '../features/inspector/Inspector';

// Create a scoped class name generator to avoid conflicts
const generateClassName = createGenerateClassName({
    productionPrefix: 'mcp-inspector',
    seed: 'mcp'
});

export interface MCPInspectorProps extends InspectorProps {
    /** Theme customization options for the library */
    themeCustomization?: MCPInspectorThemeCustomization;
    /** Whether to use dark mode. If not provided, will use system preference */
    darkMode?: boolean;
}

function MCPInspector({ themeCustomization, darkMode, ...props }: MCPInspectorProps) {
    const theme = useChoreoTheme(darkMode, themeCustomization);
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
