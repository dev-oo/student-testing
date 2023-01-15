package com.example.demo.dto;

import lombok.Data;

@Data
public class EmailDto {
    
    private String actiontype;

    private Recipents recipent;

    @Data
    private class Recipents{
        private String emailId;
    }
}
