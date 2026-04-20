import { sanityFetch } from '@/sanity/lib/live'
import { groq } from 'next-sanity'

type Project = {
  _id: string
  title: string
  tags: string[]
  imageUrl: string
  tall: boolean
  url?: string
}

const PORTFOLIO_QUERY = groq`
  *[_type == "portfolio"] | order(order asc) {
    _id,
    title,
    tags,
    "imageUrl": image.asset->url,
    tall,
    url,
  }
`


function ProjectCard({ project }: { project: Project }) {
  const card = (
    <div className="flex flex-col gap-2.5">
      <div className={`relative w-full overflow-hidden ${project.tall ? 'h-[390px] md:h-[744px]' : 'h-[390px] md:h-[699px]'}`}>
        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute bottom-4 left-4 flex gap-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="backdrop-blur-[10px] bg-white/30 text-[#111] text-sm font-medium tracking-[-0.04em] px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="font-black text-black uppercase leading-[1.1] tracking-[-0.04em] text-2xl md:text-[36px]">
          {project.title}
        </p>
        <span className="text-2xl rotate-[-45deg] inline-block">↑</span>
      </div>
    </div>
  )

  if (project.url) {
    return (
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        {card}
      </a>
    )
  }

  return card
}

function CtaBlock() {
  return (
    <div className="relative py-3 px-6 flex flex-col gap-2.5 md:w-[465px]">
      <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#1f1f1f]" />
      <span className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#1f1f1f]" />
      <span className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#1f1f1f]" />
      <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#1f1f1f]" />
      <p className="italic text-[#1f1f1f] text-sm leading-[1.3] tracking-[-0.04em]">
        Discover how my creativity transforms ideas into impactful digital experiences — schedule a call with me to get started.
      </p>
      <a
        href="#contact"
        className="self-start bg-black text-white text-sm font-medium tracking-[-0.04em] px-4 py-3 rounded-full hover:bg-neutral-800 transition-colors"
      >
        Let&apos;s talk
      </a>
    </div>
  )
}

export default async function WorkSection() {
  const { data } = await sanityFetch({ query: PORTFOLIO_QUERY })
  const projects: Project[] = data ?? []

  return (
    <section id="projects" className="px-4 py-12 md:px-8 md:py-20 bg-[#fafafa]">

      {/* Header */}
      <div className="flex items-start justify-between mb-10 md:mb-[61px]">
        <div className="flex items-start gap-2.5 uppercase">
          <div
            className="font-light text-black leading-[0.86]"
            style={{ fontSize: 'clamp(32px, 6.67vw, 96px)', letterSpacing: '-0.08em' }}
          >
            <p>Selected</p>
            <p>Work</p>
          </div>
          <span className="font-[family-name:var(--font-geist-mono)] text-sm text-[#1f1f1f] pt-1">
            {String(projects.length).padStart(3, '0')}
          </span>
        </div>
        <span className="hidden md:block font-[family-name:var(--font-geist-mono)] text-sm text-[#1f1f1f] uppercase -rotate-90 origin-center self-center">
          [ portfolio ]
        </span>
        <span className="md:hidden font-[family-name:var(--font-geist-mono)] text-sm text-[#1f1f1f] uppercase">
          [ portfolio ]
        </span>
      </div>

      {/* Mobile: single column */}
      <div className="flex flex-col gap-6 md:hidden">
        {projects.map((p) => <ProjectCard key={p._id} project={p} />)}
        <CtaBlock />
      </div>

      {/* Desktop: two-column staggered masonry */}
      <div className="hidden md:flex gap-6 items-end">
        <div className="flex-1 flex flex-col justify-between gap-10">
          {projects.filter((_, i) => i % 2 === 0).map((p) => <ProjectCard key={p._id} project={p} />)}
          <CtaBlock />
        </div>
        <div className="flex-1 flex flex-col gap-10 pt-[240px]">
          {projects.filter((_, i) => i % 2 === 1).map((p) => <ProjectCard key={p._id} project={p} />)}
        </div>
      </div>

    </section>
  )
}
