// Write your JavaScript code here.
// Remember to pay attention to page loading!

      // add load event handler to window
      window.addEventListener("click", function() {

        let statusNode = document.getElementById("flightStatus");

        let takeoffBtn = document.getElementById("takeoff");
        takeoffBtn.addEventListener("click", function(){
          let confirmed = window.confirm("Confirm that the shuttle is ready for takeoff");

          if (confirmed) {
            // let statusNode = document.getElementById("flightStatus");
            statusNode.innerHTML = "Shuttle in flight"

            let bgNode = document.getElementById("shuttleBackground");
            bgNode.style.backgroundColor = "blue";
            
            let heightDisplayNode = document.getElementById("spaceShuttleHeight");
            let currentHeight = Number(heightDisplayNode.innerHTML);
            currentHeight += 10000;
            heightDisplayNode.innerHTML = currentHeight;

            let rocketNode = document.getElementById("rocket");
            let currentImgHeight = parseInt(rocketNode.style.bottom);
            rocketNode.style.bottom = (currentImgHeight + 10) + "px"; 
          }
        });

        let landBtn = document.getElementById("landing");
        landBtn.addEventListener("click", function(){
          window.alert("The shuttle is landing. Landing gear engaged.");
          statusNode.innerHTML = "The shuttle has landed.";

         let bgNode = document.getElementById("shuttleBackground");
            bgNode.style.backgroundColor = "green";
        });
        
        //   this.statusNode.innerHTML = "The shuttle has landed.";


    // console.log(e.target)


      });