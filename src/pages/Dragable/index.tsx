// src/pages/Dragable/index.vue

import React from 'react';
import Draggable from 'react-draggable'

function DragCompnent () {
    
      const eventHandler = (e: unknow, data：any) => {
        console.log('Event Type', e.type);
        console.log({e, data});
      }

      const handleStart = () => {
        console.log('拖动开始');
      };
    
      const handleEnd = () => {
        console.log('拖动结束');
      };
      
    return (
        <div>
        <Draggable  onDrag={eventHandler} onStart={handleStart}   onStop={handleEnd}>
            <div>
            <span>按钮</span>
            </div>
        </Draggable>
      </div>
    )
}

export default DragCompnent


