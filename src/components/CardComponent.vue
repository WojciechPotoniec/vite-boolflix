<template>
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img :src="img" class="card-img-top" :alt="original_title" @error="setDefaultImg"/>
      </div>
      <div class="flip-card-back">
        <h5 class="card-title">{{ title }}</h5>
        <small class="card-text">{{ original_title }}</small>
        <div class="flag">
          <img :src="imgFlag" :alt="language"/>
        </div>
        <div class="stars">
          <i
            :class="{ 'fa-solid': n <= voteStars, 'fa-regular': n > voteStars }"
            class="fa-star"
            v-for="n in 5"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: ["img", "title", "original_title", "language", "vote"],
  data() {
    return {
      flags: ["en", "es", "fr", "it", "de"],
    };
  },
  methods: {
    setDefaultImg(event) {
      event.target.src = "/img/image_not_found.jpg";
    }
  },
  computed: {
    imgFlag() {
      if (this.flags.includes(this.language)) {
        return `/img/${this.language}.svg.png`;
      } else {
        return `/img/Missing_flag.png`;
      }
    },
    voteStars() {
      return Math.ceil(this.vote / 2);
    }
  },
};
</script>
<style lang="scss" scoped>
.flag {
  height: 25px;
  width: 35px;
  img {
    height: 100%;
    width: 100%;
  }
}
.flip-card {
  aspect-ratio: 1 / 1.5;
  background-color: transparent;
  perspective: 1000px;
  cursor: pointer;
}

.flip-card-inner {
  position: relative;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: transparent;
  img {
    aspect-ratio: 1 / 1.5;
  }
}

.flip-card-back {
  background-color: black;
  color: white;
  transform: rotateY(180deg);
}
.stars {
  color: gold;
}
</style>
