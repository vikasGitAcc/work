"use client";

import { useRef, useEffect } from "react";
import { LayoutGrid } from "lucide-react";
import { useWorkspaceContext } from "../../../Context/Context";
import { columnDefinitions } from "../";

export default function FieldsDropdown() {
  const { visibleFields, setVisibleFields, showFields, setShowFields } =
    useWorkspaceContext();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowFields(false);
      }
    }

    if (showFields) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showFields, setShowFields]);

  const toggleField = (fieldId: keyof typeof visibleFields) => {
    setVisibleFields({
      ...visibleFields,
      [fieldId]: !visibleFields[fieldId],
    });
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setShowFields(!showFields)}
        className="flex items-center gap-1 px-2 py-1 text-xs text-gray-600 hover:bg-gray-100 rounded"
      >
        <LayoutGrid size={14} />
        <span>Fields</span>
      </button>

      {showFields && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-borderGray rounded-lg shadow-lg z-50 p-2 min-w-37.5">
          {columnDefinitions.map((column) => (
            <label
              key={column.id}
              className="flex items-center gap-2 px-2 py-1.5 hover:bg-gray-50 rounded cursor-pointer"
            >
              <input
                type="checkbox"
                checked={
                  visibleFields[column.id as keyof typeof visibleFields] ||
                  false
                }
                onChange={() =>
                  toggleField(column.id as keyof typeof visibleFields)
                }
                className="w-4 h-4 rounded border-borderGray accent-gray-800"
              />
              <span className="text-sm text-gray-700">{column.label}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
