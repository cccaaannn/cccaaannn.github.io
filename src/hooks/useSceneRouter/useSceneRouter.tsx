import { SceneRouterContext } from "@/hooks/useSceneRouter/scene-router-provider";
import { useContext } from "react";
import { Vector3 } from 'three';

export interface SceneRoute {
    route: string;
    position: Vector3;
}

const useSceneRouter = () => {

    const context = useContext(SceneRouterContext);

    const setSceneRoute = (route: SceneRoute) => {
        context.setRoute?.(route.route);
        context.setCameraPosition?.(route.position);
    }

    return {
        sceneRoute: {
            route: context.route,
            position: context.cameraPosition
        },
        setSceneRoute
    }

}

export default useSceneRouter;
