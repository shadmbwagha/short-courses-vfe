<template>
  <div class="fixed top-0 left-0 flex items-center justify-between w-full py-4 pl-4 pr-2 mb-0 bg-blue-600 shadow-sm">
    <div class="flex text-sm font-bold text-white">
      <img src="../assets/images/slogo.png" class="w-6 h-6 mx-6 "/>
        Dar es salaam Institute Of Technology
    </div>
    <div class="flex space-x-2 text-xs text-white">
      <img src="../assets/images/man.svg" alt="" class="w-6 h-6">
      <!-- <span>
       {{ id }} {{ user }} ({{ role }})
      </span> -->
      <div @click="logout">
          <img src="../assets/images/logout.svg" alt="" class="w-4 h-4 text-white" >
      </div>

    </div>
  </div>


  
</template>

<script>

export default {
  data() {
    return {
      user: this.$store.state.user,
      role: this.$store.state.userRoles,
      id: this.$store.state.id
    }
  },
  methods: {
    logout() {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userRole');
        this.$router.push('/');
      
    }
  }
}
</script>

<style>

</style>