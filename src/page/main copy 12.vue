<template>
    <div class="font-lora antialiased text-gray-800 bg-gradient-to-br from-purple-50 to-pink-50">
      <div class="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src="/imageCollide/1.png"
          alt="Enchanted Garden Background"
          class="absolute inset-0 w-full h-full object-cover opacity-80 animate-slow-zoom"
          style="animation-delay: 0.5s;"
        />
        <div class="absolute inset-0 via-transparent to-transparent opacity-50"></div>
        <div class="relative z-10 text-center text-white p-8  bg-opacity-40 rounded-xl  animate-fade-in-up-slow  border-opacity-30">
          <p class="font-dancing text-3xl mb-4 animate-fade-in text-gold-300">You are cordially invited to</p>
          <h1 class="text-6xl md:text-8xl font-playfair font-extrabold tracking-tight leading-none mb-4 animate-scale-in-slow text-shadow-glow">
            Angela's Garden Gala
          </h1>
          <p class="text-xl md:text-2xl font-lora animate-fade-in" style="animation-delay: 0.8s;">Celebrating 18 Years of Grace & Dreams</p>
        </div>
      </div>
  
      <section class="py-20 bg-pink-100 bg-opacity-90 shadow-inner">
        <div class="container mx-auto px-6 max-w-4xl text-center">
          <h2 class="text-5xl font-playfair font-bold mb-8 text-green-800 animate-slide-in-down">A Message from Angela</h2>
          <div class="w-72 h-72 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-pink-400 transform hover:scale-105 transition duration-500 ease-in-out mb-8 animate-float-in">
            <img
              src="/imageCollide/6.png"
              alt="Angela Muli - Glamorous"
              class="w-full h-full object-cover object-center"
            />
          </div>
          <p class="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto italic animate-fade-in" style="animation-delay: 0.3s;">
            "Dearest friends and family, it fills my heart with joy to invite you to celebrate my 18th birthday! Each of you has played a special part in my journey, and I can't imagine reaching this milestone without your love and support. Let's make this a night to remember, filled with laughter, cherished memories, and new beginnings. See you there!"
          </p>
          <p class="text-xl font-bold text-pink-700 mt-6 animate-fade-in" style="animation-delay: 0.6s;">— Angela Muli</p>
        </div>
      </section>
  
      <section class="py-16 bg-gradient-to-br from-purple-50 to-pink-100">
        <div class="container mx-auto px-6 max-w-5xl">
          <h2 class="text-5xl font-playfair font-bold text-center mb-12 text-purple-700 animate-slide-in-left">The Grand Celebration Awaits</h2>
          <div class="grid md:grid-cols-2 gap-12">
            <div class="bg-white p-10 rounded-3xl shadow-xl border border-purple-100 transform hover:scale-105 transition duration-500 ease-in-out hover:shadow-2xl animate-fade-in-right">
              <h3 class="text-3xl font-playfair font-semibold mb-6 text-gray-900 flex items-center">
                <i class="fas fa-calendar-alt mr-4 text-pink-500 text-3xl animate-bounce-subtle"></i> Date & Time
              </h3>
              <p class="text-xl md:text-2xl mb-4 text-gray-700">
                <strong class="text-pink-600">Date:</strong> Friday, July 19, 2025
              </p>
              <p class="text-xl md:text-2xl text-gray-700">
                <strong class="text-pink-600">Time:</strong> 4:00 PM onwards
              </p>

              <!-- countdown -->

              <br>
              <h3 class="text-2xl font-playfair mb-2 text-pink-400">The Grand Day Is In...</h3>
                <div class="flex justify-center space-x-4 text-4xl md:text-5xl font-bold text-black text-shadow-lg">
                    <div class="text-center">
                    {{ countdown.days }}<span class="block text-base font-normal">Days</span>
                    </div>
                    <div class="text-center">
                    {{ countdown.hours }}<span class="block text-base font-normal">Hours</span>
                    </div>
                    <div class="text-center">
                    {{ countdown.minutes }}<span class="block text-base font-normal">Minutes</span>
                    </div>
                    <div class="text-center">
                    {{ countdown.seconds }}<span class="block text-base font-normal">Seconds</span>
                    </div>
                </div>

            </div>
            <div class="bg-white p-10 rounded-3xl shadow-xl border border-pink-100 transform hover:scale-105 transition duration-500 ease-in-out hover:shadow-2xl animate-fade-in-left">
              <h3 class="text-3xl font-playfair font-semibold mb-6 text-gray-900 flex items-center">
                <i class="fas fa-map-marker-alt mr-4 text-purple-500 text-3xl animate-jiggle-subtle"></i> Venue
              </h3>
              <p class="text-xl md:text-2xl mb-4 text-gray-700">
                <strong class="text-purple-600">Belveder 1 Club House</strong>
              </p>
              <div class="mt-8 rounded-2xl overflow-hidden shadow-2xl border-4 border-purple-400 hover:border-pink-400 transition duration-300 ease-in-out">
                <!-- <h3 class="text-2xl font-bold text-center pt-5 pb-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-playfair">Discover Our Location</h3>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.352495674069!2d120.9754593!3d14.5779032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca2619736c9d%3A0x62957b447812502c!2sThe%20Manila%20Hotel!5e0!3m2!1sen!2sph!4v1718610461234!5m2!1sen!2sph"
                  width="100%"
                  height="400"
                  style="border:0;"
                  allowfullscreen
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe> -->
                <!-- <h3 class="text-2xl font-bold text-center pt-5 pb-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-playfair">Discover Our Location</h3> -->
                <a 
                    href="https://www.google.com/maps/place/8V96%2BRW9,+Tanza,+Cavite/@14.3195375,120.8597845,17z/data=!3m1!4b1!4m5!3m4!1s0x33962a4a90f450f5:0x150cfc17ee330b3c!8m2!3d14.3195375!4d120.8623594?entry=ttu&g_ep=EgoyMDI1MDYxNS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                >
                    <h3 class="text-2xl font-bold text-center text-pink-300 pt-6 pb-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white">Find Us Here!</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.352495674069!2d120.9754593!3d14.5779032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca2619736c9d%3A0x62957b447812502c!2sThe%20Manila%20Hotel!5e0!3m2!1sen!2sph!4v1718610461234!5m2!1sen!2sph"
                        width="100%"
                        height="400"
                        style="border:0;"
                    ></iframe>

                </a>
            

                <!-- <a
                    href="https://www.google.com/maps/place/8V96%2BRW9,+Tanza,+Cavite/@14.3195375,120.8597845,17z/data=!3m1!4b1!4m5!3m4!1s0x33962a4a90f450f5:0x150cfc17ee330b3c!8m2!3d14.3195375!4d120.8623594?entry=ttu&g_ep=EgoyMDI1MDYxNS4wIKXMDSoASAFQAw%3D%3D"
                    class="inline-flex items-center text-blue-600 hover:text-blue-800 hover:underline text-lg font-medium transition duration-300 ease-in-out"
                    target="_blank"
                >
                    <div class="mt-12 rounded-xl overflow-hidden shadow-2xl border-4 border-pink-400 hover:border-purple-400 transition duration-300 ease-in-out">
                    <h3 class="text-2xl font-bold text-center text-pink-300 pt-6 pb-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white">Find Us Here!</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.352495674069!2d120.9754593!3d14.5779032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca2619736c9d%3A0x62957b447812502c!2sThe%20Manila%20Hotel!5e0!3m2!1sen!2sph!4v1718610461234!5m2!1sen!2sph"
                        width="100%"
                        height="450"
                        style="border:0;"
                        allowfullscreen
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                    </div>
                </a> -->
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <section class="py-20 bg-white">
        <div class="container mx-auto px-6 max-w-6xl">
          <h2 class="text-5xl font-playfair font-bold text-center mb-16 text-green-800 animate-slide-in-up">The Timeless Traditions</h2>
          <div class="grid md:grid-cols-3 gap-10">
            <div class="bg-gradient-to-b from-pink-50 to-white p-8 rounded-xl shadow-lg border border-pink-200 transform hover:-translate-y-2 transition duration-300 ease-in-out animate-fade-in">
              <h3 class="text-3xl font-playfair font-semibold mb-5 text-pink-600 flex items-center">
                <i class="fas fa-rose mr-4 text-pink-500 text-3xl animate-grow-icon"></i> 18 Roses
              </h3>
              <p class="mb-6 text-gray-700 leading-relaxed">
                These distinguished gentlemen will each present a rose, symbolizing Angela's blossoming journey into womanhood, one petal at a time.
              </p>
              <ul class="list-none space-y-3 text-gray-800 text-lg">
                <li v-for="rose in roses" :key="rose" class="flex items-center"><i class="fas fa-heart text-pink-400 mr-3"></i> {{ rose }}</li>
              </ul>
            </div>
  
            <div class="bg-gradient-to-b from-yellow-50 to-white p-8 rounded-xl shadow-lg border border-yellow-200 transform hover:-translate-y-2 transition duration-300 ease-in-out animate-fade-in" style="animation-delay: 0.1s;">
              <h3 class="text-3xl font-playfair font-semibold mb-5 text-yellow-600 flex items-center">
                <i class="fas fa-lightbulb mr-4 text-yellow-500 text-3xl animate-pulse-light"></i> 18 Candles
              </h3>
              <p class="mb-6 text-gray-700 leading-relaxed">
                Eighteen influential women will share their wisdom, dreams, and a guiding light, illuminating Angela's path forward.
              </p>
              <ul class="list-none space-y-3 text-gray-800 text-lg">
                <li v-for="candle in candles" :key="candle" class="flex items-center"><i class="fas fa-star text-yellow-400 mr-3"></i> {{ candle }}</li>
              </ul>
            </div>
  
            <div class="bg-gradient-to-b from-blue-50 to-white p-8 rounded-xl shadow-lg border border-blue-200 transform hover:-translate-y-2 transition duration-300 ease-in-out animate-fade-in" style="animation-delay: 0.2s;">
              <h3 class="text-3xl font-playfair font-semibold mb-5 text-blue-600 flex items-center">
                <i class="fas fa-champagne-glasses mr-4 text-blue-500 text-3xl animate-shake-subtle"></i> 18 Toasts
              </h3>
              <p class="mb-6 text-gray-700 leading-relaxed">
                Close friends and family will raise a glass, offering heartfelt wishes and hopes for Angela's future.
              </p>
              <ul class="list-none space-y-3 text-gray-800 text-lg">
                <li v-for="toast in toasts" :key="toast" class="flex items-center"><i class="fas fa-gift text-blue-400 mr-3"></i> {{ toast }}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  
      <section class="py-20 bg-gradient-to-tl from-purple-100 to-white">
        <div class="container mx-auto px-6 max-w-5xl">
          <h2 class="text-5xl font-playfair font-bold text-center mb-12 text-purple-700 animate-slide-in-right">Angela's World</h2>
          <div class="flex flex-col md:flex-row items-center gap-10">
            <div class="md:w-1/2 text-gray-700 animate-fade-in-left">
              <h3 class="text-3xl font-playfair font-semibold mb-4 text-green-800">A Glimpse Into Her Passions</h3>
              <p class="text-lg leading-relaxed mb-4">
                Angela is a vibrant spirit with a boundless curiosity. Whether she's exploring new worlds through books, expressing her creativity through art, or enjoying quality time with her beloved pets, she embraces life with enthusiasm. Her journey so far has been filled with learning, growth, and countless cherished moments.
              </p>
              <ul class="list-disc list-inside text-lg space-y-2 text-green-700 font-semibold">
                <li class="flex items-center"><i class="fas fa-book-open mr-2 text-green-500"></i> Avid Reader & Storyteller</li>
                <li class="flex items-center"><i class="fas fa-palette mr-2 text-green-500"></i> Creative Artist</li>
                <li class="flex items-center"><i class="fas fa-paw mr-2 text-green-500"></i> Animal Lover</li>
                <li class="flex items-center"><i class="fas fa-globe-americas mr-2 text-green-500"></i> Aspiring Traveler</li>
              </ul>
            </div>
            <div class="md:w-1/2 grid grid-cols-2 gap-4 animate-fade-in-right">
              <img src="/imageCollide/1.png" alt="Angela's Hobby 1" class="rounded-xl shadow-lg border border-gray-200 transform hover:scale-105 transition duration-300" />
              <img src="/imageCollide/2.png" alt="Angela's Hobby 2" class="rounded-xl shadow-lg border border-gray-200 transform hover:scale-105 transition duration-300" />
              <img src="/imageCollide/3.png" alt="Angela's Hobby 3" class="rounded-xl shadow-lg border border-gray-200 transform hover:scale-105 transition duration-300" />
              <img src="/imageCollide/4.png" alt="Angela's Hobby 4" class="rounded-xl shadow-lg border border-gray-200 transform hover:scale-105 transition duration-300" />
            </div>
          </div>
        </div>
      </section>
  
  
      <section class="py-16 bg-pink-50">
        <div class="container mx-auto px-6 max-w-4xl">
          <h2 class="text-5xl font-playfair font-bold text-center mb-12 text-pink-700 animate-slide-in-down">Dress to Impress</h2>
          <div class="grid md:grid-cols-2 gap-10">
            <div class="bg-white p-8 rounded-xl shadow-lg border border-pink-200 transform hover:shadow-xl transition duration-300 ease-in-out animate-fade-in-left">
              <div
                class="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-pink-300 mb-6 transform hover:scale-105 transition duration-500 ease-in-out"
              >
                <img
                  src="/imageCollide/female.png"
                  alt="Ladies Dress Code"
                  class="w-full h-full object-cover"
                />
              </div>
              <h3 class="text-2xl font-playfair font-semibold mb-4 text-gray-900">For the Ladies</h3>
              <p class="text-xl mb-3">
                <strong class="text-pink-600">Attire:</strong> Elegant Cocktail / Formal Garden Attire
              </p>
              <p class="text-lg text-gray-700 leading-relaxed">
                Embrace the garden gala theme with elegant cocktail dresses, flowy gowns, or sophisticated jumpsuits. Shades of emerald green, blush pink, lavender, gold, or champagne would be enchanting.
              </p>
            </div>
            <div class="bg-white p-8 rounded-xl shadow-lg border border-purple-200 transform hover:shadow-xl transition duration-300 ease-in-out animate-fade-in-right">
              <div
                class="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-purple-300 mb-6 transform hover:scale-105 transition duration-500 ease-in-out"
              >
                <img
                  src="/imageCollide/male1.png"
                  alt="Gentlemen Dress Code"
                  class="w-full h-full object-cover"
                />
              </div>
              <h3 class="text-2xl font-playfair font-semibold mb-4 text-gray-900">For the Gentlemen</h3>
              <p class="text-xl mb-3">
                <strong class="text-purple-600">Attire:</strong> Smart Suit / Barong Tagalog
              </p>
              <p class="text-lg text-gray-700 leading-relaxed">
                Opt for a smart suit, a traditional Barong Tagalog, or a blazer with dress trousers. Forest green, navy, or charcoal would complement the theme. Neckties are welcome.
              </p>
            </div>
          </div>
        </div>
      </section>
  
      <section class="py-16 bg-white">
        <div class="container mx-auto px-6 max-w-3xl text-center">
          <h2 class="text-5xl font-playfair font-bold text-center mb-8 text-green-800 animate-slide-in-up">Your Presence, Her Present</h2>
          <p class="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto mb-8 animate-fade-in" style="animation-delay: 0.2s;">
            More than any material gift, Angela treasures your presence and shared joy on her special day. If you wish to extend a gift, a contribution towards her future endeavors or a thoughtful card would be greatly appreciated.
          </p>
          <div class="inline-block bg-pink-100 text-pink-700 px-6 py-3 rounded-full shadow-md text-lg font-semibold animate-pop-in">
            <i class="fas fa-hand-holding-heart mr-2"></i> Your Love & Support Mean The World!
          </div>
        </div>
      </section>
  
  
      <section class="py-16 bg-gray-800 text-white">
        <div class="container mx-auto px-6 max-w-lg">
          <h2 class="text-5xl font-playfair font-bold text-center mb-8 text-pink-300 animate-slide-in-down">Kindly RSVP</h2>
          <p class="text-center text-xl mb-10 leading-relaxed animate-fade-in" style="animation-delay: 0.1s;">
            Please confirm your attendance by
            <strong class="font-bold text-pink-200">June 18, 2025</strong> so we can ensure a magical experience for everyone.
          </p>
  
          <iframe
            src="https://angela-muli-invitation.netlify.app/"
            width="100%"
            height="790"
            style="border:0;"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="rounded-xl shadow-2xl animate-fade-in-up"
          ></iframe>
        </div>
      </section>
  
      <footer class="py-8 bg-gray-900 text-center text-gray-400 text-sm">
        <div class="container mx-auto px-4">
          <p>© 2025 Angela's 18th Birthday. All Rights Reserved.</p>
          <p class="mt-2">#AngelasGardenGala <i class="fas fa-sparkles ml-1 text-yellow-300"></i></p>
          <p class="mt-2">Designed with enchantment for Angela.</p>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup lang="ts">
