<template>
  <div class="create page">
    <h2 style="text-align: center">Write a Review</h2>
    <b-form v-if="loggedIn" @submit.prevent="addReview">
      <b-form-group class="col-md-12" label="Title" label-for="title" style="text-align: center">
        <b-form-input id="title" v-model="newReview.title" required></b-form-input>
      </b-form-group>
      <b-form-group class="col-md-12" label="Description" label-for="description" style="text-align: center">
        <b-form-textarea id="description" v-model="newReview.description" max-rows="5" required
                         rows="5"></b-form-textarea>
      </b-form-group>
      <div class="col-md-12" style="text-align: center">
        <b-button type="submit" variant="primary">Submit</b-button>
      </div>
    </b-form>
    <b-col v-else class="mx-auto" cols="9">
      <b-alert class="mt-5 w-100" show variant="danger">Please log in to write a review.</b-alert>
    </b-col>
  </div>
</template>

<script>
import Review from "../models/review.js";
import {db} from "../firebase";
import router from "../router";

export default {
  name: "CreateReviewPage"
  ,
  props: {
    authUser: {required: true},
    book: {required: true},
  },

  data: function () {
    return {
      newReview: new Review(),
    };
  },

  computed: {
    loggedIn() {
      return (this.authUser && this.authUser.uid);
    },
  },

  methods: {
    addReview() {
      let theReview = this.newReview;

      // set author
      theReview.createdBy = this.authUser;

      ``
      // add review to firebase
      db.collection('reviews')
          .add(theReview)
          .then(function (docRef) {
            console.log("Document written:", docRef);

            // clear Review
            theReview = new Review();

            // redirect to that review
            router.push({name: 'myreviews', params: {id: docRef.id}})

          })
          .catch(function (error) {
            console.error("Error adding document: ", error);

            // let the user know...

          });

    }

  },
}
</script>

<style scoped>

</style>