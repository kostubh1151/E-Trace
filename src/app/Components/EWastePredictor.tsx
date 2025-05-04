"use client";

import React, { useState, useRef } from "react";
import * as tf from "@tensorflow/tfjs";

const EwastePredictor: React.FC = () => {
  const [prediction, setPrediction] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const labels: string[] = ["Keyboard", "Laptop", "CRT Monitor", "Mobile Phone", "Mouse", "Others"];

  const loadModel = async (): Promise<tf.LayersModel> => {
    const model = await tf.loadLayersModel(
      "https://teachablemachine.withgoogle.com/models/aHFodwurD/model.json"
    );
    return model;
  };

  const preprocessImage = (img: HTMLImageElement): tf.Tensor => {
    const fromPixels = tf.browser.fromPixels(img);
    const [h, w] = fromPixels.shape.slice(0, 2);
    const shorterSide = Math.min(h, w);
    const startY = Math.floor((h - shorterSide) / 2);
    const startX = Math.floor((w - shorterSide) / 2);
    const cropped = fromPixels.slice([startY, startX, 0], [shorterSide, shorterSide, 3]);

    const tensor = cropped
      .resizeBilinear([224, 224])
      .toFloat()
      .div(tf.scalar(255.0))
      .expandDims();

    return tensor;
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setLoading(true);
    setPrediction(null);
    const img = new Image();
    const objectUrl = URL.createObjectURL(file);
    img.src = objectUrl;
    setPreviewUrl(objectUrl);

    img.onload = async () => {
      const model = await loadModel();
      const tensor = preprocessImage(img);

      const predictions = model.predict(tensor) as tf.Tensor;
      const predictionData = await predictions.data();

      const predictionArray = Array.from(predictionData);
      const maxIndex = predictionArray.indexOf(Math.max(...predictionArray));
      const topPrediction = labels[maxIndex];

      setPrediction(topPrediction);
      setLoading(false);
    };

    img.onerror = () => {
      alert("Failed to load image. Please try a different file.");
      setLoading(false);
    };
  };

  const handleReset = () => {
    setPrediction(null);
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="flex items-center justify-center ">

      {/* Predictor Box — aligned left */}
      <div className="p-8 border rounded-2xl shadow-lg bg-white max-w-4xl w-full hover:shadow-2xl transition-shadow duration-300">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">E-Waste Image Prediction</h2>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          ref={fileInputRef}
          className="mb-4 block w-full text-sm text-gray-700 file:mr-4 file:py-3 file:px-6 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-green-100 file:text-green-800 hover:file:bg-green-200 transition"
        />

        {previewUrl && (
          <div className="mb-4">
            <img
              src={previewUrl}
              alt="Preview"
              className="rounded-md w-full h-77 object-cover border shadow-sm"
            />
          </div>
        )}

        {loading && <p className="text-blue-600 text-base mt-2 text-center animate-pulse">Predicting... Please wait.</p>}

        {prediction && !loading && (
          <div className="mt-4 text-center">
            <p className="font-semibold text-gray-700 text-lg">Predicted Type:</p>
            <p className="text-green-600 text-3xl font-extrabold mt-2">{prediction}</p>
          </div>
        )}

        <div className="flex justify-between mt-6">
          <button
            onClick={handleReset}
            className="bg-red-100 text-red-700 px-4 py-2 rounded hover:bg-red-200 transition"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default EwastePredictor;
