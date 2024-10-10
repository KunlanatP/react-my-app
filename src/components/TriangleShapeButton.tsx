

import { Button, Card, Row, Space } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { flipGrid, rotateLeftToRight, rotateRightToLeft } from "../store/slices/shapeSlice";
import styles from "./TriangleShapeButton.module.scss";
import { useTranslation } from "react-i18next";


const TriangleShapeButton: React.FC = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    function detailButton(title: string) {
        return <Button
            type="primary"
            shape="round"
            className={styles.button}
        >
            {title}
        </Button>;
    }

    return (
        <Space direction="horizontal" size={16} className={styles.space}>
            <Card
                key="triangleLeft"
                className={styles.content}
                onClick={() => dispatch(rotateLeftToRight())}
            >
                <div className={styles.triangleLeft} />
                <Button
                    type="primary"
                    shape="round"
                    className={styles.button}
                >
                    {detailButton(t`txt_move_shape`)}
                </Button>
            </Card>
            <Card
                key="triangleUpDown"
                className={styles.contentUpDown}
                onClick={() => dispatch(flipGrid())}
            >
                <Row className={styles.row}>
                    <div className={styles.triangleUp} />
                    <div className={styles.triangleDown} />
                </Row>
                {detailButton(t`txt_move_position`)}
            </Card>
            <Card
                key="triangleRight"
                className={styles.content}
                onClick={() => dispatch(rotateRightToLeft())}
            >
                <div className={styles.triangleRight} />
                <Button
                    type="primary"
                    shape="round"
                    className={styles.button}
                >
                    {detailButton(t`txt_move_shape`)}
                </Button>
            </Card>
        </Space>
    );
};

export default TriangleShapeButton;
