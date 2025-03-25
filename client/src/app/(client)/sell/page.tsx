import SellCarForm from "@/components/Forms/SellCarForm";

const Sell = () => {
  return (
    <div className="max-w-[320px] sm:max-w-[600px] lg:max-w-[1000px] mx-auto py-10 flex flex-col gap-5">
      <h1 className="text-center text-2xl font-bold">Sell your car</h1>
      <div className="card">
        <SellCarForm />
      </div>
    </div>
  );
};
export default Sell;
