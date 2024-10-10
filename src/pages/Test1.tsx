import { useTranslation } from "react-i18next";
import TriangleShapeButton from "../components/TriangleShapeButton";
import RandomShapeGenerator from "../components/RandomShapeGenerator";
import { Button, Layout } from "antd";
import styles from "./Test1.module.scss";
import { useNavigate } from "react-router-dom";

const { Header, Content } = Layout;


function Test1() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div>
            <h1>{t`txt_test1`}</h1>
            <h2>{t`txt_layout_style`}</h2>

            <Button type="default" onClick={() => navigate('/')}>
                ◁  {t`bt_back_to_main_page`}
            </Button>

            <Layout className={styles.test1Container}>
                <Header className={styles.layoutHeader}>
                    <TriangleShapeButton />
                </Header>
                <Content className={styles.layoutContent}>
                    <RandomShapeGenerator />
                </Content>
            </Layout>
        </div>
    );
}

export default Test1;