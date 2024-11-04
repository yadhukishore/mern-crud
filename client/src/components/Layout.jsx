import { Outlet } from 'react-router-dom';
import { Users, FileText, ClipboardList, Database } from 'lucide-react';

const Layout = () => {
  return (
    <div className="flex ml-16"> {/* Added margin to account for fixed sidebar */}
      {/* Second Sidebar - Navigation */}
      <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
        <div className="py-4 px-4">
          <h2 className="text-xs font-semibold text-gray-500 mb-4">REGISTRATION</h2>
          <nav className="space-y-1">
            <button className="flex items-center w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
              <ClipboardList className="w-4 h-4 mr-3" />
              Orders
            </button>
            <button className="flex items-center w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
              <FileText className="w-4 h-4 mr-3" />
              Order Summary
            </button>
            <button className="flex items-center w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
              <Users className="w-4 h-4 mr-3" />
              Attendees
            </button>
          </nav>

          <h2 className="text-xs font-semibold text-gray-500 mt-6 mb-4">ATTENDANCE</h2>
          <nav className="space-y-1">
            <button className="flex items-center w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
              <ClipboardList className="w-4 h-4 mr-3" />
              Attendance
            </button>
            <button className="flex items-center w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
              <FileText className="w-4 h-4 mr-3" />
              Attendance Summary
            </button>
          </nav>

          <h2 className="text-xs font-semibold text-gray-500 mt-6 mb-4">CHECKIN INSTANCE</h2>
          <nav className="space-y-1">
            <button className="flex items-center w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
              <Database className="w-4 h-4 mr-3" />
              Instance
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