package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Student;
import com.example.demo.repository.StudentRepository;

@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;

    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    public Student updateStudent(Student student) {
        Optional<Student> studentEntityOpt = studentRepository.findById(student.getId());
        Student studentExisting = studentEntityOpt.isPresent() ? studentEntityOpt.get() : null;

        List<Student> students = studentRepository.findAll();

        for(Student iStudent :students){
            if (!iStudent.getId().equals(student.getId())) {
                iStudent.setAddress("Chandigarh");
                continue;
            }
            student.setAddress(student.getAddress());
        }
        if (studentExisting != null) {
            studentExisting.setAddress(student.getAddress());
            studentExisting = null;
        }
        return studentRepository.save(studentExisting != null ? studentExisting : new Student());


    }
    
    public Student getStudent(Student student) {
        Optional<Student> studentEntityOpt = studentRepository.findById(student.getId());
        student = studentEntityOpt.isPresent() ? studentEntityOpt.get() : null;
        return student;
    }

    public List<Student> getStudents() {
        return studentRepository.findAll();
    }
}
