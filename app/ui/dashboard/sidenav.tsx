import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import M29Logo from '@/app/ui/m29-logo';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block dark:bg-secondary-900 overflow-hidden relative shadow-sm hover:shadow-xl dark:hover:bg-slate-800 transition-all"></div>
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md  p-3 bg-gray-50 text-sm font-medium  dark:bg-secondary-900 overflow-hidden relative shadow-sm hover:shadow-xl dark:hover:bg-slate-800 transition-all">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
