function addRecommendation() {
  // Get textarea value
  let recommendation = document.getElementById("new_recommendation");

  // Check if input is not empty
  if (recommendation.value != null && recommendation.value.trim() != "") {

    console.log("New recommendation added");

    // Create new recommendation box
    let element = document.createElement("div");
    element.className = "recommendation";

    element.innerHTML =
      "<span>&#8220;</span>" +
      recommendation.value +
      "<span>&#8221;</span>";

    // Add to recommendation list
    document.getElementById("all_recommendations").appendChild(element);

    // Clear input field
    recommendation.value = "";

    // Show confirmation popup
    showPopup(true);
  }
}

// Popup function (already provided, kept for full working system)
function showPopup(bool) {
  let popup = document.getElementById("popup");

  if (bool) {
    popup.style.visibility = "visible";
  } else {
    popup.style.visibility = "hidden";
  }
}