var pos = 0;
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
        if(pos >= questionList.length){
          test.innerHTML = "<h2>You got "+correct+" of "+questionList.length+" questions correct</h2>";
          document.getElementById("test_status").innerHTML = "Test completed";
          // resets the variable to allow users to restart the test
          pos = 0;
          correct = 0;
          // stops rest of renderQuestion function running when test is completed
          return false;
        }
        //get("test_status").innerHTML = "Question "+(pos+1)+" of "+questionList.length;
        
        question = questionList[pos].question;
        // display the question
        test.textContent = question; 

        // display the answer options

        //Looping through all answer options 
        questionList[pos].choices.forEach(function (choice, i){
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
          //append the radio buttons to the label 
          div.append(label);

        })
        // the += appends to the data we started on the line above
       pos=pos+1; 

    };

    function checkAnswer() {
      console.log("radio button clicked", this.value)
    }
renderQuestion()
