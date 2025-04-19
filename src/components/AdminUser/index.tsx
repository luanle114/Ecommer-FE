import React from 'react'
import { WrapperHeader } from './AdminUser.style';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import TableComponent from '../TableComponent';

const AdminUser = () => {
  return (
    <div>
      <WrapperHeader>Quản lý Người dùng</WrapperHeader>
      <div style={{marginTop: '10px'}}>
        <Button style={{height: '150px', width: 150, borderStyle: 'dashed'}}><PlusOutlined style={{fontSize: '60px'}}/></Button>
      </div>
      <TableComponent/>
    </div>
  )
}

export default AdminUser;