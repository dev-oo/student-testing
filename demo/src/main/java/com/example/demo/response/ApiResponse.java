package com.example.demo.response;

import org.springframework.http.HttpStatus;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ApiResponse {
    private HttpStatus status;
    private String message;
    private Object result;
}
