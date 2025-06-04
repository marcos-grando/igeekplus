import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vwwuvynwhumvylkbtsft.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3d3V2eW53aHVtdnlsa2J0c2Z0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwNzMxNzYsImV4cCI6MjA2MTY0OTE3Nn0.AVeQb6eCPk8FTxRlkiU5pshvNVtTndnvu4pSm5FvAgk';

export const supabase = createClient(supabaseUrl, supabaseKey);