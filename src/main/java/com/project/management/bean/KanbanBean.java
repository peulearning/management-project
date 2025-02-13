package com.project.management.bean;

import com.project.management.model.Task;
import lombok.Getter;

import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.List;
import java.util.stream.Collectors;

@ManagedBean
@ViewScoped
public class KanbanBean {

    @PersistenceContext
    private EntityManager entityManager;

    // Getters
    @Getter
    private List<Task> todoTasks;
    @Getter
    private List<Task> inProgressTasks;
    @Getter
    private List<Task> doneTasks;

    @PostConstruct
    public void init() {
        loadTasks();
    }

    public void loadTasks() {
        List<Task> allTasks = entityManager.createQuery("SELECT t FROM Task t", Task.class).getResultList();

        // Classificando as tarefas com base na prioridade
        todoTasks = allTasks.stream()
                .filter(task -> task.getPriority().equals("LOW")) // Ajuste conforme necessário
                .collect(Collectors.toList());

        inProgressTasks = allTasks.stream()
                .filter(task -> task.getPriority().equals("HIGH")) // Ajuste conforme necessário
                .collect(Collectors.toList());

        doneTasks = allTasks.stream()
                .filter(task -> task.getPriority().equals("VERYHIGH")) // Ajuste conforme necessário
                .collect(Collectors.toList());
    }

}