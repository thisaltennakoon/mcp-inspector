import React from 'react';
import { useTheme } from '@material-ui/core/styles';

/**
 * Hook to access theme customization values
 * This provides a convenient way for components to access custom theme values
 */
export function useThemeCustomization() {
  const theme = useTheme();

  return {
    /** Get custom font sizes */
    getFontSize: (size: 'tiny' | 'small' | 'medium' | 'large') => {
      return theme.custom?.fontSizes?.[size] || {
        tiny: '10px',
        small: '12px',
        medium: '14px',
        large: '16px',
      }[size];
    },

    /** Get custom colors */
    getCustomColor: (colorKey: string) => {
      return theme.custom?.colors?.[colorKey];
    },

    /** Get component-specific customizations */
    getComponentCustomization: (component: string) => {
      return theme.custom?.components?.[component] || {};
    },

    /** Get the full custom theme object */
    custom: theme.custom,

    /** Helper to get border radius for components */
    getBorderRadius: (component?: 'button' | 'input' | 'card') => {
      if (component && theme.custom?.components?.[component]?.borderRadius) {
        return theme.custom.components[component].borderRadius;
      }
      return theme.shape?.borderRadius || 4;
    },

    /** Helper to get font weight for buttons */
    getButtonFontWeight: () => {
      return theme.custom?.components?.button?.fontWeight || theme.typography?.fontWeightMedium || 500;
    },
  };
}

/**
 * Higher-order component that provides theme customization values as props
 */
export function withThemeCustomization<P extends object>(
  Component: React.ComponentType<P & { themeCustomization: ReturnType<typeof useThemeCustomization> }>
) {
  return function WithThemeCustomizationComponent(props: P) {
    const themeCustomization = useThemeCustomization();

    return React.createElement(Component, { ...props, themeCustomization });
  };
}
