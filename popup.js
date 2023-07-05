document.getElementById("additional-accordions").style.display ="none";
document.addEventListener("DOMContentLoaded", function () {
    // Get the upgrade button and premium popup elements
    var upgradeBtn = document.getElementById("premium-btn");
    var premiumPopup = document.getElementById("premium-popup");
    var closeBtn = document.querySelector("#premium-popup .close");
    var upgradeNowBtn = document.getElementById("upgrade-btn");
  
    // Show the premium popup when the upgrade button is clicked
    upgradeBtn.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default behavior of the button
      premiumPopup.style.display = "block";
    });
  
    // Hide the premium popup when the close button is clicked
    closeBtn.addEventListener("click", function () {
      premiumPopup.style.display = "none";
    });
  
    // Upgrade now button functionality (add your own logic)
    upgradeNowBtn.addEventListener("click", function () {
      // Add your code here for the upgrade functionality
      // For example, you can redirect the user to a payment page or implement a payment gateway integration
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    // Get the accordion elements
    var accordions = document.getElementsByClassName("accordion");
  
    // Add click event listeners to the accordions
    for (var i = 0; i < accordions.length; i++) {
      accordions[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  });
// Get the upgrade button and account details popup
const upgradeBtn = document.getElementById("upgrade-btn");
const accountDetailsPopup = document.getElementById("account-details");

// Event listener for the upgrade button
upgradeBtn.addEventListener("click", function () {
  // Show the account details popup
  accountDetailsPopup.style.display = "block";
});
  
document.getElementById("apply-coupon-btn").addEventListener("click", function() {
    var couponCode = document.getElementById("coupon-code-input").value;
    var errorMessage = document.getElementById("coupon-error-message");
  
    if (couponCode === "a1b2c3") {
              // Hide all content under the accordion
      document.getElementById("additional-accordions").style.display ="block";
      errorMessage.textContent = ""; // Clear any previous error message
    } else {
      // Show error message for invalid coupon code
      errorMessage.textContent = "Invalid coupon code. Please try again.";
    }
  });
  
// document.getElementById("apply-coupon-btn").addEventListener("click", function() {
//     var couponCode = document.getElementById("coupon-code-input").value;
  
//     if (couponCode === "a1b2c3") {
//       // Hide all content under the accordion
//       var panelElements = document.getElementsByClassName("panel");
//       for (var i = 0; i < panelElements.length; i++) {
//         panelElements[i].style.display = "none";
//       }
  
//       // Show semesters 3 to 8 accordions
//       for (var semester = 3; semester <= 8; semester++) {
//         var accordionButton = document.createElement("button");
//         accordionButton.className = "accordion";
//         accordionButton.textContent = "Semester " + semester;
//         document.body.insertBefore(accordionButton, document.getElementById("premium-section"));
  
//         var panelDiv = document.createElement("div");
//         panelDiv.className = "panel";
//         document.body.insertBefore(panelDiv, document.getElementById("premium-section"));
//       }
//     } else {
//     //    Show error message for invalid coupon code
//   errorMessage.textContent = "Invalid coupon code. Please try again.";
//     }
//   });
  