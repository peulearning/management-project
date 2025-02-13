package com.project.management.controller;

import com.project.management.model.Task;
import com.project.management.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import java.util.List;

@Controller
@RequestMapping("/tasks")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @GetMapping
    public String listTasks(Model model) {
        List<Task> tasks = taskService.findAll();
        model.addAttribute("tasks", tasks);

        return "tasks"; // Retorna a página tasks.xhtml

        return "tasks";
    }

    @PostMapping
    public String createTask(@ModelAttribute Task task) {
        taskService.save(task);

        return "redirect:/tasks"; // Redireciona após salvar
    }
}

        return "redirect:/tasks";
    }
}
