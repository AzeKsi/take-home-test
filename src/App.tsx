import { CategoriesList } from "./components/categories/categories-list";
import { categories } from "./constants/categories";

function App() {
  return (
    <>
      <h1>Join 2 million+ Australians finding better</h1>
      <p>
        Finder's team of 40+ experts will help you find the right choices in over 100 categories
      </p>
      <CategoriesList categories={categories} />
    </>
  );
}

export default App;
