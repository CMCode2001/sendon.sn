import { createClient, SupabaseClient } from "@supabase/supabase-js"

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined
const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined

// Le client Supabase n'est créé que si les variables d'environnement sont définies.
// En mode local sans .env configuré, supabase sera null.
export const supabase: SupabaseClient | null =
  url && key ? createClient(url, key) : null
