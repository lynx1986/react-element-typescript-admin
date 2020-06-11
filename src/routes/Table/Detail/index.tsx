import React from 'react';
import { Prompt } from 'react-router-dom';

class Detail extends React.Component {

  render() {
    return (
      <div>
        <Prompt message='确认离开' />
        Detail
      </div>
    )
  }
}

export default Detail;