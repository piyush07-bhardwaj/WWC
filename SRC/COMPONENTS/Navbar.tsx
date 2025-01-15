/*
  # Initial Schema for Reforestation Management System

  1. New Tables
    - `projects`
      - Main project information
      - Tracks overall project status and metrics
    - `tree_records`
      - Records of tree plantings
      - Monitors tree health and survival rates
    - `sites`
      - Project site information
      - Tracks location and site conditions

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Projects Table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  location text NOT NULL,
  start_date date NOT NULL,
  end_date date,
  target_trees integer NOT NULL DEFAULT 0,
  trees_planted integer NOT NULL DEFAULT 0,
  status text NOT NULL DEFAULT 'planning',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Tree Records Table
CREATE TABLE IF NOT EXISTS tree_records (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id uuid REFERENCES projects(id) ON DELETE CASCADE,
  species text NOT NULL,
  quantity integer NOT NULL DEFAULT 0,
  planting_date date NOT NULL,
  survival_rate numeric(5,2) DEFAULT 100.00,
  health_status text NOT NULL DEFAULT 'healthy',
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Sites Table
CREATE TABLE IF NOT EXISTS sites (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id uuid REFERENCES projects(id) ON DELETE CASCADE,
  name text NOT NULL,
  coordinates text NOT NULL,
  area_hectares numeric(10,2) NOT NULL,
  soil_type text,
  status text NOT NULL DEFAULT 'prepared',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE tree_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE sites ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow authenticated users to read projects"
  ON projects FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to insert projects"
  ON projects FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update their projects"
  ON projects FOR UPDATE
  TO authenticated
  USING (true);

-- Similar policies for tree_records
CREATE POLICY "Allow authenticated users to read tree records"
  ON tree_records FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to insert tree records"
  ON tree_records FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update tree records"
  ON tree_records FOR UPDATE
  TO authenticated
  USING (true);

-- Similar policies for sites
CREATE POLICY "Allow authenticated users to read sites"
  ON sites FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to insert sites"
  ON sites FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update sites"
  ON sites FOR UPDATE
  TO authenticated
  USING (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_projects_status ON projects(status);
CREATE INDEX IF NOT EXISTS idx_tree_records_project_id ON tree_records(project_id);
CREATE INDEX IF NOT EXISTS idx_sites_project_id ON sites(project_id);
