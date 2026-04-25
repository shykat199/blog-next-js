import Link from 'next/link'
import Container from '@/components/ui/container'
import { Post } from '@/features/posts/types'
import { log } from 'console'

type FeaturedPostsProps = {
  post: Post | null
}

export default function Hero(props: FeaturedPostsProps) {

    const post = props.post


  if (!post) return null

  const category = post.categories?? null
  const author = post.users ?? null

  return (
    <section className="max-w-container-max mx-auto px-6 py-16 lg:py-24">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="bg-primary-fixed text-primary px-3 py-1 rounded-full font-label-sm text-label-sm">{category.title}</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                 {new Date(post.created_at).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-on-background leading-tight">
              {post.title}
            </h1>
            <div className="font-body-lg text-body-lg text-on-surface-variant"
              dangerouslySetInnerHTML={{ __html: post.description }}
            />
            <div className="flex items-center gap-4 mt-4">
              <img alt="Author portrait"
                className="w-12 h-12 rounded-full object-cover grayscale opacity-90"
                data-alt="black and white soft focus portrait of an author wearing a minimalist dark turtleneck"
                src={author.image} />
              <div>
                <p className="font-label-sm text-label-sm text-on-background">
                  Written by</p>
                <p
                  className="font-body-md text-body-md text-on-surface-variant font-medium">
                  {author.name}</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2 relative group">
            <div className="absolute inset-0 bg-primary-fixed opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl z-10">
            </div>
            <img alt="Featured story image"
              className="w-full h-[500px] lg:h-[650px] object-cover rounded-xl shadow-[0_20px_40px_-15px_rgba(23,49,36,0.15)] transition-transform duration-700 hover:scale-[1.01]"
              data-alt="expansive minimalist living room with vast poured concrete walls warm indirect sunlight and a single stark black leather armchair"
              src={post.image} />
          </div>
        </div>
      </Container>
    </section>
  )
}