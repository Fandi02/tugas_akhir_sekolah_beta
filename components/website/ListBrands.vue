<template>
  <div class="container-fluid">
    <div class="carousel-item active" data-bs-interval="10000">
      <div class="col">
        <div class="card">
          <div class="service-item second-service">
            <img
              src="~/static/phone.png"
              alt=""
              style="height: 85px; width: 70px; margin: 0 0 17px"
            />
            <h4>
              <span style="color: grey">Brand Name : </span
              >{{ brand.brand_name }}
            </h4>
            <p>
              <span style="color: grey">Total Handphone : </span
              >{{ brand.device_count }}
            </p>
            <div class="text-button">
              <!-- <a :href="brand.detail">See list Handphone <i class="fa fa-arrow-right"></i></a> -->
              <nuxt-link
                class="title-task mb-1"
                :to="'listHandphone/' + brand.brand_slug"
              >
                See list Handphone <i class="fa fa-arrow-right"></i>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    brand: {
      // type: Object,
      default: "brand",
    },
  },
};
</script>
