<script>
  export let personShape = {
    name: 'no name',
    tags: ['none'],
    desc: 'no desc avail',
    img: 'no image avail',
  }
</script>

<article class="card">
  <img src={personShape.img} alt={personShape.name} />

  <div class="info">
    <h2>{personShape.name}</h2>

    <div class="tag-wrap">
      {#each personShape.tags as tag}
        <div class="tag" data-tag={tag}>
          {tag}
        </div>
      {/each}
    </div>

    <p>{personShape.desc}</p>
  </div>

  <div class="links">
    <i>s</i>
    <i>bs</i>
    <i>a</i>
  </div>

  <a href="#void" class="btn">Hire</a>
</article>

<style lang="scss">
  .card {
    padding: 0.75em;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-areas:
      'img info'
      'links button';
    border-radius: 0.75em;
    box-shadow: 0px 5px 10px #eee;

    img {
      width: 175px;
      border-radius: 0.75em;
    }

    h2 {
      margin: 0;
    }

    p {
      line-height: 1.35em;
    }
  }

  .info {
    padding: 0.25em 1em;
    justify-self: start;
    text-align: left;
  }

  .tag-wrap {
    display: flex;
    flex-wrap: wrap;
  }

  .tag {
    margin-right: 0.5em;
    padding: 0.5em 0.75em;
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--clr, black);
    background: var(--clr-bg, #eee);
    border-radius: 1em;
  }

  [data-tag='UX Design'] {
    --clr: darkred;
    --clr-bg: red;
  }

  [data-tag='Design'] {
    --clr: darkblue;
    --clr-bg: skyblue;
  }

  [data-tag='UI Design'] {
    --clr: darkgreen;
    --clr-bg: limegreen;
  }

  .links {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    justify-self: center;
    align-self: center;
  }

  .btn {
    width: min-content;
    padding: 0.8em 2.75em;
    display: block;
    justify-self: end;
    align-self: center;
    color: white;
    letter-spacing: 0.1em;
    text-decoration: none;
    text-transform: uppercase;
    background: purple;
    border-radius: 0.75em;
  }
</style>
