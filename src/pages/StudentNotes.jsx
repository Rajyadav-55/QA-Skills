import React, { useState } from "react";
import { FaFilePdf, FaFileAlt } from "react-icons/fa";

const sampleNotes = [
  { title: "Math PYQ 2022", type: "pdf", link: "#" },
  { title: "Physics Formula Sheet", type: "doc", link: "#" },
  { title: "Chemistry Notes - Organic", type: "pdf", link: "#" },
];

const StudentNotes = () => {
  const [notes] = useState(sampleNotes); // In future, fetch from backend

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Study Materials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.map((note, index) => (
          <a
            key={index}
            href={note.link}
            className="border border-blue-300 p-5 rounded-lg hover:shadow-md flex items-center space-x-4 bg-blue-50 hover:bg-blue-100 transition"
            target="_blank"
            rel="noreferrer"
          >
            <div className="text-blue-600 text-3xl">
              {note.type === "pdf" ? <FaFilePdf /> : <FaFileAlt />}
            </div>
            <div>
              <h3 className="font-semibold text-lg">{note.title}</h3>
              <p className="text-sm text-gray-500">{note.type.toUpperCase()} File</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default StudentNotes;
