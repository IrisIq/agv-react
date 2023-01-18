import { Radio } from 'antd';
import { useState } from 'react';
import './components/menu/menu.scss';

const options = [
  {
    label: '○',
    value: 'Apple',
  },
  {
    label: '|',
    value: 'Pear',
  },
  {
    label: 'X',
    value: 'Orange',
  },
];

export default function AgvIndex() {
  const [value3, setValue3] = useState('Apple');

  const onChange3 = ({ target: { value } }) => {
    console.log('radio3 checked', value);
    setValue3(value);
  };
  return (
    <div>
      {/* <Menu></Menu>
      <CanvasModal></CanvasModal> */}
      <Radio.Group
        options={options}
        onChange={onChange3}
        value={value3}
        optionType="button"
      />
      <div>
        <canvas id="canvas" width={1000} height={800}></canvas>
      </div>
    </div>
  );
}
