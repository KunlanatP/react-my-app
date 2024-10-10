import { Layout } from 'antd';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LanguageDropdown from './components/LanguageDropdown';
import Home from './pages/Home';
import Test1 from './pages/Test1';
import Test2 from './pages/Test2';
import styles from './App.module.scss';

const { Header, Content } = Layout;

function App() {

  return (
    <div>
      <Router>
        <Layout className={styles.appContainer}>
          <Header className={styles.headerStyle}>
            <LanguageDropdown />
          </Header>
          <Content className={styles.content}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/layout-style" element={<Test1 />} />
              <Route path="/form-table" element={<Test2 />} />
            </Routes>
          </Content>
        </Layout>
      </Router>
    </div>
  );
}

export default App;