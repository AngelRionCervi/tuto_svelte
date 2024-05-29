<script>
  import favoriteArticlesStore from "$lib/stores/favoriteArticlesStore.svelte.js";
  import FavoriteArticleEntry from "$lib/components/FavoriteArticleEntry.svelte";
</script>

<div>
  <h1>Mes articles favoris:</h1>
  <div class="favorite-container">
    {#if !favoriteArticlesStore.articles?.length}
      <span>Aucun article dans les favoris !</span>
    {:else}
      {#each favoriteArticlesStore.articles as article}
        <FavoriteArticleEntry id={article.id} />
      {/each}
    {/if}
  </div>
</div>

<style>
  .favorite-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 16px;
  }
</style>
