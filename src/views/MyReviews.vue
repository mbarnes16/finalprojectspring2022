<template>
  <div class="review page">
    <h2 style="text-align: center">My Reviews</h2>
    <review-list v-if="loggedIn" :user="authUser" collection="user"></review-list>
    <b-col v-else class="mx-auto" cols="9">
      <b-alert class="mt-5 w-100" show variant="danger">Please log in to view your potlucks.</b-alert>
    </b-col>
  </div>
</template>

<script>


import ReviewList from "../components/ReviewList";

export default {
  name: "MyReviews",
  components: {ReviewList},
  props: {
    authUser: {required: true},
  },

  computed: {
    loggedIn() {
      return (this.authUser && this.authUser.uid);
    },
  },
}
</script>

<style scoped>

</style>