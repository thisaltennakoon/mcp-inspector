import { useMemo } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { responsiveFontSizes, createTheme } from '@material-ui/core/styles';
import systemTheme from './systemTheme';
import { MCPInspectorThemeCustomization, mergeThemeCustomizations } from './ThemeCustomization';

export default function useChoreoTheme(
  userPreference: null | boolean = null,
  customization?: MCPInspectorThemeCustomization
) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const isDarkMode = userPreference !== null ? userPreference : prefersDarkMode;

  // We need to remove the darkPalette property from the theme since the default MUI theme does not have that
  const themeWithType = { ...systemTheme };
  if (isDarkMode && themeWithType.darkPalette) {
    themeWithType.palette = themeWithType.darkPalette;
  }
  if (themeWithType.darkPalette) {
    delete themeWithType.darkPalette;
  }

  // Apply customizations
  const customizedTheme = mergeThemeCustomizations(themeWithType, customization);

  const theme = useMemo(
    () => responsiveFontSizes(createTheme(customizedTheme)),
    [prefersDarkMode, customization]
  );

  return theme;
}
