let num = 40;

if (num < 39) {
    console.log("a few")
} else if (num > 50) {
    console.log("a lot")
} else {
    console.log("normal")
};

(num == 40) ? console.log("true") : console.log("false");

switch (num) {
    case num < 39:
        console.log("a few");
        break;
    case num > 50:
        console.log("a lot");
        break;
    case 40:
        console.log("normal");
        break;
    default:
        console.log("other");
        break;
}