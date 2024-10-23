// Halloween Mad Libs function
function playMadLibs() {
    const adjective1 = prompt("Enter an adjective:");
    const noun1 = prompt("Enter a noun:");
    const verb1 = prompt("Enter a verb:");
    const adjective2 = prompt("Enter another adjective:");
    const noun2 = prompt("Enter another noun:");
    const place = prompt("Enter a place:");
    const number = prompt("Enter a number:");
    const exclamation = prompt("Enter an exclamation!");

    const story = ` 
    On Halloween night, Sanvi and GianLuca went on a mission for candy and saw a ${adjective1} ${noun1} 
    that started to ${verb1} in a ${adjective2} way! It was holding a ${noun2} and dancing around in ${place}. 
    She told GianLuca, "I couldn't believe my eyes!" GianLuca quickly counted to ${number} and shouted, 
    "${exclamation}!" What a spooky night! 
`;
    alert(story);
}