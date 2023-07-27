import React, { FC } from "react";
import Blog from "../../../../components/Content/Blog";
import { Divider } from "antd";
interface ContentBlog {}

const ContentBlog: React.FC<{}> = () => {
  return (
    <div style={{ width: "100%" }}>
      <Blog />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo
      </p>
    </div>
  );
};

export default ContentBlog;
