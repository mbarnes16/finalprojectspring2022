<template>
  <div class="review-list">
    <div v-if="reviews">
      <review-column v-for="review in reviews" :key="review.id" :review="review"></review-column>
    </div>
    <loading v-else></loading>
  </div>
</template>

<script>
import {db} from "../firebase";
import ReviewColumn from "./Review";

export default {
  name: "BookReivewList",
  components: {ReviewColumn},
  props: {
    collection: {type: String},
    data: function () {
      return {
        reviews: [],
      };
    },

    firestore: function () {
      console.log(this.book.id);
      // set the potlucks collection based on the prop
      return {
        reviews: db.collection('reviews').where('book.id', '==', this.book.id),
      };
    },
    computed: {},

    methods: {},
  }
}
</script>

<style scoped>

</style>