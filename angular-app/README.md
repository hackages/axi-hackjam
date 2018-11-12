# Angular app

## First things first

This HackJam is split in three parts:

- Introduction to Angular
- Introduction to the Angular router
- Introduction to state management with ngrx

Follow the steps in order to understand everything.

We've left a few bugs in the application that you'll have to fix in order to make the application running.
The `main.js` file is the entry point of this application, it is here that your first component is mounted and rendered.

Check the comments in the following files for further information.

## Part One

What you should have at the end at this part: https://wizardly-gates-7ebf4c.netlify.com/

### app.component.ts

For now only the dashboard is displayed. The header seems to be missing.
See what you can do about that
You can find the header in the dumb folder in

### header.component.ts

the title and the subtitle are missing.

### dashboard.component.ts

This component is quite complex and a lot of things are missing.
You need to get all the cryptos and then display them.

For that:
You need to initilise the API service then you need to get the datas from it in the getData() function
When the data are fetched , you need to display them using the crypto-details component
hint : check \*ngFor
Since everything is displayed properly , you need now to handle the search : check the filter.pipe.ts file to handle it
Plug the refresh function with the refresh button

### CryptoDetails.js

You will use this component to display each crypto fetched in the dashboard component

## Part Two

What you should have at the end at this part: https://gallant-payne-82df11.netlify.com/

### app.module.ts

The router need to be setup in the module ( check the angular router for further informations).
You need a route for the Dashboard, one for your wallet, one for the buying page (you will use it in the third part) and one for the selling page,
(also on the third part)

In the `header.component.ts` we need some navLinks to navigate between the pages.
On the `app.component.ts` file you need to give acces to the pages using the router.
Implements the routing sytem using the angular build-in router
hint : you need to display the cryptos, buy them, see your wallet and sell cryptos

Don't forget to link the "+" button in the `crypto-details.component.ts` file with the buying page.

## Part Three

To start using ngrx, you will have to configure the store in the `app.module.ts`
You will need to implements the reducer and the actions.

Your reducer will be a history reducer `(reducer/wallet.ts)` that keeps informations for each transaction. A transaction can be of type BUY or SELL One action handles the selling and the other one handles the buying.

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

### wallet-dash-board.component.ts

You need here to connect to your ngrx store and get the history.

### buying-page.component.ts

Some stuff to do here to get all the informations you need to connect it with the store and dispatch the action.
Same logic in the `selling-page.component.ts`. Check if you need to change somehting in it.

## Bonus :

For now, you get all the data with one call. If you check the code in the server. You can see that it's possible to fetch a range of the cryptos.
Make a paginated list on the dashBoard.
