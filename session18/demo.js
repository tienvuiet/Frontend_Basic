let animal = prompt("Please input your favourite animal")
// if (animal === "dog") {
//     console.log("gâu gâu !!!!.....")
// } else if (animal === "cat") {
//     console.log("Meoooooo")
// } else if (animal === "duck") {
//     console.log("quạc quạc.....")
// } else {
//     console.log("con vật này chưa có trong thư viện của chúng tôi")
// }
switch (animal) {
    case "dog":
        console.log("gau gau");
        break;
    case "cat":
        console.log("meo meo");
        break;
    case "horse":
        console.log("hí hí");
        break;
    case "pig":
        console.log("ỉn ỉn");
        break;
    default:
        console.log("con vật chưa có thư viên của chúng tôi");
        break;
}