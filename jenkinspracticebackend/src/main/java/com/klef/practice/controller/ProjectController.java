package com.klef.practice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.klef.practice.model.Project;
import com.klef.practice.service.ProjectService;

@RestController
@RequestMapping("/project/")
@CrossOrigin(origins = "*")
public class ProjectController 
{
    @Autowired
    private ProjectService service;
    
    @GetMapping("/")
    public String home() 
    {
        return "Jenkins Full Stack Practice";
    }
    
    @PostMapping("/addproject")
    public ResponseEntity<String> addProject(@RequestBody Project project)
    {
        try
        {
            service.addproject(project);
            return ResponseEntity.ok("Project Added Successfully");
        }
        catch(Exception e)
        {
            return ResponseEntity.status(500).body("Failed to Add Project: " + e.getMessage());
        }
    }
    
    @GetMapping("/viewall")
    public ResponseEntity<List<Project>> viewAllProjects()
    {
        List<Project> projects = service.viewallprojects();
        return ResponseEntity.ok(projects);
    }
    
    @DeleteMapping("/delete/{pid}")
    public ResponseEntity<String> deleteProjectById(@PathVariable int pid) 
    {
        try 
        {
            String output = service.deleteproject(pid);
            return ResponseEntity.ok(output);
        } 
        catch (Exception e) 
        {
            return ResponseEntity.status(500).body("Failed to Delete Project: " + e.getMessage());
        }
    }
}
