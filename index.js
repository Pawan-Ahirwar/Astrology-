// based on year
const zodiacSigns = [
    "Aries       ",
    "Taurus      ",
    "Gemini      ",
    "Cancer      ",
    "Leo         ",
    "Virgo       ",
    "Libra       ",
    "Scorpio     ",
    "Sagittarius ",
    "Capricorn   ",
    "Aquarius    ",
    "Pisces      "
];

// size 31
const compliments = [
    "You have a great sense of humor!",
    "You're incredibly thoughtful.",
    "Your creativity is inspiring.",
    "You light up the room wherever you go.",
    "You're an amazing friend.",
    "You have a brilliant mind.",
    "You make others feel valued.",
    "You are so talented!",
    "Your kindness is contagious.",
    "You have an eye for detail.",
    "You're a fantastic listener.",
    "You always bring out the best in people.",
    "You're a true problem solver.",
    "Your confidence is admirable.",
    "You have a heart of gold.",
    "You always know how to make people smile.",
    "Your passion is truly inspiring.",
    "You have a unique perspective.",
    "You're so dependable and trustworthy.",
    "Your positivity is infectious.",
    "You make difficult things look easy.",
    "You have a beautiful soul.",
    "You're an excellent communicator.",
    "Your determination is remarkable.",
    "You have impeccable taste.",
    "Your ideas are always so innovative.",
    "You're incredibly supportive.",
    "You handle challenges with grace.",
    "You have a contagious enthusiasm.",
    "Your laughter brightens the day.",
    "You make the world a better place just by being in it."
];

// size 20
const victimCardStatements = [
    "I always put others first, but no one ever does the same for me.",
    "I help everyone, yet when I need help, no one is there.",
    "No matter how much I give, it's never enough for anyone.",
    "I'm always the one making sacrifices, but no one notices.",
    "I go out of my way for people, but they never appreciate it.",
    "I forgive everyone, but no one ever forgives me.",
    "I’m always kind to others, but they treat me like I don’t matter.",
    "I stay loyal, even when no one deserves it, yet I get betrayed.",
    "I listen to everyone’s problems, but no one has time for mine.",
    "I work hard to make others happy, but they don’t care.",
    "I’m always there for others, but I’m always left alone.",
    "I keep giving people second chances, but no one gives me one.",
    "I try so hard to make things right, but I’m the one blamed.",
    "I never ask for much, but even that’s too much for some people.",
    "I go above and beyond for people, but they just take advantage of me.",
    "I show so much love, but all I get back is indifference.",
    "I do everything to keep relationships alive, but I’m the one ghosted.",
    "I stay up all night helping others, but no one would do the same for me.",
    "I always try to be the bigger person, but people think I’m weak.",
    "I let others shine, but they don’t even notice me in the shadows."
  ];

  // size 30
  const positiveRecommendations = [
    "Feed a street dog and see the joy in their wagging tail.",
    "Plant a tree to contribute to a greener planet.",
    "Volunteer at a local shelter to help those in need.",
    "Write a heartfelt letter to someone you appreciate.",
    "Start a gratitude journal and list three things you’re thankful for daily.",
    "Donate unused clothes to a nearby charity or thrift store.",
    "Compliment a stranger and brighten their day.",
    "Cook a meal for a friend or family member to show you care.",
    "Pick up litter in your neighborhood to keep it clean and beautiful.",
    "Support a small business by shopping locally.",
    "Spend time with an elderly neighbor or family member who might feel lonely.",
    "Smile at people you meet today—it’s contagious.",
    "Share a positive story or quote on social media.",
    "Meditate for 10 minutes to center yourself and find inner peace.",
    "Offer to babysit or help a busy parent with their chores.",
    "Buy a cup of coffee for someone in line behind you.",
    "Donate books to a local library or community center.",
    "Teach a skill you know to someone eager to learn.",
    "Pay it forward by leaving a kind note in a random place.",
    "Host a game or movie night to bring friends and family together.",
    "Help a friend with their resume or job search.",
    "Mentor a student or junior colleague in your field.",
    "Leave water and snacks for delivery personnel outside your door.",
    "Adopt a sustainable habit like reducing plastic use or conserving water.",
    "Spend a day without your phone to connect more deeply with people around you.",
    "Bake treats and share them with your neighbors.",
    "Encourage a friend or coworker who seems down.",
    "Make a small donation to a cause you believe in.",
    "Share your knowledge by creating free resources online.",
    "Celebrate your achievements, no matter how small, and keep moving forward."
  ];
  
  // size 20
  const futurePredictions = [
    "You will become a crorepati and live a luxurious life.",
    "Your dream career will soon become a reality.",
    "You will travel to your dream destinations and explore the world.",
    "Success will knock on your door sooner than you expect.",
    "You will achieve financial independence and stability.",
    "A major breakthrough in your life will bring immense joy.",
    "You will discover a hidden talent that transforms your life.",
    "Your efforts will lead you to unimaginable success.",
    "You will inspire many with your achievements and kindness.",
    "A significant promotion or business growth is on the horizon.",
    "You will find true happiness and fulfillment in your journey.",
    "A wonderful surprise will change your life for the better.",
    "You will establish a legacy that generations will admire.",
    "You will make a positive impact on many lives around you.",
    "Your innovative ideas will lead to extraordinary success.",
    "You will overcome challenges and emerge stronger than ever.",
    "A golden opportunity will come your way very soon.",
    "You will create something that the world truly values.",
    "Your relationships will flourish and bring you immense joy.",
    "You will accomplish a goal that once seemed impossible."
  ];

  
  const form = document.getElementById("astroForm");

  form.addEventListener('submit',(event)=>{
    
     event.preventDefault();

     const name =  document.getElementById("name").value;
     const surname = document.getElementById("surname").value;
     const day = Number(document.getElementById("date").value);
     const month = Number(document.getElementById("month").value);
     const year = Number(document.getElementById("year").value);

    
     const first_massage = `Hello ${name} ${surname}`;
     const second_massage = `Your Zodiac sign is ${zodiacSigns[month-1]}`
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
     result.innerText = `${first_massage} ${second_massage} ${third_massage} ${fourth_massage} ${fifth_massage} Your prediction is: ${sixth_massage} Your future prediction is: ${seventh_massage}`;


    
     
  })