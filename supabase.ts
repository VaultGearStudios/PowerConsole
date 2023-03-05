export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      PowerconsoleLogin: {
        Row: {
          created_at: string | null
          id: string
          location: string | null
          pass: string | null
          user: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          location?: string | null
          pass?: string | null
          user?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          location?: string | null
          pass?: string | null
          user?: string | null
        }
      }
      "StorageItemDatabase ": {
        Row: {
          created_at: string | null
          id: string
          stock: string | null
        }
        Insert: {
          created_at?: string | null
          id: string
          stock?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          stock?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
