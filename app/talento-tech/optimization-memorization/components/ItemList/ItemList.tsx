import React from 'react';

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

export default ItemList;
