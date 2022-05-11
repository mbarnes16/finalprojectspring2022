<template>
  <div class="review">
    <b-card class="overflow-hidden" no-body style="max-width: 540px; padding: 10px;">
      <b-row>
        <b-col md="6">
          <b-card-img :src="review.createdBy.photoURL" alt="Image" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body>
            <b-card-title v-if="review.title" class="name">{{ review.title }}</b-card-title>
            <b-card-text v-if="review.description" class="description">{{ review.description }}
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>


  <!--  <div class="right-column">
      <h3 v-if="review.title" class="name">Title: {{review.title}}</h3>
      <div v-if="review.description" class="description">Description: {{review.description}}</div>
      <div v-if="review.createdBy" class="created-by">
        <b-img :src="review.createdBy.photoURL" class="avatar" height="50px"></b-img>
        {{review.createdBy.displayName}}
      </div>
    </div>-->
</template>

<script>
export default {
  name: "ReviewColumn",
  props: {
    review: {type: Object, required: true},
  },

  computed: {},

  methods: {},
};

</script>

<style scoped>

</style>