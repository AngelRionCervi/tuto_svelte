<script>
  import favoriteArticlesStore from "$lib/stores/favoriteArticlesStore.svelte.js";

  const { data } = $props();
  const { id, title, body } = data.article;
  const { addToFavorite, removeFromFavorite } = favoriteArticlesStore;

  let isSaved = $derived(favoriteArticlesStore.articles.some((article) => article.id === id));

  function handleFavorite() {
    if (isSaved) {
      removeFromFavorite(id);
    } else {
      addToFavorite(id, title);
    }
  }
</script>

<div>
  <a class="favorite-link" href="/favoris">mes favoris</a>
  <div class="article-content">
    <div class="article-head">
      <div class="article-section"><span>id:</span>{id}</div>
      <button onclick={handleFavorite}>
        {#if isSaved}
          <img src="/src/assets/heart-filled.svg" width="40" alt="article is saved" />
        {:else}
          <img src="/src/assets/heart-empty.svg" width="40" alt="article is note saved" />
        {/if}
      </button>
    </div>
    <h1 class="article-section">{title}</h1>
    <div class="delimiter"></div>
    <div class="article-section">{body}{body}{body}{body}</div>
  </div>
</div>

<style lang="scss">
  .article-content {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .article-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .article-section {
    display: flex;
    gap: 8px;
  }

  .delimiter {
    height: 4px;
    width: 30%;
    margin: 6px 0;
    background-color: whitesmoke;
  }

  .favorite-link {
    font-size: 20px;
    position: absolute;
    top: 16px;
    right: 16px;
    color: whitesmoke;
  }
</style>
