import React from 'react';

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => (
  <button {...props} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">{children}</button>
);

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <input {...props} className="px-3 py-2 border rounded" />
);

export const Table: React.FC<React.TableHTMLAttributes<HTMLTableElement>> = ({ children, ...props }) => (
  <table {...props} className="min-w-full divide-y divide-gray-200">{children}</table>
);

export const TableHeader: React.FC<React.HTMLAttributes<HTMLTableSectionElement>> = ({ children, ...props }) => (
  <thead {...props}>{children}</thead>
);

export const TableBody: React.FC<React.HTMLAttributes<HTMLTableSectionElement>> = ({ children, ...props }) => (
  <tbody {...props}>{children}</tbody>
);

export const TableRow: React.FC<React.HTMLAttributes<HTMLTableRowElement>> = ({ children, ...props }) => (
  <tr {...props}>{children}</tr>
);

export const TableCell: React.FC<React.TdHTMLAttributes<HTMLTableCellElement>> = ({ children, ...props }) => (
  <td {...props} className="px-6 py-4 whitespace-nowrap">{children}</td>
);

export const TableHead: React.FC<React.ThHTMLAttributes<HTMLTableCellElement>> = ({ children, ...props }) => (
  <th {...props} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{children}</th>
);

export const Label: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = ({ children, ...props }) => (
  <label {...props} className="block text-sm font-medium text-gray-700">{children}</label>
);

export const useToast = () => ({
  toast: (props: { title: string; description: string }) => {
    console.log(`Toast: ${props.title} - ${props.description}`);
  },
});

export const Checkbox: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <input type="checkbox" {...props} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
);