//   import { ref, reactive } from 'vue';
import { ref, reactive, onMounted, onUnmounted } from 'vue';
  
  interface RsvpForm {
    name: string;
    attending: string;
    guests: number;
    message: string;
  }
  
  const rsvpForm = reactive<RsvpForm>({
    name: '',
    attending: '',
    guests: 1,
    message: '',
  });
  
  const rsvpSubmitted = ref(false);
  
  const submitRsvp = () => {
    console.log('RSVP Submitted:', rsvpForm);
    setTimeout(() => {
      rsvpSubmitted.value = true;
    }, 500);
  };
  
  // Data for the 18s lists
  const roses = ref([
    'Mr. Arjay Magno', 'Mr. Ronald Villo', 'Mr. Efren Rodriguez', 'Mr. River Palomeno',
    'Mr. Ralph Louren Cincua', 'Mr. Wingard Baraquiel', 'Mr. Jemuel Hisita',
    'Mr. Rexie Van Galanta', 'Mr. John Lumbis', 'Mr. Reynaldo Aquino',
    'Mr. Renz Gonzales', 'Mr. Aaron Josh Corbita', 'Mr. Marvy James Bayani',
    'Mr. Jhon Ryan Dellomas', 'Mr. Wilredo Andres', 'Mr. Alwyn Dave Almazar',
    'Mr. Prince Charles Giron', 'Mr. Angelo Muli'
  ]);
  
  const candles = ref([
    'Ms. Angelica Aquino', 'Mrs. Marlyn Aquino', 'Ms. Percy Aspiras',
    'Ms. Lourie Kay Cincua', 'Mrs. Luisa Canales', 'Mrs. Liezel Cincua',
    'Mrs. Charmie De Torres', 'Mrs. Joan Magno', 'Mrs. Glenda Rodriguez',
    'Ms. Mila Ansagay', 'Dra. Weng Catanaoan', 'Mrs. Rowena Datinginoo',
    'Ms. Rosalyn Casalla', 'Ma\'am. Zarina Feleo', 'Mrs. Jen-jen Valdez',
    'Mrs. Floser Nepomuceno', 'Mrs. Michelle Cabututan', 'Mrs. Vergie Serato'
  ]);
  
  const toasts = ref([
    'Ms. Daphne Asombrado', 'Ms. Renoakyle Alcantara', 'Ms. Chelsy Llorca',
    'Ms. Brillian Vertudes', 'Ms. Jhon Ryan Dellomas', 'Ms. Rhiangelie Sinsoro',
    'Ms. Shermaine Leoperio', 'Ms. Angeline Lolin', 'Ms. Brydhe Ganub',
    'Ms. Ferleene Monog', 'Ms. Stephanie Bangit', 'Ms. Rexie Van Galanta',
    'Ms. Mariel Panganiban', 'Ms. Frinces Aron', 'Ms. Queency Basilan',
    'Ms. Dhanice Atibula', 'Ms. Charline Muello', 'Mr. Xyra Gail Camaje'
  ]);


