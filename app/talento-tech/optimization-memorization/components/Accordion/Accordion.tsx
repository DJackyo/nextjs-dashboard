import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

interface AccordionItem {
  header: string; // Título del acordeón
  body: React.ReactNode; // Contenido principal (puede ser cualquier componente)
  footer: string; // Contenido del pie
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <Disclosure key={index} as="div" className="border rounded-lg">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between items-center  cursor-pointer p-4 w-full text-left">
                <h2 className="text-lg font-medium">{item.header}</h2>
                <span>
                  {open ? (
                    <ChevronUpIcon
                      className="h-5 w-5 text-gray-500"
                      aria-hidden="true"
                    />
                  ) : (
                    <ChevronDownIcon
                      className="h-5 w-5 text-gray-500"
                      aria-hidden="true"
                    />
                  )}
                </span>
              </Disclosure.Button>
              <Disclosure.Panel className="p-4 ">
                <p>{item.body}</p>
                <div className="border-t mt-2 pt-2 text-right text-sm text-gray-600">
                  {item.footer}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
};

export default Accordion;
