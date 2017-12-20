// Code your solution in this file
function findMatching(drivers,name){
  return drivers.filter(function(d){
  //  let dr=d.toLowerCase();
    //let nm=name.toLowerCase();
    if(name.toLowerCase().indexOf(d.toLowerCase())>-1)
      return name;
  });

}

function fuzzyMath(drivers,str){
  return drivers.filter(function(d){
    if(d.startsWith(str)==true)
    return d;
  });
}

function matchName(drivers,str){

}
