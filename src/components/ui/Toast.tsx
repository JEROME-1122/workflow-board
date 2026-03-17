type Props = {
  message: string;
  type?: "success" | "error";
};

function Toast({ message, type = "success" }: Props) {
  const styles = {
    success: "bg-green-500",
    error: "bg-red-500",
  };

  return (
    <div className={`text-white px-4 py-2 rounded ${styles[type]}`}>
      {message}
    </div>
  );
}

export default Toast;
