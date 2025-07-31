export type DivisionContent = {
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
  
 export type TranslationsType = {
    [key: string]: {
      nav: Record<string, string>
      banners?: {
        id: string
        label?: string
        title: string
        subtitle: string
        image: string
        cta: {
          primary: string
          secondary: string
        }
      }[]
      about: {
        title: string
        breadcrumb: string
        mainContent: {
          title: string
          description1: string
          description2: string
        }
        divisions: {
          title: string
          items: string[]
          divisionsContent?: Record<string, DivisionContent>
        }
      }
      services: Record<string, string>
    }
  }