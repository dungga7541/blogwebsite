import React, { FC } from "react";
import Blog from "../../../../components/Content/Blog";
import { Divider } from "antd";
interface ContentBlog {}

const ContentBlog: React.FC<{}> = () => {
  return (
    <div style={{ width: "100%", textAlign: "left" }}>
      <Blog />
      <Divider />
      <Blog />
      <Divider />
      <Blog />
      <Divider />
      <Blog />
      <Divider />
    </div>
  );
};

export default ContentBlog;
