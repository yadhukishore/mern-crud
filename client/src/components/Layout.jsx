import { Outlet } from 'react-router-dom';
import { Users, FileText, ClipboardList, ChartNoAxesColumn, FileX2, UserRoundCheck, TicketMinus } from 'lucide-react';

const Layout = () => {
  return (
    <div className="flex ml-16">
      <aside className="w-64 bg-white border-r border-gray-200 min-h-screen hidden md:block"> {/* Hide on small screens */}
        <div className="py-4 px-4">
          <h2 className="text-xs font-semibold text-gray-500 mb-4">REGISTRATION</h2>
          <nav className="space-y-1">
            <button className="flex items-center w-full px-3 py-2 text-sm text-gray-700 group hover:bg-gray-100 rounded-md">
              <ClipboardList className="w-4 h-4 mr-3" />
              <span className="group-hover:font-bold group-hover:text-black">Orders</span>
            </button>
            <button className="flex items-center w-full px-3 py-2 text-sm text-gray-700 group hover:bg-gray-100 rounded-md">
              <ChartNoAxesColumn className="w-4 h-4 mr-3" />
              <span className="group-hover:font-bold group-hover:text-black">Order Summary</span>
            </button>
            <button className="flex items-center w-full px-3 py-2 text-sm text-gray-700 group hover:bg-gray-100 rounded-md">
              <Users className="w-4 h-4 mr-3" />
              <span className="group-hover:font-bold group-hover:text-black">Attendees</span>
            </button>
            <button className="flex items-center w-full px-3 py-2 text-sm text-gray-700 group hover:bg-gray-100 rounded-md">
              <FileX2 className="w-4 h-4 mr-3" />
              <span className="group-hover:font-bold group-hover:text-black">Missed Registrations</span>
            </button>
            <button className="flex items-center w-full px-3 py-2 text-sm text-gray-700 group hover:bg-gray-100 rounded-md">
              <UserRoundCheck className="w-4 h-4 mr-3" />
              <span className="group-hover:font-bold group-hover:text-black">Approval</span>
            </button>
          </nav>

          <h2 className="text-xs font-semibold text-gray-500 mt-6 mb-4">ATTENDANCE</h2>
          <nav className="space-y-1">
            <button className="flex items-center w-full px-3 py-2 text-sm text-gray-700 group hover:bg-gray-100 rounded-md">
              <TicketMinus className="w-4 h-4 mr-3" />
              <span className="group-hover:font-bold group-hover:text-black">Attendance</span>
            </button>
            <button className="flex items-center w-full px-3 py-2 text-sm text-gray-700 group hover:bg-gray-100 rounded-md">
              <FileText className="w-4 h-4 mr-3" />
              <span className="group-hover:font-bold group-hover:text-black">Attendance Summary</span>
            </button>
          </nav>

          <h2 className="text-xs font-semibold text-gray-500 mt-6 mb-4">CHECKIN INSTANCE</h2>
          <nav className="space-y-1">
            <button className="flex items-center w-full px-3 py-2 text-sm text-gray-700 bg-gray-100 rounded-md">
              <TicketMinus className="w-4 h-4 mr-3 text-blue-500" />
              <span className="font-bold text-black">Instance</span>
            </button>
          </nav>
        </div>
      </aside>

      {/* Responsive Sidebar for Small Screens */}
      <aside className="w-16 bg-white border-r border-gray-200 min-h-screen md:hidden"> {/* Show only icons on small screens */}
        <div className="py-4 px-2">
          <nav className="space-y-1">
            <button className="flex items-center justify-center w-full p-2 text-gray-700 group hover:bg-gray-100 rounded-md">
              <ClipboardList className="w-6 h-6" />
            </button>
            <button className="flex items-center justify-center w-full p-2 text-gray-700 group hover:bg-gray-100 rounded-md">
              <ChartNoAxesColumn className="w-6 h-6" />
            </button>
            <button className="flex items-center justify-center w-full p-2 text-gray-700 group hover:bg-gray-100 rounded-md">
              <Users className="w-6 h-6" />
            </button>
            <button className="flex items-center justify-center w-full p-2 text-gray-700 group hover:bg-gray-100 rounded-md">
              <FileX2 className="w-6 h-6" />
            </button>
            <button className="flex items-center justify-center w-full p-2 text-gray-700 group hover:bg-gray-100 rounded-md">
              <UserRoundCheck className="w-6 h-6" />
            </button>
            <hr/>
            <button className="flex items-center justify-center w-full p-2 text-gray-700 group hover:bg-gray-100 rounded-md">
              <TicketMinus className="w-6 h-6" />
            </button>
            <button className="flex items-center justify-center w-full p-2 text-gray-700 group hover:bg-gray-100 rounded-md">
              <FileText className="w-6 h-6" />
            </button>
            <hr/>
            <button className="flex items-center bg-gray-100 justify-center w-full p-2 text-gray-700 group hover:bg-gray-100 rounded-md">
              <TicketMinus className="w-6 h-6 text-blue-500" />
            </button>
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 bg-gray-50 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
