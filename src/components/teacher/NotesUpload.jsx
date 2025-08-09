import { useState } from "react";

const NotesUpload = () => {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file || !title || !subject) {
      alert("Please fill all required fields.");
      return;
    }

    // Placeholder for actual backend logic
    console.log({ title, subject, description, file });

    alert("Note uploaded successfully (simulated)");
    setTitle("");
    setSubject("");
    setDescription("");
    setFile(null);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-purple-800">Upload Study Material</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title *</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mt-1 border border-gray-300 p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Subject *</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full mt-1 border border-gray-300 p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full mt-1 border border-gray-300 p-2 rounded"
            rows={3}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Upload File *</label>
          <input
            type="file"
            accept=".pdf,.docx,.ppt,.pptx"
            onChange={handleFileChange}
            className="mt-1"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default NotesUpload;
