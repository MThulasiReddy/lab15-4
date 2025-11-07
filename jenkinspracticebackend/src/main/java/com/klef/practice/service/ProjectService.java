package com.klef.practice.service;

import java.util.List;
import com.klef.practice.model.Project;

public interface ProjectService 
{
    public String addproject(Project p);
    public List<Project> viewallprojects();
    public String deleteproject(int pid);
}
