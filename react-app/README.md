# React app

## First things first

This HackJam is split in three parts:

- Introduction to React
- Introduction to React-router
- Introduction to state management with Redux and React-redux

Follow the steps in order to understand everything.

We've left a few bugs in the application that you'll have to fix in order to make the application running.
The `app.js` file is the entry point of this application, it is here that your first component is mounted and rendered.

Check the comments in the following files for further information.

## Part One

What you should have at the end at this part: https://wizardly-gates-7ebf4c.netlify.com/

### App.js

For now only the dashboard is displayed. The header seems to be missing.
See what you can do about that.
Display the Header component on the top of the app
path : ./components/dumb/Header

### DashBoard.js

This component is quite complex and a lot of things are missing.
You need to get all the cryptos and then display them.

For that :

You need first to get some datas.
The function callAxios is already define and called but its implementation is not complet(You need to do a Http call to get the data)
You can find the links on the file /src/constants/url
the path on the API to get all the cryptos is ‘/cryptos’
Note : two urls are available : the local one (recommanded) but you need to start the server or the clouded one.
Use the state and setState to save the response of the call and don't forget to initilize the state

then when the data are fetched , you will need to pass them to the List component (Component that you have to write first)

Since everything is displayed properly. you need now to handle the search -> implements handleInput() and GetFilteredCryptos()

Plug the refresh function with the refresh button

### List.js

This file is empty, you need to create the component that will handle the cryptos and display them.

### CryptoDetails.js

You will use this component to display each crypto
Some things a broken or not implemented. Check it out.

## Part Two

Implements the routing sytem using react-router
Check https://github.com/ReactTraining/react-router for the doc

What you should have at the end at this part: https://gallant-payne-82df11.netlify.com/

### App.js

The router needs to be setup here so you can use the routes in the Header and in the other components.
In the `Header.js`, you need to have some navLinks to navigate between the pages.

You need a route for the Dashboard, one for your wallet, one for the buying page (you will use it in the third part) and one for the selling page,(also on the third part)

On the `CryptoDetail.js` file , you can add a link for the Buying page.

hint: You need to display the cryptos, buy them, see your wallet and sell cryptos

### CryptoDetails.js

The button + is a link to go to BuyingPage.js
Setup the route on the router and use a Link to get on the page.
You can use the styled component PlusButtons if you want some style

## Part Three

To start using Redux, you will have to configure the store in the `App.js` file.

You need to implement the reducer and the actions.

Your reducer will be a history reducer that keeps informations for each transaction.
A transaction can be of type `BUY` or `SELL`
One action handles the selling and the other one handles the buying.

Payload structure :

```javascript
    {
        crypto(name) ,
        rate(price),
        quantity,
        date,
        cryptoId,
        type : {BUY,SELL}
    }
```

## WalletDashBoard.js

You need to connect to your redux and get the history.
And finally, link and check the bugs in the `BuyinPage.js` and `SellingPage.js`

## BuyingPage.js

Get the id from the url.
Connect to your redux to get the history => in order to have the amount you have for one crypto.
Use the provider to get the informations of this crypto.
Dispatch the action.

The `SellingPage.js` has almost the same logic.

## Bonus :

For now, you get all the data with one call. If you check the code in the server. You can see that it's possible to fetch a range of the cryptos.
Make a paginated list on the dashBoard.
