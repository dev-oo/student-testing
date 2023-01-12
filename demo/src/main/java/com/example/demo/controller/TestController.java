package com.example.demo.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.emailDto;
import com.example.demo.response.ApiResponse;

@RestController
@RequestMapping(value = "/")
public class TestController {

    @GetMapping
    public ResponseEntity<ApiResponse> home(){
        return new ResponseEntity<>(ApiResponse.builder().result("I am Home").message("Working fine").status(HttpStatus.OK).build(), HttpStatus.OK);
    }

    //for testing Dto inner class
    @PostMapping
    public void printName( @RequestBody emailDto dto) {
        System.out.println(dto.toString());
    }
    
}
