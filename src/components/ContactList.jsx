import React, { useEffect, useState } from "react"; 

// const contactList = [
//     {
//         "id": 1,
//         "name": "Mrs. Jerald Schulist",
//         "username": "Antwan",
//         "email": "Coby_Zieme@libby.tv",
//         "address": {
//           "street": "Morissette Heights",
//           "suite": "Apt. 633",
//           "city": "Port Liashire",
//           "zipcode": "04270",
//           "geo": {
//             "lat": "27.7501",
//             "lng": "-83.1776"
//           }
//         },
//         "phone": "(663)839-3814 x845",
//         "website": "arvel.io",
//         "company": {
//           "name": "D'Amore-Krajcik",
//           "catchPhrase": "Down-sized empowering Graphic Interface",
//           "bs": "extend cross-media relationships"
//         }
//       },
//       {
//         "id": 2,
//         "name": "Dino Hermiston",
//         "username": "Ana",
//         "email": "Yasmine_Metz@dakota.biz",
//         "address": {
//           "street": "Thiel Meadows",
//           "suite": "Suite 511",
//           "city": "Lake Gus",
//           "zipcode": "00930-0815",
//           "geo": {
//             "lat": "69.9567",
//             "lng": "-43.7631"
//           }
//         },
//         "phone": "446-981-3895",
//         "website": "nona.biz",
//         "company": {
//           "name": "Krajcik and Daughters",
//           "catchPhrase": "Progressive upward-trending hierarchy",
//           "bs": "innovate next-generation platforms"
//         }
//       },

function contactList(){
    const [contactList, setContactList] = useState ([]);

    useEffect(()=> {

        async function fetchData (){
            try {
                const response = await fetch ('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users')
                const data = await response.json();
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
})

return
{
    contactList.map((Object) => <p>{Object.name}, {Object.username} {Object.email}</p>)
}
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {
          
         }
      </tbody>
    </table>
}


export default contactList