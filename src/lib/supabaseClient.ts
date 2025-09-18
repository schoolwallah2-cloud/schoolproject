import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

console.log("DEBUG: Supabase URL ->", supabaseUrl)
console.log("DEBUG: Supabase Key present? ->", !!supabaseKey)

export const supabase = createClient(supabaseUrl, supabaseKey)
