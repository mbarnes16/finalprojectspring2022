<template>
  <div class="col">
    <BookItem v-for="book in books" :key="book.id" :book="book"/>
  </div>
</template>

<script>
import BookItem from "./BookItem";

export default {
  name: "BookList",
  props: {
    books: {
      type: Array,
      required: true
    }
  },
  components: {
    BookItem
  }
};
</script>

<style scoped>

</style>