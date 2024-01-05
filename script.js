document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); 
    
    const nameInput = document.getElementById("name");
    const ageInput = document.getElementById("age");

    if (nameInput.value.trim() === "" || ageInput.value.trim() === "") {
        console.log("Please fill out all fields");
        return;
    }

    const formPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const age = parseInt(ageInput.value);

            if (age >= 18) {
                resolve(`Welcome, ${nameInput.value}. You can vote.`);
            } else {
                reject(`Oh sorry, ${nameInput.value}. You aren't old enough.`);
            }
        }, 4000); 
    });

    formPromise.then((message) => {
        console.log(message);
    }).catch((message) => {
		console.log(message);
	});
});