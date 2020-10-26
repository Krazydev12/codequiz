(function() 
{
 var allQuestions = [{
   question: "Which baseball player broke Babe Ruths homerun record first?",
   options: ["Arron Judge", "Mark McGwire", "Rodger Maris", "Hank Aaron"],
   answer: 2
 }, {
   question: "In what year was the first modern Olympic Games held?",
   options: ["1869", "2018", "2008", "2016"],
   answer: 0
 }, {
   question: "Which college team slogen is 'pride of the vally'?",
   options: ["Uc Berkeley", "Fresno state", "Uc Merced","Chico state"],
   answer: 1
 },{
   question: "In what state is the NFL's Pro Bowl played in annually?",
   options: ["texas", "New York", "Flordia", "Hawaii"],
   answer: 3
 }, {
   question: "Who is the tallest player on Fresno state volleyball team at 6'4?",
   options: ["Becca Rendahal", "Amaria Kelley", "Kasey Purry", "Grace Doyle"],
   answer: 1
 },{
   question: "Where is the rose bowl played?",
   options: ["ASU", "USC", "Ohio state", "UCLA"],
   answer: 3
 },{
   question: "How many football teams are there in the NFL?",
   options: ["25", "36", "40", "32"],
   answer: 3
 },{
   question: "Who waas the baseball player nicked named Mr.november?",
   options: ["Buster Posey", "Arron Judge", "Derk Jeter", "Mike Trout"],
   answer: 2
 },{
   question: "What football player got drafted to the NFL from Fresno state?",
   options: ["Derek Carr", "Patrick Mahomes", "Russel Willson", "Jay Cuttler"],
   answer: 0
 },{
   question: "In NBA how tall is the basketball hoop to ground up?",
   options: ["10 ft", "8.5 ft", " 11 ft", "10.5 ft"],
   answer: 0
   }];
 
 var quesCounter = 0;
 var selectOptions = [];
 var quizSpace = $('#quiz');
   
 nextQuestion();
   
 $('#next').click(function () 
   {
       chooseOption();
       if (isNaN(selectOptions[quesCounter])) 
       {
           alert('Please select an option !');
       } 
       else 
       {
         quesCounter++;
         nextQuestion();
       }
   });
 
 $('#prev').click(function () 
   {
       chooseOption();
       quesCounter--;
       nextQuestion();
   });
 
 function createElement(index) 
   {
       var element = $('<div>',{id: 'question'});
       var header = $('<h2>Question No. ' + (index + 1) + ' :</h2>');
       element.append(header);

       var question = $('<p>').append(allQuestions[index].question);
       element.append(question);

       var radio = radioButtons(index);
       element.append(radio);

       return element;
   }
 
 function radioButtons(index) 
   {
       var radioItems = $('<ul>');
       var item;
       var input = '';
       for (var i = 0; i < allQuestions[index].options.length; i++) {
         item = $('<li>');
         input = '<input type="radio" name="answer" value=' + i + ' />';
         input += allQuestions[index].options[i];
         item.append(input);
         radioItems.append(item);
       }
       return radioItems;
 }
 
 function chooseOption() 
   {
       selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
   }
  
 function nextQuestion() 
   {
       quizSpace.fadeOut(function() 
           {
             $('#question').remove();
             if(quesCounter < allQuestions.length)
               {
                   var nextQuestion = createElement(quesCounter);
                   quizSpace.append(nextQuestion).fadeIn();
                   if (!(isNaN(selectOptions[quesCounter]))) 
                   {
                     $('input[value='+selectOptions[quesCounter]+']').prop('checked', true);
                   }
                   if(quesCounter === 1)
                   {
                     $('#prev').show();
                   } 
                   else if(quesCounter === 0)
                   {
                     $('#prev').hide();
                     $('#next').show();
                   }
               }
             else 
               {
                   var scoreRslt = displayResult();
                   quizSpace.append(scoreRslt).fadeIn();
                   $('#next').hide();
                   $('#prev').hide();
               }
       });
   }
 
 function displayResult() 
   {
       var score = $('<p>',{id: 'question'});
       var correct = 0;
       for (var i = 0; i < selectOptions.length; i++) 
       {
         if (selectOptions[i] === allQuestions[i].answer) 
         {
           correct++;
         }
       }
       score.append('You scored ' + correct + ' out of ' +allQuestions.length);
       return score;
 }
})();

// resoucres 
 //https://www.sitepoint.com/simple-javascript-quiz/
 //https://www.youtube.com/watch?v=f4fB9Xg2JEY
 //https://morioh.com/p/12531b816a32
