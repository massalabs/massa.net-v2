// Hooks simplifiés pour retourner directement les données statiques
import { blogPosts } from '../data/blog'
import { ecosystemProjects } from '../data/ecosystem'
import { openBounties, completedBounties } from '../data/bounties'
import { team } from '../data/team'

export function useBlogPosts() {
  return blogPosts
}

export function useEcosystemProjects() {
  return ecosystemProjects
}

export function useBounties() {
  return { open: openBounties, completed: completedBounties }
}

export function useTeam() {
  return team
}

