import { Canvas } from '@react-three/fiber';
import React from 'react'
import { useContext } from 'react'
import { useFrame } from "@react-three/fiber"
import { easing } from "maath"
import { SceneRouterContext } from '@/hooks/useSceneRouter/scene-router-provider';
import { Vector3 } from 'three';

const lookAtTarget = new Vector3(0, 0, -100);

const UseFrameWrapper = () => {

    const context = useContext(SceneRouterContext);

    useFrame((state, delta) => {
        if (
            context.cameraPosition.x !== state.camera.position.x
            ||
            context.cameraPosition.y !== state.camera.position.y
            ||
            context.cameraPosition.z !== state.camera.position.z
        ) {
            const newPosition = new Vector3(
                context.cameraPosition.x,
                context.cameraPosition.y - 1,
                context.cameraPosition.z + 10
            );

            easing.damp3(
                state.camera.position as never,
                newPosition,
                0.3,
                delta
            );

            const newLook = new Vector3(
                context.cameraPosition.x,
                context.cameraPosition.y,
                0
            );

            easing.damp3(
                lookAtTarget,
                newLook,
                0.6,
                delta
            );

            state.camera.lookAt(lookAtTarget as never);
        }
    });

    return null;
}

const CanvasRouter = ({ children }: { children: React.ReactNode }) => {
    return (
        <Canvas shadows>
            <UseFrameWrapper />
            {children}
        </Canvas>
    )
}

export default CanvasRouter;
