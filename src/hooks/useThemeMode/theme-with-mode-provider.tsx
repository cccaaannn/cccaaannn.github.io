import GetAppTheme from '@/hooks/useThemeMode/app-theme';
import { CssBaseline, ThemeProvider as MuiThemeProvider, PaletteMode } from '@mui/material';
import React, { createContext, useEffect, useLayoutEffect, useState } from 'react'

const LOCAL_STORAGE_THEME_MODE_KEY = "theme-mode";

interface ThemeModeContext {
    mode: PaletteMode;
    setMode?: React.Dispatch<React.SetStateAction<PaletteMode | undefined>>;
}

const ThemeModeContextContextDefaults: ThemeModeContext = {
    mode: "light",
    setMode: undefined
}

export const ThemeModeContext = createContext<ThemeModeContext>(ThemeModeContextContextDefaults);

interface ThemeProviderProps {
    children: React.ReactNode;
}

const ThemeWithModeProvider = (props: ThemeProviderProps) => {

    const [mode, setMode] = useState<PaletteMode | undefined>(undefined);

    const memoizedContext = React.useMemo(() => {
        return {
            mode: mode ?? "light",
            setMode
        }
    }, [mode]);

    useEffect(() => {
        if (!mode) return;
        localStorage.setItem(LOCAL_STORAGE_THEME_MODE_KEY, mode);
    }, [mode]);

    useLayoutEffect(() => {
        const savedMode = localStorage.getItem(LOCAL_STORAGE_THEME_MODE_KEY);
        if (savedMode) {
            setMode(savedMode as PaletteMode);
        }
        else {
            setMode("light");
        }
    }, []);

    return (
        <ThemeModeContext.Provider value={memoizedContext}>
            <MuiThemeProvider theme={GetAppTheme(memoizedContext.mode)}>
                <CssBaseline />
                {props.children}
            </MuiThemeProvider>
        </ThemeModeContext.Provider>
    )
}

export default ThemeWithModeProvider;
