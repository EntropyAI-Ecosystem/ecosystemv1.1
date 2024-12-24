/*
  # Create AI Models Table
  
  1. New Tables
    - `ai_models`: Stores AI model metadata
  
  2. Security
    - Enable RLS
    - Add policies for authenticated users
*/

CREATE TABLE IF NOT EXISTS ai_models (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  type text NOT NULL CHECK (type IN ('classification', 'regression', 'nlp')),
  parameters integer NOT NULL DEFAULT 0,
  accuracy numeric CHECK (accuracy >= 0 AND accuracy <= 1),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES auth.users(id)
);

ALTER TABLE ai_models ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read their own models"
  ON ai_models
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own models"
  ON ai_models
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);