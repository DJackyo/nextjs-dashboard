import React, { lazy, Suspense, useEffect, useState } from 'react';
import SkeletonList from '../Skeleton/SkeletonList';
import CodeBlock from '../CodeBlock/CodeBlock';
import Accordion from '../Accordion/Accordion';

const ItemList = lazy(() => import('./ItemList'));

interface ListWithSuspenseProps {
  items: string[];
}
const codeString = `import React from 'react';

interface ItemListProps {
  items: string[];
}

const ItemList: React.FC<ItemListProps> = React.memo(({ items }) => {
  console.log('Rendering ItemList'); 
  return (
    <ul className=" text-surface ">
      {items.map((item, index) => (
        <li key={index} className=' border-b-2 border-neutral-100 py-4 '>{item}</li>
      ))}
    </ul>
  );
}, (prevProps, nextProps) => {
  // Compara las propiedades
  return JSON.stringify(prevProps.items) === JSON.stringify(nextProps.items);
});

export default ItemList;`
const codeString1 = `import React, { lazy, Suspense, useEffect, useState } from 'react';
import SkeletonList from '../Skeleton/SkeletonList';

const ItemList = lazy(() => import('./ItemList'));

interface ListWithSuspenseProps {
  items: string[];
}

const ListWithSuspense: React.FC<ListWithSuspenseProps> = ({ items }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer); 
  }, []);

  if (loading) {
    return <SkeletonList />; 
  }

  return (
    <Suspense fallback={<SkeletonList />}>
      <ItemList items={items} /> 
    </Suspense>
  );
};

export default ListWithSuspense;`
const accordionItems = [
  {
    header: "Código de ItemList",
    body: <CodeBlock code={codeString} language="typescript" />, 
    footer: "Uso de react.memo",
  },
  {
    header: "Código de ItemList con suspense",
    body: <CodeBlock code={codeString1} language="typescript" />, 
    footer: "Uso de suspense - lazy",
  },
];

const ListWithSuspense: React.FC<ListWithSuspenseProps> = ({ items }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer); 
  }, []);

  if (loading) {
    return <SkeletonList />; 
  }

  return (
    <Suspense fallback={<SkeletonList />}>
      <ItemList items={items} />
      <Accordion items={accordionItems} />  
    </Suspense>
  );
};

export default ListWithSuspense;
