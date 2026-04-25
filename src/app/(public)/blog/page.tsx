import Container from '@/components/ui/container'
import SectionHeading from '@/components/ui/section-heading'
import PostList from '@/features/posts/components/post-list'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default async function BlogPage() {

  return (
    <main className="py-12 w-full max-w-container-max mx-auto px-6 md:px-8 py-section-padding">
      <Container>

        <header className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h1 className="font-headline-xl text-headline-xl text-on-background mb-4">The Archive</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Explore our complete collection of essays,
              cultural critiques, and design observations.</p>
          </div>
          <div className="w-full md:w-auto flex-shrink-0">
            <div className="relative w-full md:w-[320px]">
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-on-surface-variant pointer-events-none"
              />

              <input
                className="w-full rounded-full bg-surface-container-high py-3 pl-12 pr-4 text-body-md font-body-md text-on-surface transition-all placeholder:text-on-surface-variant/70 focus:bg-surface-container-lowest focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Search essays..."
                type="text"
              />
            </div>
          </div>
        </header>

        <div className="flex gap-3 mb-12 overflow-x-auto pb-4 scrollbar-hide border-b border-surface-variant/50">
          <button
            className="px-5 py-2 rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm whitespace-nowrap transition-colors">All
            Essays</button>
          <button
            className="px-5 py-2 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm whitespace-nowrap transition-colors">Technology</button>
          <button
            className="px-5 py-2 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm whitespace-nowrap transition-colors">Culture</button>
          <button
            className="px-5 py-2 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm whitespace-nowrap transition-colors">Design</button>
          <button
            className="px-5 py-2 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm whitespace-nowrap transition-colors">Architecture</button>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <article
            className="col-span-1 md:col-span-12 bg-surface-container-lowest rounded-xl p-6 md:p-10 flex flex-col md:flex-row gap-8 md:gap-12 ambient-shadow ambient-shadow-hover transition-all duration-300 group">
            <div className="w-full md:w-3/5 rounded-lg overflow-hidden relative aspect-video md:aspect-auto">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out absolute inset-0"
                data-alt="minimalist workspace with a sleek laptop, ceramic coffee cup, and a small potted plant on a light oak desk, soft morning sunlight"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4KP5vu-oXflHO78Gnss1jlKsxpNdbJj5XGPNt_SlV2d4jLsKMR6boixxwBXWU0L95QBQQBID56AAd0fBH6S03c8C5vpCIBALZYvtDuEB8jV4VoRR-sOdJSiUHaO-nnnXwo3eM3mCDI8sY07tTmG-UoC8q0nIvf88hhHJ9GDifAMQ4eBlIi6kIQDjl-CdPUk_CoEqIqllHKtQ5pi3tExYBu6LEvXB4Y4p0PKTa1PnT-tOmRxR8KU2yHb4RgWSi_BUIUpWVl6u2QKk" />
            </div>
            <div className="w-full md:w-2/5 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="px-3 py-1 rounded-full bg-primary/5 text-primary font-label-sm text-label-sm">Design</span>
                <span className="font-label-sm text-label-sm text-secondary">Oct 24, 2023</span>
              </div>
              <h2
                className="font-headline-lg text-headline-lg text-on-background mb-4 group-hover:text-primary transition-colors">
                The Architecture of Silence: Designing for Focus in a Noisy World</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow">An exploration into how
                modern spatial design can mitigate digital fatigue. By examining the principles of acoustic
                architecture and visual minimalism, we uncover strategies for cultivating deep work
                environments.</p>
              <div className="flex items-center gap-3">
                <img className="w-10 h-10 rounded-full object-cover"
                  data-alt="portrait of a woman with short dark hair in a simple white shirt against a grey background"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSlvR_2maRPgY7-n3v9fVgQ74ir9Ut8lOGi1l9hXwXN6e2wc0v1Hre9g53Hq021M-IaBOiq3G1tv1vuPsXgz_sH7sRiSCLA45pc_9t3bQOGSbl8Iw6mgqyZzfaicoXos0zx4y_cscZ_oE_ilzYk3SahR7LBBf8aY_9qEhQ6jEk1Nwt3uGkQ34PF-XELtoPqcF0wj5AJpVNHVZqXohJczsUswdkZVY4l41CvfCVmKdzgyWE8dQHsZJGgCv__xRr5tx9zzXsoL4TCbU" />
                <div>
                  <p className="font-label-sm text-label-sm text-on-surface">Elena Rostova</p>
                  <p className="font-label-sm text-label-sm text-secondary font-normal mt-0.5">Senior Editor</p>
                </div>
              </div>
            </div>
          </article>
          <article
            className="col-span-1 md:col-span-6 lg:col-span-4 bg-surface-container-lowest rounded-xl p-6 flex flex-col h-full ambient-shadow ambient-shadow-hover transition-all duration-300 group">
            <div className="rounded-lg overflow-hidden mb-6 aspect-[4/3] relative">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out absolute inset-0"
                data-alt="macro shot of a computer circuit board with warm amber and cool blue lighting"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC915S_oGluYwkJ8asTwOpWgeDu_iSdfCgV3kRqqR4dEs4nOO0uuACExHbokRyqBHobzUfnsZ_Veul00rIgI1Dz4lPyTh5f7qPuxG-s7Df1uz-C14mL5XquDmq5T9DpydrcSDo9dcwK6ExC2wZISbc7jiMZEOy61YLbypo3CdG24WSTwDmBT1tA6WSYMhxsreHUqrUPLF1fy36MYbiERep2es6KALsus-Yr8YoeMNdCJFyIrjvcvCVYHnNVC0sj3pr6U1dOB6y_dwU" />
            </div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-label-sm text-label-sm text-primary">Technology</span>
              <span className="font-label-sm text-label-sm text-surface-dim">•</span>
              <span className="font-label-sm text-label-sm text-secondary">Oct 18, 2023</span>
            </div>
            <h3
              className="font-headline-md text-headline-md text-on-background mb-3 group-hover:text-primary transition-colors line-clamp-2">
              Beyond the Algorithm: The Human Cost of Automation</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-3 flex-grow">As machine
              learning systems integrate deeper into daily infrastructure, we must assess not just their
              efficiency, but their impact on human agency.</p>
            <div className="flex items-center gap-3 mt-auto pt-4 border-t border-surface-variant/30">
              <span className="font-label-sm text-label-sm text-on-surface">Marcus Chen</span>
            </div>
          </article>
          <article
            className="col-span-1 md:col-span-6 lg:col-span-4 bg-surface-container-lowest rounded-xl p-6 flex flex-col h-full ambient-shadow ambient-shadow-hover transition-all duration-300 group">
            <div className="rounded-lg overflow-hidden mb-6 aspect-[4/3] relative">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out absolute inset-0"
                data-alt="group of creative professionals collaborating around a large wooden table in a sunlit industrial studio"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAflK9VX967uwpcUWQHBQ0KViGUhIY9kJ0c5E8WXKecHc1HCB3cPYeqIAzBA8U8iRF8FFJWpjRyJ8u--sIjTTiNPJRw2TKynPC_EqqmivYXTcF8K0sR56laV3gPz7X3EzU_SmIQ4lg46HLLe1swD0iun98xkHE7Lcrvw02ZIyeJfn07KBnKfpBBRLNCdnXfK8Sn8ftKOoJ-CJPj7uVVbfMfvNh8nLPx1EGadAiX0lVw30uR8Otnqb43eHfs0NEu7RRg6Z8yFc5ZQTo" />
            </div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-label-sm text-label-sm text-primary">Culture</span>
              <span className="font-label-sm text-label-sm text-surface-dim">•</span>
              <span className="font-label-sm text-label-sm text-secondary">Oct 12, 2023</span>
            </div>
            <h3
              className="font-headline-md text-headline-md text-on-background mb-3 group-hover:text-primary transition-colors line-clamp-2">
              The New Collectivism in Modern Workspaces</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-3 flex-grow">Rejecting the
              isolation of remote silos, a new wave of localized, intentional co-working communities is reshaping
              the gig economy.</p>
            <div className="flex items-center gap-3 mt-auto pt-4 border-t border-surface-variant/30">
              <span className="font-label-sm text-label-sm text-on-surface">Sarah Jenkins</span>
            </div>
          </article>
          <article
            className="col-span-1 md:col-span-6 lg:col-span-4 bg-surface-container-lowest rounded-xl p-6 flex flex-col h-full ambient-shadow ambient-shadow-hover transition-all duration-300 group">
            <div className="rounded-lg overflow-hidden mb-6 aspect-[4/3] relative">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out absolute inset-0"
                data-alt="minimalist living room interior with a beige linen sofa, organic shaped coffee table, and soft natural lighting"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrxzmOcH9JlxNZ4aCVLjOtQjlAnTzKlnrSpEzTKdpvGbIXK0qiPT39Kr8J179HeyCha6byhIBSReQa68WMwgvF9gb4afPys-7ls5r7A7FBXurJWF7OLRtij-RPBn4pvxf36clXob-OQpUlfhGrANrI7QMAJllPLbN5fN-wHu6hpZnGMu0DRvpEw6bz3-VrHcZRloRl7xtHu5zTZMLBVjWDV7PdXTnWKBTn5vXrraYe1889yvIEfLvgSn-0rXTfT1tju83EOWxunRY" />
            </div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-label-sm text-label-sm text-primary">Design</span>
              <span className="font-label-sm text-label-sm text-surface-dim">•</span>
              <span className="font-label-sm text-label-sm text-secondary">Oct 05, 2023</span>
            </div>
            <h3
              className="font-headline-md text-headline-md text-on-background mb-3 group-hover:text-primary transition-colors line-clamp-2">
              Warm Minimalism: Softening the Edges of Modernism</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-3 flex-grow">Moving away
              from stark whites and clinical metals, the new interior narrative favors tactile textures, earthy
              palettes, and organic forms.</p>
            <div className="flex items-center gap-3 mt-auto pt-4 border-t border-surface-variant/30">
              <span className="font-label-sm text-label-sm text-on-surface">Elena Rostova</span>
            </div>
          </article>
        </section>
        <div className="mt-20 flex justify-center items-center gap-2">
          <button className="w-4 h-4 flex items-center justify-center rounded-full text-secondary hover:bg-surface-container transition-colors disabled:opacity-50">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>

          <button
            className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-on-primary font-label-sm text-label-sm">1</button>
          <button
            className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container font-label-sm text-label-sm transition-colors">2</button>
          <button
            className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container font-label-sm text-label-sm transition-colors">3</button>
          <span className="text-secondary px-2">...</span>
          <button
            className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container font-label-sm text-label-sm transition-colors">8</button>

          <button className="w-4 h-4 flex items-center justify-center rounded-full text-secondary hover:bg-surface-container transition-colors">
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>

      </Container>
    </main>
  )
}