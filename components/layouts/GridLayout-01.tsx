/** @/components/layout/PostGridLayout.jsx
 *
 * Function ---------------
 * Creates a new allCaseStudies layout in @/components/layout/PostGridLayout.tsx
 * using the LatestArticles.tsx layout as a guide.  Grid is  based on Tailwind CSS
 * Grid System and is added into tailwind.config.js to extend the theme.
 *
 * ------------------------
 *
 * Author| workflow
 * mrsdo@29signals.com | project-07-29s-202401111300-new-layout-postgridsimple
 */

// Import content

import Link from '@/components/shared/Link';
import { siteConfig } from '@/data/config/site.settings';
import NewsletterForm from '@shipixen/pliny/ui/NewsletterForm';
import { sortPosts, allCoreContent } from '@shipixen/pliny/utils/contentlayer';
import { allBlogs } from 'shipixen-contentlayer/generated';
import Image from 'next/image';
import Tag from '@/components/shared/Tag';

// Limit # of Posts
const MAX_DISPLAY = 6;
// Component

export default function PostGridLayout({
  numberOfPosts = MAX_DISPLAY,
  showImage = true,
}: {
  numberOfPosts?: number;
  showImage?: boolean;
}) {
  const sortedPosts = sortPosts(allBlogs);
  const posts = allCoreContent(sortedPosts);

  return (
    <>
      <div className="flex flex-col gap-2 mt-6">
        <div>
          <div className="relative rounded-xl overflow-auto p-8 ">
            <div className="flex flex-col gap-3 ">
              {!posts.length && 'No articles found.'}
              {posts.slice(0, MAX_DISPLAY).map((post) => {
                const { path, slug, date, title, summary, tags, images } = post;
                const imgSrc = images?.[0];

                return (
                  <div
                    key={slug}
                    className="grid grid-cols-4 gap-4 md:bg-white max-w-[544px] p-2 md:w-1/2 dark:md:bg-black rounded-md overflow-hidden relative md:shadow-sm md:hover:shadow-xl dark:md:hover:bg-slate-800 transition-all"
                  >
                    <div
                      className={`${
                        imgSrc && 'h-full'
                      }  overflow-hidden rounded-md border-1 border-gray-200 border-opacity-60 dark:border-gray-700 bg-white`}
                    >
                      {imgSrc &&
                        (path ? (
                          <Link
                            href={`/${path}`}
                            aria-label={`Link to ${title}`}
                          >
                            <Image
                              alt={title}
                              src={imgSrc}
                              className="object-cover object-center md:h-36 lg:h-48"
                              width={544}
                              height={306}
                            />
                          </Link>
                        ) : (
                          <Image
                            alt={title}
                            src={imgSrc}
                            className="object-cover object-center md:h-36 lg:h-48"
                            width={544}
                            height={306}
                          />
                        ))}

                      <div className="p-6">
                        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
                          {path ? (
                            <Link href={path} aria-label={`Link to ${title}`}>
                              {title}
                            </Link>
                          ) : (
                            title
                          )}
                        </h2>
                        <div className="flex flex-wrap relative mb-1">
                          {tags?.map((tag) => <Tag key={tag} text={tag} />)}
                        </div>
                        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </p>

                        {path && (
                          <Link
                            href={`/${path}`}
                            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            aria-label={`Link to ${title}`}
                          >
                            Learn more &rarr;
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {posts.length > MAX_DISPLAY && (
        <div className="mt-12 flex text-base font-medium leading-6">
          <Link
            href={siteConfig.allArticlesPath}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="See all articles"
          >
            See all projects &rarr;
          </Link>
        </div>
      )}

      {siteConfig.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  );
}
