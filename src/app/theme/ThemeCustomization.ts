import { ThemeOptions, TypographyStyle } from '@material-ui/core/styles';

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/**
 * Interface for consumer theme customizations
 * This allows consumers to override any part of the theme
 */
export interface MCPInspectorThemeCustomization {
  /** Typography customizations */
  typography?: {
    fontFamily?: string;
    h1?: Partial<TypographyStyle>;
    h2?: Partial<TypographyStyle>;
    h3?: Partial<TypographyStyle>;
    h4?: Partial<TypographyStyle>;
    h5?: Partial<TypographyStyle>;
    h6?: Partial<TypographyStyle>;
    subtitle1?: Partial<TypographyStyle>;
    subtitle2?: Partial<TypographyStyle>;
    body1?: Partial<TypographyStyle>;
    body2?: Partial<TypographyStyle>;
    caption?: Partial<TypographyStyle>;
    overline?: Partial<TypographyStyle>;
  };

  /** Palette customizations */
  palette?: {
    primary?: {
      light?: string;
      main?: string;
      dark?: string;
    };
    secondary?: {
      light?: string;
      main?: string;
      dark?: string;
    };
    error?: {
      light?: string;
      main?: string;
      dark?: string;
    };
    warning?: {
      light?: string;
      main?: string;
      dark?: string;
    };
    success?: {
      light?: string;
      main?: string;
      dark?: string;
    };
    grey?: {
      [key: string]: string;
    };
    background?: {
      default?: string;
      paper?: string;
    };
    text?: {
      primary?: string;
      secondary?: string;
      disabled?: string;
      hint?: string;
    };
  };

  /** Spacing customization */
  spacing?: number | ((factor: number) => number);

  /** Shape customizations */
  shape?: {
    borderRadius?: number;
  };

  /** Component overrides */
  overrides?: ThemeOptions['overrides'];

  /** Custom properties that can be used by library components */
  custom?: {
    /** Font sizes for different component variations */
    fontSizes?: {
      tiny?: string | number;
      small?: string | number;
      medium?: string | number;
      large?: string | number;
    };
    /** Custom color tokens */
    colors?: {
      [key: string]: string;
    };
    /** Component-specific customizations */
    components?: {
      button?: {
        borderRadius?: number;
        fontWeight?: number | string;
      };
      input?: {
        borderRadius?: number;
      };
      card?: {
        borderRadius?: number;
        shadow?: string;
      };
      [key: string]: any;
    };
  };
}

/**
 * Predefined theme presets that consumers can use
 */
export const themePresets = {
  modern: {
    typography: {
      fontFamily: '"Inter", "Roboto", "Arial", sans-serif',
    },
    shape: {
      borderRadius: 8,
    },
    custom: {
      components: {
        button: {
          borderRadius: 8,
          fontWeight: 500,
        },
        input: {
          borderRadius: 6,
        },
        card: {
          borderRadius: 12,
        },
      },
    },
  } as MCPInspectorThemeCustomization,

  compact: {
    typography: {
      fontFamily: '"Roboto Condensed", "Roboto", "Arial", sans-serif',
      body1: {
        fontSize: 12,
      },
      body2: {
        fontSize: 11,
      },
    },
    spacing: (factor: number) => factor * 6, // Tighter spacing
    custom: {
      fontSizes: {
        tiny: 10,
        small: 11,
        medium: 12,
        large: 14,
      },
    },
  } as MCPInspectorThemeCustomization,

  rounded: {
    shape: {
      borderRadius: 16,
    },
    custom: {
      components: {
        button: {
          borderRadius: 20,
        },
        input: {
          borderRadius: 12,
        },
        card: {
          borderRadius: 16,
        },
      },
    },
  } as MCPInspectorThemeCustomization,
};

/**
 * Utility function to deep merge theme customizations
 */
export function mergeThemeCustomizations(
  base: ThemeOptions,
  customization?: MCPInspectorThemeCustomization
): ThemeOptions {
  if (!customization) return base;

  const merged = { ...base };

  // Merge typography
  if (customization.typography) {
    merged.typography = {
      ...merged.typography,
      ...customization.typography,
    };
  }

  // Merge palette
  if (customization.palette) {
    merged.palette = {
      ...merged.palette,
    };

    // Handle color palettes carefully
    if (customization.palette.primary) {
      merged.palette.primary = {
        ...merged.palette?.primary,
        ...customization.palette.primary
      } as any;
    }
    if (customization.palette.secondary) {
      merged.palette.secondary = {
        ...merged.palette?.secondary,
        ...customization.palette.secondary
      } as any;
    }
    if (customization.palette.error) {
      merged.palette.error = {
        ...merged.palette?.error,
        ...customization.palette.error
      } as any;
    }
    if (customization.palette.warning) {
      merged.palette.warning = {
        ...merged.palette?.warning,
        ...customization.palette.warning
      } as any;
    }
    if (customization.palette.success) {
      merged.palette.success = {
        ...merged.palette?.success,
        ...customization.palette.success
      } as any;
    }
    if (customization.palette.grey) {
      merged.palette.grey = {
        ...merged.palette?.grey,
        ...customization.palette.grey
      };
    }
    if (customization.palette.background) {
      merged.palette.background = {
        ...merged.palette?.background,
        ...customization.palette.background
      };
    }
    if (customization.palette.text) {
      merged.palette.text = {
        ...merged.palette?.text,
        ...customization.palette.text
      };
    }
  }

  // Merge spacing
  if (customization.spacing !== undefined) {
    merged.spacing = customization.spacing;
  }

  // Merge shape
  if (customization.shape) {
    merged.shape = {
      ...merged.shape,
      ...customization.shape,
    };
  }

  // Merge overrides
  if (customization.overrides) {
    merged.overrides = {
      ...merged.overrides,
      ...customization.overrides,
    };
  }

  // Merge custom properties
  if (customization.custom) {
    merged.custom = {
      ...merged.custom,
      ...customization.custom,
    };
  }

  return merged;
}
