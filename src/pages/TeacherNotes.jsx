import { useState } from "react";

const TeacherNotes = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [noteTitle, setNoteTitle] = useState("");
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setUploadSuccess(false);
  };

  const handleTitleChange = (e) => {
    setNoteTitle(e.target.value);
  };

  const handleUpload = (e) => {
    e.preventDefault();

    if (!selectedFile || !noteTitle) {
      alert("Please select a file and provide a title.");
      return;
    }

    // This is a placeholder — replace this with actual backend integration
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("title", noteTitle);

    console.log("Uploading:", noteTitle, selectedFile.name);
    setUploadSuccess(true);
    setNoteTitle("");
    setSelectedFile(null);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">
        Upload Study Material / Question Papers
      </h2>

      <form onSubmit={handleUpload} className="space-y-6">
        <div>
          <label className="block font-medium mb-1">Title of Notes</label>
          <input
            type="text"
            value={noteTitle}
            onChange={handleTitleChange}
            className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="e.g. Physics PYQ 2024"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Choose File (PDF/DOCX)</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="w-full"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800 transition"
        >
          Upload Notes
        </button>

        {uploadSuccess && (
          <p className="text-green-600 font-medium text-center">
            Notes uploaded successfully! ✅
          </p>
        )}
      </form>
    </div>
  );
};

export default TeacherNotes;
