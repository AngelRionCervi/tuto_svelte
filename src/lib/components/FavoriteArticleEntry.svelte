<script>
  import { onMount } from "svelte";
  import favoriteArticlesStore from "$lib/stores/favoriteArticlesStore.svelte.js";

  const { id } = $props();

  let article = $state(null);

  const { getFavoriteArticleById, removeFromFavorite } = favoriteArticlesStore;

  onMount(() => {
    article = getFavoriteArticleById(id);
  });
</script>

<div class="container">
  {#if article}
    <div class="infos">
      <span>{article.id}</span>
      <span>{article.title}</span>
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
