import { useWatch } from "rc-field-form";
import React, { FC, useState, useEffect } from "react";
import { ReactSortable } from "react-sortablejs";

// 版本不能太高 6.1.1
interface ItemType {
  id: number;
  name: string;
}

const BasicSortFunction: FC = (props) => {
  const [state, setState] = useState<ItemType[]>([
    { id: 1, name: "shrek" },
    { id: 2, name: "fiona" },
    { id: 3, name: "whh" },
    { id: 4, name: "ff" },
  ]);

  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    console.log(state, 'state000')
  }, state)

  // list={state} setList={setState} 简单用法
  return (
    <ReactSortable list={state} setList={setState}>
      {state.map((item) => (
        <div key={item.id} style={{cursor:'pointer',backgroundColor: 'pink',margin: '20px 0px'}}>{item.name}</div>
      ))}
    </ReactSortable>
  );
};

export default BasicSortFunction