type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "destructive";
  size?: "sm" | "md" | "lg";
};

function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
}: Props) {
  const base = "rounded font-medium";

  const variants = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-500 text-white",
    destructive: "bg-red-500 text-white",
  };

  const sizes = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };
  return (
    <div>
      <button
        onClick={onClick}
        className={`${base} ${variants[variant]} ${sizes[size]}`}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
