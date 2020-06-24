import React from 'react';
import { Layout } from 'element-react';

import styles from './index.module.scss';

export default class BlankGrid extends React.Component {

    render() {
        return (
            <div>
                <Layout.Row className={styles.gridRow} gutter='20'>
                    <Layout.Col span='6'><div className={styles.gridCol} /></Layout.Col>
                    <Layout.Col span='6'><div className={styles.gridCol} /></Layout.Col>
                    <Layout.Col span='6'><div className={styles.gridCol} /></Layout.Col>
                    <Layout.Col span='6'><div className={styles.gridCol} /></Layout.Col>
                </Layout.Row>
                <Layout.Row className={styles.gridRow} gutter='20'>
                    <Layout.Col span='6'><div className={styles.gridCol} /></Layout.Col>
                    <Layout.Col span='6'><div className={styles.gridCol} /></Layout.Col>
                    <Layout.Col span='6'><div className={styles.gridCol} /></Layout.Col>
                    <Layout.Col span='6'><div className={styles.gridCol} /></Layout.Col>
                </Layout.Row>
                <Layout.Row className={styles.gridRow} gutter='20'>
                    <Layout.Col span='6'><div className={styles.gridCol} /></Layout.Col>
                    <Layout.Col span='6'><div className={styles.gridCol} /></Layout.Col>
                    <Layout.Col span='6'><div className={styles.gridCol} /></Layout.Col>
                    <Layout.Col span='6'><div className={styles.gridCol} /></Layout.Col>
                </Layout.Row>
                <Layout.Row className={styles.gridRow} gutter='20'>
                    <Layout.Col span='6'><div className={styles.gridCol} /></Layout.Col>
                    <Layout.Col span='6'><div className={styles.gridCol} /></Layout.Col>
                    <Layout.Col span='6'><div className={styles.gridCol} /></Layout.Col>
                    <Layout.Col span='6'><div className={styles.gridCol} /></Layout.Col>
                </Layout.Row>
            </div>
            
        )
    }
}