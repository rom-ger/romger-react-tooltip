import * as React from 'react';

interface RgReactTooltipProps {
    tooltip: string | JSX.Element;
    position?: string;
}

export class RgReactTooltip extends React.Component<RgReactTooltipProps, any> {}