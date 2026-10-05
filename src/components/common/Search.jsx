import { Search as SearchIcon, ArrowRight } from "lucide-react";
import { useState } from "react";

const Search = ({ products, onSearch }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();

    setSearch(searchValue);

    const filteredProducts = products.filter((p) =>
      p.name.toLowerCase().includes(searchValue),
    );

    onSearch(filteredProducts);
  };

  return (
    <div className="w-full max-w-xl mx-auto font-sans px-4 sm:px-0">
      <div className="relative flex items-center bg-[#121827] border border-gray-800/80 hover:border-gray-700 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20 rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 shadow-2xl transition-all duration-300">
        <SearchIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mr-2.5 sm:mr-3 flex-shrink-0" />

        <input
          name="search"
          value={search}
          onChange={handleSearch}
          type="text"
          placeholder="Search products..."
          className="w-full bg-transparent text-white placeholder-gray-500 text-xs sm:text-sm font-medium focus:outline-none min-w-0"
        />

        <div className="flex items-center gap-1.5 sm:gap-2.5 ml-2 flex-shrink-0">
          <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-[10px] font-semibold text-gray-400 bg-[#0b0f19] border border-gray-700/80 rounded-md select-none">
            ⌘K
          </kbd>

          <button
            type="button"
            aria-label="Search"
            className="bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white p-1.5 sm:p-2 rounded-lg transition-all shadow-md shadow-indigo-600/30 active:scale-95 flex items-center justify-center"
          >
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
