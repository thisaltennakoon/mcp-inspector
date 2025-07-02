# Theme Customization Guide

The MCP Inspector component library provides a flexible and powerful theming system that allows you to customize the appearance of components while maintaining style isolation from your parent application.

## Quick Start

### Basic Font Family Customization

```tsx
import MCPInspector from 'mcp-inspector';

function App() {
  const customTheme = {
    typography: {
      fontFamily: '"Inter", "Roboto", "Arial", sans-serif',
    },
  };

  return (
    <MCPInspector 
      url="your-mcp-url"
      themeCustomization={customTheme}
    />
  );
}
```

### Using Predefined Presets

```tsx
import MCPInspector from 'mcp-inspector';
import { themePresets } from 'mcp-inspector/theme';

function App() {
  return (
    <MCPInspector 
      url="your-mcp-url"
      themeCustomization={themePresets.modern}
    />
  );
}
```

## Available Theme Customization Options

### Typography

Customize fonts and text styling:

```tsx
const customTheme = {
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
    // ... other typography variants
  },
};
```

### Colors

Customize the color palette:

```tsx
const customTheme = {
  palette: {
    primary: {
      main: '#6366f1',
      light: '#818cf8',
      dark: '#4f46e5',
    },
    secondary: {
      main: '#8b5cf6',
      light: '#a78bfa',
      dark: '#7c3aed',
    },
    success: {
      main: '#10b981',
    },
    // ... other color categories
  },
};
```

### Shape and Spacing

Control border radius and spacing:

```tsx
const customTheme = {
  shape: {
    borderRadius: 8, // Global border radius
  },
  spacing: 8, // Base spacing unit (can also be a function)
};
```

### Component-Specific Customizations

Use the `custom` property for component-specific styling:

```tsx
const customTheme = {
  custom: {
    fontSizes: {
      tiny: 10,
      small: 12,
      medium: 14,
      large: 16,
    },
    colors: {
      accent: '#f59e0b',
      muted: '#6b7280',
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
```

### Advanced Material-UI Overrides

For fine-grained control, use Material-UI's override system:

```tsx
const customTheme = {
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
        borderRadius: '6px',
        fontWeight: 500,
      },
    },
    MuiTextField: {
      root: {
        '& .MuiOutlinedInput-root': {
          borderRadius: '8px',
          '&.Mui-focused fieldset': {
            borderColor: '#6366f1',
            borderWidth: '2px',
          },
        },
      },
    },
  },
};
```

## Using Theme Values in Custom Components

If you're extending the library, you can access theme customization values:

```tsx
import { useThemeCustomization } from 'mcp-inspector/theme';

function MyCustomComponent() {
  const theme = useThemeCustomization();
  
  const buttonRadius = theme.getBorderRadius('button');
  const customColor = theme.getCustomColor('accent');
  const fontWeight = theme.getButtonFontWeight();
  
  return (
    <button 
      style={{
        borderRadius: buttonRadius,
        backgroundColor: customColor,
        fontWeight: fontWeight,
      }}
    >
      Custom Button
    </button>
  );
}
```
## Integration Examples

### React with TypeScript
```tsx
import React from 'react';
import MCPInspector, { MCPInspectorThemeCustomization } from 'mcp-inspector';

const corporateTheme: MCPInspectorThemeCustomization = {
  typography: {
    fontFamily: '"Open Sans", sans-serif',
  },
  palette: {
    primary: { main: '#0066cc' },
  },
  custom: {
    components: {
      button: { borderRadius: 4 },
    },
  },
};

export function CorporateInspector() {
  return (
    <MCPInspector 
      url="wss://your-mcp-server"
      themeCustomization={corporateTheme}
    />
  );
}
```

### Vite/React Integration
```tsx
// src/components/Inspector.tsx
import MCPInspector from 'mcp-inspector';
import { themePresets } from 'mcp-inspector/theme';

export function Inspector() {
  return (
    <MCPInspector 
      themeCustomization={themePresets.modern}
      url={import.meta.env.VITE_MCP_URL}
    />
  );
}
```
