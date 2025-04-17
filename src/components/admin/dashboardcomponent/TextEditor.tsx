// components/TextEditor.tsx
"use client";
import { useState } from 'react';
import "./texteditor.css";

export default function TextEditor() {
  const [content, setContent] = useState<string>(`
    Praesent et libero non erat molestie eleifend a effictur lorem. Nulla congue nisi nulla, id de suscipit quam lobortis sit amet. Nullam eu enim não mauris tincidunt lacinia eget sente-se amet augue.
    
    Vivamus bibendum effictur libero a pharetra. Sed vulputate eros vitae neque tempor, nec maximus augue aliquam.
  `);

  return (
    <div className="text-editor-container">
      {/* Toolbar */}
      <div className="toolbar grid grid-cols-9 gap-1 mb-4">
        {['B', 'I', 'U', 'S', 'X', 'Y', 'Z', 'X', 'Y'].map((item, index) => (
          <button 
            key={index}
            className="toolbar-btn p-2 border rounded hover:bg-gray-100"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Format Options */}
      <div className="format-options flex gap-4 mb-4">
        <select className="p-2 border rounded">
          <option>Format</option>
          <option>Paragraph</option>
          <option>Heading 1</option>
        </select>
        <select className="p-2 border rounded">
          <option>Font</option>
          <option>Arial</option>
          <option>Times New Roman</option>
        </select>
        <select className="p-2 border rounded">
          <option>Size</option>
          <option>12pt</option>
          <option>14pt</option>
        </select>
        <div className="flex gap-2 items-center">
          <span>A:</span>
          <span>X:</span>
          <span>Y</span>
        </div>
      </div>

      {/* Content Area */}
      <div 
        className="content-area p-4 border rounded min-h-[200px]"
        contentEditable
        dangerouslySetInnerHTML={{ __html: content }}
        onInput={(e) => setContent(e.currentTarget.innerHTML)}
      />
    </div>
  );
}