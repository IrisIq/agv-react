import { Radio } from 'antd';
import { useState } from 'react';
import CanvasModal from './components/canvas/Canvas.jsx';
import './components/menu/menu.scss';

const options = [
  {
    label: '○',
    value: 'circle',
  },
  {
    label: '|',
    value: 'line',
  },
  {
    label: '□',
    value: 'rect',
  },
];

export default function AgvIndex() {
  const [value, setValue] = useState(null);

  const onChange = ({ target: { value } }) => {
    console.log('radio3 checked', value);
    setValue(value);
  };

  // 点击2次重置按钮
  const resetValue = () => {
    console.log(3333);
    setValue(null);
  };

  const radioBlur = (e) => {
    console.log(111);
    console.log(e);
  };
  const radioFocus = (e) => {
    console.log(22222);
    console.log(e);
  };
  return (
    <div>
      <Radio.Group
        options={options}
        onChange={onChange}
        onBlur={radioBlur}
        onFocus={radioFocus}
        value={value}
        optionType="button"
      />
      <CanvasModal selectionValue={value} resetValue={resetValue}></CanvasModal>
    </div>
  );
}
