<template>
  <div>
    <Banner />
    <div id="listBrands" class="services section">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <div
              class="section-heading wow fadeInDown"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <h4>List <em>Brand</em></h4>
              <img src="assets/images/heading-line-dec.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <hr width="350px" style="margin: -100px auto 50px" />

      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control col-3"
          aria-label="Text input with checkbox"
          v-model="mereks"
          style="width: 25%; height: 50px; font-size: 20px"
        />
        <div class="input-group-text">
          <button
            type="button"
            @click="getBrands()"
            class="button btn btn-primary"
          >
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <ListBrands
          v-for="(brand, index) in brands"
          :key="index"
          :brand="brand"
        />
      </div>
    </div>

    <div v-if="brands_name == mereks">
      {{ merek }}
    </div>
  </div>
</template>

<script>
import Banner from "@/components/website/Banner.vue";
import ListBrands from "@/components/website/ListBrands.vue";

export default {
  components: {
    Banner,
    ListBrands,
  },
  data() {
    return {
      brands: [],
      mereks: "",
      merek: "",
    };
  },
  async fetch() {
    await this.$axios
      .get("/v2/brands")
      .then((res) => (this.brands = res.data.data));
  },
  monted() {
    console.log("Brands : ", this.brands);
  },

  methods: {
    async getBrands() {
      await this.$axios
        .get(`v2/search?query= ${this.mereks}`)
        .then((res) => {
          this.merek = res.data.data.brands[brands_name];
          console.log(this.merek);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
