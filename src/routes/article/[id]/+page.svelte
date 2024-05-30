<script>
  import favoriteArticlesStore from "$lib/stores/favoriteArticlesStore.svelte.js";

  let isSaved = false;
</script>

<div>
  <a class="favorite-link" href="/favoris">mes favoris</a>
  <div class="article-content">
    <div class="article-head">
      <div class="article-section"><span>id: id</span></div>
      <button>
        {#if isSaved}
          <img src="/src/assets/heart-filled.svg" width="40" alt="article is saved" />
        {:else}
          <img src="/src/assets/heart-empty.svg" width="40" alt="article is note saved" />
        {/if}
      </button>
    </div>
    <h1 class="article-section">title</h1>
    <div class="delimiter"></div>
    <div class="article-section">body</div>
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
