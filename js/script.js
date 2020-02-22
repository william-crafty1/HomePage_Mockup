let vacationType = prompt("What kind of vacation would you like to go on; musical, tropical, or adventurous");
let groupSize = prompt("What is your group size?");

if (vacationType === "musical") {
    var string1 = " in New Orleans";
    vacationType = "muscial vacation ";
} 
else if (vacationType === "tropical") {
    var string1 = " to a Beach Vacation in Mexico";
    vacationType = "tropical vacation ";
}
else if (vacationType === "adventurous") {
    var string1 = " Whitewater Rafting the Grand Canyon";
    vacationType = "adventurous vacation ";
}


if (groupSize >= 1 && groupSize <= 2) {
    var string2 = " by First Class";
    groupSize = (" with " + groupSize + " people,");
} 
else if (groupSize >= 3 && groupSize <= 5) {
    var string2 = " by Helicopter";
    groupSize = (" with " + groupSize + " people,");
}
else if (groupSize >= 6) {
    var string2 = " by Charter";
    groupSize = (" with " + groupSize + " people,");
}

var result = vacationType.concat(groupSize, string1, string2);
console.log("You will be going on a " + result);
