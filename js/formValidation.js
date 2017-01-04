function doSubmit() //For Submit button:
{

  //variables declaration
  var msg = "", msg2 = "";
  var name = document.getElementById('firstname').value;
  var lastName = document.getElementById('lastname').value;
  var mail = document.getElementById('emailaddress').value;
  mail = mail.trim();
  var message = document.getElementById('message').value;
  var confirmCount = 0;
  confirmCount = parseInt(confirmCount);
  var modal = document.getElementById('myModal');
  
  //name validation
  if(name.length >= 2)
  {
    confirmCount +=1;
  }
  else if (name.length == 1)
  {
    msg += "*Sorry, your name must to have at least 2 characters. Please try again.";
  }
  else
  {
    msg += "*You must enter your name!.";
  }

  //lastName validation
  if(lastName.length >= 2)
  {
    confirmCount +=1;
    msg2 += "Thanks " + name + " " +lastName + " for your Message!";
  }
  else if (lastName.length == 1)
  {
    msg += "<br />*Sorry, your last name must to have at least 2 characters. Please try again.";
  }
  else
  {
    msg += "<br />*You must enter your last name!.";
  }

  //e-mail validation
  if(mail.length > 0)
  {
    if(/(\w+@[a-zA-Z_]+?\.[a-zA-Z_]{2,6})/.test(mail) == true)
    {
      msg2 += "<br />We will send you a soon response to: " + mail;
      confirmCount +=1;
    }
    else
    {
      msg += "<br />*e-MAil not valid. Your mail must to have at (@) and then a dot com (.com) characters (name@anywhere.com).";
    }
  }  
  else
  {
    msg += "<br />*You must enter your e-Mail!.";
  }

  //message
  if(message.length >= 5)
    {
      confirmCount +=1;
    }
    else if(message.length == 0)
    {
      msg += "<br />*Please enter any comment.";
    }
    else if(message.length > 0 && message.length < 5)
    {
        msg += "<br />*Please enter a longer query about your interests.";
    }
    else
    {
      msg += "<br />****Oops!!! cheeck the code, must be an error!!!!";
      msg2 += "<br />****Oops!!! cheeck the code, must be an error!!!!";
    }

    if(confirmCount == 4)
    {
      document.getElementById('errorSubmit').innerHTML = "";
      document.getElementById('confirm').innerHTML = msg2;
      document.getElementById('myForm').reset();
      modal.style.display = "block";
    }
    else
    {
      document.getElementById('errorSubmit').innerHTML = msg;
    }
}

function doAgain() //For Start Again button:
{
  document.getElementById('myForm').reset();
  document.getElementById('errorSubmit').innerHTML = "";
  document.getElementById("firstname").focus();

}

function hide() // When the user clicks on <span> (x), close the modal
{
  modal = document.getElementById('myModal');
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
