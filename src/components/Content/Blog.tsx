import React from "react";
import { Avatar, Tag, Image, Card } from "antd/lib";
import { InboxOutlined, MinusOutlined, MoreOutlined } from "@ant-design/icons";
interface BlogProps {}

const Blog: React.FC<BlogProps> = () => {
  return (
    <div>
      <Card title="Bill Gates: People Don’t Realize What’s Coming">
        <div style={{ display: "flex" }}>
          <p>
            Tech Jobs Won’t Exist in 5 Years In the 16th century, there was a
            man by the name of Nostradamus. He was a man with the gift of
            foresight. Some say he predicted the rise of Napoleon, the French
            Revolution,3
          </p>
          <Image
            width={150}
            src="https://miro.medium.com/v2/resize:fill:112:112/1*urHuVuvyVcj0azXu66-3TA.png"
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Tag color="gray">Programing</Tag>
            <p>13 min read</p>
            <p>Because you follow Future</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <MinusOutlined />
            <InboxOutlined />
            <MoreOutlined />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Blog;
