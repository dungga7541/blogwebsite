import { FC } from "react";
import { Space, Button, Card, Steps, Skeleton, Avatar } from "antd";
import { InboxOutlined } from "@ant-design/icons";

const { Meta } = Card;

const { Step } = Steps;
interface Props {}

const RightTopics: FC<Props> = () => {
  return (
    <>
      <Card title="Time Line" bordered={false} style={{ width: 300 }}>
        <Steps direction="vertical" size="small" current={1}>
          <Step title="Finished" description="This is a description." />
          <Step title="In Progress" description="This is a description." />
          <Step title="Waiting" description="This is a description." />
        </Steps>
      </Card>
      <Card title="Card title" bordered={false} style={{ width: 300 }}>
        <Space size={[8, 16]} wrap>
          {new Array(8).fill(null).map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Button key={index}>Button</Button>
          ))}
        </Space>
      </Card>
      <Card title="Card title" bordered={false} style={{ width: 300 }}>
        <p>
          Click the <InboxOutlined /> on any story to easily add it to your
          reading list or a custom list that you can share.
        </p>
      </Card>
      <Card title="Card title" bordered={false} style={{ width: 300 }}>
        <Meta
          avatar={
            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
          }
          title="Card title"
          description="This is the description"
        />
        <Meta
          avatar={
            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
          }
          title="Card title"
          description="This is the description"
        />
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

export default RightTopics;
