<script setup lang="ts">
import { ref, onMounted } from 'vue';

// Import content from separate files
import { homeContent, homeImages } from '../data/Home'; // Import homeImages
import { profileContent } from '../data/Profile';
import { photoContent } from '../data/Photo';
import { aboutContent } from '../data/about';
import { servicesContent } from '../data/Service';
import { portfolioContent } from '../data/Porfolio';
import { teamContent } from '../data/Tea';
import { blogContent } from '../data/Blog';
import { faqContent } from '../data/FAQ';
import { contactContent } from '../data/Contact';
import { testimonialsContent } from '../data/Testimonials';


interface NavItem {
  name: string;
  id: string;
  content: string; 
}

const navItems: NavItem[] = [
  { name: 'Home', id: 'home-section', content: homeContent },
  { name: 'Profile', id: 'profile-section', content: profileContent },
  { name: 'Photo', id: 'photo-section', content: photoContent },
  { name: 'About', id: 'about-section', content: aboutContent },
  { name: 'Services', id: 'services-section', content: servicesContent },
  { name: 'Portfolio', id: 'portfolio-section', content: portfolioContent },
  { name: 'Team', id: 'team-section', content: teamContent },
  { name: 'Blog', id: 'blog-section', content: blogContent },
  { name: 'FAQ', id: 'faq-section', content: faqContent },
  { name: 'Contact', id: 'contact-section', content: contactContent },
  { name: 'Testimonials', id: 'testimonials-section', content: testimonialsContent },
];

const activeSection = ref<string>('home-section');

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id;
        }
      });
    },
    {
      threshold: 0.6, // Adjust threshold for better accuracy
    }
  );

  navItems.forEach((item) => {
    const section = document.getElementById(item.id);
    if (section) observer.observe(section);
  });
});
</script>

