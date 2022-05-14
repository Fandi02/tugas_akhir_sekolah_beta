<template>
  <div class="container">
    <div v-if="loading" class="d-flex align-items-center ms-auto">
      <img
        src="~/static/loading.gif"
        alt=""
        style="margin: 0px auto; width: 750px; height: 750px"
      />
    </div>
    <div class="col-lg-8 offset-lg-2" v-else>
      <div class="section-heading">
        <h4 style="color: white">We Have The Best Pre-Order You Can Get</h4>
        <p style="color: white; margin-bottom: 50px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod
          tempor incididunt ut labore et dolore magna.
        </p>
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <ListHandphones
        v-for="(handphone, index) in handphones"
        :key="index"
        :handphone="handphone"
      />
    </div>
  </div>
</template>

<script>
import ListHandphones from "@/components/website/ListHandphones.vue";
export default {
  components: {
    ListHandphones,
  },
  data() {
    return {
      handphoneId: this.$route.params.id,
      handphones: [],
      loading: true,
    };
  },
  async fetch() {
    await this.$axios
      .get("/v2/brands/" + this.handphoneId)
      .then((res) => (this.handphones = res.data.data.phones));
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 2500);
  },
};
</script>
