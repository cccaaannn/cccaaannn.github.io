import { useTheme } from "@mui/material";

const Scene = ({ children }: { children: React.ReactNode }) => {

    const theme = useTheme();

    return (
        <>
            <color
                attach="background"
                args={[theme.palette.background.default]}
            />

            <ambientLight
                intensity={5}
            />

            {children}
        </>
    )
}

export default Scene;
