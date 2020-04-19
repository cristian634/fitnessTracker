init();

async function init() {
  console.log("doin stuff")
  if (location.search.split("=")[1] === undefined) {
    const workout = await API.getLastWorkout();
    console.log(workout )
    if (workout) {
    console.log(workout)

      location.search = "?id=" + workout._id;
    } else {
      console.log("no workout found")
      document.querySelector("#continue-btn").classList.add("d-none")
    }
   
  }
 
}

