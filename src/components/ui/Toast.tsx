import { useEffect, useState } from "react";

type Props = {
  message: string;
  type?: "success" | "error";
  duration?: number;
};

function Toast({ message, type = "success", duration = 3000 }: Props) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  const styles = {
    success: "bg-green-500",
    error: "bg-red-500",
  };

  return (
    <div
      className={`text-white px-4 py-4 rounded ${styles[type]} w-100 text-center  fixed top-4 right-0  inline `}
    >
      {message}
    </div>
  );
}

export default Toast;
