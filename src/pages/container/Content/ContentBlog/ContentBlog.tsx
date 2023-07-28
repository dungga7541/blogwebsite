import React, { FC } from "react";
import Blog from "../../../../components/Content/Blog";
import { Divider, Pagination } from "antd";
import { Link } from "react-router-dom";

interface ContentBlog {}

const ContentBlog: React.FC<{}> = () => {
  return (
    <div style={{ width: "100%", textAlign: "left" }}>
      <Link to="/topic1">
        <Blog />
      </Link>
      <Divider />
      <Blog />
      <Divider />
      <Blog />
      <Divider />
      <Blog />
      <Divider />
      <Pagination
        defaultCurrent={1}
        total={100}
        style={{ textAlign: "center" }}
      />
    </div>
  );
};

export default ContentBlog;
