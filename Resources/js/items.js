const something = this.document.getElementById("printdetails").innerHTML;
const result = this.document.getElementById('button');

result.onclick = submit;

function submit(){

    alert("you will get your results")

    const something1 = Handlebars.compile(something);

    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var adhar = document.getElementById('aadhar').value;
    var number = document.getElementById('mobile').value;

    const details = {
        firstname : fname,
        lastname : lname,
        addharnumber : adhar,
        mobilenumber : number,
    }

    const compiledHtml = something1(details);

    const something2 = document.getElementById('deta');

    something2.innerHTML = compiledHtml;
}
