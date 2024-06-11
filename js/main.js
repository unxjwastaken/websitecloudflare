//the time thing
x = String("It is ");
y = String(" where i am... maybe. WAIT GET OUT MY CODE");
function getLocalTime() {
    let now = new Date();
    return now.toLocaleTimeString();
  }
  //this one does the one w the scoll colours
  window.addEventListener('scroll', () => {document.body.style.setProperty('--scroll',window.scrollY / (document.body.offsetHeight - window.innerHeight));
}, false);

//logs stuff
  console.log("im pretty sure your javascript is working if ya see this lol")
  console.log(x + getLocalTime() + y); // Outputs current date and time in default format
