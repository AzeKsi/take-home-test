import { CategoryProps } from "./category.props";
import * as HeroIcons from "@heroicons/react/24/solid";

export const Category = ({ title, icon }: CategoryProps) => {
  const Icon = HeroIcons[icon as keyof typeof HeroIcons];

  return (
    <a href="https://www.finder.com.au" target="_blank">
      <li className="category">
        {Icon && <Icon height={25} width={25} />}
        <span className="category-text">{title}</span>
      </li>
    </a>
  );
};
