var score = 0;
var correct = 0;
var test, test_status, question;
var div = document.getElementById("answers"); 

var questionList = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["<js>", "<script>","<>javascript","<scripting>"],
        answer: "<script>"
      },
    {
        question: "Where is the correct place to insert a JavaScript?",
        choices:["the <head> section", "Both the <head> section and the <body> section", "The <body> section"],
        answer: "Both the <head> section and the <body> section"
      },
    {
        question: "How do you create a function in JavaScript",
        choices: ["function = myFunction()", "function myFunction()", "function:myFunction()"],
        answer: "function myFunction()"
      },
    {
        question: "How can you add a comment in a JavaScript?",
        choices: ["<!--This is a comment-->", "//This is a comment",  "`This is a comment"],
        answer: "//This is a comment"
      }
    ];

      function renderQuestion(){
        test = document.getElementById("displayQues")
        if(score >= questionList.length){
          score = 0;
          correct = 0;
          return false;
        }
        
        question = questionList[score].question;
      
        test.textContent = question; 

        questionList[score].choices.forEach(function (choice, i){
          console.log(choice)

          var inputRadio=document.createElement("input"); 
          var label = document.createElement("label");

          inputRadio.setAttribute("type","radio");
          inputRadio.setAttribute("name","choices");
          inputRadio.setAttribute("value",choice);
          inputRadio.setAttribute("id",i);
          inputRadio.textContent = choice; 
          inputRadio.onclick=checkAnswer;
          label.setAttribute("for", i); 
          label.textContent = choice; 
          label.append(inputRadio); 

          console.log(inputRadio); 
          console.log(div); 
          div.append(label);

        })
       score=score+1; 

    };

    function checkAnswer() {
      console.log("radio button clicked", this.value)
    }
renderQuestion()
