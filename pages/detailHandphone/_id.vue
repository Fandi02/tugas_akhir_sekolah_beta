<template>
  <div>
    <div class="col-lg-8 offset-lg-2">
      <div class="section-heading">
        <h4 style="color: white">We Have The Best Pre-Order You Can Get</h4>
        <p style="color: white; margin-bottom: 50px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod
          tempor incididunt ut labore et dolore magna.
        </p>
      </div>
    </div>

    <center>
      <table class="table p-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th colspan="2" scope="col">
              <center>
                <div class="d-flex justify-content-center">
                  <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div
                      v-for="(image, index) in detailHandphones.phone_images"
                      :key="index"
                      :image="image"
                    >
                      <div class="col">
                        <div class="card h-100">
                          <img
                            :src="detailHandphones.phone_images[index]"
                            alt=""
                            style="
                              width: 200px;
                              height: 200px;
                              margin-bottom: 20px;
                            "
                            class="card-img-top"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </center>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Handphone Name</td>
            <td>
              {{ detailHandphones.brand }} {{ detailHandphones.phone_name }}
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Release Date</td>
            <td>{{ detailHandphones.release_date }}</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Dimension</td>
            <td>{{ detailHandphones.dimension }}</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>system operation</td>
            <td>{{ detailHandphones.os }}</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Storage</td>
            <td>{{ detailHandphones.storage }}</td>
          </tr>
        </tbody>
      </table>
    </center>
    <a
      :href="
        'https://shopee.co.id/search?keyword=' +
        detailHandphones.brand +
        detailHandphones.phone_name
      "
      class="btn btn-primary"
      ><img
        src="~/static/shopee.png"
        alt=""
        style="height: 20px; width: 20px; margin: 0 12px 0 0"
      />check price</a
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      handphoneDetail: this.$route.params.id,
      detailHandphones: [],
    };
  },
  async fetch() {
    await this.$axios
      .get("/v2/" + this.handphoneDetail)
      .then((res) => (this.detailHandphones = res.data.data));
    console.log(this.detailHandphones);
  },
  monted() {
    console.log("Handphones : ", this.detailHandphones);
  },
};
</script>
