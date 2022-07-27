
function initMap() {
  
    let map = new google.maps.Map(document.getElementById("map"), {
        mapId: "28f08bb4a23eb650",
        center: { lat: 48.85, lng: 2.35 },
        zoom:8,
        minZoom: 2,
    });

    //Paris Marker
    let Paris = { lat: 48.85, lng: 2.35 }
    let markerP = new google.maps.Marker({
      position: Paris,
      map: map,
    });

    
        const contentStringP =
          '<div id="content">' +
          '<div id="siteNotice">' +
          "</div>" +
          '<h1 id="firstHeading" class="firstHeading">Paris</h1>' +
          '<div id="bodyContent">' +
          "<p><b>Position: A - Paris</b>, also referred to as <b>Gastronomy and Artistic Touristic Center</b>, reference in the world " +
          "Northern Territory,  It lies 335&#160;km (208&#160;mi) " +
          "south west of the nearest large town, Alice Springs; 450&#160;km " +
          "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
          "features of the Uluru - Kata Tjuta National Park. Uluru is " +
          "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
          "Aboriginal people of the area. It has many springs, waterholes, " +
          "rock caves and ancient paintings. Uluru is listed as a World " +
          "Heritage Site.</p>" +
          '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
          "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
          "(last visited June 22, 2009).</p>" +
          "</div>" +
          "</div>";
        const infowindowP = new google.maps.InfoWindow({
          content: contentStringP,
        });
        
      
        
        markerP.addListener("click", () => {
          infowindowP.open({
            anchor: markerP,
            map,
            shouldFocus: false,
          });
        });


     //Island Marker
     let Island = { lat: 65.00, lng: -18.36 }
     let markerI = new google.maps.Marker({
       position: Island,
       map: map,
     });
 
     
         const contentStringI =
           '<div id="content">' +
           '<div id="siteNotice">' +
           "</div>" +
           '<h1 id="firstHeading" class="firstHeading">Island</h1>' +
           '<div id="bodyContent">' +
           "<p><b>Position: B - Island</b>, also referred to as <b>More Coldest, Isolated and Mostly Beautiful Nights as  a Place  </b>, reference in the world " +
           "Northern Territory, It lies 335&#160;km (208&#160;mi) " +
           "south west of the nearest large town, Alice Springs; 450&#160;km " +
           "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
           "features of the Uluru - Kata Tjuta National Park. Uluru is " +
           "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
           "Aboriginal people of the area. It has many springs, waterholes, " +
           "rock caves and ancient paintings. Uluru is listed as a World " +
           "Heritage Site.</p>" +
           '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
           "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
           "(last visited June 22, 2009).</p>" +
           "</div>" +
           "</div>";
         const infowindowI = new google.maps.InfoWindow({
           content: contentStringI,
         });
         
       
         
         markerI.addListener("click", () => {
           infowindowI.open({
             anchor: markerI,
             map,
             shouldFocus: false,
           });
         });




}
  
  window.initMap = initMap;

