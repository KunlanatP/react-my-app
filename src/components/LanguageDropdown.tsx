import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Dropdown } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from '../store/slices/languageSlice';
import { RootState } from '../store/store';
import i18n from '../i18n';



function LanguageDropdown() {
    const dispatch = useDispatch();
    const currentLanguage = useSelector((state: RootState) => state.language);

    const items: MenuProps['items'] = [
        { label: 'English', key: 'en' },
        { label: 'ไทย', key: 'th' },
    ];

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        i18n.changeLanguage(e.key);
        dispatch(changeLanguage(e.key));
    };


    return (
        <Dropdown menu={{ items, onClick: handleMenuClick }}>
            <Button>
                {currentLanguage.label} <DownOutlined />
            </Button>
        </Dropdown>
    );
}

export default LanguageDropdown;