"use client";

import React, { useState } from "react";
import CodeBlock from "../CodeBlock/CodeBlock";
import Accordion from "../Accordion/Accordion";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const codeString = `
"use client";

import React, { useState } from "react";
import CodeBlock from "../CodeBlock/CodeBlock";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <div className="relative flex flex-col my-6  shadow-sm border border-slate-200 rounded-lg w-96 my-4">
        <div className="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1">
          <span className="text-lg  font-medium">
            <h2>Contador</h2>
          </span>
        </div>
        <div className="p-4 flex items-center justify-center">
          <div className="flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full">
            <span className="text-lg font-bold">{count}</span>
          </div>
        </div>
        <div className="mx-3 border-t border-slate-200 pb-3 pt-2 px-1">
          <span className="text-sm  font-medium flex items-center justify-center">
            <button
              onClick={increment}
              className="mr-2 p-2 bg-blue-500 text-white"
            >
              Aumentar
            </button>
            <button onClick={decrement} className="p-2 bg-red-500 text-white">
              Disminuir
            </button>
          </span>
        </div>
      </div>      
    </div>
  );
};

export default Counter;

  `;
  const accordionItems = [
    {
      header: "Código de Counter",
      body: <CodeBlock code={codeString} language="typescript" />, 
      footer: "Uso de useState en React.",
    },
  ];
  return (
    <div>
      <div className="relative flex flex-col my-6  shadow-sm border border-slate-200 rounded-lg w-96 my-4">
        <div className="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1">
          <span className="text-lg  font-medium">
            <h2>Contador</h2>
          </span>
        </div>
        <div className="p-4 flex items-center justify-center">
          <div className="flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full">
            <span className="text-lg font-bold">{count}</span>
          </div>
        </div>
        <div className="mx-3 border-t border-slate-200 pb-3 pt-2 px-1">
          <span className="text-sm  font-medium flex items-center justify-center">
            <button
              onClick={increment}
              className="mr-2 p-2 bg-blue-500 text-white"
            >
              Aumentar
            </button>
            <button onClick={decrement} className="p-2 bg-red-500 text-white">
              Disminuir
            </button>
          </span>
        </div>
      </div>
      <Accordion items={accordionItems} />     
    </div>
  );
};

export default Counter;
