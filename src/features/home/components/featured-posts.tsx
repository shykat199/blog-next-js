import Link from 'next/link'
import Container from '@/components/ui/container'
import { Post } from '@/features/posts/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'



type latestPostsProps = {
  latestPosts: Post []
}


export default async function FeaturedPosts(props: latestPostsProps) {

  const latestPosts = props.latestPosts

  if (!latestPosts || latestPosts.length === 0) return null

  const mainPost = latestPosts[0]
  const sidePosts = latestPosts.slice(1, 3)

  return (
    <section className="bg-surface-container-low py-20 lg:py-section-padding">
      <div className="max-w-container-max mx-auto px-6">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="font-headline-lg text-headline-lg text-on-background">Editor's Picks
          </h2>
          <a className="font-label-sm text-label-sm text-primary hover:underline underline-offset-4 flex items-center gap-1"
            href="#">
            View Archive
            <FontAwesomeIcon className="w-4 h-4" icon={faAngleRight} />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <Link
            href={`/blog/${mainPost.slug}`}
            className="group relative block overflow-hidden rounded-xl bg-surface shadow-[0_8px_30px_rgb(0,0,0,0.03)] transition-transform duration-300 hover:-translate-y-1 md:col-span-7"
          >
            <img
              alt={mainPost.title}
              className="h-72 w-full object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100"
              src={mainPost.image}
            />

            <div className="p-8">
              <span className="mb-3 block font-label-sm text-label-sm uppercase tracking-widest text-outline">
                {mainPost.categories?.title}
              </span>

              <h3 className="mb-3 font-headline-md text-headline-md text-on-background transition-colors group-hover:text-primary">
                {mainPost.title}
              </h3>

              <div
                className="line-clamp-2 font-body-md text-body-md text-on-surface-variant"
                dangerouslySetInnerHTML={{ __html: mainPost.description }}
              />
            </div>
          </Link>

          <div className="flex flex-col gap-6 md:col-span-5">
            {sidePosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex h-full overflow-hidden rounded-xl bg-surface shadow-[0_8px_30px_rgb(0,0,0,0.03)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative w-2/5">
                  <img
                    alt={post.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    src={post.image}
                  />
                </div>

                <div className="flex w-3/5 flex-col justify-center p-6">
                  <span className="mb-2 block font-label-sm text-label-sm uppercase tracking-widest text-outline">
                    {post.categories?.title}
                  </span>

                  <h3 className="font-headline-md text-[20px] leading-snug text-on-background transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}