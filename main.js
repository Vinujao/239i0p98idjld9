player1=localStorage.getItem("player1")
player2=localStorage.getItem("player2")
document.getElementById("p1name").innerHTML=player1+" : "
document.getElementById("p2name").innerHTML=player2+" : "
p1score=0
p2score=0
document.getElementById("p1score").innerHTML=p1score
document.getElementById("p2score").innerHTML=p2score
document.getElementById("Qturn").innerHTML="Question turn - "+player1
document.getElementById("Aturn").innerHTML="Answer turn -"+player2



function send(){
    n1=document.getElementById("n1").value
    n2=document.getElementById("n2").value
    
}