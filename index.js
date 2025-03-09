function sell(that) {
      if (that.value == "Grade 11") {
            document.getElementById("ifYes").style.display = "block";
        } else if(that.value == "Grade 12") {
            document.getElementById("ifYes").style.display = "block";
        } else {
            document.getElementById("ifYes").style.display = "none";
        }
}


let Usname;
let strand;
let grade;

document.getElementById("enroll").onclick = function() {
    Usname = document.getElementById("Uname").value;
    document.getElementById("print").innerText = Usname;
    document.getElementById("print1").innerText = " " + Usname;

    grade = document.getElementById("gradelvl").value;
    document.getElementById("print2").innerText = grade;

    strand = document.getElementById("strand1").value;
    document.getElementById("print3").innerText = strand;
}