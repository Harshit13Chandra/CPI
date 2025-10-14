package com.cpiproject.CPIProject.repository;


import com.cpiproject.CPIProject.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<Users, String> {
}