// --- Countdown Logic ---
const countdown = reactive({
  days: '00',
  hours: '00',
  minutes: '00',
  seconds: '00',
});

const eventDate = new Date('June 19, 2025 16:00:00').getTime(); // Event Date & Time
let countdownInterval: NodeJS.Timeout;

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    clearInterval(countdownInterval);
    countdown.days = '00';
    countdown.hours = '00';
    countdown.minutes = '00';
    countdown.seconds = '00';
    return;
  }

  countdown.days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
  countdown.hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
  countdown.minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
  countdown.seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');
};


onMounted(() => {
  updateCountdown(); // Initial call
  countdownInterval = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  clearInterval(countdownInterval);
});





  </script>
  
  
  <style>
  /* --- Font Imports --- */
  /* Playfair Display for headings - elegant serif */
  /* Lora for body text - readable serif */
  /* Dancing Script for accent text - elegant script */
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Playfair+Display:wght@400;700;900&family=Lora:ital,wght@0,400;0,700;1,400&display=swap');
  
  /* --- Global Font Application --- */
  .font-lora { font-family: 'Lora', serif; }
  .font-playfair { font-family: 'Playfair Display', serif; }
  .font-dancing { font-family: 'Dancing Script', cursive; }
  /* Ensure the default font-sans applies Poppins or another suitable sans-serif if you use it */
  
  
  /* --- Custom Animations for Uniqueness --- */
  
  /* Hero Image Slow Zoom */
  @keyframes slowZoom {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
  .animate-slow-zoom {
    animation: slowZoom 25s infinite ease-in-out;
  }
  
  /* Fade In Up Slower */
  @keyframes fadeInUpSlow {
    from { opacity: 0; transform: translateY(80px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in-up-slow {
    animation: fadeInUpSlow 1.8s ease-out forwards;
  }
  
  /* Scale In (for main title) */
  @keyframes scaleInSlow {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
  }
  .animate-scale-in-slow {
    animation: scaleInSlow 1.5s ease-out forwards;
  }
  
  /* Text Glow Shadow (for main title) */
  .text-shadow-glow {
    text-shadow: 0 0 10px rgba(255, 215, 0, 0.6), 0 0 20px rgba(255, 215, 0, 0.4), 0 0 30px rgba(255, 215, 0, 0.2);
  }
  
  /* Slide In Down */
  @keyframes slideInDown {
    from { opacity: 0; transform: translateY(-50px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-slide-in-down {
    animation: slideInDown 1s ease-out forwards;
  }
  
  /* Slide In Left */
  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-50px); }
    to { opacity: 1; transform: translateX(0); }
  }
  .animate-slide-in-left {
    animation: slideInLeft 1s ease-out forwards;
  }
  
  /* Slide In Right */
  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(50px); }
    to { opacity: 1; transform: translateX(0); }
  }
  .animate-slide-in-right {
    animation: slideInRight 1s ease-out forwards;
  }
  
  /* Slide In Up */
  @keyframes slideInUp {
    from { opacity: 0; transform: translateY(50px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-slide-in-up {
    animation: slideInUp 1s ease-out forwards;
  }
  
  /* Float In (for Angela's profile pic) */
  @keyframes floatIn {
    from { opacity: 0; transform: translateY(50px) scale(0.8); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }
  .animate-float-in {
    animation: floatIn 1.2s ease-out forwards;
  }
  
  /* Subtle Bounce for icons */
  @keyframes bounceSubtle {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }
  .animate-bounce-subtle {
    animation: bounceSubtle 2s infinite ease-in-out;
  }
  
  /* Subtle Jiggle for icons */
  @keyframes jiggleSubtle {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-2deg); }
    75% { transform: rotate(2deg); }
  }
  .animate-jiggle-subtle {
    animation: jiggleSubtle 1.5s infinite ease-in-out;
  }
  
  /* Grow Icon */
  @keyframes growIcon {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }
  .animate-grow-icon {
    animation: growIcon 1.5s infinite ease-in-out;
  }
  
  /* Pulse Light (like a subtle flicker) */
  @keyframes pulseLight {
    0%, 100% { filter: brightness(100%); }
    50% { filter: brightness(150%); }
  }
  .animate-pulse-light {
    animation: pulseLight 1.8s infinite ease-in-out;
  }
  
  /* Shake Subtle (for toast icon) */
  @keyframes shakeSubtle {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-2px); }
    75% { transform: translateX(2px); }
  }
  .animate-shake-subtle {
    animation: shakeSubtle 1s infinite ease-in-out;
  }
  
  /* Pop In for the gift message */
  @keyframes popIn {
    0% { transform: scale(0.5); opacity: 0; }
    80% { transform: scale(1.1); opacity: 1; }
    100% { transform: scale(1); }
  }
  .animate-pop-in {
    animation: popIn 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
  }
  
  /* General Fade In (used for various text elements) */
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .animate-fade-in {
    animation: fadeIn 1s ease-out forwards;
  }
  
  /* Fade In Left (general) */
  @keyframes fadeInLeft {
    from { opacity: 0; transform: translateX(-20px); }
    to { opacity: 1; transform: translateX(0); }
  }
  .animate-fade-in-left {
    animation: fadeInLeft 0.8s ease-out forwards;
  }
  
  /* Fade In Right (general) */
  @keyframes fadeInRight {
    from { opacity: 0; transform: translateX(20px); }
    to { opacity: 1; transform: translateX(0); }
  }
  .animate-fade-in-right {
    animation: fadeInRight 0.8s ease-out forwards;
  }
  
  
  /* --- Tailwind Colors & Utilities (Implicitly used) --- */
  /* Add any custom color definitions to your tailwind.config.js if you use new hex codes */
  /* For example:
  module.exports = {
    theme: {
      extend: {
        colors: {
          'gold-300': '#FFD700', // Example if you want a specific gold
          'green-800': '#2E8B57', // Example for forest green
        }
      }
    }
  }
  */
  
  /* --- Font Awesome CDN (Ensure this is in your main HTML file or loaded properly) --- */
  /* @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'); */
  
  /* --- Custom Scrollbar --- */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #c084fc; /* purple-400 */
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #a78bfa; /* purple-500 */
  }
  </style>