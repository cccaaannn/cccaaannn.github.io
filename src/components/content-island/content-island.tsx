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
        const targetZ = hovering ? z + 2 : z;
        const position = groupRef.current?.position;
        if (position && !props.isActiveRoute) {
            easing.damp(position, "z", targetZ, 0.2, delta);
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
                // color="green"
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
                rotationIntensity={2}
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

            {/* <pointLight
                castShadow
                position={[0, 0, 3]}
                intensity={1000}
                color="white"
            />

            <ambientLight intensity={0.5} />

            <mesh
                receiveShadow
                position={[0, -1, -4]}
            >
                <boxGeometry
                    args={[6, 6, 0.1]}
                />
                <meshStandardMaterial
                    // transparent
                    // opacity={0.08}
                    opacity={1}
                />
            </mesh> */}

            {/* <Float
                floatIntensity={10}
                position={[x, y - 2, z - 5]}
            >
                <TorusMesh scale={1} color="#00d000" />
            </Float> */}

            {/* <Float
                floatIntensity={10}
                position={[x, y - 2, z - 5]}
            >
                <BombMesh
                    scale={0.3}
                    // color="#00d000"
                />
            </Float> */}
        </group>
    )
}

export default ContentIsland;
