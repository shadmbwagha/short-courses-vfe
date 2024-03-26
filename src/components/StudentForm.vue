<template>
  <div class="flex items-center justify-center h-screen -m-6 bg-slate-200">
    <div class="w-3/4 px-6 py-4 bg-white shadow-md">
      <div>
        <h1 class="mt-4 font-bold text-center text-md">
          Student Registration
        </h1>
        <form action="" @submit.prevent="createStudent">
          <div class="flex flex-col">
              <div class="flex mt-8 space-x-6">
                <div class="flex flex-col w-1/2 space-y-2">
                  <label for="department">First name</label>
                  <input
                    type="text"
                    class="px-4 py-2 border rounded-lg focus:outline-none"
                    placeholder=""
                    v-model="student.first_name"
                  />
                </div>
                <div class="flex flex-col w-1/2 space-y-2">
                  <label for="department">Last name</label>
                  <input
                    type="text"
                    class="px-4 py-2 border rounded-lg focus:outline-none"
                    placeholder=""
                    v-model="student.last_name"
                  />
                </div>
              </div>

              <div class="flex mt-8 space-x-6">
                <div class="flex flex-col w-1/2 space-y-2">
                  <label for="department">Date of birth</label>
                  <input
                    type="date"
                    class="px-4 py-2 border rounded-lg focus:outline-none"
                    v-model="student.dob"
                  />
                </div>
                <div class="flex flex-col w-1/2 space-y-2">
                  <label class="block mb-2 text-sm font-bold text-gray-700">gender</label>
                    <select name="gender" id="" v-model="student.gender" class="w-full px-4 py-2 border rounded-lg focus:outline-none" placeholder="gender">
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                </div>
              </div>
              
              <div class="flex mt-8 space-x-6">
                <div class="flex flex-col w-1/2 space-y-2">
                  <label for="department">Email</label>
                  <input
                    type="email"
                    class="px-4 py-2 border rounded-lg focus:outline-none"
                    placeholder=""
                    v-model="student.email"
                  />
                </div>
                <div class="flex flex-col w-1/2 space-y-2">
                  <label for="department">Phone Number</label>
                  <input
                    type="text"
                    class="px-4 py-2 border rounded-lg focus:outline-none"
                    placeholder="i.e 255621432167"
                    v-model="student.phone_no"
                  />
                </div>
              </div>
              
                
          
            <div class="flex mt-8 space-x-6">
              <div class="flex flex-col w-1/2 space-y-2">
                  <label for="department">Curriculum</label>
                  <select
                    name="department"
                    id=""
                    class="px-4 py-2 border rounded-lg focus:outline-none me-3"
                  >
                  <option v-for="curriculum in curricula" :key="curriculum.id" :value="curriculum.id">{{curriculum.attributes.name}}</option>
                  </select>
              </div>
              
              <div class="flex flex-col w-1/2 space-y-2" v-if="!tailormade">
                  <label for="department">Modules</label>
                  <select
                    name="department"
                    id=""
                    class="px-4 py-2 border rounded-lg focus:outline-none me-3"
                  >
                  <option v-for="curriculum in modules" :key="curriculum.id" :value="curriculum.id">{{curriculum.name}}</option>
                  </select>
              </div> 
            </div>
            <div v-if="tailormade">
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
                  </div>
                </form>
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
      student: {
        first_name: "",
        last_name: "",
        gender: "",
        dob: "",
        phone_no: "",
        email: "",
        password: ""

      },
      curricula: [],
      modules: [],
      ntalevels: [],
      tailormade: true,
      module: {
        name: "",
        code: "",
      },
      curriculum_module: {
        curriculum_id: 0,
        module_id: 0,
        price: 0,
      },
    };
  },
  methods: {
    async getAllCurriculum() {
        await axios.get("/curricula").then(({ data }) => {
          this.curricula = data.data;
        });
    },
    async getModules(){
        await axios.get('/modules').then(({data}) => {
          this.modules = data.data;
        })
      },
    createStudent() {
      const now = new Date();
      const year = now.getFullYear();
      const month = this.formatTime(now.getMonth() + 1); // Months are zero-based
      const day = this.formatTime(now.getDate());
      const hours = this.formatTime(now.getHours());
      const minutes = this.formatTime(now.getMinutes());
      const seconds = this.formatTime(now.getSeconds());

      // this.student.created_at = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      // this.student.updated_at = this.curriculum.created_at;

      
      this.student.password = `${this.student.last_name}@DIT`;
      console.log(this.student);
      axios.post("/students/add", this.student).then((response) => {
          this.$toast.success('This is a success !'+ response);  
          this.$router.push('/students');
           
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
   this.getAllCurriculum();
   this.getModules();
  },
};
</script>

<style>
</style>