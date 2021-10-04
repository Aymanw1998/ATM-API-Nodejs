# ATM-API-Nodejs

- install all folders and files
- in terminal ( on the path "ATM-API-Nodejs" folder) Enter: npm install --- to install all packages for this Api
- then Enter: npm start run ---- for running


then: we have 3 requests:

first: GET  /atm/see-data:
    for Show how much maney there is in our ATM (see Data in our DataBase)
    
    the request is :  http://localhost:1998/atm/see-data

second: POST /atm/withdrawal:
    with this request we will sent header:
    like:
          {
            "currency": "ILS",
            "amount": 856.7
          }
   
   for cash withrawal
   the request is : http://localhost:1998/atm/withdrawal
   
   
therid: POST /admin/currency:
    for deposit money
    
    the request is : http://localhost:1998/atm/currency
    
    like a : http://localhost:1998/atm/200
    
