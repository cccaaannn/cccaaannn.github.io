import IslandRoutes from '@/config/island-route'
import useSceneRouter from "@/hooks/useSceneRouter/useSceneRouter";
import useThemeMode from '@/hooks/useThemeMode/useThemeMode';
import { Box, Tab, Tabs } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Hud = () => {

    const { sceneRoute: currentRoute, setSceneRoute } = useSceneRouter();

    const { mode, toggleMode } = useThemeMode();

    return (
        <>
            <Box
                position="absolute"
                top={5}
                left={10}
                display="flex"
                flexDirection="column"
                height={{ md: 200, xs: 135 }}
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={currentRoute.route || IslandRoutes[0].sceneRoute.route}
                    TabIndicatorProps={{ sx: { left: 0 } }}
                    sx={{
                        borderRight: 1,
                        borderColor: "divider",
                        "& .MuiTabScrollButton-root": {
                            minHeight: 25,
                            height: 25,
                        }
                    }}
                >
                    {
                        IslandRoutes.map(island =>
                            <Tab
                                key={island.sceneRoute.route}
                                label={island.sceneRoute.route}
                                value={island.sceneRoute.route}
                                onClick={() => setSceneRoute(island.sceneRoute)}
                                sx={{ px: 1.5, minHeight: 30, height: 30, alignItems: "start" }}
                            />
                        )
                    }
                </Tabs>
            </Box>

            <Box
                position="absolute"
                top={10}
                right={10}
            >
                <IconButton sx={{ ml: 1 }} onClick={toggleMode} color="secondary">
                    {mode === "dark" ? <Brightness7Icon color="inherit" /> : <Brightness4Icon color="inherit" />}
                </IconButton>
            </Box>
        </>
    )
}

export default Hud;
