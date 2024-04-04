<template>
  <div class="flex items-center justify-center h-screen pt-16 -m-8 overflow-scroll bg-slate-200">
    <div class="w-3/4 px-6 py-4 bg-white shadow-md">
      <div>
        <h1 class="font-bold text-center text-md">
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
                  <label class="block mb-2 text-sm font-bold text-gray-700">Gender</label>
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
                    v-model="selected_curriculum"
                  >
                  <option v-for="curriculum in curricula" :key="curriculum.id" :value="curriculum.id">{{curriculum.attributes.name}}</option>
                  </select>
              </div>
              
              <div class="flex flex-col w-1/2 space-y-2" v-if="selected_curriculum != 3">
                  <label for="department">Modules</label>
                  <select
                    name="department"
                    id=""
                    class="px-4 py-2 border rounded-lg focus:outline-none me-3"
                    v-model="student_module.module_id"
                  >
                    <option v-for="modulein in modules" :key="modulein.id" :value="modulein.id">{{modulein.name}}</option>
                  </select>
              </div>
              <div class="flex flex-col w-1/2 space-y-2" v-if="selected_curriculum == 3">
                <label for="department">Module Name</label>
                <input
                  type="text"
                  class="px-4 py-2 border rounded-lg focus:outline-none"
                  placeholder="i.e analogue electronics"
                  v-model="module.name"
                />
              </div> 
            </div>
            <div v-if="selected_curriculum == 3"> 
                  <div class="flex flex-col">
                    <div class="flex mt-8 space-x-6">
                      <div class="flex flex-col w-1/2 space-y-2">
                        <label for="department">Module code</label>
                        <input
                          type="text"
                          class="px-4 py-2 border rounded-lg focus:outline-none"
                          placeholder="COU 0746"
                          v-model="module.code"
                        />
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
                    <div class="flex justify-between mt-8 space-x-6">
                         
                    </div>         
                  </div>
              
              </div>
              <div class="flex mt-8 space-x-6">
                <div class="flex flex-col w-full space-y-2" v-if="selected_curriculum != 3">
                  <label for="department">Lecturers</label>
                  <select
                    name="department"
                    id=""
                    class="px-4 py-2 border rounded-lg focus:outline-none me-3"
                    v-model="student_module.lecturer_id"
                  >
                    <option v-for="modulein in lecturers" :key="modulein.id" :value="modulein.id">{{modulein.first_name}} {{modulein.last_name}}</option>
                  </select>
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
      lecturers: [],
      selected_curriculum: 2,
      tailormade: true,
      module: {
        name: "",
        code: "",
      },
      curriculum_module: {
        curriculum_id: this.selected_curriculum,
        module_id: 0,
        price: 0,
      },
      student_module: {
        student_id : 1,
        module_id : 1,
        lecture_id: 1,
        status: "pending"
      }
    };
  },
  methods: {
      async getAllCurriculum() {
          await axios.get("/curricula").then(({ data }) => {
            this.curricula = data.data;
          });
      },
      async getAllLecture() {
          await axios.get("/lecturers").then(({ data }) => {
            this.lecturers = data;
          });
      },
      async getModules(){
        await axios.get('/modules').then(({data}) => {
          this.modules = data.data;
        })
      },
      studentModule(){
        if(this.selected_curriculum==3){
          this.student_module.module_id = this.curriculum_module.module_id;
        }
        
        axios.post("/student-modules", this.student_module).then((response) => {
          this.$toast.success('succesfully created module');  
          this.student_module.module_id = response.data.id;

          this.$router.push('/students');
        })
        .catch((error) => {
          console.error("Error posting data:", error);
        });
      },
    createModule() {
      axios.post("/modules/add", this.module).then((response) => {    
        this.curriculum_module.module_id = response.data.id;
        this.$toast.success('succesfully created module'); 
        this.createCurriculumModule();
      
      // this.$router.push('/modules');
      
      })
        .catch((error) => {
          console.error("Error posting data:", error);
      });
        // this.$route.push("/curriculum");
    },
    createCurriculumModule(){  
    this.curriculum_module.curriculum_id = this.selected_curriculum;
      const { curriculum_id, module_id, price} = this.curriculum_module;
      const formdata  = {
            curriculum_id: Number(curriculum_id),
            module_id: Number(module_id),
            price: Number(price)
          }
      console.log("Form data", formdata);

      axios.post("curriculum-modules", formdata).then((response) => {
          this.$toast.success('Succesfully registered curriculum module');  
          this.studentModule();
        })
        .catch((error) => {
          console.error("Error posting data:", error);
        });
    },
    createStudent() {
      this.student.password = `${this.student.last_name}@DIT`;
      
      axios.post("/students/add", this.student).then((response) => {
          this.student_module.student_id = response.data.id;
          this.$toast.success('succesfully registered student');
          
          if(this.selected_curriculum == 3){
            this.createModule();
          }else{
            this.studentModule();
          }
  
          // this.$router.push('/students');
           
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
   this.getAllLecture();
  },
};
</script>

<style>
</style>