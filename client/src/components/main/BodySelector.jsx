import React, { useState } from "react";
import MenBody from "../body/MenBody.jsx";

const BodySelector = ({ onMuscleSelect, selectedMuscle }) => {
  const [view, setView] = useState("front");
  const [selectedPart, setSelectedPart] = useState(null);

  // Map body part IDs to friendly names
  const bodyPartNames = {
    "body-model-head": "Head",
    "body-model-neck_or_throat": "Neck",
    "body-model-oral_cavity": "Mouth",
    "body-model-eyes": "Eyes",
    "body-model-ears": "Ears",
    "body-model-nose": "Nose",
    "body-model-chest": "Chest",
    "body-model-upper_arm": "Arm",
    "body-model-forearm": "Forearm",
    "body-model-hand": "Hand",
    "body-model-upper_abdomen": "Upper Abdomen",
    "body-model-mid_abdomen": "Mid Abdomen",
    "body-model-lower_abdomen": "Lower Abdomen",
    "body-model-sexual_organs": "Groin",
    "body-model-thigh": "Thigh",
    "body-model-knee": "Knee",
    "body-model-lower_leg": "Calf",
    "body-model-foot": "Foot",
  };

  // Map SVG IDs to exercise part names matching exercisesData
  const svgToExerciseParts = {
    "body-model-head": "head",
    "body-model-chest": "chest",
    "body-model-upper_abdomen": "stomach",
    "body-model-mid_abdomen": "stomach",
    "body-model-lower_abdomen": "stomach",
    "body-model-upper_arm": "left_arm", // Note: will need to determine left/right
    "body-model-forearm": "left_arm",
    "body-model-hand": "left_hand",
    "body-model-thigh": "left_leg_upper",
    "body-model-knee": "left_leg_upper",
    "body-model-lower_leg": "left_leg_lower",
    "body-model-foot": "left_foot",
  };

  const handleBodyPartClick = (partId) => {
    // Map the SVG part ID to exercise category
    const exercisePart = svgToExerciseParts[partId] || partId;

    setSelectedPart(partId);
    onMuscleSelect(exercisePart, bodyPartNames[partId] || partId);
  };

  return (
    <div className="w-full">
      {/* Instructions */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          Select a Body Part
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Click on any body part to view exercises
        </p>

        {/* Front/Back Toggle */}
        <div className="flex justify-center gap-3 mb-6">
          <button
            onClick={() => setView("front")}
            className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
              view === "front"
                ? "bg-gradient-to-r from-teal-500 to-emerald-600 text-white shadow-lg scale-105"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-105"
            }`}
          >
            👤 Front View
          </button>
          <button
            onClick={() => setView("back")}
            className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
              view === "back"
                ? "bg-gradient-to-r from-teal-500 to-emerald-600 text-white shadow-lg scale-105"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-105"
            }`}
          >
            🔄 Back View
          </button>
        </div>
      </div>

      {/* Body Component with custom styling */}
      <div className="flex justify-center items-center">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 hover-glow-teal">
          <style>{`
            .sc-body-model-svg__path {
              fill: #d1d5db;
              transition: all 0.3s ease;
              cursor: pointer;
            }
            
            .sc-body-model-svg__path:hover {
              fill: #14B8A6;
              filter: drop-shadow(0 0 8px rgba(20, 184, 166, 0.6));
            }
            
            .sc-body-model-svg__path--active {
              fill: #10B981 !important;
              filter: drop-shadow(0 0 10px rgba(16, 185, 129, 0.8));
            }
            
            .sc-body-model {
              max-width: 300px;
              margin: 0 auto;
            }
            
            .sc-body-model-svg {
              width: 100%;
              height: auto;
              max-height: 500px;
            }
          `}</style>
          <div
            onClick={(e) => {
              const path = e.target;
              if (path && path.id) {
                handleBodyPartClick(path.id);
              }
            }}
          >
            <MenBody view={view} />
          </div>
        </div>
      </div>

      {/* Selected Part Info */}
      {selectedPart && (
        <div className="mt-6 text-center animate-scale-in">
          <div className="inline-block bg-gradient-to-r from-teal-500 to-emerald-600 border-2 border-teal-300 dark:border-teal-700 rounded-xl px-6 py-3 shadow-lg">
            <p className="text-lg font-bold text-white flex items-center gap-2 justify-center">
              <span>✓</span>
              Selected: {bodyPartNames[selectedPart]}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BodySelector;
