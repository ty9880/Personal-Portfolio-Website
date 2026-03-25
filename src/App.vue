<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { resumeData } from './data';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Users, 
  Award, 
  ChevronRight,
  Menu,
  X
} from 'lucide-vue-next';

const isMenuOpen = ref(false);
const activeSection = ref('home');

const sections = [
  { id: 'home', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'experience', name: 'Experience' },
  { id: 'leadership', name: 'Leadership' },
  { id: 'skills', name: 'Skills' }
];

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
    activeSection.value = id;
    isMenuOpen.value = false;
  }
};

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id;
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(section => {
    const el = document.getElementById(section.id);
    if (el) observer.observe(el);
  });
});
</script>

<template>
  <div class="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] font-sans selection:bg-[#E6D5B8] selection:text-[#1A1A1A]">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full z-50 bg-[#FDFCFB]/80 backdrop-blur-md border-b border-[#1A1A1A]/5">
      <div class="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div class="text-xl font-serif italic tracking-tight cursor-pointer" @click="scrollTo('home')">
          Tyson Tucci
        </div>
        
        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center space-x-8">
          <button 
            v-for="section in sections" 
            :key="section.id"
            @click="scrollTo(section.id)"
            class="text-sm uppercase tracking-widest transition-colors hover:text-[#8B7E66]"
            :class="activeSection === section.id ? 'text-[#1A1A1A] font-semibold' : 'text-[#1A1A1A]/60'"
          >
            {{ section.name }}
          </button>
        </div>

        <!-- Mobile Menu Toggle -->
        <button class="md:hidden p-2" @click="isMenuOpen = !isMenuOpen">
          <component :is="isMenuOpen ? X : Menu" class="w-6 h-6" />
        </button>
      </div>

      <!-- Mobile Nav -->
      <div v-if="isMenuOpen" class="md:hidden absolute top-20 left-0 w-full bg-[#FDFCFB] border-b border-[#1A1A1A]/5 px-6 py-8 flex flex-col space-y-6">
        <button 
          v-for="section in sections" 
          :key="section.id"
          @click="scrollTo(section.id)"
          class="text-lg uppercase tracking-widest text-left"
          :class="activeSection === section.id ? 'text-[#1A1A1A] font-semibold' : 'text-[#1A1A1A]/60'"
        >
          {{ section.name }}
        </button>
      </div>
    </nav>

    <main class="pt-20">
      <!-- Hero Section -->
      <section id="home" class="min-h-[90vh] flex flex-col justify-center px-6 max-w-6xl mx-auto py-20">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="order-2 md:order-1 space-y-8">
            <div class="space-y-4">
              <h2 class="text-sm uppercase tracking-[0.3em] text-[#8B7E66] font-semibold">Business Analytics @ Purdue</h2>
              <h1 class="text-6xl md:text-8xl font-serif leading-[1.1] tracking-tight">
                Crafting data into <span class="italic">decisions.</span>
              </h1>
            </div>
            <p class="text-xl text-[#1A1A1A]/70 max-w-md leading-relaxed">
              Senior student at Purdue University specializing in Business Analytics and Information Management. Graduating May 2026.
            </p>
            <div class="flex flex-wrap gap-6 pt-4">
              <a :href="'mailto:' + resumeData.email" class="flex items-center gap-2 text-sm uppercase tracking-widest font-semibold border-b-2 border-[#1A1A1A] pb-1 hover:text-[#8B7E66] hover:border-[#8B7E66] transition-all">
                <Mail class="w-4 h-4" /> Get in touch
              </a>
              <a :href="'https://' + resumeData.linkedin" target="_blank" class="flex items-center gap-2 text-sm uppercase tracking-widest font-semibold border-b-2 border-[#1A1A1A] pb-1 hover:text-[#8B7E66] hover:border-[#8B7E66] transition-all">
                <Linkedin class="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>
          <div class="order-1 md:order-2 flex justify-center md:justify-end">
            <div class="relative w-full max-w-md aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src="https://picsum.photos/seed/tyson/800/1000" 
                alt="Tyson Tucci" 
                class="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700"
                referrerpolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- About / Education -->
      <section id="about" class="py-32 px-6 bg-[#F7F5F2]">
        <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-16">
          <div class="md:col-span-1">
            <h2 class="text-4xl font-serif italic sticky top-32">Education</h2>
          </div>
          <div class="md:col-span-2 space-y-12">
            <div class="group">
              <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <h3 class="text-2xl font-serif">{{ resumeData.education.university }}</h3>
                <span class="text-sm uppercase tracking-widest text-[#8B7E66]">{{ resumeData.education.graduation }}</span>
              </div>
              <p class="text-xl text-[#1A1A1A]/80 mb-4">{{ resumeData.education.degree }}</p>
              <div class="flex items-center gap-6 text-sm text-[#1A1A1A]/60">
                <span class="flex items-center gap-2"><MapPin class="w-4 h-4" /> {{ resumeData.education.location }}</span>
                <span class="flex items-center gap-2"><Award class="w-4 h-4" /> GPA: {{ resumeData.education.gpa }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Experience -->
      <section id="experience" class="py-32 px-6">
        <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-16">
          <div class="md:col-span-1">
            <h2 class="text-4xl font-serif italic sticky top-32">Experience</h2>
          </div>
          <div class="md:col-span-2 space-y-20">
            <div v-for="(exp, index) in resumeData.experience" :key="index" class="space-y-8">
              <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 class="text-2xl font-serif">{{ exp.company }}</h3>
                  <p class="text-[#8B7E66] font-medium tracking-wide uppercase text-xs mt-1">{{ exp.role }}</p>
                </div>
                <span class="text-sm text-[#1A1A1A]/50 font-mono">{{ exp.period }}</span>
              </div>
              <ul class="space-y-4">
                <li v-for="(point, pIdx) in exp.highlights" :key="pIdx" class="flex gap-4 text-[#1A1A1A]/70 leading-relaxed">
                  <ChevronRight class="w-5 h-5 flex-shrink-0 text-[#8B7E66] mt-1" />
                  {{ point }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Leadership -->
      <section id="leadership" class="py-32 px-6 bg-[#1A1A1A] text-[#FDFCFB]">
        <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-16">
          <div class="md:col-span-1">
            <h2 class="text-4xl font-serif italic sticky top-32">Leadership</h2>
          </div>
          <div class="md:col-span-2 space-y-20">
            <div v-for="(lead, index) in resumeData.leadership" :key="index" class="space-y-8">
              <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 class="text-2xl font-serif">{{ lead.organization }}</h3>
                  <p class="text-[#8B7E66] font-medium tracking-wide uppercase text-xs mt-1">{{ lead.role }}</p>
                </div>
                <span class="text-sm text-[#FDFCFB]/40 font-mono">{{ lead.period }}</span>
              </div>
              <ul class="space-y-4">
                <li v-for="(point, pIdx) in lead.highlights" :key="pIdx" class="flex gap-4 text-[#FDFCFB]/60 leading-relaxed">
                  <ChevronRight class="w-5 h-5 flex-shrink-0 text-[#8B7E66] mt-1" />
                  {{ point }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills -->
      <section id="skills" class="py-32 px-6">
        <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-16">
          <div class="md:col-span-1">
            <h2 class="text-4xl font-serif italic sticky top-32">Expertise</h2>
          </div>
          <div class="md:col-span-2 space-y-16">
            <div class="space-y-8">
              <h3 class="text-sm uppercase tracking-[0.2em] text-[#8B7E66] font-bold">Technical Skills</h3>
              <div class="flex flex-wrap gap-3">
                <span 
                  v-for="skill in resumeData.skills" 
                  :key="skill"
                  class="px-5 py-2 border border-[#1A1A1A]/10 rounded-full text-sm hover:bg-[#1A1A1A] hover:text-[#FDFCFB] transition-colors cursor-default"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
            
            <div class="space-y-8">
              <h3 class="text-sm uppercase tracking-[0.2em] text-[#8B7E66] font-bold">Certifications</h3>
              <div class="grid sm:grid-cols-2 gap-6">
                <div v-for="cert in resumeData.certifications" :key="cert" class="p-6 bg-[#F7F5F2] rounded-xl flex items-start gap-4">
                  <Award class="w-6 h-6 text-[#8B7E66] flex-shrink-0" />
                  <span class="text-sm font-medium leading-snug">{{ cert }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="py-20 px-6 border-t border-[#1A1A1A]/5">
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div class="space-y-4 text-center md:text-left">
            <h2 class="text-3xl font-serif italic">Let's connect.</h2>
            <p class="text-[#1A1A1A]/50 max-w-xs">Open to opportunities in business analytics and information management.</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
            <div class="space-y-1">
              <p class="text-[10px] uppercase tracking-widest text-[#8B7E66] font-bold">Email</p>
              <a :href="'mailto:' + resumeData.email" class="text-lg hover:text-[#8B7E66] transition-colors">{{ resumeData.email }}</a>
            </div>
            <div class="space-y-1">
              <p class="text-[10px] uppercase tracking-widest text-[#8B7E66] font-bold">Phone</p>
              <p class="text-lg">{{ resumeData.phone }}</p>
            </div>
            <div class="space-y-1">
              <p class="text-[10px] uppercase tracking-widest text-[#8B7E66] font-bold">LinkedIn</p>
              <a :href="'https://' + resumeData.linkedin" target="_blank" class="text-lg hover:text-[#8B7E66] transition-colors">Tyson Tucci</a>
            </div>
            <div class="space-y-1">
              <p class="text-[10px] uppercase tracking-widest text-[#8B7E66] font-bold">Location</p>
              <p class="text-lg">West Lafayette, IN</p>
            </div>
          </div>
        </div>
        <div class="max-w-6xl mx-auto mt-20 pt-8 border-t border-[#1A1A1A]/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-[#1A1A1A]/30">
          <p>© 2026 Tyson Tucci</p>
          <p>Built with Vue & Tailwind</p>
        </div>
      </footer>
    </main>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');

:root {
  --font-sans: 'Inter', sans-serif;
  --font-serif: 'Playfair Display', serif;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-sans);
}

.font-serif {
  font-family: var(--font-serif);
}
</style>
