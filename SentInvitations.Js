let arrUsers = [];
var numberOfUsers = 0;
var intervalUsers;
var lastWindowHeight = -1;

function startScript(numberOfCon){
    numberOfUsers = numberOfCon;
  connectWith();
}

function connectWith(){
  runInterval().then(value => sendConnections());

}

function runInterval() {
  return new Promise((resolve, reject) => {
    intervalUsers = setInterval(function(){
        window.scrollTo(0, document.body.scrollHeight);

            if(numberOfUsers<=arrUsers.length || document.body.scrollHeight == lastWindowHeight){
              clearInterval(intervalUsers);
            resolve(1);
          }
 
          arrUsers = document.querySelectorAll('button[data-control-name="invite"]');
 
          lastWindowsHeight = document.body.scrollHeight;
    }, 10000);
  })
}

function sendConnections(){
  var totalConnectionsSent = 0;
 
  for (let usr of arrUsers) {
      if (totalConnectionsSent >= numberOfUsers) {
        break;
      }
 
    usr.click();
    totalConnectionsSent += 1;
    }
 
  
 
}

// Here is the only change you have to do: Change the number 10 with the number of connections you want to do: 1, 10, 37, 2184... and press enter.
startScript(10000);
