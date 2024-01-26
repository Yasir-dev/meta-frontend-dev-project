

const fetchAPI = date => {
    const availableTimes = ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"];
    // select and return number of items
    const numberOfItems = Math.floor(Math.random() * 6) + 1;
    // create an empty array
    const randomTimes = [];
    // loop through the array
    for (let i = 0; i < numberOfItems; i++) {
        // select random time from availableTimes array
        const randomTime = availableTimes[Math.floor(Math.random() * availableTimes.length)];
        // add the random time to the randomTimes array
        randomTimes.push(randomTime);
    }

    // sort the array in ascending order
    randomTimes.sort();

    // remove duplicates
    
    return [...new Set(randomTimes)];
}



    

const submitAPI = formData => true;
  
export {
  fetchAPI,
  submitAPI
};    