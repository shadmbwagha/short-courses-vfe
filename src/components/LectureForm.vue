<template>
  <div class="flex items-center justify-center h-screen -m-8 bg-slate-200">
    <div class="w-3/4 px-6 py-4 bg-white shadow-md">
      <div>
        <h1 class="mt-4 font-bold text-center text-md">
          Trainee Registration
        </h1>
        <div>
          
        </div>
        <form action="" @submit.prevent="createLecture">
          <div class="flex flex-col">
            <div class="flex mt-8 space-x-6">
              <div class="flex flex-col w-1/2 space-y-2">
                <label for="department">First Name</label>
                <input
                  type="text"
                  class="px-4 py-2 border rounded-lg focus:outline-none"
                  v-model="lecture.first_name"
                />
              </div>
              <div class="flex flex-col w-1/2 space-y-2">
                <label for="department">Last Name</label>
                <input
                  type="text"
                  class="px-4 py-2 border rounded-lg focus:outline-none"
                  v-model="lecture.last_name"
                />
              </div>    
            </div>
            <div class="flex justify-between mt-8 space-x-6">
              <div class="flex flex-col w-1/2 space-y-2">
                <label for="department">Lecture id</label>
                <input
                  type="text"
                  class="px-4 py-2 border rounded-lg focus:outline-none"
                  placeholder=""
                  v-model="lecture.lecture_id"
                />
              </div> 
              <div class="flex flex-col w-1/2 space-y-2">
                <label for="department">Email</label>
                <input
                  type="text"
                  class="px-4 py-2 border rounded-lg focus:outline-none"
                  placeholder=""
                  v-model="lecture.email"
                />
              </div> 
            </div>
            <div class="flex justify-between mt-8 space-x-6">
              <div class="flex flex-col w-full space-y-2">
                <label for="department">Module</label>
                <select
                  name=""
                  id=""
                  v-model="lecture_module.module_id" class="px-4 py-2 border rounded-lg focus:outline-none"
                >
                <option v-for="module in modules" :key="module.id" :value="module.id">
                 {{ module.name }}(<span v-for="curr in module.curriculum" :key="curr">{{curr.name}}</span>)
                </option>
                </select>
              </div> 
            </div>
            <div class="flex mt-8 space-x-6">
              <div class="w-full text-center">
                <button class="w-full px-6 py-3 text-white bg-blue-600 rounded-lg" type="submit">
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
      lecture: {
        first_name: "",
        last_name: "",
        lecture_id: "",
        email: "",
      },
      lecture_module: {
        lecture_id: 0,
        module_id: 0,
      },
      modules : []
      
    };
  },
  methods: {
    createLectureModule(){
      // const { curriculum_id, module_id, price} = this.curriculum_module;
      // const formdata  = {
      //       curriculum_id: Number(curriculum_id),
      //       module_id: Number(module_id),
      //       price: Number(price)
      //     }
      // console.log("Form data", formdata);
      console.log(this.lecture_module);

      axios.post("/lecturer_modules", this.lecture_module).then((response) => {
          this.$toast.success('succesfully registered lecture module'+ response.data);  
          this.$router.push('/lectures');
        })
        .catch((error) => {
          this.$toast.error('failed due to!'+ error);  
        });
    },
    async getModules(){
        await axios.get('/modules').then(({data})=>{
          
            this.modules = data.data;

        })
    },
    createLecture() {
      axios.post("/lectures", this.lecture).then((response) => {
        
        this.lecture_module.lecture_id = response.data.id;
        
        this.$toast.success('succesfully created a trainee');  
        this.createLectureModule();
        // this.$router.push('/modules');
      
        })
        .catch((error) => {
          console.error("Error posting data:", error);
        });
        // this.$route.push("/curriculum");
    },
    formatTime(value) {
      return value < 10 ? `0${value}` : value;
    },
  },
  mounted() {
    this.getModules();
  
  },
};
</script>

<style>
</style>