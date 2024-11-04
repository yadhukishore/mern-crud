import { LayoutGrid, Cog, Undo2, Printer, Instagram, Inbox, PanelsTopLeft, ChartPie } from 'lucide-react';

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
      
      <button className="flex flex-col items-center space-y-1 p-2  rounded-lg hover:bg-gray-100 p-1">
        <LayoutGrid className="w-5 h-5 text-gray-600" />
        <span className="text-xs text-gray-600 text-xs ">Dashboard</span>
      </button>
      <button className="flex flex-col items-center space-y-1 p-2 rounded-lg hover:bg-gray-100">
        <Inbox className="w-5 h-5 text-gray-600" />
        <span className="text-xs text-gray-600">Configure</span>
      </button>
      <button className="flex flex-col items-center space-y-1 p-2 rounded-lg hover:bg-gray-100">
      <PanelsTopLeft className="w-5 h-5 text-gray-600" />
        <span className="text-xs text-gray-600">Website</span>
      </button>
      <button className="flex flex-col items-center space-y-1 p-2 rounded-lg hover:bg-gray-100">
      <Printer className="w-5 h-5 text-gray-600" />
        <span className="text-xs text-gray-600">Printer</span>
      </button>
      <button className="flex flex-col items-center space-y-1 p-2 rounded-lg hover:bg-gray-100">
        <Instagram className="w-5 h-5 text-gray-600" />
        <span className="text-xs text-gray-600">Insta Snap</span>
      </button>
      <button className="flex flex-col items-center space-y-1 p-2 rounded-lg hover:bg-gray-100">
      <ChartPie className="w-5 h-5 text-gray-600" />
        <span className="text-xs text-gray-600">Reports</span>
      </button>
      <button className="flex flex-col items-center space-y-1 p-2 rounded-lg hover:bg-gray-100">
        <Cog className="w-5 h-5 text-gray-600" />
        <span className="text-xs text-gray-600">Settings</span>
      </button>

      <div className="mt-auto py-5">
        <button className="flex flex-col items-center space-y-1 p-2 outline outline-gray-100  rounded-lg hover:bg-gray-100">
        <Undo2  className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </aside>
  );
};

export default IconSidebar;