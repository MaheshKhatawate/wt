import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useScrollToTop from "../../hooks/useScrollToTop";
import BodySelector from "../../components/main/BodySelector";
import ExerciseFilter from "../../components/main/ExerciseFilter";
import { physiotherapyExercises } from "../../config";

const Exercises = () => {
  useScrollToTop();
  const navigate = useNavigate();
  const [selectedMuscle, setSelectedMuscle] = useState(null);
  const [selectedMuscleName, setSelectedMuscleName] = useState("");
  const [filters, setFilters] = useState({
    type: "All",
    difficulty: "All",
  });

  const handleMuscleSelect = (muscleId, muscleName) => {
    setSelectedMuscle(muscleId);
    setSelectedMuscleName(muscleName);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  // Get unique filter options from all exercises
  const getAllFilterOptions = () => {
    let allTypes = new Set();
    let allDifficulties = new Set();

    if (selectedMuscle && physiotherapyExercises[selectedMuscle]) {
      physiotherapyExercises[selectedMuscle].forEach((ex) => {
        allTypes.add(ex.type);
        allDifficulties.add(ex.difficulty);
      });
    }

    return {
      types: Array.from(allTypes),
      difficulties: Array.from(allDifficulties),
    };
  };

  const filterOptions = getAllFilterOptions();

  const handleSearch = () => {
    if (selectedMuscle) {
      // Navigate to results page with query parameters
      navigate("/main/exercises/results", {
        state: {
          selectedMuscle,
          selectedMuscleName,
          filters,
        },
      });
    }
  };

  return (
    <div className="min-h-screen gradient-subtle py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header with gradient */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl mb-6 animate-float">
            <span className="text-2xl">🩺</span>
          </div>
          <h1 className="section-header gradient-text">Select Area of Pain</h1>
          <p className="section-subtitle">
            Click on the body part where you're experiencing discomfort to find
            targeted exercises
          </p>
        </div>

        {/* Side-by-side layout for desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Body Selector - Takes 3 columns on large screens */}
          <div className="lg:col-span-3 animate-slide-in-left">
            <div className="card-elevated p-6 sm:p-8 hover-glow-teal">
              <BodySelector
                onMuscleSelect={handleMuscleSelect}
                selectedMuscle={selectedMuscle}
              />
            </div>
          </div>

          {/* Filter Section - Takes 2 columns on large screens */}
          <div className="lg:col-span-2 animate-slide-in-right animation-delay-200">
            <div className="sticky top-24">
              <ExerciseFilter
                filters={filters}
                onFilterChange={handleFilterChange}
                selectedMuscle={selectedMuscle}
                selectedMuscleName={selectedMuscleName}
                onSearch={handleSearch}
                filterOptions={filterOptions}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exercises;
