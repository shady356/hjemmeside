export type BadgeIcon = 'book' | 'mobile' | 'music'

export interface Project {
  title: string
  description: string
  longDescription: string
  color: string
  foreground: string
  image: string
  githubUrl: string
  websiteUrl?: string
  dialogTo?: string
  primaryLabel?: string
  badge?: string
  badgeIcon?: BadgeIcon
}
