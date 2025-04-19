import { Menu } from 'antd';
import React from 'react';
import { getItem } from '../../utils';
import { UserOutlined, AppstoreAddOutlined } from '@ant-design/icons';
import AdminUser from '../../components/AdminUser';
import AdminProduct from '../../components/AdminProduct';

const items = [
  getItem('Người dùng', 'user', <UserOutlined/>),
  getItem('Sản phẩm', 'product', <AppstoreAddOutlined/>),
];

const AdminPage = () => {
  const [selectedKey, setSelectedKey] = React.useState<string>('');

  const renderPage = (key: string) => {
    switch (key) {
      case 'user':
        return <AdminUser/>;
      case 'product':
        return <AdminProduct/>;
      default:
        return null;
    }

  };

  const handleOnClick = ({ key }: any) => {
    setSelectedKey(key);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Menu
        mode='inline'
        style={{ width: 256, boxShadow: '1px 1px 2px #ccc', height: '100vh' }}
        items={items as any}
        onClick={handleOnClick}
      />
      <div style={{ flex: 1}}>
        {renderPage(selectedKey)}
      </div>
    </div>
  )
}

export default AdminPage