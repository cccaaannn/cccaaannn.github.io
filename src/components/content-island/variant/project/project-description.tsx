import { Box, IconButton, Link, Typography, useTheme } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useState } from "react";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

const ProjectLink = (props: { href: string, children: string }) => {
    const theme = useTheme();
    return (
        <Link
            href={props.href}
            target="_blank"
            rel="noopener"
            underline="always"
            variant="body1"
            color="primary.main"
            sx={{ "&:hover": { color: "primary.dark" } }}
            alignItems="center"
            justifyContent="center"
            display="flex"
            gap={0.5}
        >
            {props.children}
            <OpenInNewIcon sx={{ fontSize: theme.typography.body1 }} />
        </Link>
    )
}

interface ProjectDescriptionProps {
    text: string;
    linkUrl1: string;
    linkText1: string;
    linkUrl2?: string;
    linkText2?: string;
    iframeLink?: string;
}

const ProjectDescription = (props: ProjectDescriptionProps) => {

    const [showPreview, setShowPreview] = useState(false);

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            textAlign="center"
        >
            {
                (props.iframeLink)
                &&
                <Box alignSelf="end">
                    <IconButton
                        size="small"
                        color="primary"
                        onClick={() => setShowPreview(!showPreview)}
                    >
                        {
                            showPreview
                                ? <VisibilityOffOutlinedIcon color="inherit" fontSize="small" />
                                : <RemoveRedEyeOutlinedIcon color="inherit" fontSize="small" />
                        }
                    </IconButton>
                </Box>
            }

            {
                !showPreview
                &&
                <>
                    <Typography variant="body1" mb={1}>
                        {props.text}
                    </Typography>

                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        gap={2}
                    >
                        <ProjectLink href={props.linkUrl1}>
                            {props.linkText1}
                        </ProjectLink>

                        {
                            (props.linkUrl2 && props.linkText2)
                            &&
                            <ProjectLink href={props.linkUrl2}>
                                {props.linkText2}
                            </ProjectLink>
                        }
                    </Box>
                </>
            }

            {
                showPreview && props.iframeLink &&
                <Box
                    component="iframe"
                    width={300}
                    height={250}
                    bgcolor="white"
                    border="0.5px solid"
                    src={props.iframeLink}
                />
            }
        </Box >
    )
}

export default ProjectDescription;
