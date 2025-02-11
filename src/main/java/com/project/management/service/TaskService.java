package com.project.management.service;

import com.project.management.model.Task;
import com.project.management.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    @Autowired
    private TaskRepository repository;

    public List<Task> findAll(){
        return repository.findAll();
    }

    public Task save(Task task){
        return repository.save(task);
    }
}
