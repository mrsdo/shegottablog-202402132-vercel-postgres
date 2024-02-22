/** components/landing/LandingCaseStudiesList.tsx
 *
 * Function ---------------
 * The Landing Case Studies List component presents a list of Case studies on a landing page. Each Case Studies showcases as a card.
 * After adding a new component, be sure to add it to the MDXCOmponents.tsx
 * ------------------------
 * @TODO:
 *  - Add new card layout
 *  - Include:
 *    - Sort by Tags and/or Workflow
 *    - Import children, ie: rss.mjs, LatestArticles.tsx, [...slug]/page.tsx
 *    - Image
 *    - Title
 *    - Author | Publish Date
 *    - Summary
 *    - Link to project article
 *
 * Author | workflow
 * mrsdo@29signals.com | project-202401191156-CustomFooter-component
 */

import Link from '@/components/shared/Link';
import Tag from '@/components/shared/Tag';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/shared/ui/card';
import { siteConfig } from '@/data/config/site.settings';
import { formatDate } from '@shipixen/pliny/utils/formatDate';
import NewsletterForm from '@shipixen/pliny/ui/NewsletterForm';
import { sortPosts, allCoreContent } from '@shipixen/pliny/utils/contentlayer';
import { allBlogs } from 'shipixen-contentlayer/generated';
import Image from 'next/image';

const MAX_DISPLAY = 3;

export default function LatestCaseStudies({
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
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold leading-tight md:leading-tight max-w-xs sm:max-w-none md:text-4xl">
          Latest Projects
        </h2>

        {!posts.length && 'No articles found.'}
        {posts.slice(0, numberOfPosts).map((post) => {
          const { path, slug, date, title, summary, tags, images, workflow } =
            post;
          const firstImage = images?.[0];

          return (
            <div key={slug} className="md max-w-[380px] p-4 md:w-1/2">
              <div
                className={`${
                  showImage && 'h-full'
                }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
              >
                {showImage && firstImage ? (
                  <div className="hidden lg:flex relative w-52 shrink-0 h-auto">
                    <Image
                      src={firstImage}
                      alt={title}
                      fill
                      className="object-cover object-center md:h-36 lg:h-48"
                    />
                  </div>
                ) : (
                  <Image
                    alt={title}
                    src={firstImage}
                    className="object-cover object-center md:h-36 lg:h-48"
                  />
                )}

                <div className="p-6">
                  <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
                    {path ? (
                      <Link
                        href={`/${path}`}
                        className="text-gray-900 dark:text-gray-100 absolute left-0 top-0 w-full h-full"
                      >
                        <span className="sr-only">Read more about {title}</span>
                      </Link>
                    ) : (
                      title
                    )}
                  </h2>
                  <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
                    {summary}
                  </p>

                  <div className="space-y-3">
                    <div className=" text-sm text-gray-500 dark:text-gray-400">
                      <span>{siteConfig.author}</span>
                      <span>{` • `}</span>
                      <span>{`${formatDate(date)}`}</span>
                      <span>{` • `}</span>
                      <span>{`${workflow}`}</span>
                    </div>
                    <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                      {summary}
                    </div>
                  </div>

                  <div className="flex flex-wrap relative">
                    {tags?.map((tag) => <Tag key={tag} text={tag} />)}
                  </div>

                  {posts.length > MAX_DISPLAY && (
                    <div className="mt-12 flex text-base font-medium leading-6">
                      <Link
                        href={siteConfig.allArticlesPath}
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label="See all projects"
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
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
