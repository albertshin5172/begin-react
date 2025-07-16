import React from 'react';

function Hello({ color, name = "TEST" }) {
  return <div style={{ color }}>안녕하세요 {name}</div>
}

Hello.defaultProps = {
  name: 'COMMIT TEST'
}

export default Hello;