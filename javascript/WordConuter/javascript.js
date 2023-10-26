console.log("Started")
let lextbox = document.getElementById("textbox");
lextbox.addEventListener("input", function()
{
    var text=this.value;
    let char=text.length;
    document.getElementById("char").innerHTML=char;



    text=text.trim();
    let words=text.split(" ");
    let cleanlist=words.filter(function(elm){
        return elm!="";
    })
    let word=cleanlist.length;
    document.getElementById("word").innerHTML=word; 

});
