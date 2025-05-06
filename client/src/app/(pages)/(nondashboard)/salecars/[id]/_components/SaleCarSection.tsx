"use client";
import { useState } from "react";

const saleCarSections = [
  { title: "Specifications", id: "specifications" },
  { title: "Vehicle History", id: "vehicle-history" },
  { title: "Services", id: "services" },
];

const SaleCarSection = () => {
  const [section, setSection] = useState(saleCarSections[0].title);
  return (
    <>
      <section className="my-5 flex gap-10">
        {saleCarSections.map(({ title, id }) => (
          <h1
            key={id}
            className={`h-fit font-semibold text-lg saleCarSection ${section === title && "active"} cursor-pointer`}
            onClick={() => setSection(title)}
          >
            {title}
          </h1>
        ))}
      </section>
      {section === "Specifications" && (
        <div className="flex flex-col gap-2">
          <p className="text-sm">
            Details about the car specifications will go here.
          </p>
        </div>
      )}
      {section === "Vehicle History" && (
        <div className="flex flex-col gap-2">
          <p className="text-sm">
            Details about the vehicle history will go here.
          </p>
        </div>
      )}
      {section === "Services" && (
        <div className="flex flex-col gap-2">
          <p className="text-sm">Details about the services will go here.</p>
        </div>
      )}
    </>
  );
};
export default SaleCarSection;
