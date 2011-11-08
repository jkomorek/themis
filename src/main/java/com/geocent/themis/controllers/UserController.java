/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.geocent.themis.controllers;

import com.geocent.themis.model.AuthenticationRequest;
import com.geocent.themis.model.NewUserRequest;
import com.geocent.themis.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *
 * @author James
 */

@Controller
public class UserController {
    
    @Autowired
    private UserService userService;
    
    @RequestMapping(value="/home", method= RequestMethod.GET)
    public String home(){
        return "home";
    }
    
    @RequestMapping(value="/authenticate", method= RequestMethod.GET)
    @ResponseBody
    public String authenticate(@RequestParam (value="loginUserName", required=true) String userName, @RequestParam(value="loginPassword", required=true)String password, @RequestParam(value="loginConferenceKey", required=true) String conferenceKey ){
        AuthenticationRequest authenticationRequest = new AuthenticationRequest(userName, password, conferenceKey);
        
        if(userService.authenticate(authenticationRequest)){   
            return "Success";
        }
        else{
            return "Error";
        }
   }
    
    @RequestMapping(value="/register", method=RequestMethod.GET)
    public void register(){
        
        NewUserRequest newUserRequest = new NewUserRequest(null, null, null, null, null);
        
        userService.register(newUserRequest);
    }
    
    @RequestMapping(value="/getUserName", method= RequestMethod.GET)
    public @ResponseBody String getUserName(){
        return "JohnnyK";
    }
            
    
}
