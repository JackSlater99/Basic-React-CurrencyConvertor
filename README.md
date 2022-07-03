# Basic React Currency Convertor

A currency converter that provides you the latest exchange rates using the following API: https://www.exchangerate-api.com/


### Example:

GBP to USD
<br />
![image](https://user-images.githubusercontent.com/101419891/177059132-f775cbd8-811e-4116-a767-23d4ac44fa81.png)

<br />

## Guide to Run :

Install dependencies :
```
npm install
```

Start the app :
```
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

<br />

The page will reload if you make edits. You will also see any lint errors in the console.

## Guide to Changing API :

The API being used for the app can easily be switched out for any other API using the same object format - {AED: 4.43, AFN: 108.06, ALL: 137.52, AMD: 491.01, ...}

Change url variable to your API URL:
```
const url = 'Your API URL Here'
```

Setting object location for Exchange Rates within your API:
```
setExchangeRates(data.<Object Location>)
```
