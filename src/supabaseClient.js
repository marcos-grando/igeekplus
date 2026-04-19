import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xmwrvhqcsasxgfvbrgjz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhtd3J2aHFjc2FzeGdmdmJyZ2p6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4NjcwMTEsImV4cCI6MjA2NTQ0MzAxMX0.2X3l8Um6vTIMs5b73Nj5Xq3kbwY2Kwee2-Vs0ooiFhI'

export const supabase = createClient(supabaseUrl, supabaseKey);