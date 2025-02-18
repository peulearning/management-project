// src/components/TaskList.tsx
import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { Task } from '../types';

interface TaskListProps {
  tasks: Task[];
  onEditTask: (task: Task) => void;
  onDeleteTask: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onEditTask, onDeleteTask }) => {
  return (
    <>
      {tasks.map((task) => (
        <SortableTask key={task.id} task={task} onEditTask={onEditTask} onDeleteTask={onDeleteTask} />
      ))}
    </>
  );
};

interface SortableTaskProps {
  task: Task;
  onEditTask: (task: Task) => void;
  onDeleteTask: (taskId: number) => void;
}

const SortableTask: React.FC<SortableTaskProps> = ({ task, onEditTask, onDeleteTask }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Card ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <CardContent>
        <Typography variant="h6">{task.title}</Typography>
        <Typography variant="body2">{task.description}</Typography>
        <Typography variant="caption">Priority: {task.priority}</Typography>
        <IconButton onClick={() => onEditTask(task)}>
          <Edit />
        </IconButton>
        <IconButton onClick={() => onDeleteTask(task.id)}>
          <Delete />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default TaskList;