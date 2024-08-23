import React, { createContext, useEffect, useState } from 'react'
import { Vector3 } from 'three';

interface SceneRouterContext {
    cameraPosition: Vector3;
    setCameraPosition?: (position: Vector3) => void;
    route: string;
    setRoute?: (route: string) => void;
}

const SceneRouterContextDefaults: SceneRouterContext = {
    cameraPosition: new Vector3(100, 100, 100),
    setCameraPosition: undefined,
    route: "",
    setRoute: undefined
}

export const SceneRouterContext = createContext<SceneRouterContext>(SceneRouterContextDefaults);

interface SceneRouterProviderProps {
    children: React.ReactNode;
}

const SceneRouterProvider = (props: SceneRouterProviderProps) => {

    const [route, setRoute] = useState<string>(SceneRouterContextDefaults.route);
    const [cameraPosition, setCameraPosition] = useState<Vector3>(SceneRouterContextDefaults.cameraPosition);

    const memoizedContext = React.useMemo(() => {
        return {
            cameraPosition: cameraPosition,
            setCameraPosition: setCameraPosition,
            route: route,
            setRoute: setRoute
        }
    }, [route, cameraPosition]);

    useEffect(() => {
        if (!route) return;
        window.history.replaceState("", "", route);
    }, [route]);

    return (
        <SceneRouterContext.Provider value={memoizedContext}>
            {props.children}
        </SceneRouterContext.Provider>
    )
}

export default SceneRouterProvider;
