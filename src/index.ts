// import HelloWorld from './HelloWorld';
import MCPInspector from './app/MCPInspector';

// Export theme-related utilities
export type { 
  MCPInspectorThemeCustomization
} from './app/theme/ThemeCustomization';

export { 
  themePresets, 
  mergeThemeCustomizations 
} from './app/theme/ThemeCustomization';

export { useThemeCustomization, withThemeCustomization } from './app/theme/useThemeCustomization';

// Export the main component types
export type { MCPInspectorProps } from './app/MCPInspector';
export type { InspectorProps } from './features/inspector/Inspector';

// Named export
export { MCPInspector };
// Default export (must be the component itself, not an object)
export default MCPInspector;
