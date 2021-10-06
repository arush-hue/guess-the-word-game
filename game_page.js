player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name + ":";
document.getElementById("player2_name").innerHTML=player2_name + ":";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question turn - " + player1_name;
document.getElementById("player_answer").innerHTML="Answer turn - " + player2_name;

q_t="player1";
a_t="player2";
function send()
{
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log("word in lower case"+word);
    charAt1=word.charAt(1);
    console.log(charAt1);

    length_divide_1=Math.floor(word.length/2);

    charAt2=word.charAt(length_divide_1);
    console.log(charAt2);

    minus=word.length-1;

    charAt3=word.charAt(minus);
    console.log(charAt3);

    remove_charAt1=word.replace(charAt1,"_");
    remove_charAt2=remove_charAt1.replace(charAt2,"_");
    remove_charAt3=remove_charAt2.replace(charAt3,"_");
    console.log(remove_charAt3);
    
    question="<h4 id='display'>Q." + remove_charAt3 + "</h4>";
    input="<br>Answer:<input type='text' id='input_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";

    row=question+input+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}
function check()
{
    get_answer=document.getElementById("input_box").value;
    answer=get_answer.toLowerCase();
    console.log("answer in lower case-"+answer);
    if (answer==word)
    {
        if (a_t=="player1")
        {
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else
        {
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }
    if (q_t=="player1")
    {
        q_t="player2";
        document.getElementById("player_question").innerHTML="Question Turn - "+player2_name;
    }
    else
    {
        q_t="player1";
        document.getElementById("player_question").innerHTML="Question Turn - "+player1_name;
    }
    if(a_t=="player1")
    {
        a_t="player2";
        document.getElementById("player_answer").innerHTML="Answer Turn - "+player2_name;
    }
    else
    {
        a_t="player1"
        document.getElementById("player_answer").innerHTML="Answer Turn - "+player1_name;
    }
    document.getElementById("output").innerHTML="";
}