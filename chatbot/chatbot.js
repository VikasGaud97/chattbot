function talk() {
    var know = {
        "who are you?": "Hello, I'm your Talkative Buddy. ",
        "How are you": "I'm good  sir, What about you. ",
        "what can you do?": "i can talk with you or I can Entertain you.",
        "can I talk with you?": "offcourse , you can talk with me."
    };
    var user = document.getElementById("userBox").value ; /* input from user*/
    document.getElementById("chatLog").innerHTML = user + "<br>"; /* same value in chatlog*/
    if (user in know) {
        document.getElementById("chatLog").innerHTML = know[user] + "<br>";/*if question asked is same as know by user retun the answr*/
    } else { /*if question is not same return this*/
        document.getElementById("chatLog").innerHTML = "Sorry I didn't understand it , Can you please type it again";

    }
}