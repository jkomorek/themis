/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.geocent.themis.model;

/**
 *
 * @author James
 */
public class AuthenticationRequest {
    
    private String userName;
    private String password;
    private String conferenceKey;

    public AuthenticationRequest(String userName, String password, String conferenceKey) {
        this.userName = userName;
        this.password = password;
        this.conferenceKey = conferenceKey;
    }
    
    public String getConferenceKey() {
        return conferenceKey;
    }
    public String getPassword() {
        return password;
    }

    public String getUserName() {
        return userName;
    }

    
}
