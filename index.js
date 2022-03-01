function submitData(userName, userEmail) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            name: `${userName}`,
            email: `${userEmail}`,
        })
    })
    .then(response => response.json())
    .then((data) =>appendID(data))
    .catch(errorMsg);
    
}

function appendID(data){
    const id = data.id;
    return document.body.append(id);
}

function errorMsg(error){
    alert("Error! Please verify data.");
    return document.body.append(error.message);
}