import { Radio } from 'antd';
import { useState } from 'react';
import './menu.scss';

const options = [
  {
    label: '○',
    value: 'round',
  },
  {
    label: '|',
    value: 'line',
  },
  {
    label: '□',
    value: 'Orange',
  },
];

const Menu = () => {
  const [value3, setValue3] = useState('Apple');

  const onChange3 = ({ target: { value } }) => {
    console.log('radio3 checked', value);
    setValue3(value);
  };

  return (
    <Radio.Group
      options={options}
      onChange={onChange3}
      value={value3}
      optionType="button"
    />
  );
};
export default Menu;
