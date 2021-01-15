import { useState } from 'react';
import { Menu, Button } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';

const AppMenu = props => {
  const { menuItems, width } = props;
  const [collapsed, setCollapsed] = useState(true);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div style={{ width: width }}>
      <Button type="primary" onClick={toggle} style={{ marginBottom: 16 }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
      >
        {menuItems.map((el, index) => {
          return (
            <Menu.Item
              key={index}
              onClick={el.action}
              icon={<ClockCircleOutlined />}
            >
              {el.name}
            </Menu.Item>
          );
        })}
      </Menu>
    </div>
  );
};

export default AppMenu;
