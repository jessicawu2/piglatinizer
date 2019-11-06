$("document").ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.
    let userinput =$(".input").val();
    $("#user").click(function() {

        $("#button").click(function){
        (".input");
        let str = $(".input").val();
        str = str.toLowerCase();
        const vowels = ["a", "e", "i", "o", "u"];
        let vowelIndex = 0;

        if (vowels.includes(str[0])) {
            let result = str + "way";
        } else {
            for (let char of str) {
                if (vowels.includes(char)) {
                    vowelIndex = str.indexOf(char);
                    break;
                }
            }
            let result = str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
        }
    });
});