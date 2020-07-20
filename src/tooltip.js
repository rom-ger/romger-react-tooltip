import React from 'react';
import classnames from 'classnames';
import './index.css';

class RgReactTooltip extends React.Component {
    constructor(params) {
        super(params);
    }

    render() {
        return (
            <div
                className={classnames(
                    'rg-tooltip-wrap',
                )}
            >
                {this.props.children}
                <div
                    className={classnames(
                        'rg-tooltip',
                        {
                            [`rg-tooltip--${this.props.position}`]: !!this.props.position,
                        },
                    )}
                >
                    {this.props.tooltip}
                </div>
            </div>
        );
    }
}

export default RgReactTooltip;