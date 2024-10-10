import { Card, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.scss';


type IMenu = {
    title: string,
    subTitle: string,
    routePath: string,
}

const Menus: IMenu[] = [
    { title: 'txt_test1', subTitle: 'txt_layout_style', routePath: '/layout-style' },
    { title: 'txt_test2', subTitle: 'txt_form_table', routePath: '/form-table' },
];

function Home() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    return (
        <Space direction="horizontal" size={16}>
            {Menus.map((menu) => {
                return <Card
                    size="small"
                    title={t(`${menu.title}`)}
                    className={styles.contentCard}
                    onClick={() => {
                        navigate(menu.routePath);
                    }}
                >
                    <p>{t(`${menu.subTitle}`)}</p>
                </Card>;
            })}
        </Space>
    );
}

export default Home;
