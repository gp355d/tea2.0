<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{ disabled: !pages.has_pre }">
        <a class="page-link" href="#" aria-label="Previous" @click.prevent="() => updatePage(pages.current_page - 1)">
          &laquo;
        </a>
      </li>
      <li class="page-item" v-for="page in pages.total_pages" :key="page" :class="{ active: pages.current_page === page }">
        <span class="page-link" v-if="page === pages.current_page">{{ page }}</span>
        <a class="page-link" v-else  @click.prevent="() => updatePage(page)">{{ page }}</a>
      </li>
      <li class="page-item" :class="{ disabled: !pages.has_next }">
        <a class="page-link" href="#" aria-label="Next" @click.prevent="() => updatePage(pages.current_page + 1)">
          &raquo;
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['pages'],
  methods: {
    updatePage (pages) {
      this.$emit('emitPages', pages)
    }
  }
}
</script>
