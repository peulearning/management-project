// src/App.tsx
import React, { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Container, Typography, Button } from '@mui/material';
import KanbanBoard from './components/KanbanBoard';
import { Project, Task, Priority } from './types';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const initialProject: Project = {
  id: 1,
  title: 'Platform Launch',
  description: 'Project for launching our new platform',
  dateBegin: new Date(),
  tasks: [
    { id: 1, title: 'Design UI', description: 'Create UI mockups', priority: Priority.HIGH, status: 'TODO' },
    { id: 2, title: 'Implement Backend', description: 'Set up server and database', priority: Priority.VERY_HIGH, status: 'DOING' },
    { id: 3, title: 'Write Tests', description: 'Create unit and integration tests', priority: Priority.LOW, status: 'TODO' },
  ],
};

function App() {
  const [project, setProject] = useState<Project>(initialProject);

  const handleUpdateProject = (updatedProject: Project) => {
    setProject(updatedProject);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <Typography variant="h4" style={{ margin: '20px 0' }}>
          {project.title}
        </Typography>
        <KanbanBoard project={project} onUpdateProject={handleUpdateProject} />
      </Container>
    </ThemeProvider>
  );
}

export default App;