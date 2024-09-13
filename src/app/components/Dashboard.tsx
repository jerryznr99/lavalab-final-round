import React from "react";
import Icon from "@mdi/react";
import { mdiMagnify, mdiViewGrid, mdiMenu } from "@mdi/js";
import ItemCard from "./ItemCard";

const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-center gap-4 mb-9 h-17">
      <div className="flex-grow w-full">
        <div className="relative gap-2.5">
          <input
            type="text"
            placeholder="Search in Aro"
            className="w-full p-4 pl-11 border text-sm border-gray-300 rounded-lg text-primary"
          />
          <Icon
            path={mdiMagnify}
            size={0.8}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        </div>
      </div>

      <div className="flex-shrink-0 px-4 py-2 border border-gray-100 rounded-lg flex items-center space-x-3">
        <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center">
          <span className="font-bold text-lg">C</span>
        </div>
        <div>
          <p className="text-manrope font-semibold text-black text-sm">
            Cole Gawin
          </p>
          <p className="text-manrope font-semibold text-gray-400 text-sm">
            colegawin@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const projects = [
    { title: "Assignment 1", time: "1m ago" },
    { title: "Lab 3", time: "40m ago" },
    { title: "Workbook Ch. 3", time: "2 hrs ago" },
    { title: "Worksheet 2", time: "Apr 25, 2024" },
    { title: "Resume", time: "March 27, 2023" },
    { title: "Assignment 3", time: "Feb 20, 2023" },
  ];

  return (
    <div className="flex-1 p-9 bg-white overflow-x-auto min-w-[700px]">
      <DashboardHeader />

      <hr className="-mx-9" />

      <div className="pt-12 bg-white">
        <div className="flex justify-between items-center mb-6">
          <div className="text-manrope font-bold text-xl text-black">
            All Projects
          </div>
          <div className="flex items-center space-x-4">
            <button>
              <Icon path={mdiViewGrid} size={1} className="text-black" />
            </button>
            <button>
              <Icon path={mdiMenu} size={1} className="text-black" />
            </button>
          </div>
        </div>
        <div className="grid xl:grid-cols-3 grid-cols-2 gap-6 mt-4">
          {projects.map((project, index) => (
            <ItemCard key={index} title={project.title} time={project.time} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
