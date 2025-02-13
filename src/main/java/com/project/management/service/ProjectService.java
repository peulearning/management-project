package com.project.management.service;

import com.project.management.model.Project;
import com.project.management.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository repository;

    public List<Project> findAll() {
        List<Project> projects = repository.findAll();
        System.out.println("Projetos encontrados: " + projects.size());
        return projects;
    }

    public Project save(Project project){
        return repository.save(project);
    }
}
