package com.cpiproject.CPIProject.service;


import com.cpiproject.CPIProject.model.Users;
import com.cpiproject.CPIProject.repository.UserRepo;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private UserRepo userRepo;

    public UserService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    public Optional<Users> findUser(String regId){

        return userRepo.findById(regId);

    }

}
