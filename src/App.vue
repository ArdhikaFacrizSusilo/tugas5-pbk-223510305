<template>
  <q-layout view="hHh lpR fFf">
    <!-- Navbar -->
    <q-header elevated class="bg-black text-white">
      <q-toolbar>
        <div style="width: 35px;">
        <q-avatar>
          <img src="https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-ibox-am-ban-1024x667.png">
        </q-avatar>
        </div>

        <q-toolbar-title>
          Dikaa Phone
        </q-toolbar-title>
        <q-btn color="black" label="iPhone" class="uppercast-text" />
        <q-btn color="black" label="iPad" class="uppercast-text" />
        <q-btn color="black" label="Watch" class="uppercast-text" />
        <q-btn color="black" label="Mac" class="uppercast-text" />
        <q-btn color="black" label="Aksesori" class="uppercast-text" />
        <q-btn color="black" label="Layanan" class="uppercast-text" />
        <q-btn flat round icon="search" aria-label="Search" />
        <q-btn flat round icon="notifications" aria-label="Notifications" />
        <q-btn flat round icon="favorite" aria-label="Love" />
        <q-btn flat round icon="shopping_cart" aria-label="Shopping Cart" />
        <q-btn flat round icon="account_circle" aria-label="User Account" />
      </q-toolbar>
    </q-header>

    <!-- Page Content -->
    <q-page-container>
      <q-page>
        <!-- Carousel -->
        <q-carousel
          v-model="slide"
          height="550px"
          control-type="regular"
          arrows
          infinite
          animated
          swipeable
          thumbnails
        >
          <q-carousel-slide name="1" img-src="https://storage.googleapis.com/eraspacelink/pmp/production/banners/images/fwQ1ulVMRtbVl3bYyUkWFvfQEalZejcGG1XfpLlv.webp" />
          <q-carousel-slide name="2" img-src="https://backend.mobilizujeme.cz/wp-content/uploads/2022/11/iphone-15.jpg" />
          <q-carousel-slide name="3" img-src="https://storage.googleapis.com/eraspacelink/pmp/production/banners/images/LDTxJZ21t95AuMxdtkTAIUqTbSiEclSja2RKN83k.webp" />
          <q-carousel-slide name="4" img-src="https://storage.googleapis.com/eraspacelink/pmp/production/banners/images/oVMNv5QeXU7ANP86upG8UetIQgI5c25B740tbjMI.webp" />
        </q-carousel>

        <!-- Cards -->
        <div class="q-pa-md row items-start q-gutter-md justify-center">
          <q-card v-for="(product, index) in products" :key="index" class="my-card hover-card" flat bordered>
            <q-img :src="product.image" :alt="product.name" />

            <q-card-section>
              <div class="row no-wrap items-center">
                <div class="col text-h6 ellipsis">
                  {{ product.name }}
                </div>
              </div>
              <div class="row no-wrap items-center">
                <q-rating size="25px" v-model="product.stars" :max="5" color="primary" />
                <span class="text-caption text-grey q-ml-sm">{{ product.rating }} ({{ product.reviews }})</span>
              </div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <div class="text-subtitle1">
                {{ product.price }}
              </div>
              <div class="text-caption text-grey">
                {{ product.description }}
              </div>
            </q-card-section>

            <q-separator />
            <q-card-actions align="left">
              <q-btn flat color="primary">
                Buy now
              </q-btn>
              <q-space />
              <q-btn flat round color="red" icon="favorite" />
              <q-btn flat round color="teal" icon="bookmark" />
              <q-btn flat round color="primary" icon="share" />
            </q-card-actions>
          </q-card>
        </div>

        <div class="social-media-section">
          <h3>TEMUKAN KAMI</h3>
          <q-btn flat round color="blue" icon="facebook" aria-label="Facebook" />
          <span class="social-media-text">Ardhika Facriz</span>
        </div>
        
      </q-page>
    </q-page-container>
    
    <footer class="footer bg-black text-white">
      <p>COPYRIGHT &copy; 223510305 ARDHIKA FACRIZ SUSILO. ALL RIGHTS RESERVED. </p>
    </footer>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      slide: '1',
      products: [
        { 
          name: 'iPhone 15 Pro Max', 
          price: 'Rp.22.999.000', 
          image: 'https://cdn.eraspace.com/media/catalog/product/a/p/apple_iphone_15_pro_natural_titanium_5_6.jpg',
          stars: 4.5,
          rating: '4.5',
          reviews: '120',
          description: 'iPhone 15 Pro Max. Lahir dari titanium dan dilengkapi chip A17 Pro terobosan, tombol Tindakan yang dapat disesuaikan, dan sistem kamera iPhone paling andal yang pernah ada.'
        },
        { 
          name: 'iPhone 15', 
          price: 'Rp.14.249.000', 
          image: 'https://cdn.eraspace.com/media/catalog/product/a/p/apple_iphone_15_blue_5_1_3.jpg',
          stars: 4.0,
          rating: '4.0',
          reviews: '90',
          description: 'iPhone 15 menghadirkan Dynamic Island, kamera Utama 48 MP, dan USB-C — semuanya dalam desain aluminium dan kaca berwarna yang tangguh.'
        },
        { 
          name: 'iPhone 14 Pro Max', 
          price: 'Rp.17.999.000', 
          image: 'https://cdn.eraspace.com/media/catalog/product/i/p/iphone_14_pro_max_deep_purple_6_9.jpg',
          stars: 4.8,
          rating: '4.8',
          reviews: '150',
          description: 'iPhone 14 Pro Max. Memotret detail menakjubkan dengan kamera Utama 48 MP. Nikmati iPhone dalam cara yang sepenuhnya baru dengan layar yang Selalu Aktif.'
        },
        { 
          name: 'iPad Pro (Generasi Ke-6)', 
          price: 'Rp.14.749.000', 
          image: 'https://cdn.eraspace.com/media/catalog/product/i/p/ipad_pro_gen_4_11_inci_wi-fi_space_grey_8_6.jpg',
          stars: 4.7,
          rating: '4.7',
          reviews: '110',
          description: 'iPad Pro. Dengan performa yang menakjubkan, konektivitas nirkabel super cepat, dan pengalaman Apple Pencil generasi berikutnya. Ditambah, fitur produktivitas dan kolaborasi baru yang andal di iPadOS 16. iPad Pro adalah pengalaman iPad terbaik.'
        },
        { 
          name: 'Apple Watch Ultra with Ocean Band', 
          price: 'Rp.13.999.000', 
          image: 'https://cdn.eraspace.com/media/catalog/product/a/p/apple_watch_ultra_49mm_gps_cellular_titanium_case_with_yellow_ocean_band_1_1_1.jpg',
          stars: 4.9,
          rating: '4.9',
          reviews: '200',
          description: 'Apple Watch paling tangguh dan andal yang pernah ada, dirancang untuk penjelajahan, petualangan, dan ketahanan. Dengan casing titanium 49 mm sekelas industri dirgantara, kekuatan baterai yang lebih lama, dan tombol Tindakan baru yang dapat disesuaikan.'
        },
        { 
          name: 'iMac 24 inci (M3, Dua Port, 2024)', 
          price: 'Rp.22.499.000', 
          image: 'https://cdn.eraspace.com/media/catalog/product/i/m/imac_24-inch_m3_2-port_blue_8_1.jpg',
          stars: 4.3,
          rating: '4.3',
          reviews: '80',
          description: 'iMac. Komputer desktop serba bisa terbaik di dunia, kini bertenaga super berkat chip M3. Dengan layar 24 inci yang mengagumkan dalam desain ikonik serta kamera, mikrofon, dan speaker terbaik di kelasnya. iMac sempurna untuk bermain dan bekerja.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.my-card {
  width: 300px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.my-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.carousel-slide {
  position: relative;
}

.slide-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
}

.my-card q-img {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.uppercast-text {
  text-transform: none;
}

.footer {
  background-color: #333;
  color: #fff;
  padding: 10px 0; 
  text-align: center;
}

.social-media-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #f0f0f0;
  flex-direction: column;
  margin-top: 20px;
}

.social-media-section q-btn {
  margin: 0 10px;
}

.social-media-section h3 {
  margin-bottom: 5px;
  font-size: medium;
}

.social-media-section .social-media-text {
  margin-top: 5px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
}

</style>
