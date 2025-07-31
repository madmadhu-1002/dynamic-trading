import DivisionDetails from '@/components/DivisionDetails'
import { notFound } from 'next/navigation'
import { translations } from '@/data/translations'

interface PageProps {
  params: Promise<{ slug: string }>
}

interface Division {
  title: string
  description: string
  image: string
  images: string[]
  slug: string
  ar: {
    title: string
    description: string
  }
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params

  const divisionsContent = translations.en.about.divisions.divisionsContent ?? {}
  const division = Object.values(divisionsContent).find(
    (d): d is Division => d.slug === slug
  )

  if (!division) return notFound()

  return <DivisionDetails division={division} />
}

export default Page
