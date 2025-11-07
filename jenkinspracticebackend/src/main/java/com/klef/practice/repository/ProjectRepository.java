package com.klef.practice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.klef.practice.model.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Integer> 
{

}
