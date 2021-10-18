const newsPosts = [
  {
    title: 'News Title',
    date: 'October 14, 2021',
    body: `<img src="../assets/news-images/prognosis-death.png" alt="" />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Dolorum placeat nihil, ullam labore molestiae deserunt
      veritatis asperiores beatae doloremque doloribus! Expedita
      recusandae voluptate repudiandae ad ipsam sit dignissimos!
      Maiores, optio.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Provident voluptatibus, nesciunt voluptas eius corrupti
      laborum illum incidunt vero facilis. Impedit veritatis
      inventore ducimus, odio provident ut beatae eius. Sed quasi
      libero magnam ratione quo iusto, laudantium maiores aperiam id
      sit odio beatae quis. Mollitia nesciunt quae facilis pariatur.
      Delectus, dolores quis. Quis, delectus veniam. Dignissimos
      quidem pariatur dolore labore assumenda optio rerum eligendi.
      Odit consequatur molestias enim ut quidem commodi quae at?
      Provident accusantium, deserunt impedit rerum harum rem
      asperiores, dolore beatae obcaecati eius ex expedita tempora
      quaerat totam eveniet optio ratione esse? Sed animi
      dignissimos sunt minus placeat voluptatem.
    </p>`,
  },
  {
    title: 'News Title 2',
    date: 'October 21, 2021',
    body: `
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Dolorum placeat nihil, ullam labore molestiae deserunt
      veritatis asperiores beatae doloremque doloribus! Expedita
      recusandae voluptate repudiandae ad ipsam sit dignissimos!
      Maiores, optio.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Provident voluptatibus, nesciunt voluptas eius corrupti
      laborum illum incidunt vero facilis. Impedit veritatis
      inventore ducimus, odio provident ut beatae eius. Sed quasi
      libero magnam ratione quo iusto, laudantium maiores aperiam id
      sit odio beatae quis. Mollitia nesciunt quae facilis pariatur.
      Delectus, dolores quis. Quis, delectus veniam. Dignissimos
      quidem pariatur dolore labore assumenda optio rerum eligendi.
      Odit consequatur molestias enim ut quidem commodi quae at?
      Provident accusantium, deserunt impedit rerum harum rem
      asperiores, dolore beatae obcaecati eius ex expedita tempora
      quaerat totam eveniet optio ratione esse? Sed animi
      dignissimos sunt minus placeat voluptatem.
    </p>`,
  },
];

// ============
// Logic
// ============

const newsHTML = document.querySelector('#news-posts');

const postsHTML = newsPosts
  .map(post => {
    const { title, date, body } = post;
    return `
  <article class="news-article">
  <div class="article-header">
    <h4>${title}</h4>
    <span>${date}</span>
  </div>
  <div class="article-body">
  ${body}
  </div>
  </article>`;
  })
  .join('');

newsHTML.innerHTML = postsHTML;
