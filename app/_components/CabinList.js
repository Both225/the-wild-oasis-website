import { getCabins } from "../_lib/data-service";
import CabinCard from "@/app/_components/CabinCard";

async function CabinList({ filter }) {
  const cabins = await getCabins();

  if (!cabins.length) return null;

  let displayedCabins;

  if (filter === "all") displayedCabins = cabins;

  if (filter === "small")
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);

  if (filter === "medium")
    displayedCabins = cabins.filter(
      (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7,
    );

  if (filter === "large")
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);

  return (
    <ul className="grid grid-cols-2 gap-12">
      {displayedCabins.map((cabin) => (
        <CabinCard key={cabin.id} cabin={cabin} />
      ))}
    </ul>
  );
}

export default CabinList;
