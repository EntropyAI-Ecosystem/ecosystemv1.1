/*
  # Create Training Jobs Table
  
  1. New Tables
    - `training_jobs`: Tracks model training jobs
  
  2. Security
    - Enable RLS
    - Add policies for authenticated users
*/

CREATE TABLE IF NOT EXISTS training_jobs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  model_id uuid REFERENCES ai_models(id),
  status text NOT NULL DEFAULT 'pending' 
    CHECK (status IN ('pending', 'running', 'completed', 'failed')),
  progress numeric DEFAULT 0 
    CHECK (progress >= 0 AND progress <= 100),
  metrics jsonb DEFAULT '{"loss": 0, "accuracy": 0}'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES auth.users(id)
);

ALTER TABLE training_jobs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own training jobs"
  ON training_jobs
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);