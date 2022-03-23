var images = ["https://previews.123rf.com/images/kharlamova/kharlamova1712/kharlamova171200049/91740735-gl%C3%BCckliche-gro%C3%9Fe-familie-die-zusammen-aufwerfen-lustige-zeichentrickfigur-malbuch-isoliert-auf-wei%C3%9Fe.jpg", "https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg", "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://previews.123rf.com/images/stockgiu/stockgiu1711/stockgiu171101145/89550972-dise%C3%B1o-de-dibujos-animados-de-abuela.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Family Book", "Abhishek Gupta", "Diljeet Gupta", "Sohan Gupta", "Shradhha Gupta", "Chavvi Gupta", "Sonali Gupta"];
var hobbies = ["Playing chess", "Skating", "Dancing", "Weaving", "Singing", "Cooking"];
var routine = ["Every morning , my mother and grandma make breakfast for me", "Dad and grandpa plays with me", "brothr and sister hangs out with me"]
var i = 0;

function update() {
    i++;
    var numbers_of_family_member_in_array = 6
    if (i > numbers_of_family_member_in_array) {
        i = 0;
    }

    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i];

    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}


var first_member = names[1];
console.log(first_member);
document.getElementById("1st").innerHTML = first_member;

var second_member = names[2];
console.log(first_member);
document.getElementById("2nd").innerHTML = second_member;

var third_member = names[3];
console.log(third_member);
document.getElementById("3rd").innerHTML = third_member;

var fourth_member = names[4];
console.log(fourth_member);
document.getElementById("4th").innerHTML = fourth_member;

var fifth_member = names[5];
console.log(fifth_member);
document.getElementById("5th").innerHTML = fifth_member;

var sixth_member = names[6];
console.log(sixth_member);
document.getElementById("6th").innerHTML = sixth_member;

var first_hobby = hobby[0];
document.getElementById("hobby1").innerHTML = first_hobby;

var second_hobby = hobbies[1];
document.getElementById("hobby2").innerHTML = second_hobby;

var third_hobby = hobbies[2];
document.getElementById("hobby3").innerHTML = third_hobby;

var fourth_hobby = hobbies[3];
document.getElementById("hobby4").innerHTML = fourth_hobby;

var fifth_hobby = hobbies[4];
document.getElementById("hobby5").innerHTML = fifth_hobby;
var sixth_hobby = hobbies[5];
document.getElementById("hobby6").innerHTML = sixth_hobby;

var rout = 0;

function knowledge() {
    document.getElementById("routin").innerHTML = routine[rout];
    rout++;
    if (rout == 3) {
        c = 0;
    }
}