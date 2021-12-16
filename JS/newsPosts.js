// Posts will appear on news page in this order, so add new posts to top.
// const newsPosts = [
//   {
//     title: 'Welcome to Flying Man Games!',
//     date: '19 October 2021',
//     body: `
//     <p>We’ll be aiming to publish around once a month via this newsletter, maybe a little more frequently if we’re lucky to have a lot going on! If you’re interested in seeing more frequent updates feel free to subscribe to our socials - we’re active on Instagram and Facebook.
//     </p>
//     <p>We’ll also put out an email when our Kickstarter goes live, so make sure your subscribed to the newsletter if you want to hear about that (which you should!)
//     </p>
//     <h5>What we’ve been up to</h4>
//     <p>We’ve been very busy preparing for our Kickstarter of Prognosis Death. Being first time publishers, we’ve had a lot to learn!
//     </p>
//     <p>We’ve identified a manufacturing partner in China and have been corresponding with them frequently. We’ve also developed a global shipping strategy that we expect will allow us to offer free shipping to most of the world through a Fulfillment partner.
//     </p>
//     <p>Recently we made the tough decision to postpone our release by a couple of months, now targeting a Kickstarter campaign in mid December. This gives us a little more breathing room to make sure the kickstarter project is up to the standard we want to be putting out, and also means that we reduce the risk of manufacturing bottlenecks due to Chinese New Year in January.
//     </p>
//     <p>We’ve also been working on this website! Special thanks to <a href="https://github.com/AndrewCasta">Andrew Castagnini</a> for his efforts and his amazing work!
//     </p>
//     <img src="../assets/news-images/prog-death-mock.png" alt="Prognosis Death Game" />
//     <h5>What we’ve been playing</h4>
//     <p><a href="https://boardgamegeek.com/boardgame/347765/prognosis-death">Prognosis Death</a>, Inheritance (super secret future Flying Man Games project), Reiner Knizia classics <a href="https://boardgamegeek.com/boardgame/12/ra">Ra</a> and <a href="https://boardgamegeek.com/boardgame/217372/quest-el-dorado">Quest for El Dorado</a>, <a href="https://boardgamegeek.com/boardgame/307002/regicide">Regicide</a>, and heaps of solo classics <a href="https://boardgamegeek.com/boardgame/43570/friday">Friday</a> and <a href="https://boardgamegeek.com/boardgame/231999/finished">Finished</a>! while Melbourne is still locked down due to COVID-19.
//     </p>
//     <p>Until next time! <br/>Cam
//     </p>

//     `,
//   },
// {
//   title: 'News Title 2',
//   date: 'October 21, 2021',
//   body: `
//   <img src="../assets/news-images/prognosis-death.png" alt="" />
//   <p>
//     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//     Dolorum placeat nihil, ullam labore molestiae deserunt
//     veritatis asperiores beatae doloremque doloribus! Expedita
//     recusandae voluptate repudiandae ad ipsam sit dignissimos!
//     Maiores, optio.
//   </p>
//   <p>
//     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//     Provident voluptatibus, nesciunt voluptas eius corrupti
//     laborum illum incidunt vero facilis. Impedit veritatis
//     inventore ducimus, odio provident ut beatae eius. Sed quasi
//     libero magnam ratione quo iusto, laudantium maiores aperiam id
//     sit odio beatae quis. Mollitia nesciunt quae facilis pariatur.
//     Delectus, dolores quis. Quis, delectus veniam. Dignissimos
//     quidem pariatur dolore labore assumenda optio rerum eligendi.
//     Odit consequatur molestias enim ut quidem commodi quae at?
//     Provident accusantium, deserunt impedit rerum harum rem
//     asperiores, dolore beatae obcaecati eius ex expedita tempora
//     quaerat totam eveniet optio ratione esse? Sed animi
//     dignissimos sunt minus placeat voluptatem.
//   </p>`,
// },
// ];

// ============
// Logic
// ============

// const newsHTML = document.querySelector('#news-posts');

// const postsHTML = newsPosts
//   .map(post => {
//     const { title, date, body } = post;
//     return `
//   <article class="news-article">
//   <div class="article-header">
//     <h4>${title}</h4>
//     <span>${date}</span>
//   </div>
//   <div class="article-body">
//   ${body}
//   </div>
//   </article>`;
//   })
//   .join('');

// newsHTML.innerHTML = postsHTML;
