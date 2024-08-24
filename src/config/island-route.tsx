import { Vector3 } from 'three'
import { ContentIslandContent } from '@/components/content-island/content-island'
import MainDescription from '@/components/content-island/variant/main/main-description'
import ProjectDescription from '@/components/content-island/variant/project/project-description'
import MainHeader from '@/components/content-island/variant/main/main-header'
import ProjectHeader from '@/components/content-island/variant/project/project-header'
import { SceneRoute } from '@/hooks/useSceneRouter/useSceneRouter'

const IslandRoutes: ContentIslandContent[] = [
    {
        sceneRoute: {
            position: new Vector3(100, 100, 100),
            route: "/"
        },
        header: () => <MainHeader />,
        description: (sceneRoute: SceneRoute) => <MainDescription currentRoute={sceneRoute} />
    },
    {
        sceneRoute: {
            position: new Vector3(90, 83, 70),
            route: "/tyd"
        },
        header: () => <ProjectHeader
            text="telegram downloader"
            color="#229ED9"
        />,
        description: () => <ProjectDescription
            text="Telegram bot for downloading video or audio from multiple sites"
            linkText1="Repo"
            linkUrl1="https://github.com/cccaaannn/telegram_youtube_downloader"
            linkText2="Demo"
            linkUrl2="https://t.me/cccaaannnYoutubeDownloaderBot"
        />
    },
    {
        sceneRoute: {
            position: new Vector3(105, 110, 90),
            route: "/gohst"
        },
        header: () => <ProjectHeader
            text="gohst"
            color="#00ADD8"
        />,
        description: () => <ProjectDescription
            text="A simple http server"
            linkText1="Repo"
            linkUrl1="https://github.com/cccaaannn/gohst"
            linkText2="Package"
            linkUrl2="https://pkg.go.dev/github.com/cccaaannn/gohst"
        />
    },
    {
        sceneRoute: {
            position: new Vector3(110, 93, 85),
            route: "/wasico"
        },
        header: () => <ProjectHeader
            text="wasico"
            color="#0e7490"
        />,
        description: () => <ProjectDescription
            text="Convert images on browser with ffmpeg and wasm"
            linkText1="Repo"
            linkUrl1="https://github.com/cccaaannn/wasm-image-converter"
            linkText2="Demo"
            linkUrl2="https://cccaaannn.github.io/wasm-image-converter"
            iframeLink="https://cccaaannn.github.io/wasm-image-converter"
        />
    },
    {
        sceneRoute: {
            position: new Vector3(90, 110, 90),
            route: "/sep"
        },
        header: () => <ProjectHeader
            text="sep"
            color="#ff8000"
        />,
        description: () => <ProjectDescription
            text="Spring cloud microservice project with various other technologies"
            linkText1="Repo"
            linkUrl1="https://github.com/cccaaannn/sep"
        />
    },
    {
        sceneRoute: {
            position: new Vector3(70, 90, 70),
            route: "/svelther"
        },
        header: () => <ProjectHeader
            text="svelther"
            color="#33D14D"
        />,
        description: () => <ProjectDescription
            text="Svelte weather app with openweathermap api"
            linkText1="Repo"
            linkUrl1="https://github.com/cccaaannn/svelther"
            linkText2="Demo"
            linkUrl2="https://cccaaannn.github.io/svelther"
            iframeLink="https://cccaaannn.github.io/svelther"
        />
    },
    {
        sceneRoute: {
            position: new Vector3(117, 105, 75),
            route: "/dictator"
        },
        header: () => <ProjectHeader
            text="dictator"
            color="#C2185B"
        />,
        description: () => <ProjectDescription
            text="A dictation app to rule them all"
            linkText1="Repo"
            linkUrl1="https://github.com/cccaaannn/dictator"
            linkText2="Demo"
            linkUrl2="https://cccaaannn.github.io/dictator"
        />
    },
    {
        sceneRoute: {
            position: new Vector3(118, 97, 65),
            route: "/snake"
        },
        header: () => <ProjectHeader
            text="snake"
            color="#FF004C"
        />,
        description: () => <ProjectDescription
            text="Classic snake game"
            linkText1="Repo"
            linkUrl1="https://github.com/cccaaannn/snake"
            linkText2="Demo"
            linkUrl2="https://cccaaannn.github.io/snake"
        />
    },
    {
        sceneRoute: {
            position: new Vector3(87, 100, 80),
            route: "/thesis"
        },
        header: () => <ProjectHeader
            text="thesis"
            color="#00FFCC"
        />,
        description: () => <ProjectDescription
            text="Improving Context Empowered Deep Neural Networks"
            linkText1="Pdf"
            linkUrl1="https://cccaaannn.github.io/thesis"
            iframeLink="https://cccaaannn.github.io/thesis"
        />
    }
]

export default IslandRoutes;
