const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let hotelIdCounter = 1;

let hotelList = [
    { id: 1, name: "Anataya Hotel", price: 2500, doingTime: "2023-05-17 17:02:54" },
    { id: 2, name: "Mirana Beach Hotel", price: 7200, doingTime: "2023-05-20 10:31:09" },
    { id: 3, name: "Huska Spirit Hotel", price: 3750, doingTime: "2023-05-20 10:31:09"}
];

app.get('/', (req, res) => {
    res.send('Hello World!');
});

//-----------------------------------ข้อ 1 ----------------------------------------------
app.post('/api/create/hotel', (req, res) => {
    const {name, price} = req.body;
    const response = {
        RespCode: 200,
        RespMessage: "success",
        Result : [{
            id : hotelIdCounter++,
            name : name,
            price : price,
            doingTime : new Date().toLocaleString('en-GB', { timeZone: 'Asia/Bangkok' }).replace(/[/]/g, '-').replace(',', '')
        }]
    };
    res.status(200).send(response);
});

//-----------------------------------ข้อ 2 ----------------------------------------------
app.get('/api/listhotel/:id?', (req, res) => {
    const {id} = req.params;
    let response ;

    if(id){
        const hotels = hotelList.find(hotel => hotel.id == id);
        if(hotels){
            response = {
                RespCode: 200,
                RespMessage: "success",
                Result : hotels
            };
        }else{
            response = {
                RespCode: 404,
                RespMessage: "Not found",
                Result : []
            }
        }
    }else{
        response = {
            RespCode: 200,
            RespMessage: "success",
            Result : hotelList
        };
    }
    res.status(200).send(response);
});

//-----------------------------------ข้อ 3 ----------------------------------------------
app.post('/api/search/hotel', (req, res) => {
    const { date } = req.body;
    let response;

    if(date){
        const hotels = hotelList.filter(hotel => hotel.doingTime.startsWith(date));
        if(hotels.length > 0){
            response = {
                RespCode: 200,
                RespMessage: "success",
                Result : hotels.map(hotel => ({
                    id: hotel.id,
                    name: hotel.name,
                    price: hotel.price,
                    doingtime: hotel.doingTime
                }))
            };
        }else{
            response = {
                RespCode: 404,
                RespMessage: "Not found",
                Result : []
            }
        }
    } else {
        response = {
            RespCode: 400,
            RespMessage: "Bad Request",
            Result : []
        }
    }
    res.status(response.RespCode).send(response);
});

//-----------------------------------ข้อ 4 ----------------------------------------------
app.get('/api/dashboard/hotel', (req, res) => {
    const response = {
        RespCode: 200,
        RespMessage: "success",
        Result: {
            Data: hotelList.map(hotel => ({
                id: hotel.id,
                name: hotel.name,
                price: hotel.price,
                doingtime: hotel.doingTime
            })),
            Dashboard: {
                AllHotel: hotelList.length,
                Price: {
                    High: hotelList.reduce((prev, current) => (prev.price > current.price) ? prev : current).name,
                    Low: hotelList.reduce((prev, current) => (prev.price < current.price) ? prev : current).name
                },
                LastHotelAdd: hotelList.reduce((prev, current) => (new Date(prev.doingTime) > new Date(current.doingTime)) ? prev : current).doingTime
            }
        }
    };
    res.status(200).send(response);
});

app.listen(port, () => {
    console.log(`API is running on port ${port}`)
});