LIMITATIONS
-------------

* Doesn't notify agent in UI // just hides reply buttons in UI.
* Doesn't catch variations of words such as @$$ or f*ck.
* Code runs client side on setInterval every 1000ms (1 second).

IMPROVEMENT IDEAS
-------------

* Show warning message if bad word present.
* Hide warning message if bad word NOT present.
* REWRITE IDEA 1 - Run code on ONLY reply-button mouseover. Hide btn IF restricted present. Show btn otherwise.
* REWRITE IDEA 2 - Write server-side code that checks agent reply for restricted words BEFORE send. If no restricted words, then send.
