import React from "react";

export default function Pagination() {
  return (
    <nav aria-label="Page navigation">
      <ul className="inline-flex">
        <li>
          <button
            className="h-10 px-5 text-[#57481B] transition-colors 
          duration-150 bg-white rounded-l-lg focus:shadow-outline hover:bg-[#5d4037] hover:text-white"
          >
            Prev
          </button>
        </li>
        <li>
          <button
            className="h-10 px-5 text-white transition-colors 
          duration-150 bg-[#6d4c41] focus:shadow-outline"
          >
            1
          </button>
        </li>
        <li>
          <button
            className="h-10 px-5 text-[#57481B] transition-colors
           duration-150 bg-white focus:shadow-outline hover:bg-[#5d4037] hover:text-white"
          >
            2
          </button>
        </li>
        <li>
          <button
            className="h-10 px-5 text-[#57481B] transition-colors 
          duration-150 bg-white focus:shadow-outline hover:bg-[#5d4037] hover:text-white"
          >
            3
          </button>
        </li>
        <li>
          <button
            className="h-10 px-5 text-[#57481B] transition-colors 
          duration-150 bg-white rounded-r-lg focus:shadow-outline 
          hover:bg-[#5d4037] hover:text-white"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}
