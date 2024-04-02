<template>
  <div class="fixed top-0 left-0 flex items-center justify-between w-full py-4 pl-4 pr-2 mb-0 bg-blue-600 shadow-sm">
    <div class="flex text-sm font-bold text-white">
      <img src="../assets/images/slogo.png" class="h-6 mx-6 "/>
        Dar es salaam Institute Of Technology
    </div>
    <div class="flex space-x-2 text-xs text-white">
      <img src="../assets/images/man.svg" alt="" class="w-4 h-4">
      <span>
        {{ user }} ({{ role }})
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: this.$store.state.user,
      role: this.$store.state.userRoles
    }
  }
}
</script>

<style>

</style>