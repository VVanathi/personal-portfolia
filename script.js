function openPopup(number) {
    document.getElementById(`overlay${number}`).style.display = 'flex';
}

function closePopup(number) {
    document.getElementById(`overlay${number}`).style.display = 'none';
}
$(document).ready(function() {
  // Show or hide grid items based on the "See More" button click
  $("#see-more-btn").click(function() {
    $(".grid-item").fadeToggle();
    // Toggle the button text
    $(this).text(function(i, text){
      return text === "See More" ? "See more":"see less";
    });
  });
});
