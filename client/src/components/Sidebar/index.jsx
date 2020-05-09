import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Layout } from 'antd';
import SIDEBAR_ITEMS from '../../constants/sidebar';
import Title from 'antd/lib/typography/Title';

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider>
      <div>
        <Title style={{ marginTop: 15, textAlign: 'center' }} level={3}>
          <a href="/">SMASH</a>
        </Title>
      </div>
      <Menu
        className="sidebar-menu"
        defaultSelectedKeys={['Home']}
        mode="inline"
        style={{ height: '100vh' }}
        theme="dark"
      >
        {SIDEBAR_ITEMS.map(({ title, route, Icon }) => (
          <Menu.Item key={title} icon={<Icon />}>
            <Link to={route} style={{ color: '#FFF' }}>
              {title}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
