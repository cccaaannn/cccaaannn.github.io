import GithubIcon from "@/components/icon/github-icon";
import LinkedinIcon from "@/components/icon/linkedin-icon";
import StackoverflowIcon from "@/components/icon/stackoverflow-icon";
import useProgrammingJoke from "@/hooks/useProgrammingJoke/useProgrammingJoke";
import { SceneRoute } from "@/hooks/useSceneRouter/useSceneRouter";
import { Box, Link, Typography } from "@mui/material";

interface MainDescriptionProps {
    currentRoute: SceneRoute;
}

const MainDescription = (props: MainDescriptionProps) => {

    const currentJoke = useProgrammingJoke({ currentRoute: props.currentRoute.route });

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            gap={1}
        >
            <Typography
                variant="body1"
                sx={{ whiteSpace: "pre-line" }}
            >
                {currentJoke}
            </Typography>

            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={2}
                color="primary"
            >
                <Link
                    href="http://github.com/cccaaannn"
                    target="_blank"
                    sx={{ "&:hover svg": { color: "primary.dark" } }}
                >
                    <GithubIcon color="inherit" />
                </Link>

                <Link
                    href="https://www.linkedin.com/in/can-kurt1"
                    target="_blank"
                    sx={{ "&:hover svg": { color: "primary.dark" } }}
                >
                    <LinkedinIcon color="inherit" />
                </Link>

                <Link
                    href="https://stackoverflow.com/users/10736407/can"
                    target="_blank"
                    sx={{ "&:hover svg": { color: "primary.dark" } }}
                >
                    <StackoverflowIcon color="inherit" />
                </Link>
            </Box>
        </Box>
    )
}

export default MainDescription;
