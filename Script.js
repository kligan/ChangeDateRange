// function to close the dialog box
const Close = () => {
 let close = document.getElementById("ContainerId").style.display = "none"; 
 let DisplayBtn = document.getElementById("DisplayBtn").style.display= "Block";
 return close, DisplayBtn;
}

//function to Display the dialog box
const DisplayForm = () =>{
  let Display = document.getElementById("ContainerId").style.display = "Block"; 
  let DisplayBtn = document.getElementById("DisplayBtn").style.display= "none";
  return Display,DisplayBtn;
}

// Prevent form from being submitted 
const Submit = (event) =>{
  event.preventDefault();
}

// Function to disable active class of a button if another button is clicked
const DisableActive = () => {
  let disable = document.getElementById("active");
  disable.classList.remove("active");
  }
  
// function to display the additional input using ternary Operator
const openDialog = () => {
  let x = document.getElementById("Pick");
  return x.style.display === "none"? x.style.display = "block":x.style.display = "none";
}

