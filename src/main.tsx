import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import SceneRouterProvider from '@/hooks/useSceneRouter/scene-router-provider.tsx'
import App from '@/App';
import ThemeWithModeProvider from '@/hooks/useThemeMode/theme-with-mode-provider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeWithModeProvider>
      <SceneRouterProvider>
        <App />
      </SceneRouterProvider>
    </ThemeWithModeProvider>
  </StrictMode>,
)
