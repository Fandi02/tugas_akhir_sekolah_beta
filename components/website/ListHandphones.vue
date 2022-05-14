<template>
  <div class="container-fluid">
    <div class="col">
      <div class="card">
        <div class="service-item second-service">
          <img
            :src="handphone.image"
            alt=""
            style="height: 85px; width: 70px; margin: 0 0 17px"
          />
          <h4>
            <span style="color: grey">Phone Name : </span>{{ handphone.brand }}
            {{ handphone.phone_name }}
          </h4>
          <div class="text-button">
            <!-- <a :href="brand.detail">See list Handphone <i class="fa fa-arrow-right"></i></a> -->
            <nuxt-link
              class="title-task mb-1"
              :to="'../detailHandphone/' + handphone.slug"
            >
              See Detail Handphone <i class="fa fa-arrow-right"></i>
            </nuxt-link>
            <a
              :href="
                'https://shopee.co.id/search?keyword=' +
                handphone.brand +
                handphone.phone_name
              "
              class="btn btn-primary"
              ><img
                src="~/static/shopee.png"
                alt=""
                style="height: 20px; width: 20px; margin: 0 12px 0 0"
              />check price</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    handphone: {
      type: Object,
      // default: "handphone",
    },
  },
};
</script>
