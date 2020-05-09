import React from 'react';
import { Result, Button } from 'antd';

const NotFound = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="We're sorry, the page you're looking for it's not here 💩"
      extra={
        <Button type="primary" href="/">
          Back Home
        </Button>
      }
    />
  );
};

export default NotFound;
