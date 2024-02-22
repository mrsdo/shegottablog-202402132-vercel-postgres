/** @/components/shared/CustomFooter.tsx
 *
 * Function ---------------
 * A custom footer component associated with app/layout.tsx
 *
 * ------------------------
 *
 * @TODO:  Need to make sure footer floats at the bottom of every page regards of content length
 *
 * Author | workflow
 * mrsdo@29signals.com | project-202401191156-CustomFooter-component
 */
import { cn } from '@/lib/utils';
import { siteConfig } from '@/data/config/site.settings';
import Link from '@/components/shared/Link';
export default function CustomFooter({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        'mt-auto w-full bg-gradient-to-r from-white/5 via-white/60 to-white/5 backdrop-blur-sm dark:from-slate-700/5 dark:via-slate-700/60 dark:to-slate-700/5',
        className,
      )}
    >
      <div className="w-full text-center lg:flex lg:justify-center p-4 mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <span>{`© ${new Date().getFullYear()}`}</span>
        <span>{` • `}</span>
        <Link href="/">{siteConfig.businessName}</Link>
      </div>
    </footer>
  );
}
