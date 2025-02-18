// src/components/TaskModal.tsx
import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { Task, Priority } from '../types';

interface TaskModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (task: Task) => void;
  task?: Task | null;
}

const TaskModal: React.FC<TaskModalProps> = ({ open, onClose, onSave, task }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<Priority>(Priority.LOW);
  const [status, setStatus] = useState<'TODO' | 'DOING' | 'DONE'>('TODO');

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setPriority(task.priority);
      setStatus(task.status);
    } else {
      setTitle('');
      setDescription('');
      setPriority(Priority.LOW);
      setStatus('TODO');
    }
  }, [task]);

  const handleSave = () => {
    const updatedTask: Task = {
      id: task ? task.id : Date.now(),
      title,
      description,
      priority,
      status,
    };
    onSave(updatedTask);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{task ? 'Edit Task' : 'Add New Task'}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Title"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Description"
          fullWidth
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <FormControl fullWidth margin="dense">
          <InputLabel>Priority</InputLabel>
          <Select
            value={priority}
            onChange={(e) => setPriority(e.target.value as Priority)}
          >
            {Object.values(Priority).map((p) => (
              <MenuItem key={p} value={p}>
                {p}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth margin="dense">
          <InputLabel>Status</InputLabel>
          <Select
            value={status}
            onChange={(e) => setStatus(e.target.value as 'TODO' | 'DOING' | 'DONE')}
          >
            <MenuItem value="TODO">TODO</MenuItem>
            <MenuItem value="DOING">DOING</MenuItem>
            <MenuItem value="DONE">DONE</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default TaskModal;