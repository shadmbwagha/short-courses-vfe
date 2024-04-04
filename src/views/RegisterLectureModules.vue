<template>
    <div class="flex items-center justify-center h-screen -m-8 bg-slate-200">
      <div class="w-3/4 px-6 py-4 bg-white shadow-md">
        <div>
          <h1 class="mt-4 font-bold text-center text-md">
            Lecture Modules Registration
          </h1>
          <div>
            
          </div>
          <form action="" @submit.prevent="createStudentModule">
            <div class="flex flex-col">
             <div class="flex justify-between mt-8 space-x-6">
                <!-- <div class="flex flex-col w-1/2 space-y-2">
                  <label for="department">Department name</label>
                  <select
                    name="department"
                    id=""
                    v-model="selectedDepartmentId" class="px-4 py-2 border rounded-lg focus:outline-none"
                  >
                  <option v-for="department in departments" :key="department.id" :value="department.department_name">{{department.department_name}}</option>
                  </select>
                </div> -->
               
                <div class="flex flex-col w-full space-y-2">
                  <label for="department">Lecture</label>
                  <select
                    name="department"
                    id=""
                    v-model="lectureModules.lecturer_id" class="px-4 py-2 border rounded-lg focus:outline-none me-3"
                  >
                  <option v-for="student in students" :key="student.id" :value="student.id">{{student.first_name}} {{student.last_name}}</option>
                  </select>
                </div>     
              </div>
              <div class="flex mt-8 space-x-6">
                <div class="flex flex-col w-full space-y-2">
                  <label for="department">Select Modules</label>
                </div>
              </div>
              <div class="flex justify-between pb-3 mt-6 shadow-sm ps-4">
                <div class="w-full space-y-2 me-2">
                  <input type="checkbox" name="allModules" value=""><label for="all"> All modules</label>
                </div>
                <div class="w-full space-y-2 me-2">
                  <input type="checkbox" name="departmentModule" value=""><label for="all"> Only for Department modules</label>
                </div>

                <div class="w-full space-y-2 me-2">
                  <input type="checkbox" name="selectAll" value=""><label for="all"> select all modules</label>
                </div>
              </div>

              <div class="grid items-start justify-center h-56 grid-cols-2 gap-2 pt-6 overflow-scroll md:grid-cols-3 md:space-y-6 ps-4">
                <div v-for="module in modules" :key="module.id" class="space-x-2">
                  <input type="checkbox" :value="module.id" :checked="true" v-model="lectureModules.module_id">
                  <label class="text-sm">{{ module.name}}</label>    
                </div>
              </div>
              
              <div class="flex mt-8 space-x-6">
                <div class="w-full text-center">
                  <button class="w-full px-6 py-3 text-white bg-blue-600 rounded-lg" type="submit">
                    Register
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
        lectureModules: { 
          lecturer_id: "",
          module_id: [],
         
        },
        selectedDepartmentId: 1,
        departments : [],
        modules: [],
        students: []
        
      };
    },
    methods: {
      
      async getAllCurriculum() {
        await axios.get("/lecturers").then(({ data }) => {
          this.students = data;
        });
    },
      async getModules(){
        await axios.get('/modules').then(({data}) => {
          this.modules = data.data;
        })
      },

      
      createStudentModule() {
       

        console.log("Form data", this.lectureModules);
        const { lecturer_id, module_id } = this.lectureModules;
        
        for(module in module_id){

          const formdata  = {
            lecturer_id: lecturer_id,
            module_id: module_id[module],
            
          }
 
          axios.post("/lecturer_modules", formdata).then((response) => {
            this.$toast.success("succesfully registered lecture to module");
            this.$router.push('/students');
          })
          .catch((error) => {
            alert("unsuccesfully save " + error);
          });
        }
     
       
        
        
      },
      formatTime(value) {
        return value < 10 ? `0${value}` : value;
      },
      
    },
    computed: {
      filteredCurricula()
      { 
        return this.curricula.filter(item => {   
          return (item.department == this.selectedDepartmentId);        
        });
      },
      
    },
    watch: {
    // Watch for changes in the filterCriteria and fetch data accordingly
    selectedDepartmentId() {
      this.getAllCurriculum();
    }
    },
    mounted() {
     
      this.getModules();
      this.getAllCurriculum();
    },
  };
  </script>
  
  <style>
  </style>