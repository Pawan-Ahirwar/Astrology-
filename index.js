// based on year
const zodiacSigns = [
    // "Aries       ",
    // "Taurus      ",
    // "Gemini      ",
    // "Cancer      ",
    // "Leo         ",
    // "Virgo       ",
    // "Libra       ",
    // "Scorpio     ",
    // "Sagittarius ",
    // "Capricorn   ",
    // "Aquarius    ",
    // "Pisces      "
  "मेष",
  "वृषभ",
  "मिथुन",
  "कर्क",
  "सिंह",
  "कन्या",
  "तुला",
  "वृश्चिक",
  "धनु",
  "मकर",
  "कुंभ",
  "मीन"

];

// size 31
const compliments = [
    // "You have a great sense of humor!",
    // "You're incredibly thoughtful.",
    // "Your creativity is inspiring.",
    // "You light up the room wherever you go.",
    // "You're an amazing friend.",
    // "You have a brilliant mind.",
    // "You make others feel valued.",
    // "You are so talented!",
    // "Your kindness is contagious.",
    // "You have an eye for detail.",
    // "You're a fantastic listener.",
    // "You always bring out the best in people.",
    // "You're a true problem solver.",
    // "Your confidence is admirable.",
    // "You have a heart of gold.",
    // "You always know how to make people smile.",
    // "Your passion is truly inspiring.",
    // "You have a unique perspective.",
    // "You're so dependable and trustworthy.",
    // "Your positivity is infectious.",
    // "You make difficult things look easy.",
    // "You have a beautiful soul.",
    // "You're an excellent communicator.",
    // "Your determination is remarkable.",
    // "You have impeccable taste.",
    // "Your ideas are always so innovative.",
    // "You're incredibly supportive.",
    // "You handle challenges with grace.",
    // "You have a contagious enthusiasm.",
    // "Your laughter brightens the day.",
    // "You make the world a better place just by being in it."
    "आप बहुत बुद्धिमान हैं।",
    "आपका मुस्कान दिल जीत लेती है।",
    "आपकी सोच बहुत गहरी है।",
    "आपका आत्मविश्वास प्रेरणादायक है।",
    "आपके पास अद्भुत प्रतिभा है।",
    "आप बहुत दयालु व्यक्ति हैं।",
    "आपके विचार हमेशा प्रेरणा देते हैं।",
    "आपका हृदय सोने जैसा है।",
    "आपकी शैली बहुत आकर्षक है।",
    "आपका व्यक्तित्व बहुत प्रभावशाली है।",
    "आपकी रचनात्मकता अद्भुत है।",
    "आपके पास सबको खुश करने की कला है।",
    "आपके साथ समय बिताना हमेशा सुखद होता है।",
    "आपके पास अद्भुत नेतृत्व क्षमता है।",
    "आपके शब्दों में जादू है।",
    "आपका साहस काबिल-ए-तारीफ है।",
    "आप बहुत सकारात्मक ऊर्जा से भरपूर हैं।",
    "आपकी हंसी सबसे प्यारी है।",
    "आपके पास अद्भुत समाधान देने की क्षमता है।",
    "आपके विचार हमेशा अलग और अनोखे होते हैं।",
    "आपकी मेहनत हमेशा रंग लाती है।",
    "आपका धैर्य अद्वितीय है।",
    "आपके निर्णय हमेशा सही होते हैं।",
    "आपका अंदाज सबसे खास है।",
    "आपके पास हर परिस्थिति को संभालने की कला है।",
    "आपका व्यवहार बहुत ही सौम्य और स्नेहपूर्ण है।",
    "आपका आत्म-नियंत्रण प्रेरणा देता है।",
    "आपकी प्रशंसा सबकी जुबान पर होती है।",
    "आपके विचारों में गहराई है।",
    "आपकी सोचने की क्षमता लाजवाब है।",
    "आपके पास हर किसी को खुश करने की शक्ति है।"
];

