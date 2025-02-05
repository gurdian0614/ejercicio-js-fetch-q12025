fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        let tabla = "";

        data.forEach(user => {
            tabla += `
                <tr>
                    <td>${user.name}</td>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                    <td>${user.address.street}, ${user.address.suite}, ${user.address.city}</td>
                    <td>${user.phone}</td>
                    <td><a href="http://${user.website}" target="_blank">${user.website}</a></td>
                    <td>${user.company.name}</td>
                </tr>
            `
        })

        document.getElementById("tblUsers").innerHTML = tabla
    })
    .catch(error => console.error('Error al obtener los datos: ', error))