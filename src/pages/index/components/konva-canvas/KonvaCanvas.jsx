import { Button } from 'antd';
import React, { useState } from 'react';
import { Stage } from 'react-konva';
import { LineGrid } from './LineGrid.jsx';

export const KonvasCanvas = () => {
  const [scale, setScale] = useState(1); // 缩放比例
  const [stagePos, setStagePos] = React.useState({ x: 0, y: 0 }); // 页面 0 0 坐标位置
  const [CanvasWidth] = useState(600); // canvas 宽度
  const [CanvasHeight] = useState(400); // canvas 高度

  /**
   * 点击缩放
   */
  const clickScale = () => {
    const scaleVal = scale + 1 > 6 ? 1 : scale + 1;
    setScale(scaleVal);
  };
  return (
    <div className="konva" style={{ width: '600px', margin: '20px auto' }}>
      <Button onClick={clickScale}>缩放{scale}</Button>
      <div id="konva-canvas">
        <Stage
          x={stagePos.x}
          y={stagePos.y}
          width={CanvasWidth}
          height={CanvasHeight}
          strokeWidth={1}
          draggable
          onDragMove={(e) => {
            // 拖动事件，设置 stagePos 值
            const { x, y } = e.currentTarget.position();
            setStagePos({
              x: Math.round(x),
              y: Math.round(y),
            });
          }}
        >
          <LineGrid
            scale={scale}
            CanvasWidth={CanvasWidth}
            CanvasHeight={CanvasHeight}
            stagePos={stagePos}
          />
        </Stage>
      </div>
    </div>
  );
};
