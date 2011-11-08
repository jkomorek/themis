/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.geocent.themis.services.impl;

import com.geocent.themis.model.AuthenticationRequest;
import com.geocent.themis.model.NewUserRequest;
import com.geocent.themis.services.UserService;
import org.springframework.stereotype.Service;

/**
 *
 * @author James
 */

@Service
public class UserServiceImpl implements UserService {
    
    @Override
    public boolean authenticate(AuthenticationRequest authenticationRequest) {
        
        System.out.println("Authentication Request Recieved.");
        System.out.println("Username: " + authenticationRequest.getUserName());
        System.out.println("Password: " + authenticationRequest.getPassword());
        
        return true;
    }

    @Override
    public void register(NewUserRequest newUserRequest) {
        throw new UnsupportedOperationException("Not supported yet.");
    }
    
}
