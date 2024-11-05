import { LayoutGrid, Cog, Undo2, Printer, Instagram, Inbox, PanelsTopLeft, ChartPie } from 'lucide-react';

const IconSidebar = () => {
  const sidebarItems = [
    { icon: <LayoutGrid />, label: 'Dashboard' },
    { icon: <Inbox />, label: 'Configure' },
    { icon: <PanelsTopLeft />, label: 'Website' },
    { icon: <Printer />, label: 'Printer' },
    { icon: <Instagram />, label: 'Insta Snap' },
    { icon: <ChartPie />, label: 'Reports' },
    { icon: <Cog />, label: 'Settings' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full bg-white border-r border-gray-200 flex flex-col items-center py-4 
                      w-12 sm:w-16 transition-all duration-300">
      <div className="mb-4 sm:mb-6">
        <img 
          src="/Blue_check.svg.png" 
          alt="Logo" 
          className="w-6 h-6 sm:w-8 sm:h-8"
        />
      </div>
      
      <div className="flex flex-col space-y-2 sm:space-y-6">
        {sidebarItems.map((item, index) => (
          <button 
            key={index}
            className="flex flex-col items-center justify-center rounded-lg hover:bg-gray-100 
                       p-1.5 sm:p-2 transition-all duration-300 w-10 sm:w-auto"
          >
            <div className="w-5 h-5 text-gray-600">
              {item.icon}
            </div>
            <span className="text-[10px] sm:text-xs text-gray-600 mt-0.5 sm:mt-1 
                           hidden sm:inline-block">
              {item.label}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-auto pb-3 sm:pb-5">
        <button className="flex flex-col items-center justify-center p-1.5 sm:p-2 
                         outline outline-gray-100 rounded-lg hover:bg-gray-100 
                         w-10 sm:w-auto transition-all duration-300">
          <Undo2 className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </aside>
  );
};

export default IconSidebar;