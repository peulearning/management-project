package com.project.management.bean;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;
import java.util.ArrayList;
import java.util.List;

@ManagedBean
@ViewScoped
public class KanbanBean {

    private String newTaskTitle;
    private List<String> todoTasks = new ArrayList<>();

    public String getNewTaskTitle() {
        return newTaskTitle;
    }

    public void setNewTaskTitle(String newTaskTitle) {
        this.newTaskTitle = newTaskTitle;
    }

    public List<String> getTodoTasks() {
        return todoTasks;
    }

    public void addTask() {
        if (newTaskTitle != null && !newTaskTitle.trim().isEmpty()) {
            todoTasks.add(newTaskTitle);
            newTaskTitle = null; // Limpa o campo de entrada
        }
    }
}