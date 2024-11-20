jtd.onReady(function(){
    document.querySelectorAll(".nav-list-item").forEach(function (value, key, listObj) { value.classList.add("active")});
});

function fetchContributionCounter() {
    fetch("https://api.github.com/repos/apache/fineract/contributors")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Display data in an HTML element
        document.getElementById("top").textContent = JSON.stringify(data.filter(el => el.login === "adamsaghy")[0].contributions, null, 2);
      })
      .catch(error => {
        console.error('Error:', error);
      });
}
