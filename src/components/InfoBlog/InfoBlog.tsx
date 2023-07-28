import { Avatar, Card } from "antd";
import Meta from "antd/es/card/Meta";
import { FC } from "react";

interface InfoBlogProps {}

const InfoBlog: FC<InfoBlogProps> = () => {
  return (
    <>
      <Card title="An epilogue to my time working at Twitter">
        <Meta
          avatar={
            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
          }
          title="Card title"
          description="This is the description"
        />
		
      </Card>
    </>
  );
};

export default InfoBlog;
