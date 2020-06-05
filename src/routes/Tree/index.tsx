import React from 'react';
import { Tree } from 'element-react';

import styles from './index.module.scss';

const DATA = [
  {
    label: 'lvl1-A',
    children: [
      { label: 'lvl2-A1' },
      {
        label: 'lvl2-A2',
        children: [
          { label: 'lvl3-A1' },
          { label: 'lvl3-A2' },
          { label: 'lvl3-A3' }
        ]
      }
    ]
  },
  {
    label: 'lvl1-B',
    children: [
      { label: 'lvl2-B1' },
      {
        label: 'lvl2-B2',
        children: [
          { label: 'lvl3-B1' },
          { label: 'lvl3-B2' },
        ]
      }
    ]
  },
  {
    label: 'lvl1-C',
    children: [
      { label: 'lvl2-C1' },
      {
        label: 'lvl2-C2',
        children: [
          { label: 'lvl3-C1' },
        ]
      }
    ]
  }
];

const OPTION = { label: 'label', children: 'children' };

export default class TreeDemo extends React.Component {

  render() {
    return (
      <div>
        <Tree className={styles.tree} data={DATA} options={OPTION} highlightCurrent />
      </div>
    );
  }
}