import { useCategoriesList } from "./categories-list.effect";
import { CatogoriesListProps } from "./categories-list.props";
import { Category } from "./category/category";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export const CategoriesList = ({ categories }: CatogoriesListProps) => {
  const { toggleShowCategories, showMoreCategories } = useCategoriesList();

  const categoriesListClass = showMoreCategories ? "expanded" : "";
  const buttonText = showMoreCategories ? "Show less categories" : "Show more categories";
  const iconButton = showMoreCategories ? (
    <ChevronUpIcon height={22} width={22} />
  ) : (
    <ChevronDownIcon height={22} width={22} />
  );

  const handleTransitionEnd = () => {
    if (!showMoreCategories) {
      categories.slice(0, 4);
    }
  };

  return (
    <div className="categories-list-container">
      <ul
        className={`categories-list ${categoriesListClass}`}
        onTransitionEnd={handleTransitionEnd}>
        {categories.map((category, index) => (
          <Category key={index} title={category.title} icon={category.icon} />
        ))}
      </ul>
      <div className="categories-list-button">
        <button onClick={toggleShowCategories}>
          <span>{buttonText}</span>
          {iconButton}
        </button>
      </div>
    </div>
  );
};
