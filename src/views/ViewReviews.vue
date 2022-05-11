<template>
  <div class="review-list">
    <div v-if="reviews">
      <review-column v-for="review in reviews" :key="review.id" :review="review"></review-column>
    </div>
    <loading v-else></loading>
  </div>
</template>

<script>


export default {
  name: "ViewReviews",

}
</script>

<style scoped>
#review-list {
  text-align: center;
}
</style>