export interface NetflixShowsTable {
  show_id: string
  type: string | null
  title: string | null
  director: string | null
  cast_members: string | null
  country: string | null
  date_added: Date | null
  release_year: number | null
  rating: string | null
  duration: string | null
  listed_in: string | null
  description: string | null
}

export interface DatabaseModel {
  netflix_shows: NetflixShowsTable
}
