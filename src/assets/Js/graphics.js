import { Circle, Rect } from 'react-konva';

const rectCompontent = (obj) => {
  console.log(obj);
  const { x, y, index, recfClick } = obj;
  return (
    <Rect
      x={x}
      y={y}
      width={10}
      height={10}
      fill={'pink'}
      id={index + ''}
      key={index}
      onClick={recfClick}
      draggable={true}
    />
  );
};

const circleCompontent = ({ x, y, index, recfClick }) => {
  return (
    <Circle
      x={x}
      y={y}
      width={10}
      height={10}
      fill={'pink'}
      id={index + ''}
      key={index}
      onClick={recfClick}
      draggable={true}
    />
  );
};

export default {
  rect: (obj) => rectCompontent(obj),
  circle: (obj) => circleCompontent(obj),
};
