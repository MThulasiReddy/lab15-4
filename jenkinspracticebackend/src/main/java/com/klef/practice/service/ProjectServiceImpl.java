package com.klef.practice.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klef.practice.model.Project;
import com.klef.practice.repository.ProjectRepository;

@Service
public class ProjectServiceImpl implements ProjectService
{
    @Autowired
    private ProjectRepository repository;

    @Override
    public String addproject(Project p)
    {
        repository.save(p);
        return "Project Added Successfully";
    }

    @Override
    public List<Project> viewallprojects()
    {
        return repository.findAll();
    }

    @Override
    public String deleteproject(int pid)
    {
        Optional<Project> object = repository.findById(pid);

        String msg = null;

        if(object.isPresent())
        {
            Project project = object.get();
            repository.delete(project);
            msg = "Project Deleted Successfully";
        }
        else
        {
            msg = "Project ID Not Found to Delete";
        }

        return msg;
    }
}
