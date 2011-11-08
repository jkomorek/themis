/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.geocent.themis.services;

import com.geocent.themis.model.AuthenticationRequest;
import com.geocent.themis.model.NewUserRequest;

/**
 *
 * @author James
 */
public interface UserService {
    
    public boolean authenticate(AuthenticationRequest authenticationRequest);
    
    public void register(NewUserRequest newUserRequest);
    
}
