class Question {

  constructor() {
    this.title = createElement('h1')
    this.button = createButton('Submit');
    this.input1 = createInput("").attribute("placeholder", "Enter Your Name Here....");
    this.input2 = createInput("").attribute("placeholder","Enter Correct Option No..");
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.message = createElement("h2")
    this.sorry = createElement("h2");
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    // this.question("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    // this.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    this.question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    // question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );

    this.question.position(150, 80);
    this.option1.html("1: Everyone " );
    this.option1.position(150, 100);
    this.option2.html("2: Envelope" );
    this.option2.position(150, 120);
    this.option3.html("3: Estimate " );
    this.option3.position(150, 140);
    this.option4.html("4: Example" );
    this.option4.position(150, 160);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(width/2-50, height-80);

    
      this.button.mousePressed(()=>{
      this.input1.hide();
      this.input2.hide();
      this.question.hide();
      this.option1.hide();
      this.option2.hide();
      this.option3.hide();
      this.option4.hide();
      this.button.hide();
      var msg;
      var value = this.input2.value();
      console.log(value);

      switch (value) {

        case "1":
          msg = `Oh... Sorry, ${this.input1.value()}... 
          </br> That was the wrong answer.`
          console.log("Case 1");
          break;
          
        case "2":
          msg = `Good, good ${this.input1.value()}!
          </br> Amazing! That was the right answer.`
          break;

        case "3":
          msg = `Oh... Sorry, ${this.input1.value()}... 
          </br> That was the wrong answer.`
          break;

        case "4":
          msg = `Oh... Sorry, ${this.input1.value()}... 
          </br> That was the wrong answer.`
          break;

        default:
          msg = "Huh??? That is a non-existent value for this question..."
          break;
      }
      this.message.html(msg);
      this.message.position(width/2-200, height/2);
      }
      )
      
      

      // this.message("Thank You, Your Answer Has Been Submitted");
      // this.message(350, 350);

      // this.message.html("Thank You, Your Answer Has Been Submitted");
      // this.message.position(350);


    };
  }
