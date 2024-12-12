import { Search } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="flex-1 flex">
      <div className="flex-1 relative">
        <input
          type="text"
          placeholder="Поиск по объявлениям"
          className="w-full pl-4 pr-10 py-2 border rounded-l focus:outline-none focus:border-[#00AAFF]"
        />
        <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
      </div>
      <button className="bg-[#00AAFF] text-white px-6 rounded-r hover:bg-[#0095e0]">
        Найти
      </button>
    </div>
  );
}