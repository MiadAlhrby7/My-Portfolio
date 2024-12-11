// Function to add a new recommendation
function addRecommendation() {
    // Get the text of the new recommendation
    let recommendation = document.getElementById("new_recommendation");
    
    // If the user has entered a recommendation, show a popup
    if (recommendation.value != null && recommendation.value.trim() != "") {
      console.log("New recommendation added");
      showPopup(true); // Call the showPopup function here
  
      // Create a new recommendation element and set its value to the user's message
      var element = document.createElement("div");
      element.setAttribute("class", "recommendation");
      element.innerHTML = "<span>&#8220;</span>" + recommendation.value + "<span>&#8221;</span>";
      
      // Add this element to the end of the list of recommendations
      document.getElementById("all_recommendations").appendChild(element); 
      
      // Reset the value of the input field
      recommendation.value = "";
    }
  }
  
  // Function to show or hide the popup
  function showPopup(bool) {
    if (bool) {
      document.getElementById('popup').style.visibility = 'visible';
      setTimeout(() => showPopup(false), 2000); // Hide the popup after 2 seconds
    } else {
      document.getElementById('popup').style.visibility = 'hidden';
    }
  }
  
  // Add onClick event to the button
  document.getElementById('recommend_btn').onclick = addRecommendation;