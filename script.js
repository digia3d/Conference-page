const mainbody = document.querySelector('.mainbody');
const menuList = document.querySelector('.list');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.menu-closebtn .times');
const menuItems = Array.from(document.querySelectorAll('.item'));

const factdata = [
  {
    name: 'Introduction',
    image: 'images/interestingfacts/introduction.png',
    title: 'Facts, DM',
    description: 'Advertising strategies are constantly changing - blogs, brochures, television ads, Google ads, promotions on social networks…Online sales are more important than ever! That is why I have singled out a couple of interesting facts.',
  },
  {
    name: 'Native advertising',
    image: 'images/interestingfacts/native.png',
    title: 'Facts, DM',
    description: 'We can say that native advertising is  a form of paid media content in which the ad follows the "natural" form and function of the user experience in the environment in which it is located  (definition according to BNP Solutions: "Native Advertising Ebook").',
  },
  {
    name: 'Did you know?',
    image: 'images/interestingfacts/did-you-know.png',
    title: 'Facts, DM',
    description: 'That the average attention on the Internet is only 8 seconds? It may seem incorrect to you, but it is true. Now you must be wondering, "So how can anyone notice my ad in such a short time?" Well, one of the good ways is a tempting title, a great photo and the beginning of a video tutorial that will tickle the attention of consumers and keep it longer on your site or social account.',
  },
  {
    name: 'A little more interesting...',
    image: 'images/interestingfacts/more-facts.jpg',
    title: 'Facts, DM',
    description: 'According to KPMG, men spend 68% more money online than women. Google has more than 77,000 searches per second. 50% of all search queries consist of 4 words or more. More than 70% of marketing experts consider high quality content to be the most effective SEO tactic. The average welcome email opening rate is 82%.',
  },
  {
    name: 'Better video than text',
    image: 'images/interestingfacts/video.png',
    title: 'Facts, DM',
    description: 'Did you know that as many as 80% of people will choose video rather than reading ?! And also more of them will remember what they see (as many as 58%) rather than what they read (only 10%). Then it is no wonder that YouTube is the second most visited website on the Internet and the main platform for Google video ads. So it is worth the effort, is it not?',
  },
  {
    name: 'Promotional gifts',
    image: 'images/interestingfacts/promotion.png',
    title: 'Facts, DM',
    description: 'One of the most effective marketing campaigns is certainly promotional gifts. This is basically nothing strange, because it is common knowledge that people love gifts! These would be some of the interesting facts about digital marketing. I hope it will help you, because it is for me, and I will try to keep you informed about the news from the digital world.',
  },
];

hamburger.addEventListener('click', () => {
  menuList.classList.add('active');
  closeIcon.classList.add('icon');
});

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    menuItems.forEach((Item) => { Item.classList.remove('active'); });
    menuList.classList.remove('active');
    menuItem.classList.add('active');

    if (menuItem.textContent === 'plan' && !mainbody.classList.contains('homepage')) {
      localStorage.setItem(menuItem.textContent, 'active');
    }
  });
});

window.addEventListener('resize', () => {
  if (mainbody.clientWidth >= 768 && menuList.classList.contains('active')) {
    window.location.reload();
  }
});

window.onload = () => {
  if (localStorage.getItem('plan') !== null) {
    menuItems[3].classList.add(localStorage.getItem('plan'));
    localStorage.removeItem('plan');
  }
};

const facts = document.querySelector('.facts');

const factsList = document.createElement('ul');
factsList.className = 'factslist';
facts.appendChild(factsList);

factdata.forEach((fact) => {
  const li = document.createElement('li');
  li.className = 'fact';
  factsList.appendChild(li);

  const factImage = document.createElement('div');
  factImage.className = 'factimg';
  factImage.innerHTML = `<img title='Facts' src=${fact.image} alt="Facts">`;
  li.appendChild(factImage);

  const factInfo = document.createElement('div');
  factInfo.className = 'factinfo';
  li.appendChild(factInfo);

  const factName = document.createElement('h3');
  factName.className = 'factname';
  factName.innerHTML = fact.name;
  factInfo.appendChild(factName);

  const factTitle = document.createElement('p');
  factTitle.className = 'facttitle';
  factTitle.innerHTML = fact.title;
  factInfo.appendChild(factTitle);

  const factDescription = document.createElement('p');
  factDescription.className = 'factdescription';
  factDescription.innerHTML = fact.description;
  factInfo.appendChild(factDescription);
});

const morefacts = document.createElement('button');
morefacts.className = 'morebtn';
morefacts.type = 'button';
morefacts.innerHTML = 'MORE <i class="chevron down icon"></i>';
facts.appendChild(morefacts);

const factCards = Array.from(document.querySelectorAll('.fact'));

factCards.forEach((card, index) => {
  if (index > 1) {
    card.classList.add('hide');
  }
});

const moreBtn = document.querySelector('.morebtn');

const moreBtnText = (card) => {
  if (card.classList.contains('hide')) {
    moreBtn.innerHTML = 'MORE <i class="chevron down icon"></i>';
  } else {
    moreBtn.innerHTML = 'LESS <i class="chevron up icon"></i>';
  }
};

moreBtn.addEventListener('click', () => {
  factCards.forEach((card, index) => {
    if (index > 1) {
      card.classList.toggle('hide');
      moreBtnText(card);
    }
  });
});