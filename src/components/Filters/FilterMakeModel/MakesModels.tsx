"use client";
import { Plus, X } from "lucide-react";
import Image from "next/image";
import { Button } from "../../ui/button";
import FilterHeader from "../FilterHeader";
import FilterLayout from "../FilterLayout";
import Modal from "./Modal";
import { useEffect, useState } from "react";
import { getMakeImage, parseFilterMakeModels } from "@/lib/utils";

export default function MakesModels({
  makeModels,
  setMakeModels,
}: {
  makeModels: string | null;
  setMakeModels: (makesModels: string | null) => void;
}) {
  const [selectedMakesModels, setSelectedMakesModels] = useState<
    FilterMakesModels[]
  >([]);

  useEffect(() => {
    if (selectedMakesModels.length === 0) {
      setMakeModels(null);
      return;
    }

    // Convert `selectedMakesModels` to query string format
    const queryString = selectedMakesModels
      .map(
        ({ make, models }) =>
          models.length == 0 ? `${make}` : `${make}:${models.join(",")}` //If no models are selected return only format "make" else return format "make:model,model,..."
      )
      .join(";");

    setMakeModels(queryString);
  }, [selectedMakesModels, setMakeModels]);

  // Function to parse query string into state
  //Query Param: {make:model,model,model;make:model,model,model } e.q. BMW:X series, 5 series;Mercedes-Benz:A Class, S Class
  useEffect(() => {
    if (makeModels) {
      const parsedData = parseFilterMakeModels(makeModels);
      setSelectedMakesModels(parsedData);
    } else {
      setSelectedMakesModels([]);
    }
  }, [makeModels]);

  return (
    <FilterLayout>
      <FilterHeader
        filterTitle="Make and model"
        handleResetClick={() => {
          if (selectedMakesModels.length != 0) setSelectedMakesModels([]);
        }}
      />
      <div className="flex flex-col gap-3 mt-5">
        {selectedMakesModels.map(({ make, models }) => (
          <div key={make} className="border-black border-2 rounded-lg">
            <div className="flex w-full items-center px-4 py-1">
              <div className="me-auto flex items-center gap-4">
                <Image
                  src={getMakeImage(make)}
                  width={24}
                  height={24}
                  alt={make.charAt(0) + make.slice(1) + " Logo"}
                />
                <div className="max-w-[150px]">
                  <h2>{make}</h2>
                  <p className="text-[#bcbcbc] text-sm truncate ">
                    {models.join(", ")}
                  </p>
                </div>
              </div>
              <button
                className="bg-black text-white rounded-full p-1 cursor-pointer active:scale-95 transition-transform duration-300 ease-in-out"
                onClick={() =>
                  setSelectedMakesModels(
                    selectedMakesModels.filter((o) => o.make !== make)
                  )
                }
              >
                <X className="size-3" />
              </button>
            </div>
          </div>
        ))}
        <Modal
          selectedMakesModels={selectedMakesModels}
          setSelectedMakesModels={setSelectedMakesModels}
        >
          <Button className="w-full font-light">
            <span>
              <Plus />
            </span>
            Add model
          </Button>
        </Modal>
      </div>
    </FilterLayout>
  );
}
