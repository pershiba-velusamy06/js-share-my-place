export class Map{
    constructor(coords){
//this.coordinates=coords;
this.render(coords)
    }
    render(coordinates){
        if(!google){
            alert('could not load maps library - Pkease try again later')
            return
        }
     const map=   new google.maps.Map(document.getElementById('map'),{center:coordinates,zoom:16})
     new google.maps.Marker({
        position:coordinates,
        map:map
     })
    }
}