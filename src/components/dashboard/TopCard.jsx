export default function TopCard({
  title,
  number,
  onSetSelectedCard,
  selected,
}) {
  const selectedCard = (title) => {
    onSetSelectedCard(title);
    // console.log(title);
    console.log(selected);
  };
  return (
    <div>
      <div
        className={`border-2 p-6 rounded-lg bg-white flex flex-col justify-center items-center font-bold space-y-3 hover:cursor-pointer hover:border-blue-500 ${
          selected === title ? "border-blue-500" : "border-transparent"
        }`}
        onClick={() => selectedCard(title)}
      >
        <p
          className={`text-xl ${
            selected === title ? "text-blue-500" : "text-gray-400"
          }`}
        >
          {title}
        </p>
        <p className={`text-5xl ${selected === title && "text-blue-500"}`}>
          {number}
        </p>
      </div>
    </div>
  );
}
