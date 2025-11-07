package com.klef.practice.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "project_table")
public class Project 
{
    @Id
    @Column(name = "projectid")
    private int projectid;
    
    @Column(name = "projectname", length = 100, nullable = false)
    private String projectname;
    
    @Column(name = "description", length = 500, nullable = false)
    private String description;
    
    @Column(name = "projecttype", length = 50, nullable = false)
    private String projecttype;
    
    @Column(name = "studentname", length = 100, nullable = false)
    private String studentname;
   
    public int getProjectid() {
        return projectid;
    }

    public void setProjectid(int projectid) {
        this.projectid = projectid;
    }

    public String getProjectname() {
        return projectname;
    }

    public void setProjectname(String projectname) {
        this.projectname = projectname;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getProjecttype() {
        return projecttype;
    }

    public void setProjecttype(String projecttype) {
        this.projecttype = projecttype;
    }

    public String getStudentname() {
        return studentname;
    }

    public void setStudentname(String studentname) {
        this.studentname = studentname;
    }
}
