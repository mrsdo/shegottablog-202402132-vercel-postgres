/** app/ui/fonts.ts
 *
 * Function ---------------
 * Imports Google Fonts
 *
 * ------------------------
 *
 * Author | workflow
 * mrsdo@29signals.com | GitHub: https://github.com/mrsdo
 */

import { Inter, Roboto } from 'next/font/google';

export const baseFont = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-default',
});

export const inter = Inter({ subsets: ['latin'] });

export const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});
