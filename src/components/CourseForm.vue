<template>
  <div class="flex items-center justify-center h-screen -m-8 bg-slate-200">
    <div class="w-3/4 px-6 py-4 bg-white shadow-md">
      <div>
        <h1 class="mt-4 font-bold text-center text-md">
          Course Registration
        </h1>
        <div>
          
        </div>
        <form action="" @submit.prevent="createModule">
          <div class="flex flex-col">
            <div class="flex mt-8 space-x-6">
              <div class="flex flex-col w-1/2 space-y-2">
                <label for="department">Module Name</label>
                <input
                  type="text"
                  class="px-4 py-2 border rounded-lg focus:outline-none"
                  placeholder="i.e analogue electronics"
                  v-model="module.name"
                />
              </div>
              <div class="flex flex-col w-1/2 space-y-2">
                <label for="department">Module code</label>
                <input
                  type="text"
                  class="px-4 py-2 border rounded-lg focus:outline-none"
                  placeholder="COU 0746"
                  v-model="module.code"
                />
              </div>    
            </div>
            <div class="flex justify-between mt-8 space-x-6">
              <div class="flex flex-col w-1/2 space-y-2">
                <label for="department">curriculum</label>
                <select
                  name="department"
                  id=""
                  v-model="curriculum_module.curriculum_id" class="px-4 py-2 border rounded-lg focus:outline-none"
                >
                <option v-for="curriculum in curricula" :key="curriculum.id" :value="curriculum.id">{{curriculum.attributes.name}}</option>
                </select>
              </div> 
               <div class="flex flex-col w-1/2 space-y-2">
                <label for="department">Price</label>
                <input
                  type="int"
                  class="px-4 py-2 border rounded-lg focus:outline-none"
                  placeholder="COU 0746"
                  v-model="curriculum_module.price"
                />
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
      module: {
        name: "",
        code: "",
      },
      curriculum_module: {
        curriculum_id: 0,
        module_id: 0,
        price: 0,
      },
      curricula : []
      
    };
  },
  methods: {
    createCurriculumModule(){
      const now = new Date();
      // this.curriculum_modules.created_at = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      // this.curriculum_modules.updated_at = this.curriculum.created_at;


      const { curriculum_id, module_id, price} = this.curriculum_module;
      const formdata  = {
            curriculum_id: Number(curriculum_id),
            module_id: Number(module_id),
            price: Number(price)
          }
      console.log("Form data", formdata);

      axios.post("curriculum-modules", formdata).then((response) => {
          this.$toast.success('This is a success !'+ response.data);  
          this.$router.push('/modules');
        })
        .catch((error) => {
          console.error("Error posting data:", error);
        });
    },
    async getCurricula(){
        await axios.get('/curricula').then(({data})=>{
            this.curricula = data.data;
            // console.log(this.curricula);
        })
    },
    createModule() {
      const now = new Date();

      axios.post("/modules/add", this.module).then((response) => {
        
        this.curriculum_module.module_id = response.data.id;
        this.createCurriculumModule();
        // this.$toast.success('This is a success !'+ response);  
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
    this.getCurricula();
  
  },
};
</script>

<style>
</style>