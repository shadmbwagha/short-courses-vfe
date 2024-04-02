<template>
    <Header />
    <main class="">
    <div class="mt-14">
      <StudentNav v-if="role == 'Student'"></StudentNav>
      <Nav v-else-if="role == 'Admin'"></Nav>
      <LectureNav v-else-if="role == 'Lecture'"></LectureNav>
    </div>
    <div class="pt-6 sm:ml-60">
          <router-view />
    </div>
      
    </main>
    
  </template>
  
  <script>
  import Header from '../components/Header.vue';
  import Nav from '../components/Nav.vue';
  import StudentNav from '../components/StudentNav.vue';
  import LectureNav from '../components/LectureNav.vue';


  
  export default {
    components: { Nav, Header, StudentNav, LectureNav},
    data(){
      return {
        role: this.$store.state.userRoles 
      }
    }
    
    
  }
  </script>
  
  <style>
  
  </style>