//prompt user for vactionType and groupSize
let vacationType = prompt("What kind of vacation would you like to go on; musical, tropical, or adventurous");
let groupSize = prompt("What is your group size?");

//condtionals that sets destination based on user input 
if (vacationType === "musical") {
    var destination = " in New Orleans";
    vacationType = "muscial vacation ";
} 
else if (vacationType === "tropical") {
    var destination = " to a Beach Vacation in Mexico";
    vacationType = "tropical vacation ";
}
else if (vacationType === "adventurous") {
    var destination = " Whitewater Rafting the Grand Canyon";
    vacationType = "adventurous vacation ";
}

//condtionals that sets travel method based on user input 
if (groupSize >= 1 && groupSize <= 2) {
    var travelMethod = " by First Class";
    groupSize = (" with " + groupSize + " people,");
} 
else if (groupSize >= 3 && groupSize <= 5) {
    var travelMethod = " by Helicopter";
    groupSize = (" with " + groupSize + " people,");
}
else if (groupSize >= 6) {
    var travelMethod = " by Charter";
    groupSize = (" with " + groupSize + " people,");
}

//results displayed to console
var result = vacationType.concat(groupSize, destination, travelMethod);
console.log("You will be going on a " + result);
