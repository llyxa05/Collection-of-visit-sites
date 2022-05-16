var text = ["$$", "$ $", "$ f $", "$ fo $", "$ foa $", "$ foam $", "$ foamm $", "$ foammy $", "$ foammy  $", "$ foammy o $", "$ foammy ov $", "$ foammy ovh $", "$ foammy ov $", "$ foammy o $", "$ foammy  $", "$ foammy $", "$ foamm $", "$ foam $", "$ foa $", "$ fo $", "$ f $", "$ $","$$"];
var counter = 0;
var inst = setInterval(change, 300);

function change() {
    document.title = text[counter];
    counter++;
    if (counter >= text.length) {
        counter = 0;
    }
}
