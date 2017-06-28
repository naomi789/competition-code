process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function timeConversion(s) {
    // Complete this function
    var res = s.split(":");
    let hours =  parseFloat(res[0]);
    let minutes = res[1];//parseFloat(
    var test = res[2];
    var sec = test.substr(0,test.length-2);
    var light = res[2].substr(2);
    if(light="PM") hours = hours+12;
    return(hours+":"+minutes+":"+sec)
}

function main() {
    var s = readLine();
    var result = timeConversion(s);
    process.stdout.write("" + result + "\n");

}
