import { AttacksType } from "../../models/pokemon.ts";
import ListCard from "../commons/ListCard.tsx";

type AttacksCardProps = {
  title: string;
  attacks: AttacksType[] | undefined;
};

const AttacksCard = ({ title, attacks }: AttacksCardProps) => {
  return (
    <div className="border p-4 rounded-xl">
      <h3 className="font-bold">{title}</h3>
      <div className="flex flex-wrap gap-2 mt-2">
        {attacks?.map((value) => {
          return (
            <ListCard key={value.name}>
              {value.name} ({value.type})
            </ListCard>
          );
        })}
      </div>
    </div>
  );
};

export default AttacksCard;
