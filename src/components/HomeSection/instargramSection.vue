<template>
  <div class="row">
    <section-title title="Instagram" />
    <div class="instaBox">
      <div class="insta" v-for="(item, index) in instagramImage" :key="index">
        <a :href="item.link" target="_blank">
          <img
            :src="item.img"
            :alt="item.alt"
            class="instaImage"
            :class="{ on: index < currentIndex }"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from "@/components/layout/SectionTitle.vue";

export default {
  components: {
    SectionTitle,
  },
  data() {
    return {
      instagramImage: [
        {
          link: "https://www.instagram.com/gmpharm_official/?img_index=1",
          img: "./image/431363434_753376859833792_2188588100674991683_n.jpg__nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=yw3Y50C6_c0AX8zkjxR&_nc_ht=scontent-ssn1-1.cdninstagram.jpg",
          alt: "이미지",
        },
        {
          link: "https://www.instagram.com/gmpharm_official/?img_index=1",
          img: "./image/429395858_704794538515848_2057013793368239685_n.jpg__nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=mO9j1S7a_54AX8NA8-B&_nc_ht=scontent-ssn1-1.cdninstagram.jpg",
          alt: "이미지",
        },
        {
          link: "https://www.instagram.com/gmpharm_official/?img_index=1",
          img: "./image/431463767_708096811495701_8593538598873978179_n.jpg__nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=gBTRM0IUSSgAX-tMuOS&_nc_oc=Adi1xc5mr2Lx4hKo2uAdXlbY-wpmej2GmU1hWNDKJ0bE3ejmwb.jpg",
          alt: "이미지",
        },
        {
          link: "https://www.instagram.com/gmpharm_official/?img_index=1",
          img: "./image/431472155_3066399216829831_2146489833755429695_n.jpg__nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=EFDoppBwivgAX_rHYdb&_nc_ht=scontent-ssn1-1.cdninstagram.jpg",
          alt: "이미지",
        },
        {
          link: "https://www.instagram.com/gmpharm_official/?img_index=1",
          img: "./image/408866502_377693011675451_898784573726373101_n.jpg__nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=tbrGO4ezPyIAX-Zrruh&_nc_ht=scontent-ssn1-1.cdninstagram.jpg",
          alt: "이미지",
        },
      ],
      currentIndex: 0, // 현재 이미지 인덱스
    };
  },
};
</script>

<style lang="scss" scoped>
.instaBox {
  display: flex;
  justify-content: space-around;
  align-items: center;
  .insta {
    padding: 10px;
    .instaImage {
    }
  }
}
@media screen and (max-width: 900px) {
  .instaBox {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .insta {
      padding: 10px;
      img {
      }
    }
  }
}
</style>
