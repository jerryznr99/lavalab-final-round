import React from "react";
import Icon from "@mdi/react";
import { mdiFileDocument } from "@mdi/js";

interface ItemCardProps {
  title: string;
  time: string;
}

const ItemCard = ({ title, time }: ItemCardProps) => {
  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-100 min-w-[270px]">
      <div className="bg-gray-200 w-full h-44 flex items-center justify-center rounded-lg mb-4">
        <Icon path={mdiFileDocument} size={3} className="text-primary" />
      </div>

      <div className="text-left">
        <p className="font-semibold text-black">{title}</p>
        <p className="text-gray-700 text-sm">{time}</p>
      </div>
    </div>
  );
};

export default ItemCard;
