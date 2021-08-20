<script>
  import Card from './components/Card.svelte'
  import * as jsonData from './data/personData.json'
  // import personData from './data/personData.js'

  let dataObj = JSON.stringify(jsonData.default)
  let personData = JSON.parse(dataObj)
</script>

<main>
  {#each personData as data}
    <Card personShape={data} />
  {/each}
</main>

<style lang="scss">
  @use './styles/variables' as *;

  main {
    margin: 6rem auto;
    padding: 0 0.75em;
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
    gap: 0.75rem 1.75rem;

    @media (max-width: $minWidthLg) {
    }

    @media (max-width: $minWidthSml) {
      margin: 0;
      grid-template-columns: 1fr;
    }
  }
</style>
