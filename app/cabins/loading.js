import Spinner from "@/app/_components/Spinner";

export default function LoadingCabins() {
  return (
    <div className="grid items-center justify-center">
      <Spinner />
      <p>Loading cabins</p>
    </div>
  );
}
