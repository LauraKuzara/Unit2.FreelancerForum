/*
create a pre-populated list (array) of freelancers
randomly select an occupation, cost, into freelancer array
must use `document.querySelector` correctly to select existing 
DOM elements and update the average starting price

add items into the freelancers array at a certain cadence
create render function

make a max amount of freelancers to populate

find the average of the freelancers starting rate
*/

// const freelancers = [
//     { name: "Dr. Slice", price: 25, occupation: "gardener" },
//     { name: "Dr. Pressure", price: 51, occupation: "programmer" },
// ];

function render() {
    // Render the freelancers
    const freelancersId = document.querySelector("#freelancers");
    // Keep header but clear previous table rows
    freelancersId.innerHTML =
    /* html*/
        `<tr>
        <th>Name</th>
        <th>Occupation</th>
        <th>Starting Price</th>
        </tr>`;
};

render()