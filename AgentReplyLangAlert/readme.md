LIMITATIONS
-------------

* Checks agent reply AFTER it's been sent.
* Doesn't actually do anything besides a window alert.
* Doesn't catch variations of words such as @$$ or f*ck.
* REGEX or using a "bad" word library might be better than array of "bad" words.

IMPROVEMENT IDEAS
-------------

* Run code every 1000ms using setInterval
* Hide Reply button (.reply-buttons) if bad word present
* Show Reply buttons (.reply-buttons) if bad word NOT present
* Show warning message if bad word present.
* Hide warning message if bad word NOT present.
