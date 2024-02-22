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

      <div className="flex flex-col mt-6">
        <div className="w-full flex flex-col items-center gap-8 md:gap-16">
          <div className="relative rounded-xl overflow-auto ">
            <div className="grid gap-3 sm:grid-cols-1 md:grid-col-2 lg:grid-cols-3 xl:grid-cols-3">
              {!posts.length && 'No articles found.'}
              {posts
                .filter((post) => post.tags.includes('case-study'))
                .slice(0, numberOfPosts)
                .map((post) => {
                  const { path, slug, date, title, summary, tags, images } = post;
                  const imgSrc = images?.[0];

                  return (
                    <div
                      key={slug}
                      className="bg-white max-w-[1024px] p-2 lg:w-full dark:bg-secondary-900 rounded overflow-hidden relative shadow-sm hover:shadow-xl dark:hover:bg-slate-800 transition-all"
                    >
                      <div>
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

                        <article className="flex flex-col gap-2 py-5 md:p-8">
                          <Link
                            href={`/${path}`}
                            aria-label={`Link to ${title}`}
                            className="text-gray-900 dark:text-gray-100 absolute left-0 top-0 w-full h-full"
                          >
                          <span className="sr-only">
                            Read more about {title}
                          </span>
                          </Link>

                          <h2 className="text-3xl leading-8 tracking-tight">
                            {title}
                          </h2>

                          <div className="flex flex-wrap relative mb-1">
                            {tags?.map((tag) => <Tag key={tag} text={tag} />)}
                          </div>
                          <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
                            {summary}
                          </p>

                          <div className="">
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
                        </article>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>


      {posts.length > MAX_DISPLAY && (
        <div className="mt-12 flex text-base font-medium leading-6 ">
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
