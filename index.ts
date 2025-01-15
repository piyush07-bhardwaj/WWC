export interface Project {
  id: string;
  name: string;
  description: string;
  location: string;
  start_date: string;
  end_date: string;
  target_trees: number;
  trees_planted: number;
  status: 'planning' | 'active' | 'completed';
  created_at: string;
}

export interface TreeRecord {
  id: string;
  project_id: string;
  species: string;
  quantity: number;
  planting_date: string;
  survival_rate: number;
  health_status: 'healthy' | 'concerning' | 'critical';
  notes: string;
}

export interface Site {
  id: string;
  project_id: string;
  name: string;
  coordinates: string;
  area_hectares: number;
  soil_type: string;
  status: 'prepared' | 'planted' | 'monitoring';
}
