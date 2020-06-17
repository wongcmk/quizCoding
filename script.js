var quiz=document.getElementById("quiz");
var ques= document.getElementById("questions");
var choiceA=document.getElementById("choiceA");
var choiceB=document.getElementById("choiceB");
var choiceC=document.getElementById("choiceC");
var choiceD=document.getElementById("choiceD");
var res=document.getElementById("result");
var nextbutton= document.getElementById("next");
var q=document.getElementById('quit');

var tques=questions.length;
var score=0;
var quesindex=0;
function quit()
{         
	      quiz.style.display='none';
          result.style.display='';
          var f=score/tques;
          result.textContent="SCORE ="+f*100;
          q.style.display="none";
}
function give_ques(quesindex) 
{
	ques.textContent=quesindex+1+". "+questions[quesindex][0];
	choiceA.textContent=questions[quesindex][1];
	choiceB.textContent=questions[quesindex][2];
	choiceC.textContent=questions[quesindex][3];
	choiceD.textContent=questions[quesindex][4];
	 return;// body...
};
give_ques(0);
function nextques()
{
	var selected_ans= document.querySelector('input[type=radio]:checked');
	if(!selected_ans)
		{alert("SELECT AN OPTION");return;}

	if(selected_ans.value==questions[quesindex][5])
		{score=score+1;}
	selected_ans.checked=false;
	     quesindex++;
	     if(quesindex==tques-1)
	     	nextbutton.textContent="Finish";
	     var f=score/tques;
	     if(quesindex==tques)
	     {
	     q.style.display='none';
          quiz.style.display='none';
          result.style.display='';
          result.textContent="SCORED:"+(f*100).toFixed(2)+"%";
            return;
	     }
        give_ques(quesindex);

}