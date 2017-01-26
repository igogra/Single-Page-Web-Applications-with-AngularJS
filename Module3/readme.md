# Assignment Instructions

## General Idea
You are going to be building a much simplified search of the menu item descriptions using the restaurant server REST API we used in Lecture 25, Part 2.

The idea here is for the user to search the descriptions of menu items. Then, given the list of matches of his search, give the user the ability to throw the items they for sure don't want off the list, thus narrowing it down to what they do want.

Your task is create a text box and a button with the label "Narrow It Down For Me!".

Initially, the user should just see a screen with the textbox and the "Narrow It Down For Me!" button. Once the user enters something into the textbox and clicks the button, your app will reach out to the server and retrieve the list of menu items for the entire menu. Once retrieved, your task is to loop through all the items and, for each item, do a simple check if the string being searched for by the user appears anywhere in the description of the item. If it does, that item gets placed in a special found array. If it doesn't, you simply move on to the next item.

Once your app goes through all the items, it should display the found list of items. Each item in the list should show the name of the menu item, its short_name, and the description. You can display the items in a simple unordered list, with each piece of information separated by a comma. OR be fancier and use some sort of a grid. Either way is fine. We are not concentrating on style in this class.

You should also provide a "Don't want this one!" button next to each item in the list to give the user the ability to remove an item from that list.

If nothing is found as a result of the search OR if the user leaves the textbox empty and clicks the "Narrow It Down For Me!" button, you should simply display the message "Nothing found".

To make things a bit easier, you can retrieve the items from the server every time the user clicks the "Narrow It Down For Me!" button. You don't have to cache the response. In other words, no matter what actions the user has taken, if the "Narrow It Down For Me!" button is clicked, all the data gets wiped out and the whole process starts all over again. No requirement to remember what the user chose to throw off the list last time.

[See my solution web page](https://igogra.github.io/Single-Page-Web-Applications-with-AngularJS/Module3/)
