import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'
import ProjectCard from './ProjectCard'
import type { Project } from '../types'

export default function ProjectCarousel({ projects }: { projects: Project[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' })
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-4 flex">
          {projects.map((project) => (
            <div key={project.id} className="min-w-0 flex-[0_0_85%] pl-4 sm:flex-[0_0_45%] lg:flex-[0_0_32%]">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-3">
        <button
          type="button"
          aria-label="Previous project"
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canScrollPrev}
          className="border-hairline text-ink hover:border-accent hover:text-accent disabled:hover:border-hairline disabled:hover:text-ink flex h-10 w-10 items-center justify-center rounded-full border transition-colors disabled:opacity-30"
        >
          <HiChevronLeft size={20} />
        </button>
        <button
          type="button"
          aria-label="Next project"
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canScrollNext}
          className="border-hairline text-ink hover:border-accent hover:text-accent disabled:hover:border-hairline disabled:hover:text-ink flex h-10 w-10 items-center justify-center rounded-full border transition-colors disabled:opacity-30"
        >
          <HiChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}
