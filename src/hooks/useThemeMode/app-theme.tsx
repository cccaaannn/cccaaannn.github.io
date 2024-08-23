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
    }
});

export default GetAppTheme;
