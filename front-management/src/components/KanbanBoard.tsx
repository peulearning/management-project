// src/components/KanbanBoard.tsx
import React, { useState } from 'react';
import { DndContext, closestCorners, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Grid, Paper, Typography } from '@mui/material';
import TaskList from './TaskList';
import TaskModal from './TaskModal';
import { Task, Project } from '../types';

interface KanbanBoardProps {
  project: Project;
  onUpdateProject: (updatedProject: Project) => void;
}

const KanbanBoard: React.FC<KanbanBoardProps> = ({ project, onUpdateProject }) => {
  const [tasks, setTasks] = useState<Task[]>(project.tasks);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setTasks((items) => {
        const oldIndex = items.findIndex((i) => i.id === active.id);
        const newIndex = items.findIndex((i) => i.id === over.id);
        const newItems = arrayMove(items, oldIndex, newIndex);
        onUpdateProject({ ...project, tasks: newItems });
        return newItems;
      });
    }
  };

  const addTask = (newTask: Task) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    onUpdateProject({ ...project, tasks: updatedTasks });
  };

  const updateTask = (updatedTask: Task) => {
    const updatedTasks = tasks.map(task => task.id === updatedTask.id ? updatedTask : task);
    setTasks(updatedTasks);
    onUpdateProject({ ...project, tasks: updatedTasks });
  };

  const deleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    onUpdateProject({ ...project, tasks: updatedTasks });
  };

  const openAddTaskModal = () => {
    setEditingTask(null);
    setIsModalOpen(true);
  };

  const openEditTaskModal = (task: Task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingTask(null);
  };

  return (
    <DndContext sensors={sensors} collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
      <Grid container spacing={2}>
        {['TODO', 'DOING', 'DONE'].map((status) => (
          <Grid item xs={4} key={status}>
            <Paper elevation={3} style={{ padding: '16px', height: '100%' }}>
              <Typography variant="h6">{status}</Typography>
              <SortableContext items={tasks.filter(t => t.status === status)} strategy={verticalListSortingStrategy}>
                <TaskList
                  tasks={tasks.filter(t => t.status === status)}
                  onEditTask={openEditTaskModal}
                  onDeleteTask={deleteTask}
                />
              </SortableContext>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <TaskModal
        open={isModalOpen}
        onClose={closeModal}
        onSave={editingTask ? updateTask : addTask}
        task={editingTask}
      />
    </DndContext>
  );
};

export default KanbanBoard;