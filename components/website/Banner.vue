<template>
  <div
    class="main-banner wow fadeIn"
    id="top"
    data-wow-duration="1s"
    data-wow-delay="0.5s"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-6 align-self-center">
              <div
                class="left-content show-up header-text wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay="1s"
              >
                <div class="row">
                  <div class="col-lg-12">
                    <h2>Get the latest mobile phone selection</h2>
                    <p>
                      This website provides a selection of mobile phones from
                      various brands and specifications are also available.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div
                class="right-image wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <img src="~/static/slider-dec.png" alt="" />
              </div>
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
    banner: {
      // type: Object,
      default: "Banner",
    },
  },
};
</script>
