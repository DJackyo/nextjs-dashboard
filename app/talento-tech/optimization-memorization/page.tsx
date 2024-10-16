"use client";
import { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext"; // Asegúrate de importar correctamente
import Counter from "./components/Counter/Counter";
import ItemList from "./components/ItemList/ItemList";

export default function OptimizationMemorization() {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

  const addItem = () => {
    setItems((prevItems) => [...prevItems, `Item ${prevItems.length + 1}`]);
  };
  return (
    <ThemeProvider>
      <div className="flex justify-center items-center p-4 py-10">
        <Counter/>
        <div className="relative flex flex-col my-6  shadow-sm border border-slate-200 rounded-lg w-96">
        </div>
        <div className="relative flex flex-col my-6  shadow-sm border border-slate-200 rounded-lg w-96">
          <div className="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1 flex flex-col ">
            <span className="text-sm text-slate-600 font-medium">
              Listas
            </span>
            <button
              onClick={addItem}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Adicionar item
            </button>
          </div>
          <div className="p-4">
            <ItemList items={items} />
          </div>
          <div className="mx-3 border-t border-slate-200 pb-3 pt-2 px-1">
          
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
