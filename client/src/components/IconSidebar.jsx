import { LayoutGrid, Cog, RotateCcw, Printer, Instagram, BarChart2, Inbox } from 'lucide-react';

const IconSidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-full w-16 bg-white border-r border-gray-200 flex flex-col items-center py-4 space-y-6">
      <div className="mb-6">
        <img 
          src="/Blue_check.svg.png" 
          alt="Logo" 
          className="w-8 h-8"
        />
      </div>
      
      <button className="p-2 rounded-lg hover:bg-gray-100">
        <LayoutGrid className="w-5 h-5 text-gray-600" />
      </button>
      <button className="p-2 rounded-lg hover:bg-gray-100">
        <Inbox className="w-5 h-5 text-gray-600" />
      </button>
      <button className="p-2 rounded-lg hover:bg-gray-100">
        <Printer className="w-5 h-5 text-gray-600" />
      </button>
      <button className="p-2 rounded-lg hover:bg-gray-100">
        <Instagram className="w-5 h-5 text-gray-600" />
      </button>
      <button className="p-2 rounded-lg hover:bg-gray-100">
        <BarChart2 className="w-5 h-5 text-gray-600" />
      </button>
      <button className="p-2 rounded-lg hover:bg-gray-100">
        <Cog className="w-5 h-5 text-gray-600" />
      </button>
      
      <div className="mt-auto">
        <button className="p-2 rounded-lg hover:bg-gray-100">
          <RotateCcw className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </aside>
  );
};

export default IconSidebar;