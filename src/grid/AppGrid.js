import { useState } from 'react';
import Timer from '../components/Timer';
import Chronometer from '../components/Chronometer';
import CountdownTimer from '../components/CountdownTimer';
import { Layout, Menu } from 'antd';
import {
  ClockCircleOutlined,
  BellOutlined,
  PlayCircleOutlined,
} from '@ant-design/icons';

const AppGrid = () => {
  const initialComponent = <Timer color={'black'} />;
  const [component, setComponent] = useState(initialComponent);

  // should be using react-router-dom instead. using this approach just to test how it works out
  const menuItems = [
    {
      name: 'Clock',
      action: () => setComponent(<Timer color={'black'} />),
      icon: <ClockCircleOutlined />,
    },
    {
      name: 'Chronometer',
      action: () => setComponent(<Chronometer color={'black'} />),
      icon: <PlayCircleOutlined />,
    },
    {
      name: 'Countdown',
      action: () => setComponent(<CountdownTimer color={'black'} />),
      icon: <BellOutlined />,
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Sider collapsed={true} theme="light">
        <div className="logo" />
        <Menu theme="light" defaultSelectedKeys={['0']} mode="inline">
          {menuItems.map((el, index) => {
            return (
              <Menu.Item key={index} onClick={el.action} icon={el.icon}>
                {el.name}
              </Menu.Item>
            );
          })}
        </Menu>
      </Layout.Sider>
      <Layout className="site-layout">
        <Layout.Content>
          <div className="site-layout-background" style={{ minHeight: 360 }}>
            {component ? component : null}
          </div>
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default AppGrid;
