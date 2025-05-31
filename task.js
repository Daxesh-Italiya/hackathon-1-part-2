//Hackathon 
a = [
  { userID: 1, Name: "Jhon" },
  { userID: 2, Name: "Jane" }
]

b = [
  { userID: 1, DateOfBirth: "02-05-2000" },
  { userID: 3, DateOfBirth: "15-08-1998" }
]




function mergeUserData(a,b){
    let mergeArr= a.concat(b);
   
    let map= new Map()
    
    let finalArr=[]
    
    for(let obj of mergeArr){
        // if he has a userId already
        if (map.has(obj.userID)) {
       
            Object.assign(map.get(obj.userID), obj);
              }
              else{
            let newObj={...obj}
            if(!newObj.Name){
                newObj["Name"]=null
            }else if(!newObj.DateOfBirth){
                newObj["DateOfBirth"]=null
            }
            map.set((obj.userID),newObj)
            finalArr.push(newObj)
            
        }
    }
  
      console.log("Merge Array Output One",finalArr)
     let analyticData= generateAnalytics(finalArr);
     console.log("analyticData Output Two=>",analyticData)
    //  console.log(analyticData.monthYearStats)
}



function generateAnalytics(mergeArr) {
    // console.log("Array",mergeArr)
 
 //Missing Counts =>
  let nameMissingCount = 0;
  let dateOfBirthMissingCount = 0;
  const monthYearStats = {};

 
  for (const obj of mergeArr) { 
    if (!obj.Name){
        nameMissingCount++
    }
    if (!obj.DateOfBirth) {
      dateOfBirthMissingCount++;
      continue;
    }

    const [day, month, year] = obj.DateOfBirth.split("-");
    const key = `${month}-${year}`;
    const currentDate = new Date(`${year}-${month}-${day}`);

    if (!monthYearStats[key]) {
      monthYearStats[key] = {
        count: 1,
        youngest: { ...obj }
      };
    } else {
      monthYearStats[key].count += 1;
      const existingDate = new Date(
        monthYearStats[key].youngest.DateOfBirth.split("-").reverse().join("-")
      )}}

  return {
    missingFieldCounts: {nameMissingCount,dateOfBirthMissingCount},monthYearStats }}

    mergeUserData(a, b)
 
 // Thankyou for this WonderFull Question 



