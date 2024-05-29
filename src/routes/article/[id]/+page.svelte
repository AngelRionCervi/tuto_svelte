<script>
  export let data;

  const { id, title, body } = data.article;

  let isSaved = false;
</script>

<div class="article-page">
  <a class="favorite-link" href="/favoris">mes favoris</a>
  <div class="article-content">
    <div class="article-head">
      <div class="article-section"><span>id:</span>{id}</div>
      <button class="save-article-button">
        {#if isSaved}
          <img src="/src/assets/heart-filled.svg" width="40" alt="article is saved" />
        {:else}
          <img src="/src/assets/heart-empty.svg" width="40" alt="article is note saved" />
        {/if}
      </button>
    </div>
    <div class="article-section title">{title}</div>
    <div class="delimiter" />
    <div class="article-section body">{body}{body}{body}{body}</div>
  </div>
</div>

<style lang="scss">
  .article-page {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
  }

  .article-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .article-content {
    font-size: 20px;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 50px 32px 32px 32px;
  }

  .article-section {
    display: flex;
    gap: 8px;

    &.title {
      font-size: 36px;
      font-weight: bold;
    }
  }

  .delimiter {
    height: 4px;
    width: 30%;
    margin: 6px 0;
    background-color: whitesmoke;
  }

  .save-article-button {
    background-color: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
  }

  .favorite-link {
    font-size: 20px;
    position: absolute;
    top: 16px;
    right: 16px;
    color: whitesmoke;
  }
</style>
