import React from "react";

export default function Input({ name, state, setState, label = false }) {
  return (
    <div className="flex gap-1 flex-col">
      {label && (
        <label htmlFor={name} className="text-lg px-1">
          {name}
        </label>
      )}
      <div>
        <input
          name={name}
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="text-sm focus:outline-none h-10 rounded-lg pl-5 pr-5 py-4 w-full border border-black rounded[5]"
        />
      </div>
    </div>
  );
}
