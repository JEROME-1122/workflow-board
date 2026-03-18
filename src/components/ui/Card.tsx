type Props = {
  children: React.ReactNode;
};

function Card({ children }: Props) {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg border">{children}</div>
  );
}

export default Card;
