<template>
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img :src="img" class="card-img-top" :alt="original_title" @error="setDefaultImg"/>
      </div>
      <div class="flip-card-back">
        <h5 class="card-title">Title: <br>{{ title }}</h5>
        <small class="card-text">Original title: <br>{{ original_title }}</small>
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
        <p>{{ overview }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: ["img", "title", "original_title", "language", "vote", "overview"],
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
  margin: 10px auto;
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
  height: 100%;
  width: 100%;
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
    object-fit: cover;
  }
}

.flip-card-back {
  padding: 20px;
  background-color: black;
  color: white;
  transform: rotateY(180deg);
  overflow-y: scroll;
}
.stars {
  color: gold;
}
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-thumb {
  background: #bebebe;
  border-radius: 15px;
}
::-webkit-scrollbar-thumb:hover {
  background: #a0a0a0;
}

</style>
