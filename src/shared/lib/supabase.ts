import { createClient } from "@supabase/supabase-js";
import z from "zod";
import type { Database } from "../../types/supabase";


const envSchema = z.object({
  VITE_SUPABASE_URL: z.string().url(),
  VITE_SUPABASE_PUBLISHABLE_KEY: z.string().min(1),
});

const env = envSchema.parse(import.meta.env);

export const supabase = createClient<Database>(
  env.VITE_SUPABASE_URL,
  env.VITE_SUPABASE_PUBLISHABLE_KEY,
);
