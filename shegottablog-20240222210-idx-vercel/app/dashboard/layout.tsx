/** dashboard/layout.jsx
 *
 * Function ---------------
 * What does this file do?
 * Provides a custom UI for the dashboard.
 * First, you're importing the <SideNav /> component into your layout.
 * Any components you import into this file will be part of the layout.
 *
 * The <Layout /> component receives a children prop. This child can
 * either be a page or another layout. In your case, the pages inside
 * /dashboard will automatically be nested inside a <Layout />
 * ------------------------
 *
 * Author | workflow
 * mrsdo@29signals.com | GitHub: https://github.com/mrsdo
 */

import SideNav from '@/app/ui/dashboard/sidenav';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
