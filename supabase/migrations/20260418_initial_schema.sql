-- BionicSovereign OS Database Schema
-- Stiva: PostgreSQL (Supabase)

-- 1. Tabel pentru Operatiuni Live (Live Operations)
CREATE TABLE live_operations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    agent_name TEXT NOT NULL,
    status TEXT NOT NULL,
    icon_type TEXT,
    transaction_id TEXT UNIQUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Tabel pentru Alerte Arbitraj (Live Arbitrage)
CREATE TABLE arbitrage_alerts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    asset_pair TEXT NOT NULL,
    platform_1 TEXT NOT NULL,
    price_1 DECIMAL NOT NULL,
    platform_2 TEXT NOT NULL,
    price_2 DECIMAL NOT NULL,
    spread_percentage DECIMAL NOT NULL,
    execution_status TEXT DEFAULT 'PENDING',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Tabel pentru Jurnalul de Invatare (Self-Learning Log)
CREATE TABLE learning_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    alert_id UUID REFERENCES arbitrage_alerts(id),
    predicted_destination DECIMAL,
    actual_outcome DECIMAL,
    confidence_score INTEGER,
    learnings TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Tabel pentru Profilul Administratorului Suveran
CREATE TABLE admin_profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    role TEXT DEFAULT 'SOVEREIGN',
    last_login TIMESTAMPTZ
);

-- Seed Data
INSERT INTO admin_profiles (email, role) VALUES ('adryanmoldokkr32@gmail.com', 'SOVEREIGN');