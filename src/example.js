const myData = {
    name: "Bob",
    location: {
        city: "Paris",
        country: "France"
    },
    employment: {
        title: "Manager",
        dept: "Sales"
    }
};

function printDetails(data) {
    console.log(`Name: ${data.name}, City: ${data.location.city}, Role: ${data.employment.title}`);
}

printDetails(myData);
