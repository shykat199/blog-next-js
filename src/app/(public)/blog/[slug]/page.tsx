import Container from '@/components/ui/container'
import { getPostBySlug } from '@/features/posts/queries'
import PostContent from '@/features/posts/components/post-content'
import PostMeta from '@/features/posts/components/post-meta'

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  return (
    <main>
      <article className="pt-16 pb-section-padding">
        <header className="max-w-[720px] mx-auto px-6 mb-12 text-center">
          <div
            className="inline-flex items-center space-x-2 text-primary uppercase font-label-sm text-label-sm mb-6 tracking-widest">
            <span>Design Theory</span>
            <span className="w-1 h-1 rounded-full bg-primary/30"></span>
            <span>Essay</span>
          </div>
          <h1 className="font-headline-xl text-headline-xl text-on-background mb-8">
            The Future of Minimalist Design
          </h1>
          <div
            className="flex items-center justify-center space-x-6 font-label-sm text-label-sm text-on-surface-variant">
            <div className="flex items-center space-x-3">
              <div
                className="w-10 h-10 rounded-full bg-surface-container overflow-hidden">
                <img alt="Author Avatar" className="w-full h-full object-cover"
                  data-alt="close up portrait of a young professional woman with soft natural lighting against a neutral background"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuADswkL2sakhttppCvPl-8hRkDRG2I3A7xQ5vIIWx6dpKH8QgADwu3YI0mYCtw8h8EFbgZfDf1jBNcrfuH-Ypmhbs8Mn1JWvVsh4FIJ6ZS_J4adG8aaOBTH4EoQJSTC8xdlJbamHswf7OWa20kxu7wu1p4Iaaug8xcsCBXrBg-uf0xvWgQMRYQtah1JahuP37xxuRb6GTnMHksAJ8judftqUWM5DfhhhZqKzy_9ZWkEP2U9BWP9UBolNPqdkbvr8xnB4yGELIiZwSc" />
              </div>
              <span className="font-semibold text-on-background text-sm">Elena
                Rostova</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
            <span>October 24, 2024</span>
            <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
            <span>8 min read</span>
          </div>
        </header>
        <div className="max-w-container-max mx-auto px-6 mb-16">
          <div
            className="w-full h-[614px] min-h-[400px] bg-surface-container rounded-xl overflow-hidden relative shadow-[0_8px_40px_rgba(23,49,36,0.06)]">
            <img alt="Minimalist Architecture" className="w-full h-full object-cover"
              data-alt="interior shot of a spacious minimalist modern living room with large windows, concrete floors, natural wood furniture, and soft diffused daylight"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuClv4fTgBHGFLvCE6-opuNB3L23jq1vJ2rnHoTP8WOzXVei0L0ygnjENpy1hY-7TRMhLznWGxcQYTKp5kLT9KGJ_g5Y0L2W29R0UH1go7ew3Yxk9af5JZYckoxm0AimnUrLepgF_YTIp3HWYfnMG676kzWD4NuJmAz51SODGvTCNpC6xwXxf0xjU-gI_9SVcxZ2OQ4uyxHzMolkXxn32OOAOp4v1hTgkSSWBuMtoPDkHi5scZ-e-4WDjk-oxDK1-OMfQUQisTZxAfQ" />
          </div>
        </div>
        <div className="max-w-[720px] mx-auto px-6">
          <div className="prose-custom font-body-lg text-body-lg text-on-background leading-relaxed">
            <p
              className="text-xl leading-relaxed text-on-surface-variant mb-8 font-serif italic">
              In an era defined by digital excess and cognitive overload, the
              principles of minimalism are evolving from mere aesthetic choices into
              essential survival strategies for human attention.
            </p>
            <p className="mb-6">
              The origins of minimalist design are deeply rooted in the mid-20th
              century, emerging as a reaction against the overly ornate and cluttered
              styles of previous decades. It was a pursuit of essence, stripping away
              the non-essential to reveal the core truth of an object or space. Today,
              as we navigate a world mediated by screens and constant notifications,
              this pursuit has taken on a new urgency.
            </p>
            <p className="mb-10">
              We are no longer just designing physical objects; we are architecting
              environments for the mind. The future of minimalist design lies in its
              ability to create "quiet spaces" within the digital noise—interfaces and
              experiences that respect the user's cognitive load and gently guide
              their focus rather than demanding it.
            </p>
            <h2 className="font-headline-md text-headline-md text-on-background mt-14 mb-6">The
              Shift from Aesthetic to Functional Minimalism</h2>
            <p className="mb-6">
              For a long time, minimalism in the digital realm was often synonymous
              with a stark, sterile aesthetic: vast expanses of white space, tiny
              typography, and a lack of visual hierarchy. While visually striking,
              this approach sometimes sacrificed usability on the altar of style.
            </p>
            <blockquote
              className="border-l-4 border-primary pl-6 py-2 my-10 font-serif text-xl italic text-on-surface-variant">
              "Good design is as little design as possible. Less, but better—because
              it concentrates on the essential aspects, and the products are not
              burdened with non-essentials." <br /><span
                className="text-sm font-sans not-italic text-outline mt-4 block">—
                Dieter Rams</span>
            </blockquote>
            <p className="mb-6">
              The next wave of minimalism is functional. It embraces warmth, texture,
              and subtle cues to create intuitive experiences. It uses tonal shifts
              rather than harsh lines to define hierarchy. It relies on ambient
              shadows to create depth without clutter. This "warm minimalism"
              acknowledges human emotion while maintaining a rigorous commitment to
              simplicity.
            </p>
            <h2 className="font-headline-md text-headline-md text-on-background mt-14 mb-6">
              Designing for Intentionality</h2>
            <p className="mb-6">
              As we move forward, designers must transition from being mere decorators
              of information to curators of attention. Every pixel, every interaction,
              and every micro-copy must be relentlessly questioned: Does this serve
              the user's immediate intent? Does it add value, or does it add friction?
            </p>
            <p className="mb-10">
              By embracing these principles, we can build a digital landscape that
              feels less like a crowded marketplace and more like a serene library—a
              place where thought can flourish, and meaning can be found.
            </p>
          </div>
          <div className="mt-16 pt-8 border-t border-outline-variant/30 flex flex-wrap gap-3">
            <span
              className="bg-primary/5 text-primary px-4 py-2 rounded-full font-label-sm text-label-sm border border-primary/10 transition-colors hover:bg-primary/10 cursor-pointer">UI
              Design</span>
            <span
              className="bg-primary/5 text-primary px-4 py-2 rounded-full font-label-sm text-label-sm border border-primary/10 transition-colors hover:bg-primary/10 cursor-pointer">Theory</span>
            <span
              className="bg-primary/5 text-primary px-4 py-2 rounded-full font-label-sm text-label-sm border border-primary/10 transition-colors hover:bg-primary/10 cursor-pointer">Architecture</span>
            <span
              className="bg-primary/5 text-primary px-4 py-2 rounded-full font-label-sm text-label-sm border border-primary/10 transition-colors hover:bg-primary/10 cursor-pointer">Psychology</span>
          </div>
          <div
            className="mt-20 bg-surface-container-low rounded-xl p-8 lg:p-10 border border-outline-variant/20">
            <h3 className="font-headline-md text-headline-md text-on-background mb-2">Leave a
              Thought</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">Join the
              conversation. Your insights are valued.</p>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="sr-only">Name</label>
                  <input className="w-full bg-surface border-b border-outline-variant/50 px-0 py-3 text-on-background font-body-md focus:border-primary focus:ring-0 transition-colors bg-transparent placeholder:text-outline"
                    id="name" placeholder="Your Name" type="text" />
                </div>
                <div>
                  <label className="sr-only">Email</label>
                  <input className="w-full bg-surface border-b border-outline-variant/50 px-0 py-3 text-on-background font-body-md focus:border-primary focus:ring-0 transition-colors bg-transparent placeholder:text-outline"
                    id="email" placeholder="Email Address"
                    type="email" />
                </div>
              </div>
              <div>
                <label className="sr-only">Comment</label>
                <textarea
                  className="w-full bg-surface border-b border-outline-variant/50 px-0 py-3 text-on-background font-body-md focus:border-primary focus:ring-0 transition-colors bg-transparent resize-none placeholder:text-outline"
                  id="comment" placeholder="Your perspective..."
                  rows={4}></textarea>
              </div>
              <div className="pt-2 flex justify-end">
                <button className="bg-primary text-on-primary px-8 py-3 rounded-lg font-label-sm text-label-sm tracking-wide hover:bg-primary-container hover:text-on-primary-container transition-all shadow-sm hover:-translate-y-0.5 duration-300"
                  type="submit">
                  Post Comment
                </button>
              </div>
            </form>
          </div>
        </div>
      </article>
      <section className="bg-surface-container-low py-section-padding border-t border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h3 className="font-headline-lg text-headline-lg text-on-background">Further Reading
            </h3>
            <a className="font-label-sm text-label-sm text-primary hover:text-on-primary-container transition-colors flex items-center space-x-1"
              href="#">
              <span>View Archive</span>
              <span className="material-symbols-outlined text-sm"
                data-icon="arrow_forward">arrow_forward</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            <a className="group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_4px_40px_rgba(23,49,36,0.02)] hover:shadow-[0_8px_50px_rgba(23,49,36,0.06)] transition-all duration-300 hover:-translate-y-1 h-full border border-outline-variant/10"
              href="#">
              <div className="aspect-[4/3] w-full overflow-hidden bg-surface-container">
                <img alt="Typography layout"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  data-alt="close up of a cleanly designed printed magazine spread featuring large serif typography and ample white space on textured paper"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAziqUyYMP4stsBRmFmUNpCBOe6kp3bmhtop2SJo8XLUTlVWiTRXiI76iJ-mH7LiMvM26Y0Hh0vpnqdozajaimtqg5ZBCnUt8HIBENOlDAMtsZmzP64ByeDtP7LEM17DW9sxTLIPnXY-3_5boND5Hg6oTNS0wKSrI8AjXu8onZVkn133MXvV0QymJgvJ1xr3iO1sZ87soVKBoYUfgHqdBRPlCDy7bxGwUm34Zsz_ysNNMDTmb91GywUByg8InlhjJpuf7BhAT7yhq0" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span
                  className="font-label-sm text-label-sm text-on-surface-variant mb-3 uppercase tracking-widest">Typography</span>
                <h4
                  className="font-headline-md text-headline-md text-on-background mb-4 group-hover:text-primary transition-colors">
                  The Resurgence of the Serif in Digital Spaces</h4>
                <p
                  className="font-body-md text-body-md text-on-surface-variant line-clamp-3 mt-auto">
                  Why high-contrast serif typefaces are making a comeback
                  in modern interface design, bringing editorial authority
                  to the web.</p>
              </div>
            </a>
            <a className="group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_4px_40px_rgba(23,49,36,0.02)] hover:shadow-[0_8px_50px_rgba(23,49,36,0.06)] transition-all duration-300 hover:-translate-y-1 h-full border border-outline-variant/10"
              href="#">
              <div className="aspect-[4/3] w-full overflow-hidden bg-surface-container">
                <img alt="Abstract shapes"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  data-alt="abstract composition of smooth geometric plaster shapes in muted earthy tones arranged organically with soft lighting"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXK2APZRuSS0vFVGoSVVtOCZpH6K1iDL7G_DxoDHXqtp4hjobm5_tqHodP58ZTz0pB7HrBYB_R6V2KiUoGBMuuHRF6NwjPUg_ISEvFaVMfxUl4-Rb2btFReGDJS6c8OBVkPepefdxwHXMitVCnlKAyv5vqupJPBsl24Bqgi5KURPhlGsC-Ub8R26zZv9vzQNYsOzK0OSdxmqiaDMD5q9ar_XdEq8pHn7aMMJ2JGx_xqh51jRzlF1R4DFez5m_FuPoaIiLF5SoW2xU" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span
                  className="font-label-sm text-label-sm text-on-surface-variant mb-3 uppercase tracking-widest">Psychology</span>
                <h4
                  className="font-headline-md text-headline-md text-on-background mb-4 group-hover:text-primary transition-colors">
                  Cognitive Load and the Canvas</h4>
                <p
                  className="font-body-md text-body-md text-on-surface-variant line-clamp-3 mt-auto">
                  Understanding how empty space affects our ability to
                  process information and make decisions online.</p>
              </div>
            </a>
            <a className="group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_4px_40px_rgba(23,49,36,0.02)] hover:shadow-[0_8px_50px_rgba(23,49,36,0.06)] transition-all duration-300 hover:-translate-y-1 h-full border border-outline-variant/10"
              href="#">
              <div className="aspect-[4/3] w-full overflow-hidden bg-surface-container">
                <img alt="Color palette"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  data-alt="close up of physical fabric swatches arranged neatly on a light wooden table featuring subtle organic shades of green, stone, and cream"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_kM18aOmnnZTET5SNb9fg6ZNvcIwlPJaWicTB3IX97opQNlhz4YoTz4798RV43srGmopQi9Z0NXiPWXF4rd3LIKVYXOPQ61_N7C3xD7x-N_49Xv8ki3mDBmhFjT3PISee5jARGiDT5p3zABcuceDw2SnbYohKm8FoTlXbbK8u_ZgA7rX4c1J93gwWNMTztOLGsdlx4REKcKDQzZe9ftgxXoOQRj--ucB-j5XjhhU2_3MU0rLfjGTpVHZPi7GqScSybuFwjLP9oqk" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span
                  className="font-label-sm text-label-sm text-on-surface-variant mb-3 uppercase tracking-widest">Color
                  Theory</span>
                <h4
                  className="font-headline-md text-headline-md text-on-background mb-4 group-hover:text-primary transition-colors">
                  Designing with Restraint</h4>
                <p
                  className="font-body-md text-body-md text-on-surface-variant line-clamp-3 mt-auto">
                  How to build robust and emotive color palettes using
                  fewer than five distinct hues.</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}