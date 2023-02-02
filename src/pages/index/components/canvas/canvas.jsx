import graphics from '@/assets/Js/graphics.js';
import { useEffect, useRef, useState } from 'react';
import { Circle, Layer, Rect, Stage } from 'react-konva';
import { KonvasCanvas } from '../konva-canvas/KonvaCanvas.jsx';

export default function CanvasModal(props) {
  const { selectionValue, resetValue } = props;
  const circleRef = useRef(null);
  const [index, setIndex] = useState(0); // 序号
  const [clickTime, setClickTime] = useState(0); //点击次数
  // 显示图层图形
  const [pngList, setPngList] = useState([
    <Rect x={400} y={400} width={10} height={10} fill="red" key={'9999'} />,
  ]);

  useEffect(() => {
    console.log(circleRef);
    console.log(props);
    console.log(graphics);
    return;
  }, []);
  const recfClick = (evt) => {
    // console.log(evt);
    evt.cancelBubble = true;
  };

  // 点击画布添加图形
  const addPng = (e) => {
    if (!selectionValue) {
      return false;
    }
    // console.log(graphics[selectionValue](obj));
    setClickTime(1);
    const obj = {
      x: e.evt.offsetX,
      y: e.evt.offsetY,
      recfClick,
      index,
    };
    pngList.push(graphics[selectionValue](obj));
    resetValue();
    setIndex(index + 1);
  };

  return (
    <div>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onClick={addPng}
        ref={circleRef}
      >
        <Layer>
          <Rect width={50} height={50} fill="red" />
          <Circle x={200} y={200} stroke="black" radius={50} />
        </Layer>
        <Layer>{pngList}</Layer>
      </Stage>
      <KonvasCanvas></KonvasCanvas>
    </div>
  );
}
