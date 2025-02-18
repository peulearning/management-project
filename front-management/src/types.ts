// src/types.ts
export enum Priority {
  VERY_HIGH = 'VERY_HIGH',
  HIGH = 'HIGH',
  LOW = 'LOW',
  VERY_LOW = 'VERY_LOW'
}

export interface Task {
  id: number;
  title: string;
  description: string;
  priority: Priority;
  status: 'TODO' | 'DOING' | 'DONE';
}

export interface Project {
  id: number;
  title: string;
  description: string;
  dateBegin: Date;
  tasks: Task[];
}