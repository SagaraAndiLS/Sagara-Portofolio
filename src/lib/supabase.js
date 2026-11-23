import { createClient } from '@supabase/supabase-js'

// ============================================================
// KONFIGURASI SUPABASE
// Ganti dengan URL dan ANON KEY dari project Supabase Anda
// Buat project di: https://supabase.com
// ============================================================
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://YOUR_PROJECT.supabase.co'
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'YOUR_ANON_KEY'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// ─── Comments Service ──────────────────────────────────────────
export const commentsService = {
  // Ambil semua komentar yang sudah diapprove (tanpa kolom email)
  async getAll() {
    const { data, error } = await supabase
      .from('comments')
      .select('id, name, message, created_at')
      .eq('approved', true)
      .order('created_at', { ascending: false })
    if (error) throw error
    return data
  },

  // Kirim komentar baru
  async create({ name, message }) {
    const { data, error } = await supabase
      .from('comments')
      .insert([{ name: name.trim(), message: message.trim(), approved: true }])
      .select('id, name, message, created_at')
    if (error) throw error
    return data
  },

  // Subscribe realtime
  subscribe(callback) {
    return supabase
      .channel(`comments-${Math.random().toString(36).slice(2)}`)
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'comments',
        filter: 'approved=eq.true'
      }, callback)
      .subscribe()
  },

  unsubscribe(channel) {
    if (channel) supabase.removeChannel(channel)
  }
}

// ─── Portfolio Views Service ────────────────────────────────────
export const viewsService = {
  async increment() {
    const { error } = await supabase.rpc('increment_views')
    if (error) console.warn('Views tracking:', error.message)
  },

  async getCount() {
    const { data, error } = await supabase
      .from('portfolio_views')
      .select('count')
      .single()
    if (error) return 0
    return data?.count || 0
  }
}

// ─── SQL SETUP SCRIPT (jalankan di Supabase SQL Editor) ─────────
/*
-- Buat tabel comments (tanpa kolom email agar tidak bocor ke publik)
-- Jika tabel sudah ada: ALTER TABLE comments DROP COLUMN email;
CREATE TABLE comments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  approved BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

-- Policy: siapapun bisa baca komentar yang approved
CREATE POLICY "Public comments are viewable by everyone"
  ON comments FOR SELECT
  USING (approved = true);

-- Policy: siapapun bisa insert komentar
CREATE POLICY "Anyone can insert a comment"
  ON comments FOR INSERT
  WITH CHECK (true);

-- Enable realtime
ALTER PUBLICATION supabase_realtime ADD TABLE comments;

-- Buat tabel portfolio views
CREATE TABLE portfolio_views (
  id SERIAL PRIMARY KEY,
  count INTEGER DEFAULT 0
);
INSERT INTO portfolio_views (count) VALUES (0);

-- Function untuk increment views
CREATE OR REPLACE FUNCTION increment_views()
RETURNS void AS $$
BEGIN
  UPDATE portfolio_views SET count = count + 1 WHERE id = 1;
END;
$$ LANGUAGE plpgsql;
*/
