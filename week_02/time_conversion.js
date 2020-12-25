function timeConversion(s) {
     // time with AM/PM removed
     const ampmRemovedTime = s.slice(0, s.length - 2);
     const hourValue = Number(s.slice(0,2));

     // check if time is AM or PM
     // if AM and hour is 12 make it 00 else return as is
     if(s.includes("AM")) return hourValue === 12 ? `00${ampmRemovedTime.slice(2)}`: ampmRemovedTime;

     // if PM and hour is 12 return as is, else add 12 to hours
     return hourValue === 12 ? ampmRemovedTime : `${hourValue + 12}${ampmRemovedTime.slice(2)}`;
}

console.log(timeConversion("12:40:22AM"))