import React from 'react';

import styles from './index.module.scss';

export interface IconProps {
    family?: string;
    name: string;
    size?: number;
}

export default class Icon extends React.Component<IconProps> {

    static defaultProps = {
        family: 'iconfont',
        size: 16
    };

    render() {

        const { family, name, size, children } = this.props;
        const style = {
            fontSize: size
        };

        return (
            <span className={styles.icon}>
                <i className={family + ' ' + 'icon-' + name} style={style}>
                    
                </i>
                { children ?  <span>{children}</span> : null }
            </span>
        )
    }
}