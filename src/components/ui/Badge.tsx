type Props = {
  text: string;
};

function Badge({ text }: Props) {
  return (
    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
      {text}
    </span>
  );
}

export default Badge;
