"use client";

import { useState } from "react";
import { PencilIcon, TrashIcon, PlusIcon, CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";

// Definir el tipo para los ítems
type Item = {
  id: number;
  value: string;
};

export default function Page() {
  // Especificar el tipo de items como un array de Item
  const [items, setItems] = useState<Item[]>([]);
  const [newItem, setNewItem] = useState("");
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Estado para el mensaje de error
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para el modal
  const [itemToDelete, setItemToDelete] = useState<number | null>(null); // ID del ítem a eliminar

  const handleAddItem = () => {
    if (!newItem.trim()) {
      setErrorMessage("El campo no puede estar vacío."); // Mostrar mensaje de error
      return;
    }
    const newItemWithId: Item = { id: Date.now(), value: newItem };
    setItems([...items, newItemWithId]);
    setNewItem("");
    setErrorMessage(""); // Limpiar mensaje de error
  };

  const handleOpenModal = (id: number) => {
    setItemToDelete(id);
    setIsModalOpen(true);
  };

  const handleDeleteItem = () => {
    if (itemToDelete !== null) {
      const newItems = items.filter((item) => item.id !== itemToDelete);
      setItems(newItems);
      setIsModalOpen(false);
      setItemToDelete(null);
    }
  };

  const handleEditItem = (id: number) => {
    setEditIndex(id);
    const itemToEdit = items.find((item) => item.id === id);
    setEditValue(itemToEdit?.value || "");
  };

  const handleUpdateItem = () => {
    const updatedItems = items.map((item) =>
      item.id === editIndex ? { ...item, value: editValue } : item
    );
    setItems(updatedItems);
    setEditIndex(null);
    setEditValue("");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Simple CRUD con Next.js</h1>

      {/* Input para añadir un nuevo item */}
      <div className="w-3/5 mx-auto mb-4 flex gap-2">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Añadir nuevo item"
          className="border border-gray-300 p-2 rounded-lg flex-grow"
        />
        <button
          onClick={handleAddItem}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center"
        >
          <PlusIcon className="w-5 h-5 mr-2" />
          Añadir
        </button>
      </div>
      
      {/* Mensaje de error si el campo está vacío */}
      {errorMessage && (
        <p className="text-red-500 text-center mb-4">{errorMessage}</p>
      )}

      {/* Lista de items con opciones para editar y eliminar */}
      <ul className="w-3/5 mx-auto space-y-4">
        {items.map((item) => (
          <li key={item.id} className="border-b pb-2 flex justify-between items-center">
            {editIndex === item.id ? (
              <div className="flex gap-2 items-center w-full">
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  className="border border-gray-300 p-2 rounded-lg flex-grow"
                />
                <button
                  onClick={handleUpdateItem}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 flex items-center"
                >
                  <CheckIcon className="w-5 h-5 mr-2" />
                  Actualizar
                </button>
                <button
                  onClick={() => setEditIndex(null)}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 flex items-center"
                >
                  <XMarkIcon className="w-5 h-5 mr-2" />
                  Cancelar
                </button>
              </div>
            ) : (
              <div className="flex justify-between items-center w-full">
                <span>{item.value}</span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEditItem(item.id)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 flex items-center"
                  >
                    <PencilIcon className="w-5 h-5 mr-2" />
                    Editar
                  </button>
                  <button
                    onClick={() => handleOpenModal(item.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 flex items-center"
                  >
                    <TrashIcon className="w-5 h-5 mr-2" />
                    Eliminar
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Modal de confirmación */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-lg font-bold mb-4">Confirmar Eliminación</h2>
            <p>¿Estás seguro de que deseas eliminar este ítem?</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-2"
              >
                Cancelar
              </button>
              <button
                onClick={handleDeleteItem}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
