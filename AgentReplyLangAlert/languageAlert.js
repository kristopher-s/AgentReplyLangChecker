//initial working version

answersBackofficeSdk.addListener(answersBackofficeSdk.eventTypes.ticketReplied, function (replyContent) {

  //stores reply object content
  var tixContent = replyContent.replyContent;

  //stores restricted words
  var swearWords = ["2g1c","2girls1cup","anal","anus","arse","ass","asshole","arsehole","asswhole","assmunch","autoerotic","autoerotic","ballsack","bastard","beastial","bellend","bdsm","bestiality","bitch","bitches","bitchin","bitching","bimbo","bimbos","blowjob","blowjob","blowjobs","bluewaffle","boob","boobs","booobs","boooobs","booooobs","booooooobs","breasts","bootycall","brownshower","brownshowers","boner","bondage","buceta","bukake","bukkake","bullshit","bullshit","busty","butthole","carpetmuncher","cawk","chink","cipa","clit","clits","clitoris","cnut","cock","cocks","cockface","cockhead","cockmunch","cockmuncher","cocksuck","cocksucked","cocksucking","cocksucks","cocksucker","cokmuncher","coon","cowgirl","cowgirls","cowgirl","cowgirls","crap","crotch","cum","cummer","cumming","cuming","cums","cumshot","cunilingus","cunillingus","cunnilingus","cunt","cuntlicker","cuntlicking","cunts","damn","dick","dickhead","dildo","dildos","dink","dinks","deepthroat","deepthroat","dogstyle","doggiestyle","doggiestyle","doggystyle","doggystyle","donkeyribber","doosh","douche","duche","dyke","ejaculate","ejaculated","ejaculates","ejaculating","ejaculatings","ejaculation","ejakulate","erotic","erotism","fag","faggot","fagging","faggit","faggitt","faggs","fagot","fagots","fags","fatass","femdom","fingering","footjob","footjob","fuck","fucks","fucker","fuckers","fucked","fuckhead","fuckheads","fuckin","fucking","fcuk","fcuker","fcuking","felching","fellate","fellatio","fingerfuck","fingerfucked","fingerfucker","fingerfuckers","fingerfucking","fingerfucks","fistfuck","fistfucked","fistfucker","fistfuckers","fistfucking","fistfuckings","fistfucks","flange","fook","fooker","fucka","fuk","fuks","fuker","fukker","fukkin","fukking","futanari","futanary","gangbang","gangbanged","gangbang","gokkun","goldenshower","goldenshower","gay","gaylord","gaysex","goatse","handjob","handjob","hentai","hooker","hoer","homo","horny","incest","jackoff","jackoff","jerkoff","jerkoff","jizz","knob","kinbaku","labia","lesbian","masturbate","masochist","mofo","mothafuck","motherfuck","motherfucker","mothafucka","mothafuckas","mothafuckaz","mothafucked","mothafucker","mothafuckers","mothafuckin","mothafucking","mothafuckings","mothafucks","motherfucker","motherfucked","motherfucker","motherfuckers","motherfuckin","motherfucking","motherfuckings","motherfuckka","motherfucks","milf","muff","nigga","nigger","nigg","nipple","nipples","nob","nobjokey","nobhead","nobjocky","nobjokey","numbnuts","nutsack","nude","nudes","orgy","orgasm","orgasms","panty","panties","penis","playboy","porn","porno","pornography","pron","pussy","pussies","rape","raping","rapist","rectum","retard","rimming","sadist","sadism","schlong","scrotum","sex","semen","shemale","shemale","shibari","shibary","shit","shitdick","shitfuck","shitfull","shithead","shiting","shitings","shits","shitted","shitters","shitting","shittings","shitty","shota","skank","slut","sluts","smut","smegma","spunk","stripclub","stripclub","tit","tits","titties","titty","titfuck","tittiefucker","titties","tittyfuck","tittywank","titwank","threesome","threesome","throating","twat","twathead","twatty","twunt","viagra","vagina","vulva","wank","wanker","wanky","whore","whoar","xxx","xx","yaoi","yury"];

  //coverts reply object content to lowercase
  var tixContentLowerCase = tixContent.toLowerCase();

  //loops through restricted words array items
  for (var i = 0; i < swearWords.length; i++){

  //checks ticket content for restricted words
      if (tixContentLowerCase.includes(swearWords[i])) {
      alert("Manager Alerted Due To Ticket Reply Language Violation ")

      }

  }

});
