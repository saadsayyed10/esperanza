import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://sapqxrllzgfenkzxukqg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhcHF4cmxsemdmZW5renh1a3FnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcwMjUxODcsImV4cCI6MjEwMjYwMTE4N30.hDkBkBM8b3e_RxTJNRSbWHmrWfY3VQ3FeoLM0RMf5mY",
);
