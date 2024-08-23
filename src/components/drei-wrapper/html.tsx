import { ThemeProvider, useTheme } from '@mui/material';
import { Html as DreiHtml } from '@react-three/drei';
import { ComponentProps } from 'react';

const Html = (props: ComponentProps<typeof DreiHtml>) => {

    const { children, ...rest } = props;

    const theme = useTheme();

    return (
        <DreiHtml {...rest}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </DreiHtml>
    )
}

export default Html;
