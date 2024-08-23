import { ThemeModeContext } from "@/hooks/useThemeMode/theme-with-mode-provider";
import { useContext } from "react";

const useThemeMode = () => {
    const context = useContext(ThemeModeContext);
    return {
        mode: context.mode,
        setMode: context.setMode,
        toggleMode: () => context.setMode?.((prev) => (prev === "dark" ? "light" : "dark"))
    }
}

export default useThemeMode;
