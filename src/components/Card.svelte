<script>
  import SocialIcons from './SocialIcons.svelte'

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
    <SocialIcons />
  </div>

  <a href="#void" class="btn">Hire</a>
</article>

<style lang="scss">
  @use '../styles/variables' as *;

  .card {
    padding: 0.75em;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-areas:
      'img info'
      'links button';
    border-radius: 0.75em;
    box-shadow: 0px 5px 10px #eee;

    img {
      width: 175px;
      grid-area: img;
      border-radius: 0.75em;
    }

    h2 {
      margin: 0;
      font-family: var(--ff-accent);
      font-weight: 700;
      font-size: 3rem;
      color: var(--clr-base-500);
    }

    p {
      line-height: 1.35em;
    }

    // testing import sassy vars
    @media (max-width: $minWidthSml) {
      grid-template-areas:
        'img links'
        'img button'
        'info info';
      img {
        width: 125px;
      }
    }
  }

  .info {
    padding: 0.25em 1em;
    grid-area: info;
    justify-self: start;
    text-align: left;
  }

  .tag-wrap {
    display: flex;
    flex-wrap: wrap;
  }

  .tag {
    margin-top: 0.24em;
    margin-right: 0.5em;
    padding: 0.5em 0.65em;
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--clr, black);
    background: var(--clr-bg, #5e5e5e);
    border-radius: 1em;
    @media (max-width: $minWidthSml) {
      font-size: 0.65rem;
    }
  }

  [data-tag='UX Design'] {
    --clr: #115926;
    --clr-bg: #e2ffea;
  }

  [data-tag='Developer'] {
    --clr: #024f2f;
    --clr-bg: #e2fcff;
  }

  [data-tag='UI Design'] {
    --clr: #580d3a;
    --clr-bg: #f8e2ff;
  }

  .links {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    grid-area: links;
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
    grid-area: button;
    background: var(--clr-accent-400);
    border-radius: 0.75em;
    @media (max-width: $minWidthSml) {
      justify-self: center;
      align-self: start;
      font-size: 0.75rem;
    }
  }
</style>
