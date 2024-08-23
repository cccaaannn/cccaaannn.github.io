import { useTheme } from "@mui/material";

const Scene = ({ children }: { children: React.ReactNode }) => {

    const theme = useTheme();

    return (
        <>
            <color
                attach="background"
                args={[theme.palette.background.default]}
            />

            {children}
        </>
    )
}

export default Scene;
