import { useState } from "react";

export const useCategoriesList = () => {
  const [showMoreCategories, setShowMoreCategories] = useState(false);

  const toggleShowCategories = () => {
    setShowMoreCategories(!showMoreCategories);
  };

  return { showMoreCategories, toggleShowCategories };
};
