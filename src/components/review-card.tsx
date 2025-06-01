"use client";

import { Star } from "lucide-react";
import { Card } from "./ui/card";

import React from "react";

function ReviewCard() {
  return (
    <Card className="p-4 max-w-xs bg-[#B6CEF3]">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-gray-200" />
        <div className="">
          <p className="font-medium text-lg">Ramesh Silva</p>
          <small className="capitalize">plantation manager</small>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-800">
        Course content is really good. The questions and answers helped me
        understand the material.
      </p>
    </Card>
  );
}

export default ReviewCard;
