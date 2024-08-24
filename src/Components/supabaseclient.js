// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://blcrlpvarvtcvaxyyekg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsY3JscHZhcnZ0Y3ZheHl5ZWtnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI5NDE2MTEsImV4cCI6MjAzODUxNzYxMX0.9TbqsiHhQiiuipFVVdOzOOWVBl3Yv7PRDyE72k96bLQ';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

