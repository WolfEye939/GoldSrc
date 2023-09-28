function useless() { console.log("WOAH YOU MUST BE SOME KINDA HACKER!!"); }
useless();

function RigTog() {
    var image = document.getElementById('rigGif');

    if (image.src.match("ACT_RUN_00"))
        { image.src = "../img/ACT_RUN_RIG_00.gif"; } 
        else { image.src = "../img/ACT_RUN_00.gif"; }
}