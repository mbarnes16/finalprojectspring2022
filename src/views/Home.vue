<template>
  <div>
    <h1 style="text-align: center">Search Books</h1>
    <div class="query" style="text-align:center">
      <form @submit.prevent="search">
        <div>
          <input v-model="keyword" class="input" placeholder="Search..." required type="text">
          <input class="button" type="submit" value="Search">
        </div>
        <div>
          <label>Order by</label>&nbsp;
          <select v-model="orderBy" name="order" @change="search">
            <option value="newest">newest</option>
            <option value="relevance">relevance</option>
          </select>
        </div>
      </form>
    </div>
    <b-col class="content">
      <div v-if="loadState == 'loading'" class="loading"></div>
      <BookList v-if="loadState == 'success'" :books="books"/>
    </b-col>
  </div>
</template>

<script>
import BookList from '@/components/BookList'
import axios from 'axios'

export default {
  name: 'HomePage',
  props: {},
  data() {
    return {
      books: [],
      keyword: '',
      orderBy: 'newest',
      maxResults: '10',
      loadState: ''
    }
  },
  methods: {
    search() {
      this.loadState = 'loading'
      axios
          .get(
              `https://www.googleapis.com/books/v1/volumes?q=intitle:${
                  this.keyword
              }&orderBy=${this.orderBy}&maxResults=${this.maxResults}`
          )
          .then(response => {
            console.log(response.data.items)
            this.books = response.data.items
            this.loadState = 'success'
          })
    }
  },
  components: {
    BookList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

