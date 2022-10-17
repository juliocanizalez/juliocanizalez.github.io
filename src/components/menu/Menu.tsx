import React from 'react';
import { Layer, Text } from '@fluentui/react';

interface MenuProps {
  layerHostId: string;
}

const Menu: React.FC<MenuProps> = (props) => {
  return (
    <Layer hostId={props.layerHostId}>
    </Layer>
  );
};