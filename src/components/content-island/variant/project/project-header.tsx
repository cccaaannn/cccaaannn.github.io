import ColorText3D from "@/components/drei-wrapper/color-text3d";

interface ProjectHeaderProps {
    text: string;
    color: string;
    glow: boolean;
}

const ProjectHeader = (props: ProjectHeaderProps) => {
    return (
        <ColorText3D
            size={1}
            height={0.3}
            letterSpacing={-0.1}
            curveSegments={8}
            color={props.color}
            glow={props.glow}
        >
            {props.text}
        </ColorText3D>
    )
}

export default ProjectHeader;
