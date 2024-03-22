<template>
  <div class="flex items-center justify-center h-screen -m-8 bg-slate-200">
    <div class="w-3/4 px-6 py-4 bg-white shadow-md">
      <div>
        <h1 class="mt-4 font-bold text-center text-md">
          Curriculum Registration
        </h1>
        <form action="" @submit.prevent="createCurriculum">
          <div class="flex flex-col">
            <div class="flex mt-8 space-x-6">
              <div class="flex flex-col w-full space-y-2">
                <label for="department">Curriculum Name</label>
                <input
                  type="text"
                  class="px-4 py-2 border rounded-lg focus:outline-none"
                  placeholder="i.BECOE07860(2020-2020)"
                  v-model="curriculum.name"
                />
              </div>
            </div>
          
            
            <div class="flex mt-8 space-x-6">
              <div class="w-full text-center">
                <button class="w-full px-6 py-3 text-white bg-blue-600 rounded-lg">
                  Submit
                </button>
              </div>
            </div>

          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      curriculum: {
        name: "",

      },
      departments: [],
      ntalevels: []
    };
  },
  methods: {
   
    createCurriculum() {
      const now = new Date();
      const year = now.getFullYear();
      const month = this.formatTime(now.getMonth() + 1); // Months are zero-based
      const day = this.formatTime(now.getDate());
      const hours = this.formatTime(now.getHours());
      const minutes = this.formatTime(now.getMinutes());
      const seconds = this.formatTime(now.getSeconds());

      this.curriculum.created_at = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      this.curriculum.updated_at = this.curriculum.created_at;

      console.log("Form data", this.curriculum);

      axios.post("/curriculum/add", this.curriculum).then((response) => {
          this.$toast.success('This is a success !'+ response);  
          this.$router.push('/curricula');
           
        })
        .catch((error) => {
          console.error("Error posting data:", error);
        });
        
       
        
    },
    formatTime(value) {
      return value < 10 ? `0${value}` : value;
    },
   
  },
  mounted() {
   
  },
};
</script>

<style>
</style>