<template>
  <div class="min-h-screen bg-green-50 font-sans antialiased relative overflow-x-hidden">
    <nav class="fixed top-1/2 -translate-y-1/2 left-6 z-50 bg-white/30 backdrop-blur-lg p-3 rounded-full hidden md:flex flex-col items-center space-y-4 shadow-xl border border-white/50">
      <template v-for="item in navItems" :key="item.id">
        <!-- <a
          @click.prevent="scrollToSection(item.id)"
          :href="`#${item.id}`"
          class="relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-500 ease-in-out group transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75"
          :class="{ 'bg-gradient-to-br from-purple-700 to-indigo-800 text-white shadow-2xl': activeSection === item.id, 'text-gray-700 hover:bg-purple-100 hover:text-purple-700': activeSection !== item.id }"
        > -->

        <a
          @click.prevent="scrollToSection(item.id)"
          :href="`#${item.id}`"
          class="relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-500 ease-in-out group transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75"
          :class="{ 'bg-gradient-to-br from-purple-700 to-indigo-800 text-white shadow-2xl': activeSection === item.id, 'text-gray-700 hover:bg-purple-100 hover:text-purple-700': activeSection !== item.id }"
        >
        
          <span class="text-2xl transition-transform duration-300 group-hover:rotate-12">
            <template v-if="item.name === 'Home'">🏠</template>
            <template v-else-if="item.name === 'Profile'">🧸</template>
            <template v-else-if="item.name === 'Photo'">📸</template>
            <template v-else-if="item.name === 'About'">ℹ️</template>
            <template v-else-if="item.name === 'Services'">🛠️</template>
            <template v-else-if="item.name === 'Portfolio'">🗂️</template>
            <template v-else-if="item.name === 'Team'">👥</template>
            <template v-else-if="item.name === 'Blog'">✍️</template>
            <template v-else-if="item.name === 'FAQ'">❓</template>
            <template v-else-if="item.name === 'Contact'">📧</template>
            <template v-else-if="item.name === 'Testimonials'">💬</template>
          </span>
          <span class="absolute left-full ml-5 whitespace-nowrap bg-gray-900 text-white text-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 pointer-events-none shadow-xl">
            {{ item.name }}
          </span>
        </a>
      </template>
    </nav>

    <nav class="fixed bottom-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-inner md:hidden flex justify-around items-center py-2 border-t border-gray-200">
      <template v-for="item in navItems" :key="item.id">
        <a
          @click.prevent="scrollToSection(item.id)"
          :href="`#${item.id}`"
          class="flex flex-col items-center justify-center text-xs p-2 rounded-lg transition-all duration-300 ease-in-out transform active:scale-90 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75"
          :class="{ 'text-purple-700 font-bold bg-purple-50 shadow-md': activeSection === item.id, 'text-gray-600 hover:bg-gray-100': activeSection !== item.id }"
        >
          <span class="text-xl mb-1">
            <template v-if="item.name === 'Home'">🏠</template>
            <template v-else-if="item.name === 'Profile'">🧸</template>
            <template v-else-if="item.name === 'Photo'">📸</template>
            <template v-else-if="item.name === 'About'">ℹ️</template>
            <template v-else-if="item.name === 'Services'">🛠️</template>
            <template v-else-if="item.name === 'Portfolio'">🗂️</template>
            <template v-else-if="item.name === 'Team'">👥</template>
            <template v-else-if="item.name === 'Blog'">✍️</template>
            <template v-else-if="item.name === 'FAQ'">❓</template>
            <template v-else-if="item.name === 'Contact'">📧</template>
            <template v-else-if="item.name === 'Testimonials'">💬</template>
          </span>
          {{ item.name }}
        </a>
      </template>
    </nav>

    <main class="pt-0 md:pl-32 lg:pl-0">
      <template v-for="item in navItems" :key="item.id">
        <section :id="item.id" class="section" :class="{
          'bg-gradient-to-br from-blue-50 to-indigo-100': item.name === 'Home',
          'bg-white text-center shadow-lg': item.name === 'Profile',
          'bg-gray-900 text-white relative overflow-hidden': item.name === 'Photo', // Added for potential background effects
          'bg-white relative': item.name === 'About', // Added for potential background effects
          'bg-blue-50 relative overflow-hidden': item.name === 'Services', // Added for potential background effects
          'bg-gradient-to-br from-green-500 to-teal-600 text-white relative': item.name === 'Portfolio',
          'bg-purple-50 relative': item.name === 'Team',
          'bg-gray-100 relative': item.name === 'Blog',
          'bg-white-200 relative': item.name === 'FAQ',
          'bg-indigo-600 text-white relative overflow-hidden': item.name === 'Testimonials',
          'bg-white-300 relative': item.name === 'Contact'
        }">
            <div v-if="item.id === 'home-section'">
                <!-- <div class="relative w-full max-w-4xl mx-auto py-12 px-6"> -->
                  <div class="w-sm h-full relative">

                    <h1 class="text-6xl md:text-8xl font-extrabold text-gray-900 leading-tight mb-8 animate-fade-in-down">
                        Discover Your <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Amazing</span> Story
                    </h1>
                    <!-- <p class="text-xl text-gray-700 max-w-2xl mx-auto mb-12 animate-fade-in delay-300">
                        Crafting unique digital experiences that captivate and convert. Explore our journey below.
                    </p> -->
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div v-for="(image, index) in homeImages" :key="index"
                            class="relative overflow-hidden rounded-xl shadow-2xl group transform hover:-translate-y-2 hover:scale-102 transition-all duration-500 animate-fade-in-up"
                            :style="{ 'animation-delay': `${index * 0.15}s` }">
                            <!-- <img :src="image.src" :alt="image.alt"
                                class="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110 aspect-[3/4] filter grayscale group-hover:grayscale-0" /> -->
                                <img :src="image.src" :alt="image.alt"
                                  class="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110 aspect-[2/6] filter" />

                            <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-4">
                                <p class="text-white text-lg font-semibold transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">{{ image.title }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else v-html="item.content"></div>
        </section>
      </template>
    </main>

    <footer class="bg-gray-950 text-gray-400 text-center p-8 text-sm border-t border-gray-800">
      <p>&copy; 2025 Creative Digital Experiences. All rights reserved.</p>
      <p class="mt-3 text-gray-500">Designed with passion by Your Name/Company</p>
    </footer>
  </div>
</template>

<style>
/* Import Google Fonts for 'Inter' and a display font like 'Montserrat' */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Montserrat:wght@700;800;900&display=swap');

body {
  font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  overflow-x: hidden;
  background-color: #f8fafc; /* Light background for body */
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Montserrat', sans-serif; /* Apply Montserrat to headings */
}

.section {
  min-height: 100vh;
  padding: 6rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden; /* Ensure content stays within bounds */
  text-align: center; /* Default center alignment for section content */
}

/* Keyframe Animations for entrance effects */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounceIn {
  0% {
    transform: scale(0.1);
    opacity: 0;
  }
  60% {
    transform: scale(1.1);
    opacity: 1;
  }
  80% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(80px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-80px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Application of Keyframe Animations */
.animate-fade-in-down {
  animation: fadeInDown 1.2s ease-out forwards;
}

.animate-fade-in-up {
  animation: fadeInUp 1.2s ease-out forwards;
}

.animate-bounce-in {
  animation: bounceIn 1.2s ease-out forwards;
  animation-delay: 0.5s;
}

.animate-slide-in-right {
  animation: slideInRight 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; /* More sophisticated easing */
}

.animate-slide-in-left {
  animation: slideInLeft 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.animate-fade-in {
  animation: fadeIn 1.5s ease-out forwards;
}

/* Specific animations for staggered elements */
.animate-fade-in-up.delay-100 { animation-delay: 0.1s; }
.animate-fade-in-up.delay-200 { animation-delay: 0.2s; }
.animate-fade-in-up.delay-300 { animation-delay: 0.3s; }
/* Add more granular delays as needed */
</style>