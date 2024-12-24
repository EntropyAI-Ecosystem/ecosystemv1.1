/*
  # Create Deployments Table
  
  1. New Tables
    - `deployments`: Manages model deployments
  
  2. Security
    - Enable RLS
    - Add policies for authenticated users
*/

CREATE TABLE IF NOT EXISTS deployments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  model_id uuid REFERENCES ai_models(id),
  environment text NOT NULL DEFAULT 'development'
    CHECK (environment IN ('development', 'staging', 'production')),
  status text NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending', 'running', 'completed', 'failed')),
  resources jsonb NOT NULL DEFAULT '{"cpu": 1, "memory": 1024}'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES auth.users(id)
);

ALTER TABLE deployments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own deployments"
  ON deployments
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);