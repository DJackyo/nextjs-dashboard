"use client";
import { lazy, Suspense, useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Counter from "./components/Counter/Counter";
import ItemList from "./components/ItemList/ItemList";

import SkeletonCounter from "./components/Skeleton/SkeletonCounter";
import ListWithSuspense from "./components/ItemList/ListWithSuspense";

export default function OptimizationMemorization() {
  const LazyCounter = lazy(() => import("./components/Counter/Counter"));

  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

  const addItem = () => {
    setItems((prevItems) => [...prevItems, `Item ${prevItems.length + 1}`]);
  };
  return (
    <ThemeProvider>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className=" p-4">
          {/* <Counter/> */}
          <Suspense fallback={<SkeletonCounter />}>
            <LazyCounter />
          </Suspense>
        </div>
        <div className=" p-4">
          <div className="relative flex flex-col my-6  shadow-sm border border-slate-200 rounded-lg w-100">
            <div className="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1 flex flex-col ">
              <span className="text-lg  font-medium">Listas</span>
              <button
                onClick={addItem}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              >
                Adicionar item
              </button>
            </div>
            <div className="p-4">
              {/* <ItemList items={items} /> */}
              <ListWithSuspense items={items} />
            </div>
            <div className="mx-3 border-t border-slate-200 pb-3 pt-2 px-1"></div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}