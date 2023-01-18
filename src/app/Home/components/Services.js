import React from "react";
import ServiceCard from "./ServiceCard";

function Services() {
  const services = [
    {
      id: 1,
      name: "John Doe",
      field: "Painter",
      experience: "1-4",
      charge: 65,
      likes: 35,
      image: null,
    },
    {
      id: 2,
      name: "Lawrence Sam",
      field: "Plumber",
      experience: "5",
      charge: 25,
      likes: 23,
      image: null,
    },
    {
      id: 3,
      name: "Hana Adams",
      field: "Carpenter",
      experience: "0-2",
      charge: 70,
      likes: 40,
      image: null,
    },
    {
      id: 4,
      name: "Dan Gogh",
      field: "Carpenter",
      experience: "2-4",
      charge: 25,
      likes: 20,
      image: null,
    },
    {
      id: 5,
      name: "Jess Feruta",
      field: "Painter",
      experience: "7",
      charge: 30,
      likes: 35,
      image: null,
    },
    {
      id: 6,
      name: "Cina Cer",
      field: "Cleaner",
      experience: "1-4",
      charge: 95,
      likes: 14,
      image: null,
    },
    {
      id: 7,
      name: "John Doe",
      field: "Painter",
      experience: "1-4",
      charge: 65,
      likes: 35,
      image: null,
    },
    {
      id: 8,
      name: "Richard Clarence",
      field: "Electrician",
      experience: "3",
      charge: 120,
      likes: 469,
      image: null,
    },
  ];
  return (
    <div className="px-5 mb-32">
      <div className="grid grid-cols-4 gap-10">
        {services.map((service) => {
          return <ServiceCard id={service.id} service={service} />;
        })}
      </div>
      <div className="text-center my-10">
        <button className="btn-primary-outline my-5">Load more</button>
      </div>
    </div>
  );
}

export default Services;
