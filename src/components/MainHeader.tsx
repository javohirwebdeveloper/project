import { Menu, MapPin } from 'lucide-react';
import { SearchBar } from './SearchBar';
import LogoW from '../assets/Logo-w.png';


export function MainHeader() {
  return (
    <div className="flex items-center gap-4">
      <button className="md:hidden">
        <Menu size={24} />
      </button>

      <a href="/">
        <div className='bg-blue-600 py-2 px-2 rounded-md'><img className='w-28'  src={LogoW} alt="" /></div>
      </a>

      <button className="hidden md:flex bg-[#00AAFF] text-white px-4 py-2 rounded hover:bg-[#0095e0]">
        <Menu className="mr-2" size={20} />
        Все категории
      </button>

      <SearchBar />

      <button className="hidden md:flex items-center text-gray-700 hover:text-[#00AAFF]">
        <MapPin size={20} className="mr-1" />
        Во всех регионах
      </button>
    </div>
  );
}