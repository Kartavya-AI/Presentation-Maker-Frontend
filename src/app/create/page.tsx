"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export default function PresentationMakerPage() {
  const [topic, setTopic] = useState("");
  const [currentYear, setCurrentYear] = useState("2025");
  const [targetFunding, setTargetFunding] = useState("");
  const [companyStage, setCompanyStage] = useState("mid");
  const [targetMarket, setTargetMarket] = useState("");
  const [uniqueValueProp, setUniqueValueProp] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [taskId, setTaskId] = useState<string | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [statusMsg, setStatusMsg] = useState("");

  // Polling
  useEffect(() => {
    if (!taskId) return;
    const interval = setInterval(async () => {
      try {
        const { data } = await axios.get(
          `https://ppt-maker-977121587860.europe-west1.run.app/status/${taskId}`
        );

        console.log(data.status);
        
        setStatusMsg(data.message);

        if (data.status === "completed") {
          clearInterval(interval);
          setDownloadUrl(data.download_url);
          setLoading(false);
          setProgress(100);
        } else if (data.status === "processing") {
          setProgress((prev) => Math.min(prev + 10, 90));
        } else if (data.status === "error") {
          clearInterval(interval);
          setLoading(false);
        }
      } catch (err) {
        console.error(err);
        clearInterval(interval);
        setLoading(false);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [taskId]);

  const handleSubmit = async () => {
    if (!topic.trim()) return alert("Please enter a topic");
    setLoading(true);
    setProgress(10);
    setDownloadUrl(null);

    try {
      const { data } = await axios.post(
        "https://ppt-maker-977121587860.europe-west1.run.app/generate-presentation",
        {
          topic,
          current_year: currentYear,
          target_funding: targetFunding,
          company_stage: companyStage,
          target_market: targetMarket,
          unique_value_prop: uniqueValueProp,
        }
      );

      console.log(data.task_id);
      
      setTaskId(data.task_id);
      setStatusMsg("Task queued for processing...");
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!taskId) return;
    try {
      await axios.delete(
        `https://ppt-maker-977121587860.europe-west1.run.app/tasks/${taskId}`
      );
      alert("Task deleted");
      setTaskId(null);
      setDownloadUrl(null);
      setStatusMsg("");
      setProgress(0);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">AI Presentation Maker</h1>

      <div className="bg-white p-4 rounded shadow mb-6">
        <div className="mb-4">
          <label className="block font-medium mb-1">Topic</label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="border rounded p-2 w-full"
            placeholder="Enter presentation topic..."
          />
        </div>

        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Current Year</label>
            <input
              type="text"
              value={currentYear}
              onChange={(e) => setCurrentYear(e.target.value)}
              className="border rounded p-2 w-full"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Target Funding</label>
            <input
              type="text"
              value={targetFunding}
              onChange={(e) => setTargetFunding(e.target.value)}
              className="border rounded p-2 w-full"
            />
          </div>
        </div>

        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Company Stage</label>
            <input
              type="text"
              value={companyStage}
              onChange={(e) => setCompanyStage(e.target.value)}
              className="border rounded p-2 w-full"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Target Market</label>
            <input
              type="text"
              value={targetMarket}
              onChange={(e) => setTargetMarket(e.target.value)}
              className="border rounded p-2 w-full"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Unique Value Proposition</label>
          <input
            type="text"
            value={uniqueValueProp}
            onChange={(e) => setUniqueValueProp(e.target.value)}
            className="border rounded p-2 w-full"
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Generating..." : "Generate Presentation"}
        </button>

        {loading && (
          <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

        {statusMsg && <p className="mt-2 text-gray-600">{statusMsg}</p>}
      </div>

      {downloadUrl && (
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Download Your Presentation</h2>
          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Click here to download
          </a>
          <button
            onClick={handleDelete}
            className="ml-4 bg-red-500 text-white px-3 py-1 rounded"
          >
            Delete Task
          </button>
        </div>
      )}
    </div>
  );
}
