import { bookstore } from "./database.js"
/*
You're working with a small bookstore's inventory system. 
The store has two arrays of data: one for books in stock and one for customer orders. 
Each book has a title, price, and quantity. Each order has a customer name and the book title they want.
Complete the function below. Its purpose is to process a new order that was just placed.
The function should define the two arrays and a book title as parameters.

The function should perform the following checks:


Note: Define the algorithm with comments, and then implement each step with code.
*/

import { getInventory, getOrders } from "./database.js"
// get a copy of the inventory and pending orders
const bookInventory = bookstore.inventory
const bookOrders = bookstore.orders

const fulfillBookOrder = (inventory, orders, bookTitle) => {

    // * The book title must be in our existing catalog of inventory
    // iterate through the catalog to see if book exists
    for (const bookObject of inventory) {
        if (bookObject.title === bookTitle) {

            // if book does exist, check if there are pending orders 
            // iterate through order array
            for (const orderObject of orders) {
                if (bookObject.title === orderObject.bookTitle) {
                    // check quantity to make sure > 0
                    // * There must be enough quantity of a book we sell in order to fulfill an order
                    if (bookObject.quantity > 0) {
                        // * If there are pending orders, reduce the quantity of the existing inventory for each pending order
                        bookObject.quantity--
                        // * If there is still quantity available after pending orders are accounted for, fulfill the new order
                        // * Return an appropriate message for each scenario (can/cannot be fulfilled)
                        return "Order can be fulfilled"
                    } else {
                        return "Order cannot be fulfilled, not enough inventory."
                    }
                }
            }

        } else {
            // if book doesn't exist, throw a message
            return "Order cannot be fulfilled"
        }

    }
}
