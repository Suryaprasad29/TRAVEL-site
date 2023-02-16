const buttoncalled=document.getElementById("button");
buttoncalled.addEventListener('click', submit)
const getButtoncalled=document.getElementById("get");
getButtoncalled.addEventListener('click', get)

function submit(){
    let name3=document.getElementById("aadhar").value;
    let name1=document.getElementById("fname").value;
    let name2=document.getElementById("lname").value;
    let name4=document.getElementById("mobile").value;
    let name5=document.getElementById("password").value;
    let request = new Request('http://localhost:8080/registrations',{
        headers: new Headers({
            
            'Content-type': 'application/json'
        }),
        method: 'POST',
        body: JSON.stringify({
            "aadhar": name3,
            "fname": name1,
            "lname": name2,
            "mobile": name4,
            "password": name5
        })
});
fetch(request).then((response)=>{
    console.log(response);
    response.json().then((data)=>{
        console.log(data);
    })
})
}