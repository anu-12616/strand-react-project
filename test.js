const axios = require('axios');


const getALLOrders = async () => {
    const data = await axios(
        {
            url: "https://creator.zoho.in/api/v2/strandls/ghi-backend/report/All_Orders",
            method: "GET",
            mode: 'no-cors',
            withCredentials: false,
            headers: {
                'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Request-Headers': 'Authorization',
                'Access-Control-Allow-Origin': '*',
                Authorization: "Zoho-oauthtoken 1000.184287dcdb950e0ed7137879f194b87f.c46a1eea78ee9de227c132552a87d14c",
            },
        })

    console.log(data)

}     

getALLOrders()