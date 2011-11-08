/**
 * Created by IntelliJ IDEA.
 * User: jkomorek
 * Date: 10/30/11
 * Time: 10:53 PM
 * To change this template use File | Settings | File Templates.
 */


/**
 * Logs the currently authenticated user out of Themis, thus terminating their session.
 *
 * @return - this function only returns a value if it fails for any reason. The value
 *           returned is a message describing why it failed.
 */
function logout() {

    var response;
    $.ajax({
        async: false,
        dataType: "text",
        type: "GET",
        url: "mock/sessionManagement/logout",
        success: function(text){
          response = text;
        },
        error: function(jqXHR, textStatus) {
          response =  "An error occurred while logging out. "+textStatus;
        }
    });
    return response;
}

/**
 * Authenticates the user using the supplied userName and password.
 *
 * @param userName
 * @param password
 *
 * @return  this function only returns a value if it fails for any reason. The value
 *           returned is a message describing why it failed.
 */
function login(userName, password) {

    var response;
    $.ajax({
        async: false,
        dataType: "text",
        type: "GET",
        url: "mock/sessionManagement/login",
        success: function(text){
          response = text;
        },
        error: function(jqXHR, textStatus) {
          response =  "An error occurred while logging in. "+textStatus;
        }
    });
    return response;
}


/**
 * Retrieves the userName of the currently authenticated user.
 *
 * @return - the userName of the currently authenticated user. If we fail to obtain the userName for any reason then
 * this function will simply return null.
 */
function getMyUserName() {

    var response;
    $.ajax({
        async: false,
        dataType: "text",
        type: "GET",
        url: "mock/sessionManagement/getMyUserName",
        success: function(text){
          response = text;
            /** note that service must only return text if we can get user name. Server side
             * errors must return an error code, not a 200 with message. This should probably be changed.
             */
        },
        error: function(jqXHR, textStatus) {
          alert("An error occurred while retrieving my user name. "+textStatus);
            /* pop ups in functions like this are bad. Again, we need to figure out some better error handling. */
        }
    });
    return response;

}
