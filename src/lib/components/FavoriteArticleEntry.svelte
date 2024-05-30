<script>
  import favoriteArticlesStore from "$lib/stores/favoriteArticlesStore.svelte.js";
</script>

<div class="container">
  <div class="infos">
    <span>article id</span>
    <a href="#">article.title</a>
  </div>
  <button>
    <img src="/src/assets/remove.svg" width="40" alt="supprimer le favori" />
  </button>
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
