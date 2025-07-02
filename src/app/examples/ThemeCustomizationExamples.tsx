import React from 'react';
import MCPInspector, { MCPInspectorProps } from '../MCPInspector';
import { MCPInspectorThemeCustomization, themePresets } from '../theme/ThemeCustomization';

/**
 * Example: Basic Font Family Customization
 *
 * This shows how to change the font family across the entire library
 */
export function BasicFontCustomizationExample(props: Omit<MCPInspectorProps, 'themeCustomization'>) {
  const customTheme: MCPInspectorThemeCustomization = {
    typography: {
      fontFamily: '"Inter", "Roboto", "Arial", sans-serif',
    },
  };

  return <MCPInspector {...props} themeCustomization={customTheme} />;
}

/**
 * Example: Comprehensive Color and Typography Customization
 *
 * This shows how to customize colors, typography, and component-specific styles
 */
export function ComprehensiveCustomizationExample(props: Omit<MCPInspectorProps, 'themeCustomization'>) {
  const customTheme: MCPInspectorThemeCustomization = {
    typography: {
      fontFamily: '"Poppins", "Inter", "Roboto", sans-serif',
      h1: {
        fontWeight: 700,
        letterSpacing: '-0.02em',
      },
      body1: {
        fontSize: '14px',
        lineHeight: 1.6,
      },
    },
    palette: {
      primary: {
        main: '#6366f1', // Indigo
        light: '#818cf8',
        dark: '#4f46e5',
      },
      secondary: {
        main: '#8b5cf6', // Purple
        light: '#a78bfa',
        dark: '#7c3aed',
      },
      success: {
        main: '#10b981', // Emerald
        light: '#34d399',
        dark: '#059669',
      },
    },
    shape: {
      borderRadius: 8,
    },
    custom: {
      fontSizes: {
        tiny: 10,
        small: 12,
        medium: 14,
        large: 16,
      },
      colors: {
        accent: '#f59e0b', // Amber
        muted: '#6b7280', // Gray
      },
      components: {
        button: {
          borderRadius: 6,
          fontWeight: 600,
        },
        input: {
          borderRadius: 4,
        },
        card: {
          borderRadius: 12,
          shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  };

  return <MCPInspector {...props} themeCustomization={customTheme} />;
}

/**
 * Example: Using Predefined Theme Presets
 *
 * This shows how to use one of the predefined theme presets
 */
export function ModernThemeExample(props: Omit<MCPInspectorProps, 'themeCustomization'>) {
  return <MCPInspector {...props} themeCustomization={themePresets.modern} />;
}

export function CompactThemeExample(props: Omit<MCPInspectorProps, 'themeCustomization'>) {
  return <MCPInspector {...props} themeCustomization={themePresets.compact} />;
}

export function RoundedThemeExample(props: Omit<MCPInspectorProps, 'themeCustomization'>) {
  return <MCPInspector {...props} themeCustomization={themePresets.rounded} />;
}

/**
 * Example: Advanced Customization with Material-UI Overrides
 *
 * This shows how to use Material-UI's override system for fine-grained control
 */
export function AdvancedCustomizationExample(props: Omit<MCPInspectorProps, 'themeCustomization'>) {
  const customTheme: MCPInspectorThemeCustomization = {
    typography: {
      fontFamily: '"JetBrains Mono", "Fira Code", "Consolas", monospace',
    },
    overrides: {
      // Override specific Material-UI components
      MuiButton: {
        root: {
          textTransform: 'none',
          borderRadius: '6px',
          fontWeight: 500,
          '&:hover': {
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.12)',
          },
        },
        contained: {
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
      },
      MuiTextField: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
            '& fieldset': {
              borderColor: '#e5e7eb',
            },
            '&:hover fieldset': {
              borderColor: '#d1d5db',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#6366f1',
              borderWidth: '2px',
            },
          },
        },
      },
      MuiPaper: {
        root: {
          borderRadius: '12px',
        },
        elevation1: {
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        },
      },
    },
    custom: {
      components: {
        button: {
          borderRadius: 6,
          fontWeight: 500,
        },
      },
    },
  };

  return <MCPInspector {...props} themeCustomization={customTheme} />;
}

/**
 * Example: Corporate Branding Theme
 *
 * This shows how a company might customize the library to match their brand
 */
export function CorporateBrandingExample(props: Omit<MCPInspectorProps, 'themeCustomization'>) {
  const corporateTheme: MCPInspectorThemeCustomization = {
    typography: {
      fontFamily: '"Open Sans", "Helvetica Neue", "Arial", sans-serif',
      h1: { fontWeight: 700 },
      h2: { fontWeight: 600 },
      h3: { fontWeight: 600 },
      h4: { fontWeight: 500 },
    },
    palette: {
      primary: {
        main: '#0066cc', // Corporate blue
        light: '#3385d6',
        dark: '#004499',
      },
      secondary: {
        main: '#666666', // Corporate gray
        light: '#888888',
        dark: '#444444',
      },
    },
    shape: {
      borderRadius: 4, // Conservative rounded corners
    },
    custom: {
      colors: {
        brandAccent: '#ff6b35', // Corporate orange accent
        brandMuted: '#f5f5f5',
      },
      components: {
        button: {
          borderRadius: 4,
          fontWeight: 500,
        },
        card: {
          borderRadius: 8,
          shadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  };

  return <MCPInspector {...props} themeCustomization={corporateTheme} />;
}

/**
 * Example: Dark Mode with Custom Colors
 *
 * This shows how to create a dark theme variant
 */
export function DarkModeCustomExample(props: Omit<MCPInspectorProps, 'themeCustomization' | 'darkMode'>) {
  const darkCustomTheme: MCPInspectorThemeCustomization = {
    palette: {
      primary: {
        main: '#60a5fa', // Lighter blue for dark mode
        light: '#93c5fd',
        dark: '#3b82f6',
      },
      secondary: {
        main: '#a78bfa', // Purple accent
        light: '#c4b5fd',
        dark: '#8b5cf6',
      },
      background: {
        default: '#0f172a', // Dark slate
        paper: '#1e293b',
      },
      text: {
        primary: '#f8fafc',
        secondary: '#cbd5e1',
      },
    },
    custom: {
      colors: {
        accent: '#fbbf24', // Amber accent for dark mode
        surface: '#334155',
        border: '#475569',
      },
    },
  };

  return <MCPInspector {...props} darkMode={true} themeCustomization={darkCustomTheme} />;
}
