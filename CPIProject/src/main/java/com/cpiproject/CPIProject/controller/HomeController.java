package com.cpiproject.CPIProject.controller;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class HomeController {

    @RequestMapping("/")
    @ResponseBody
    public String greet(){
        return "Hello World";
    }

}
