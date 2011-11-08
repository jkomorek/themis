/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.geocent.themis.model;

/**
 *
 * @author James
 */
public class NewUserRequest {
    
    private String userName;
    private String password;
    private String firstName;
    private String lastName;
    private String email;

    public NewUserRequest(String userName, String password, String firstName, String lastName, String email) {
        this.userName = userName;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    public String getEmail() {
        return email;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getPassword() {
        return password;
    }

    public String getUserName() {
        return userName;
    }
    
    
    
}
