import Link from 'next/link'
import Container from '@/components/ui/container'
import Badge from '@/components/ui/badge'

export default function Hero() {
  return (
    <section className="max-w-container-max mx-auto px-6 py-16 lg:py-24">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span
                className="bg-primary-fixed text-primary px-3 py-1 rounded-full font-label-sm text-label-sm">Architecture</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">Oct
                12, 2024</span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-on-background leading-tight">
              The Quiet Return of Brutalist Minimalism
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              How contemporary designers are stripping away the superfluous to
              rediscover the raw, emotional resonance of concrete and space. A deep
              dive into the spaces that breathe.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <img alt="Author portrait"
                className="w-12 h-12 rounded-full object-cover grayscale opacity-90"
                data-alt="black and white soft focus portrait of an author wearing a minimalist dark turtleneck"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCb9M6ff2PZNjKP5O4kQoc-fe0EOjhLQLSLm1d9Y5nv0NlBcQS94O2QB5RrlDJdtx_IRBerq28RsZHzL6RWelcI2uQXqKhhiDB7s5VOIP10PBUAUN1L3BZpy6KYuhJFDi6YRCANcAtqGDIXRQSa8wjj1VR5SK0Wc34-H8Lbjw5N66FlyfMrqSGaYbC4ZcIuX5180yAuJxZ1CKfce4wqacqUucv12rw6Eh_RmUM0yV-g2Yi_xRMiXz6Np6KtPu2hv-YJI8yHBijhHZM" />
              <div>
                <p className="font-label-sm text-label-sm text-on-background">
                  Written by</p>
                <p
                  className="font-body-md text-body-md text-on-surface-variant font-medium">
                  Elena Rostova</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2 relative group">
            <div
              className="absolute inset-0 bg-primary-fixed opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl z-10">
            </div>
            <img alt="Featured story image"
              className="w-full h-[500px] lg:h-[650px] object-cover rounded-xl shadow-[0_20px_40px_-15px_rgba(23,49,36,0.15)] transition-transform duration-700 hover:scale-[1.01]"
              data-alt="expansive minimalist living room with vast poured concrete walls warm indirect sunlight and a single stark black leather armchair"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8QhYu2kzPTk4eHhIDciCNBQyrs8PuWlLFFMR7n9lVOfq_ZocILbJtLJWCs8diXdvTt4l-3JgTf_xaDxdkrJVmp5kbbsWkL9pweUI3xDBhRmqL-cRQUue0DJRHnX6PyGQHX3O5FbH3sIqDJIqoyouV9IPtox4Vh_217I5Fp71zA0Gr722i0fpq-Z7HoJ9dy3_Ra8jVgqegncz61deVJhLyFaojepFpkbFZPwVnY-wb8Zf0Or_wddHZpnh6LeQMpHkrqR5h8wNvh00" />
          </div>
        </div>
      </Container>
    </section>
  )
}