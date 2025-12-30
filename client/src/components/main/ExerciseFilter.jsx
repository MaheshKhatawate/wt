import React from "react";

const ExerciseFilter = ({
  filters,
  onFilterChange,
  selectedMuscle,
  selectedMuscleName,
  onSearch,
  filterOptions,
}) => {
  // Default filter options if not provided
  const defaultExerciseTypes = [
    "All",
    "Mobility",
    "Stretching",
    "Strengthening",
    "Core Strengthening",
  ];
  const defaultDifficultyLevels = [
    "All",
    "Beginner",
    "Intermediate",
    "Advanced",
  ];

  // Use provided filter options or defaults
  const exerciseTypes = filterOptions?.types
    ? ["All", ...filterOptions.types.sort()]
    : defaultExerciseTypes;
  const difficultyLevels = filterOptions?.difficulties
    ? ["All", ...filterOptions.difficulties.sort()]
    : defaultDifficultyLevels;

  return (
    <div className="card-elevated p-6 hover-glow-teal">
      <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
        <span className="text-2xl">🎯</span>
        Filter Exercises
      </h3>

      {/* Selected Body Part */}
      {selectedMuscle && (
        <div className="mb-4 p-4 bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-900/30 dark:to-emerald-900/30 rounded-lg border-2 border-teal-200 dark:border-teal-700 animate-scale-in">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
            Area of Pain:
          </p>
          <p className="text-lg font-bold gradient-text">
            {selectedMuscleName}
          </p>
        </div>
      )}

      {!selectedMuscle && (
        <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border-2 border-gray-200 dark:border-gray-700 animate-scale-in">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            👈 Select a body part to view exercises
          </p>
        </div>
      )}

      <div className="space-y-4">
        {/* Exercise Type */}
        <div className="animate-fade-in-up animation-delay-100">
          <label
            htmlFor="exercise-type"
            className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
          >
            💪 Exercise Type
          </label>
          <select
            id="exercise-type"
            value={filters.type}
            onChange={(e) => onFilterChange("type", e.target.value)}
            disabled={!selectedMuscle}
            className="w-full px-4 py-2.5 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed transition-all duration-200 hover:border-teal-300"
          >
            {exerciseTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Difficulty */}
        <div className="animate-fade-in-up animation-delay-200">
          <label
            htmlFor="difficulty"
            className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
          >
            📊 Difficulty Level
          </label>
          <select
            id="difficulty"
            value={filters.difficulty}
            onChange={(e) => onFilterChange("difficulty", e.target.value)}
            disabled={!selectedMuscle}
            className="w-full px-4 py-2.5 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed transition-all duration-200 hover:border-teal-300"
          >
            {difficultyLevels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>

        {/* Search Button */}
        <div className="mt-6 animate-fade-in-up animation-delay-300">
          <button
            onClick={onSearch}
            disabled={!selectedMuscle}
            className={`w-full py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300 ${
              selectedMuscle
                ? "bg-gradient-to-r from-teal-500 to-emerald-600 text-white hover:from-teal-600 hover:to-emerald-700 shadow-md hover:shadow-xl hover:scale-105 active:scale-95 animate-glow"
                : "bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
            }`}
          >
            {selectedMuscle ? "🔍 Search Exercises" : "👆 Select Area of Pain"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExerciseFilter;
