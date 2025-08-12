import fs from 'fs';
import path from 'path';

export type StoreApplication = {
  id: string;
  created_at: string;
  full_name: string;
  email: string;
  phone?: string | null;
  registration_number?: string | null;
  branch?: string | null;
  whatsapp_phone?: string | null;
  year: string;
  team_preference: string;
  skills?: string | null;
  motivation?: string | null;
  resume_url?: string | null;
  portfolio_url?: string | null;
  team_specific?: Record<string, unknown> | null;
  status: string;
  reviewer_notes?: string | null;
  reviewer_email?: string | null;
};

const filePath = path.join(process.cwd(), 'src', 'data', 'recruitmentApplications.json');

function ensureFile() {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, '[]', 'utf-8');
}

export function readAll(): StoreApplication[] {
  try {
    ensureFile();
    const raw = fs.readFileSync(filePath, 'utf-8');
    const arr = JSON.parse(raw);
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

export function append(app: Omit<StoreApplication, 'id' | 'created_at'>): StoreApplication {
  ensureFile();
  const all = readAll();
  const rec: StoreApplication = {
    id: crypto.randomUUID(),
    created_at: new Date().toISOString(),
    ...app,
  };
  all.push(rec);
  fs.writeFileSync(filePath, JSON.stringify(all, null, 2));
  return rec;
}

export function update(id: string, patch: Partial<StoreApplication>): StoreApplication | null {
  ensureFile();
  const all = readAll();
  const idx = all.findIndex(a => a.id === id);
  if (idx === -1) return null;
  all[idx] = { ...all[idx], ...patch };
  fs.writeFileSync(filePath, JSON.stringify(all, null, 2));
  return all[idx];
}
