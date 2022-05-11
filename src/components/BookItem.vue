<template>
  <div class="col">
    <div class="book-item">
      <a :href="volumeInfo.previewLink" target="_blank">
        <template v-if="volumeInfo.imageLinks">
          <img :alt="volumeInfo.title" :src="volumeInfo.imageLinks.thumbnail">
          <router-link :to="{ name: 'create', params: { book: volumeInfo }}">
            <b-button type="submit" variant="secondary">Add Review</b-button>
          </router-link>
          <router-link :to="{ name: 'view', params: { book: book.id }}">
            <b-button type="submit" variant="secondary">View Review</b-button>
          </router-link>
        </template>
        <template v-else>
          <img
              :alt="volumeInfo.title"
              src="https://islandpress.org/sites/default/files/400px%20x%20600px-r01BookNotPictured.jpg"
              width="128"
          >
        </template>

        <h4>{{ volumeInfo.title }}</h4>

        <p class="author">
          <span v-if="!volumeInfo.authors">No authors to display</span>
          <span v-else>
          By
          <span v-for="(author, index) in volumeInfo.authors" :key="index">
            <em>
              {{
                index + 1 !== volumeInfo.authors.length && index + 1 !== book.volumeInfo.authors.length - 1 ? author + ', ' : index + 1 == book.volumeInfo.authors.length && index + 1 !== 1 ? ' and ' + author : author
              }}
            </em>
          </span>
        </span>
        </p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookItem",
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  computed: {
    volumeInfo() {
      return this.book.volumeInfo
    }
  }
}

</script>

<style scoped>

</style>