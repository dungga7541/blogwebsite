import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/container/Home/Home";
import InfoBlog from "./components/InfoBlog/InfoBlog";
import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Input,
  Avatar,
  Space,
  ColorPicker,
  MenuProps,
  MenuItemProps,
  Dropdown,
  Col,
  Row,
} from "antd";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import logo from "./assets/medium-ar21.png";

const { Header, Footer } = Layout;
const { Search } = Input;
const items: MenuProps["items"] = [
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item（disabled）",
    key: "3",
    disabled: true,
  },
];
function App() {
  const {
    token: { colorBgContainer, colorBorder, colorBorderSecondary },
  } = theme.useToken();
  const onSearch = () => {};
  return (
    <div className="App">
      <Layout className="layout">
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link to="/">
            <Avatar src={logo} style={{ width: "120px", height: "50px" }} />
          </Link>
          <Menu theme="dark" mode="horizontal" color={colorBgContainer}>
            <Menu.Item key={"foryou"}>For you</Menu.Item>
            <Menu.Item key={"following"}>Following</Menu.Item>
            <Menu.Item key={"science"}>Science</Menu.Item>
            <Menu.Item key={"future"}>Future</Menu.Item>
            <Menu.Item key={"technology"}>Technology</Menu.Item>
          </Menu>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Search
              placeholder="input search text"
              allowClear
              onSearch={onSearch}
              size="middle"
            />
            <Avatar
              size={48}
              icon={<UserOutlined />}
              shape="circle"
              style={{ border: "white" }}
            />
            <Dropdown menu={{ items }}>
              <a onClick={(e) => e.preventDefault()}></a>
            </Dropdown>
          </div>
        </Header>

        <Footer style={{ textAlign: "center" }}>Blog Website</Footer>
      </Layout>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topic1" element={<InfoBlog />} />
      </Routes>
    </div>
  );
}

export default App;
