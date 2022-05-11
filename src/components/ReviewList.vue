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
  name: "ReviewList",
  components: {ReviewColumn},
  props: {
    collection: {type: String},
    user: {type: Object},
  },

  data: function () {
    return {
      title: [],
      reviews: [],
    };
  },

  firestore: function () {
    console.log(this.user.uid);
    // set the potlucks collection based on the prop
    return {
      reviews: db.collection('reviews').where('createdBy.uid', '==', this.user.uid),
    };
  },
  computed: {},

  methods: {},
}
</script>

<style scoped>

</style>