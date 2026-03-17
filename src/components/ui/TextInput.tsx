import React from "react";

function TextInput() {
  const [value, setValue] = React.useState("");
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">Enter Text</label>
      <input
        className="border p-2 rounded"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter text..."
      />
    </div>
  );
}

export default TextInput;
