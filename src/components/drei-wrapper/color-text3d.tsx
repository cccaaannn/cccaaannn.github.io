import { Text3D as DreiText3D } from '@react-three/drei';
import Roboto from '@/assets/fonts/Roboto_Regular.json';
import { ComponentProps } from 'react';

interface ColorText3DProps extends Omit<ComponentProps<typeof DreiText3D>, "font"> {
    color?: string;
}

const ColorText3D = (props: ColorText3DProps) => {
    const { children, color, ...rest } = props;
    return (
        <DreiText3D
            castShadow
            receiveShadow
            font={Roboto as never}
            {...rest}
        >
            {children}
            <meshMatcapMaterial color={color} />
        </DreiText3D>
    )
}

export default ColorText3D;
