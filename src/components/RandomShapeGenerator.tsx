import React from "react";
import { Card, Col, Row } from "antd";
import styles from "./RandomShapeGenerator.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { randomizePositions } from "../store/slices/shapeSlice";

const RandomShapeGenerator: React.FC = () => {
    const dispatch = useDispatch();
    const shapes = useSelector((state: RootState) => state.shapes.shapeTypes);
    const isFlipped = useSelector((state: RootState) => state.shapes.isFlipped);
    const positions = useSelector((state: RootState) => state.shapes.positions);

    return (
        <div>
            <Row gutter={[16, 16]} className={`${isFlipped ? styles.rowPaddingRight : styles.rowPaddingLeft}`}>
                {positions.slice(0, 3).map((pos, index) => (
                    <Col key={index} span={8}>
                        <Card
                            className={styles.content}
                            key={shapes[pos]}
                            onClick={() => dispatch(randomizePositions())}
                        >
                            <div className={styles[shapes[pos]]} />
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row gutter={[16, 16]} className={`${isFlipped ? styles.rowPaddingLeft : styles.rowPaddingRight}`}>
                {positions.slice(3).map((pos, index) => (
                    <Col key={index} span={8}>
                        <Card
                            className={styles.content}
                            key={shapes[pos]}
                            onClick={() => dispatch(randomizePositions())}
                        >
                            <div className={styles[shapes[pos]]} />
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default RandomShapeGenerator;
