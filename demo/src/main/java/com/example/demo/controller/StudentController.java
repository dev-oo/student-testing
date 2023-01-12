package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Student;
import com.example.demo.response.ApiResponse;
import com.example.demo.service.StudentService;

@RestController
@RequestMapping("/student")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping
    public ResponseEntity<ApiResponse> saveStudent(@RequestBody Student student) {
        return new ResponseEntity<>(ApiResponse.builder().result(studentService.saveStudent(student)).status(HttpStatus.OK).build(),HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<ApiResponse> getStudent(@RequestBody Student student) {
        return new ResponseEntity<>(ApiResponse.builder().result(studentService.getStudent(student)).build(), HttpStatus.OK);
    }
    
    @GetMapping(value = "/all")
    public ResponseEntity<ApiResponse> getStudents() {
        return new ResponseEntity<>(ApiResponse.builder().result(studentService.getStudents()).status(HttpStatus.OK).build(),HttpStatus.OK);
    }
    @PutMapping
    public ResponseEntity<ApiResponse> updateStudent(@RequestBody Student student) {
        return new ResponseEntity<>(ApiResponse.builder().result(studentService.updateStudent(student)).build(), HttpStatus.OK);
    }
}
