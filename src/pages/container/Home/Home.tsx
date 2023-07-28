import React from "react";
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
import logo from "../../../assets/medium-ar21.png";
import ContentBlog from "../Content/ContentBlog/ContentBlog";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import { Content } from "antd/lib/layout/layout";
import { Divider } from "antd/lib";
import RightTopics from "../Content/ContentBlog/RightTopics/RightTopics";

const Home = () => {
  const {
    token: { colorBgContainer, colorBorder, colorBorderSecondary },
  } = theme.useToken();
  const onSearch = () => {};
  return (
    <div>

        <div style={{ background: colorBgContainer, margin: "20px" }}>
          <Row justify="center">
            <Col span={12}>
              <ContentBlog />
            </Col>
            <Divider type="vertical" />
            <Col span={4}>
              <RightTopics />
            </Col>
          </Row>
        </div>
    </div>
  );
};

export default Home;
