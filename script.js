// api url
const api_url = "http://209.15.98.146/adi_test/test/api.php";
            
// Defining async function
async function getapi(url) {
    const response = await fetch(url); // Storing response
    var data = await response.json(); // Storing data in form of JSON
    //console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}

// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<tr>
        <th>ID</th>
        <th>Title</th>
        <th>Author</th>
        <th>Published</th>
        </tr>`;

    // Loop to access all rows 
    data.forEach((item) => {
        tab += `<tr> 
                <td>${item.id} </td>
                <td>${item.title}</td>
                <td>${item.author}</td> 
                <td>${item.published_at}</td>          
            </tr>`;
    });

    // Setting innerHTML as tab variable
    document.getElementById("employees").innerHTML = tab;
}