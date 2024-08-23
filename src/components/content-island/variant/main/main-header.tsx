import ColorText3D from "@/components/drei-wrapper/color-text3d";
import { useTheme } from "@mui/material";

const MainHeader = () => {
    const theme = useTheme();
    return (
        <ColorText3D
            size={1}
            height={0.3}
            letterSpacing={-0.1}
            curveSegments={8}
            color={theme.palette.primary.main}
        >
            Can Kurt
        </ColorText3D>
    )
}

export default MainHeader;
