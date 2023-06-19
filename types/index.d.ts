export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    linkedin: string
    githubProfile: string
    githubRepo: string
  }
}

export type Document = {
  id: string
  title: string
  text: string
  placeholders: string[]
}

export type LandingConfig = {
  mainNav: MainNavItem[]
}
