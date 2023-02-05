import {
  FileAddOutlined,
  FileOutlined,
  FileTextOutlined,
  PlayCircleOutlined,
  TeamOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import SubMenu from "antd/es/menu/SubMenu";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
const { Header, Content, Sider } = Layout;

const AdminTemplate = () => {
  const { userSignin } = useSelector((state) => state.userReducer);
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  if (userSignin.maLoaiNguoiDung !== "GV") {
    return navigate("/");
  }

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <SubMenu key="sub1" icon={<UserOutlined />} title="Users">
            <Menu.Item key="1" icon={<TeamOutlined />}>
              <NavLink to="/admin/users">Users List</NavLink>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserAddOutlined />}>
              <NavLink to="/admin/users/add-user">Add User</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<PlayCircleOutlined />} title="Courses">
            <Menu.Item key="16" icon={<FileTextOutlined />}>
              <NavLink to="/admin/courses">Course List</NavLink>
            </Menu.Item>
            <Menu.Item key="14" icon={<FileAddOutlined />}>
              <NavLink to="/admin/courses/add-course">Add Course</NavLink>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          abc
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <div
            style={{
              margin: "16px 0",
              padding: "0px 30px",
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminTemplate;