// size 20
const victimCardStatements = [
    // "I always put others first, but no one ever does the same for me.",
    // "I help everyone, yet when I need help, no one is there.",
    // "No matter how much I give, it's never enough for anyone.",
    // "I'm always the one making sacrifices, but no one notices.",
    // "I go out of my way for people, but they never appreciate it.",
    // "I forgive everyone, but no one ever forgives me.",
    // "I’m always kind to others, but they treat me like I don’t matter.",
    // "I stay loyal, even when no one deserves it, yet I get betrayed.",
    // "I listen to everyone’s problems, but no one has time for mine.",
    // "I work hard to make others happy, but they don’t care.",
    // "I’m always there for others, but I’m always left alone.",
    // "I keep giving people second chances, but no one gives me one.",
    // "I try so hard to make things right, but I’m the one blamed.",
    // "I never ask for much, but even that’s too much for some people.",
    // "I go above and beyond for people, but they just take advantage of me.",
    // "I show so much love, but all I get back is indifference.",
    // "I do everything to keep relationships alive, but I’m the one ghosted.",
    // "I stay up all night helping others, but no one would do the same for me.",
    // "I always try to be the bigger person, but people think I’m weak.",
    // "I let others shine, but they don’t even notice me in the shadows."
    "आप तो हमेशा दूसरों का भला सोचते हैं, लेकिन आपकी कद्र कौन करता है।",
  "आपने हमेशा सबका साथ दिया, लेकिन आपको कौन साथ देता है।",
  "आप तो बस दूसरों के लिए जीते हैं, पर बदले में कुछ नहीं मिलता।",
  "आपकी अच्छाई का कोई मोल नहीं समझता।",
  "आप तो हमेशा हर किसी की मदद करते हैं, पर जरूरत पर कोई नहीं आता।",
  "आपका त्याग सब भूल जाते हैं।",
  "आप तो सबके लिए सोचते हैं, लेकिन आपके लिए कोई नहीं सोचता।",
  "आपका दिल इतना बड़ा है, पर लोग इसका फायदा उठाते हैं।",
  "आपने सबके लिए समय निकाला, लेकिन जब आपको जरूरत थी, सब गायब हो गए।",
  "आपकी भावनाओं को समझने वाला तो कोई है ही नहीं।",
  "आपने हर किसी को खुश रखने की कोशिश की, पर आपकी खुशी की परवाह किसे है।",
  "आपने हमेशा दूसरों का साथ दिया, लेकिन आपके दुख में कौन खड़ा रहा।",
  "आपकी मेहनत का कभी सही मूल्यांकन नहीं होता।",
  "आप तो हमेशा सबको माफ कर देते हैं, लेकिन लोग आपकी बात भूल जाते हैं।",
  "आपने हर किसी की परेशानी हल की, लेकिन आपकी परेशानी कौन समझता है।",
  "आपका हर कदम दूसरों के लिए होता है, पर आपके लिए कोई कदम नहीं उठाता।",
  "आप तो बस सबके लिए जीते हैं, लेकिन कोई आपकी परवाह नहीं करता।",
  "आपकी अच्छाई को लोग कमजोरी समझते हैं।",
  "आपकी दयालुता का लोग हमेशा गलत फायदा उठाते हैं।",
  "आपने कभी किसी से कुछ नहीं मांगा, लेकिन लोग फिर भी शिकायत करते हैं।"
  ];

  // size 30
  const positiveRecommendations = [
    // "Feed a street dog and see the joy in their wagging tail.",
    // "Plant a tree to contribute to a greener planet.",
    // "Volunteer at a local shelter to help those in need.",
    // "Write a heartfelt letter to someone you appreciate.",
    // "Start a gratitude journal and list three things you’re thankful for daily.",
    // "Donate unused clothes to a nearby charity or thrift store.",
    // "Compliment a stranger and brighten their day.",
    // "Cook a meal for a friend or family member to show you care.",
    // "Pick up litter in your neighborhood to keep it clean and beautiful.",
    // "Support a small business by shopping locally.",
    // "Spend time with an elderly neighbor or family member who might feel lonely.",
    // "Smile at people you meet today—it’s contagious.",
    // "Share a positive story or quote on social media.",
    // "Meditate for 10 minutes to center yourself and find inner peace.",
    // "Offer to babysit or help a busy parent with their chores.",
    // "Buy a cup of coffee for someone in line behind you.",
    // "Donate books to a local library or community center.",
    // "Teach a skill you know to someone eager to learn.",
    // "Pay it forward by leaving a kind note in a random place.",
    // "Host a game or movie night to bring friends and family together.",
    // "Help a friend with their resume or job search.",
    // "Mentor a student or junior colleague in your field.",
    // "Leave water and snacks for delivery personnel outside your door.",
    // "Adopt a sustainable habit like reducing plastic use or conserving water.",
    // "Spend a day without your phone to connect more deeply with people around you.",
    // "Bake treats and share them with your neighbors.",
    // "Encourage a friend or coworker who seems down.",
    // "Make a small donation to a cause you believe in.",
    // "Share your knowledge by creating free resources online.",
    // "Celebrate your achievements, no matter how small, and keep moving forward."
    "किसी भूखे को खाना खिलाएं।",
  "सड़क पर किसी प्यासे को पानी दें।",
  "एक पेड़ लगाएं और उसकी देखभाल करें।",
  "किसी सड़क के कुत्ते को खाना खिलाएं।",
  "किसी जरूरतमंद बच्चे को किताबें दान करें।",
  "रोज सुबह जल्दी उठकर योग करें।",
  "किसी बुजुर्ग की मदद करें।",
  "किसी गरीब परिवार को कपड़े दें।",
  "हर दिन किसी के चेहरे पर मुस्कान लाने की कोशिश करें।",
  "रोज सुबह सूर्य नमस्कार करें।",
  "किसी की समस्या को धैर्यपूर्वक सुनें।",
  "गाड़ी चलाते समय ट्रैफिक नियमों का पालन करें।",
  "प्लास्टिक की जगह कपड़े का बैग इस्तेमाल करें।",
  "दिन में एक बार खुद के लिए समय निकालें।",
  "बिना स्वार्थ किसी की मदद करें।",
  "रोजाना कम से कम एक अच्छा काम करें।",
  "हर दिन धन्यवाद कहना सीखें।",
  "किसी घायल पशु की मदद करें।",
  "रोज एक किताब का पेज पढ़ें।",
  "हर दिन कम से कम 10 मिनट ध्यान लगाएं।",
  "सड़क पर झगड़ते लोगों को समझाइश दें।",
  "घर में पौधे लगाएं और उनकी देखभाल करें।",
  "समाज सेवा के लिए समय निकालें।",
  "किसी के काम की सच्ची तारीफ करें।",
  "अपने आस-पास सफाई का ध्यान रखें।",
  "किसी गरीब की फीस भरने में मदद करें।",
  "हर दिन खुद को एक नई चीज सिखाने की कोशिश करें।",
  "किसी अनजान को मदद की पेशकश करें।",
  "बिना जरूरत बिजली और पानी की बर्बादी न करें।",
  "दिन में एक बार अपने माता-पिता से बात करें।"
  ];
  
  // size 20
  const futurePredictions = [
    // "You will become a crorepati and live a luxurious life.",
    // "Your dream career will soon become a reality.",
    // "You will travel to your dream destinations and explore the world.",
    // "Success will knock on your door sooner than you expect.",
    // "You will achieve financial independence and stability.",
    // "A major breakthrough in your life will bring immense joy.",
    // "You will discover a hidden talent that transforms your life.",
    // "Your efforts will lead you to unimaginable success.",
    // "You will inspire many with your achievements and kindness.",
    // "A significant promotion or business growth is on the horizon.",
    // "You will find true happiness and fulfillment in your journey.",
    // "A wonderful surprise will change your life for the better.",
    // "You will establish a legacy that generations will admire.",
    // "You will make a positive impact on many lives around you.",
    // "Your innovative ideas will lead to extraordinary success.",
    // "You will overcome challenges and emerge stronger than ever.",
    // "A golden opportunity will come your way very soon.",
    // "You will create something that the world truly values.",
    // "Your relationships will flourish and bring you immense joy.",
    // "You will accomplish a goal that once seemed impossible."
    "आपके पास करोड़ों की संपत्ति होगी, बस मेहनत करते रहें।",
    "आपका नाम एक दिन बड़े लोगों में गिना जाएगा।",
    "आपका सपना एक दिन जरूर पूरा होगा।",
    "आपके जीवन में खुशियों की बारिश होगी।",
    "आपके पास एक शानदार घर और गाड़ी होगी।",
    "आपके सारे सपने जल्द ही हकीकत बनेंगे।",
    "आपका नाम एक दिन हर जगह चमकेगा।",
    "आपके काम की तारीफ हर जगह होगी।",
    "आपकी मेहनत एक दिन रंग लाएगी।",
    "आपके जीवन में कभी भी धन की कमी नहीं होगी।",
    "आपकी पहचान एक सफल इंसान के रूप में होगी।",
    "आपका परिवार आप पर गर्व करेगा।",
    "आपकी किस्मत आपको बहुत ऊँचाई पर ले जाएगी।",
    "आपके सारे दुख जल्द ही खत्म हो जाएंगे।",
    "आपके पास दुनिया घूमने का मौका होगा।",
    "आपका जीवन हर दिन खुशियों से भरा होगा।",
    "आपकी मेहनत से आपके बच्चे भी प्रेरित होंगे।",
    "आपके पास एक दिन अपना बिजनेस होगा।",
    "आपकी सेहत हमेशा दुरुस्त रहेगी।",
    "आपके दोस्त और रिश्तेदार आपकी सफलता की कहानी सुनाएंगे।"
  ];

  
  const form = document.getElementById("astroForm");

  form.addEventListener('submit',(event)=>{
    
     event.preventDefault();

     const name =  document.getElementById("name").value;
     const surname = document.getElementById("surname").value;
     const day = Number(document.getElementById("date").value);
     const month = Number(document.getElementById("month").value);
     const year = Number(document.getElementById("year").value);

    
     const first_massage = `नमस्ते ${name} ${surname}`;
     const second_massage = `आपकी राशि ${zodiacSigns[month-1]}`
     const third_massage = compliments[day-1];
     let index = (name.length * surname.length)%31;
     const fourth_massage = compliments[index];
     index = (day*month)%20;
     const fifth_massage  = victimCardStatements[index];

     index = (name.length * surname.length *day)%30;
     const sixth_massage = positiveRecommendations[index];

     index = (name.length * day * month)%20; 
     const seventh_massage = futurePredictions[index];


     const result = document.getElementById("result");
     result.innerText = `${first_massage} ${second_massage} ${third_massage} ${fourth_massage} ${fifth_massage}  ${sixth_massage}  ${seventh_massage}`;


    
     
  })