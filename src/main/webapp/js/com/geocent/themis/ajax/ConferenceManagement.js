/**
 * Created by IntelliJ IDEA.
 * User: jkomorek
 * Date: 11/2/11
 * Time: 10:11 PM
 * To change this template use File | Settings | File Templates.
 */

/**
 * Create a new conference using the provided information.
 *
 * @param conferenceTitle
 * @param conferenceDescription
 * @param conferenceOrganizers
 * @param conferenceModerators
 * @param conferenceSpeakers
 * @param conferenceStartTime
 * @param conferenceEndTime
 * @param conferenceLocation
 *
 * @return - this function only returns a value if it fails for any reason. The value
 *           returned is a message describing why it failed.
 */
function createConference(conferenceTitle, conferenceDescription, conferenceOrganizers, conferenceModerators,
    conferenceSpeakers, conferenceStartTime, conferenceEndTime, conferenceLocation) {

    var response;
    $.ajax({
        async: false,
        dataType: "text",
        type: "POST",
        url: "mock/conferenceManagement/createConference",
        success: function(text){
          response = text;
        },
        error: function(jqXHR, textStatus) {
            response =  "An error occurred while creating conference. "+textStatus;
        }
    });
    return response;
}

/**
 * Joins the currently authenticated user or guest to the specified conference, allowing the user
 * to participate in the conference as an attendee, moderator, or other role based on their relationship
 * to the conference.
 *
 * @param conferenceKey
 *
 * @return this function only returns a value if it fails for any reason. If it does fail, then a message
 * explaining why it failed is returned.
 */
function joinConference(conferenceKey) {

    if (conferenceKey == null || conferenceKey == '') return "You must specify a conference key";
    var response;
    $.ajax({
        async: false,
        dataType: "text",
        type: "POST",
        url: "mock/conferenceManagement/joinConference",
        success: function(text){
          response = text;
        },
        error: function(jqXHR, textStatus) {
            response =  "An error occurred while joining conference. "+textStatus;
        }
    });
    return response;
}

/**
 * Obtains a list of conferences for which the current user has a relationship with, for example as
 * an organizer, speaker, or moderator.
 *
 * @return a list of MyConference objects. Each object is expected to contain these properties:
 *   - conferenceTitle: [string] the title of the conference
 *   - conferenceKey: [string] the key for the conference
 *   - isModerator: [boolean] true only if the current user is a moderator of the conference
 *   - isOrganizer: [boolean] true only if the current user is an organizer of the conference
 *   - isSpeaker: [boolean] true only if the current user is a speaker at the conference
 */
function listMyConferences() {
    var myConferences = new Array();

    $.ajax({
        url: 'mock/conferenceManagement/listMyConferences',
        dataType: 'json',
        async: false,
        success: function(json){
            $.each(json, function(key, val) {
                myConferences.push(val);
            });
        } ,
        error: function(jqXHR, textStatus) {
            alert("Failed to retrieve list of conferences. "+textStatus);
        }
    });

   return myConferences;
}

