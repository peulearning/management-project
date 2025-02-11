package com.project.management.controller;

import com.project.management.model.Project;
import com.project.management.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/projects")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @GetMapping
    public String listProjects(Model model){
        List<Project> projects = projectService.findAll();
        model.addAttribute("projects", projects);
        return "projects";
    }

    @PostMapping
    public String createProject(@ModelAttribute Project project){
        projectService.save(project);
        return "redirect:/projects";
    }
}
