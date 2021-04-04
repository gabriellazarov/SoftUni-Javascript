import { html } from '../../node_modules/lit-html/lit-html.js';
import { getRecentArticles } from '../api/data.js';

const homeTemplate = (jsData, csharpData, javaData, pythonData) => html`
<section id="home-page" class="content">
  <h1>Recent Articles</h1>

  <section class="recent js">
   <h2>JavaScript</h2>
   ${jsData ? html`<article>
      <h3>${jsData.title}</h3>
      <p>${jsData.content}</p>
      <a href=${`/article-details/${jsData._id}`} class="btn details-btn">Details</a>
    </article>` : html`<h3 class="no-articles">No articles yet</h3>`}
  </section>

  <section class="recent csharp">
    <h2>C#</h2>
    ${csharpData ? html`<article>
      <h3>${csharpData.title}</h3>
      <p>${csharpData.content}</p>
      <a href=${`/article-details/${csharpData._id}`} class="btn details-btn">Details</a>
    </article>` : html`<h3 class="no-articles">No articles yet</h3>`}
  </section>

  <section class="recent java">
    <h2>Java</h2>
    ${javaData ? html`<article>
      <h3>${javaData.title}</h3>
      <p>${javaData.content}</p>
      <a href=${`/article-details/${javaData._id}`} class="btn details-btn">Details</a>
    </article>` : html`<h3 class="no-articles">No articles yet</h3>`}
  </section>

  <section class="recent python">
    <h2>Python</h2>
    ${pythonData ? html`<article>
      <h3>${pythonData.title}</h3>
      <p>${pythonData.content}</p>
      <a href=${`/article-details/${pythonData._id}`} class="btn details-btn">Details</a>
    </article>` : html`<h3 class="no-articles">No articles yet</h3>`}
  </section>`;



export async function homePage(ctx) {
  const data = await getRecentArticles();

  let jsData;
  let pythonData;
  let javaData;
  let csharpData;

  data.forEach(a => {
    if (a.category == 'JavaScript') jsData = a;
    else if (a.category == 'Python') pythonData = a;
    else if (a.category == 'Java') javaData = a;
    else if (a.category == 'C#') csharpData = a;
  })


  ctx.render(homeTemplate(jsData, csharpData, javaData, pythonData));
}