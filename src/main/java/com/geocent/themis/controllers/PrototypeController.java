/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.geocent.themis.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import twitter4j.ResponseList;
import twitter4j.Status;
import twitter4j.Twitter;
import twitter4j.TwitterException;
import twitter4j.TwitterFactory;

/**
 *
 * @author jbruce
 * 
 * just putting this class here so that i can test stuff that im trying to figure out 
 */

@Controller
public class PrototypeController {
    
    
    @RequestMapping(value="showTweets", method= RequestMethod.GET)
    public String showTweets(Model model) throws TwitterException{
        
        Twitter twitter = new TwitterFactory().getInstance();
        
        twitter.getUserTimeline();
        
        ResponseList<Status> twitterMentions = twitter.getMentions();
        
        model.addAttribute("twitterMentions", twitterMentions);
        
        return "showTweets";
        
    }
    
}
