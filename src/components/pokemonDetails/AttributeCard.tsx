import ListCard from "../commons/ListCard.tsx";

type AttributeCardProps = {
  title: string;
  attribute: string[] | undefined;
};

const AttributeCard = ({ title, attribute }: AttributeCardProps) => {
  return (
    <div className="border p-4 rounded-xl">
      <h3 className="font-bold">{title}</h3>
      <div className="flex flex-wrap gap-2 mt-2">
        {attribute?.map((value) => {
          return <ListCard key={value}>{value}</ListCard>;
        })}
      </div>
    </div>
  );
};

export default AttributeCard;
