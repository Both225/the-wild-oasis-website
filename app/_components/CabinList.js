import { getCabins } from "../_lib/data-service";
import CabinCard from "@/app/_components/CabinCard";

async function CabinList() {
  const cabins = await getCabins();

  if (!cabins.length) return null;

  return (
    <ul className="grid grid-cols-2 gap-12">
      {cabins.map((cabin) => (
        <CabinCard key={cabin.id} cabin={cabin} />
      ))}
    </ul>
  );
}

export default CabinList;
