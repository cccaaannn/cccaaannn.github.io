import { createTheme, PaletteMode } from "@mui/material";

const GetAppTheme = (mode: PaletteMode) => createTheme({
    palette: {
        primary: {
            main: "#48b753",
            light: "#87cf8f",
            dark: "#34833c"
        },
        secondary: {
            main: "#B748AC",
            light: "#c771bf",
            dark: "#813379"
        },
        mode: mode
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                "::-webkit-scrollbar": {
                    width: "5px",
                    height: "5px"
                },
                "::-webkit-scrollbar-track": {
                    background: "#87cf8f"
                },
                "::-webkit-scrollbar-thumb": {
                    background: "#48b753",
                    borderRadius: "8px"
                },
                "::-webkit-scrollbar-thumb:hover": {
                    background: "#34833c"
                },
                "@media (prefers-reduced-motion: no-preference)": {
                    ":has(:target)": {
                        scrollBehavior: "smooth",
                        scrollPaddingTop: "3rem"
                    },
                    "body": {
                        scrollBehavior: "smooth",
                        scrollPaddingTop: "3rem"
                    },
                }
            },
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    cursor: "pointer"
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                },
            }
        },
        MuiToggleButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                },
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                },
            }
        },
    },
});

export default GetAppTheme;
