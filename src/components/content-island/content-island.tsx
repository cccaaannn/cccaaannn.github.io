import { Box, IconButton } from '@mui/material';
import { Center, Float } from '@react-three/drei';
import { Group } from 'three';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import Html from '@/components/drei-wrapper/html';
import useSceneRouter, { SceneRoute } from '@/hooks/useSceneRouter/useSceneRouter';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export interface ContentIslandContent {
    sceneRoute: SceneRoute;
    header: (currentRoute: SceneRoute) => React.ReactNode;
    description: (currentRoute: SceneRoute) => React.ReactNode;
}

const HtmlContentWidth = 250;

interface ContentIslandProps {
    content: ContentIslandContent;
    isActiveRoute: boolean;
    onViewCLick: (content: ContentIslandContent) => void;
    onBackClick?: () => void;
}

const ContentIsland = (props: ContentIslandProps) => {

    const groupRef = useRef<Group>();
    const [hovering, setHovering] = useState(false);
    const { x, y, z } = props.content.sceneRoute.position;

    const { sceneRoute: currentRoute } = useSceneRouter();

    useFrame((_state, delta) => {
        const targetZ = hovering ? z + 1 : z;
        const position = groupRef.current?.position;
        if (position && !props.isActiveRoute) {
            easing.damp(position, "z", targetZ, 0.08, delta);
        }
    })

    return (
        <group
            // @ts-expect-error - ref has type problems
            ref={groupRef}
            position={[x, y, z]}
            onPointerOver={() => setHovering(true)}
            onPointerOut={() => setHovering(false)}
            onClick={() => props.onViewCLick(props.content)}
        >
            <mesh
                position={[0, -1, 0]}
            >
                <boxGeometry args={[6, 6, 4]} />
                <meshBasicMaterial
                    transparent
                    opacity={0}
                    // wireframe
                />
            </mesh>

            <Float
                floatIntensity={5}
                rotationIntensity={3}
                floatingRange={[0.1, 0.3]}
                position={[0, 1, 1]}
            >
                <Html
                    transform
                    style={{ width: HtmlContentWidth }}
                >
                    <Box
                        display="flex"
                        justifyContent="start"
                        gap={2}
                    >
                        {
                            (props.isActiveRoute && props.onBackClick) &&
                            <IconButton
                                size="small"
                                color="primary"
                                onClick={props.onBackClick}
                            >
                                <HomeOutlinedIcon color="inherit" />
                            </IconButton>
                        }
                    </Box>
                </Html>
            </Float>

            <Float
                floatIntensity={5}
                rotationIntensity={3}
                position={[0, 0, 0]}
            >
                <Center>
                    {props.content.header(currentRoute)}
                </Center>
            </Float>

            <Float
                floatIntensity={5}
                floatingRange={[0.1, 0.3]}
                position={[0, -3, 1]}
            >
                <Html
                    transform
                    style={{ width: HtmlContentWidth }}
                >
                    <Box
                        width="100%"
                        height="100%"
                        onMouseEnter={() => setHovering(true)}
                        onClick={() => props.onViewCLick(props.content)}
                    >
                        {props.content.description(currentRoute)}
                    </Box>
                </Html>
            </Float>
        </group>
    )
}

export default ContentIsland;
