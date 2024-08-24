import ContentIsland, { ContentIslandContent } from '@/components/content-island/content-island'
import CanvasRouter from '@/hooks/useSceneRouter/canvas-router'
import useSceneRouter from '@/hooks/useSceneRouter/useSceneRouter'
import { Box } from '@mui/material'
import Scene from '@/components/scene'
import Hud from '@/components/nav/hud'
import IslandRoutes from '@/config/island-route'
import { useEffect } from 'react'

function App() {

	const { sceneRoute: currenRoute, setSceneRoute } = useSceneRouter();

	const onPositionChange = (island: ContentIslandContent) => setSceneRoute(island.sceneRoute);

	// 404 page is needed for GitHub pages to work properly
	useEffect(() => {
		const initialRoute = window.location.pathname;
		const island = IslandRoutes.find(island => island.sceneRoute.route === initialRoute);
		if (island) {
			setSceneRoute(island.sceneRoute);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Box width="100vw" height="100vh">
			<CanvasRouter>
				<Scene>
					{
						IslandRoutes.map((island, index) => (
							<ContentIsland
								key={island.sceneRoute.route}
								content={island}
								isActiveRoute={currenRoute.route === island.sceneRoute.route}
								onViewCLick={onPositionChange}
								onBackClick={index === 0 ? undefined : () => onPositionChange(IslandRoutes[0])}
							/>
						))
					}
				</Scene>
			</CanvasRouter>

			<Hud />
		</Box>
	)
}

export default App
