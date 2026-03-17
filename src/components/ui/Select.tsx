function Select() {
  type Option = {
    value: string;
    label: string;
  };
  const options: Option[] = [
    { value: "emp1", label: "Emp 1" },
    { value: "emp2", label: "Emp 2" },
    { value: "emp3", label: "Emp 3" },
  ];

  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">Select an Option</label>
      <select className="border p-2 rounded">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
