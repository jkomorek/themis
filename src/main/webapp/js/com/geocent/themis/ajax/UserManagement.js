/**
 * Created by IntelliJ IDEA.
 * User: jkomorek
 * Date: 10/29/11
 * Time: 10:40 AM
 * To change this template use File | Settings | File Templates.
 */


/**
 * Registers a new User.
 *
 * @param userName - user name for new user
 * @param password - password for new user
 * @param confirmationPassword - a duplicate of password to ensure user typed it correctly
 * @param firstName - the first name of new user
 * @param lastName - the last name of new user
 * @param emailAddress - the email address of new user
 *
 * @return - this function only returns a value if it fails for any reason. The value
 *           returned is a message describing why it failed.
 */
function registerUser(userName, password, confirmationPassword, firstName, lastName, emailAddress) {

    if (userName == null || userName == '' ) return "You must enter a user name";
    if (password == null || password == '') return "You must enter a password";
    if (password != confirmationPassword) return "The password and confirmation password do not match";
    if (firstName == null || firstName == '') return "Please enter your first name";
    if (lastName == null || lastName == '') return "Please enter your last name";
    if (emailAddress == null || emailAddress == '') return "Please enter your email address";

    var response;
    $.ajax({
        async: false,
        dataType: "text",
        type: "POST",
        url: "mock/userManagement/registerUser",
        data: "name=John&location=Boston",
        success: function(text){
          response = text;
        },
        error: function(jqXHR, textStatus) {
          response =  "An error occurred during registration. "+textStatus;
        }
    });

    return response;
}