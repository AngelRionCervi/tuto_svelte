<script>
  import favoriteArticlesStore from "$lib/stores/favoriteArticlesStore.svelte.js";

  const { id } = $props();
  const { getFavoriteArticleById, removeFromFavorite } = favoriteArticlesStore;

  let article = $state(null);

  $effect(() => {
    article = getFavoriteArticleById(id);
  });
</script>

<div class="container">
  {#if article}
    <div class="infos">
      <span>{article.id}</span>
      <a href="/article/{id}">{article.title}</a>
    </div>
    <button onclick={() => removeFromFavorite(id)}>
      <img src="/src/assets/remove.svg" width="40" alt="supprimer le favori" />
    </button>
  {:else}
    <span>Loading...</span>
  {/if}
</div>

<style lang="scss">
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .infos {
    display: flex;
    gap: 16px;
  }
</style>
