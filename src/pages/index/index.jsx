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

  // 点击2次重置按钮
  const resetValue = () => {
    setValue(null);
  };
  //  获取焦点
  const radioFocus = ({ target: { defaultValue } }) => {
    if (value === defaultValue) {
      setValue(null);
      return false;
    }
    setValue(defaultValue);
  };
  // 失去焦点
  const radioBlur = (e) => {
    // console.log(111);
    // console.log(e);
  };

  return (
    <div>
      <Radio.Group
        options={options}
        // onChange={onChange}
        onBlur={radioBlur}
        onFocus={radioFocus}
        value={value}
        optionType="button"
      />
      <CanvasModal selectionValue={value} resetValue={resetValue}></CanvasModal>
    </div>
  );
}
