/**
 * Created by IntelliJ IDEA.
 * User: jkomorek
 * Date: 11/6/11
 * Time: 6:50 PM
 * To change this template use File | Settings | File Templates.
 */


/**
 * Submits a question to the specified speaker for the currently joined conference.
 *
 * @param speaker
 * @param question
 */
function submitQuestion(speaker, question) {
    speaker = speaker.trim();
    question = question.trim();

    if (speaker == null || speaker =='') return "You must select a speaker to receive the question";
    if (question == null || question =='') return "Please enter a question";

    var response;
    $.ajax({
        async: false,
        dataType: "text",
        type: "POST",
        url: "mock/questionManagement/submitQuestion",
        success: function(text){
          response = text;
        },
        error: function(jqXHR, textStatus) {
            response =  "An error occurred while submitting question. "+textStatus;
        }
    });
    return response;
}

/**
 * Returns a list of all questions for the currently joined conference which have not yet been
 * approved or denied.
 *
 * @return Returns a list of questions submitted to the currently active conference which have not yet been moderated
 */
function listUnModeratedQuestions() {
    var questions = new Array();

    $.ajax({
        url: 'mock/questionManagement/listUnModeratedQuestions',
        dataType: 'json',
        async: false,
        success: function(json){
            $.each(json, function(key, val) {
                questions.push(val);
            });
        } ,
        error: function(jqXHR, textStatus) {
            alert("Failed to retrieve list of questions to moderate. "+textStatus);
        }
    });

   return questions;
}


