<script>
  export let data;

  const { id, title, body } = data.article;
</script>

<div class="article-page">
  <div class="article-content">
    <div class="article-section"><span>id:</span>{id}</div>
    <div class="article-section title">{title}</div>
    <div class="delimiter" />
    <div class="article-section body">{body}{body}{body}{body}{body}</div>
  </div>
</div>

<style lang="scss">
  .article-page {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
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
</style>
