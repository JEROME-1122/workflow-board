import React from "react";

function TextArea() {
  const [value, setValue] = React.useState("");
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">Enter the Description </label>
      <textarea
        className="border p-2 rounded"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter Description  "
      ></textarea>
    </div>
  );
}

export default TextArea;
