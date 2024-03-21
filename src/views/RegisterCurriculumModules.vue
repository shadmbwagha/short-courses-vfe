<template>
    <div class="flex items-center justify-center h-screen -m-8 bg-slate-200">
      <div class="w-3/4 px-6 py-4 bg-white shadow-md">
        <div>
          <h1 class="mt-4 font-bold text-center text-md">
            Curriculum Modules Registration
          </h1>
          <div>
            
          </div>
          <form action="" @submit.prevent="createCurriculumModule">
            <div class="flex flex-col">
             <div class="flex justify-between mt-8 space-x-6">
                <div class="flex flex-col w-1/2 space-y-2">
                  <label for="department">Department name</label>
                  <select
                    name="department"
                    id=""
                    v-model="selectedDepartmentId" class="px-4 py-2 border rounded-lg focus:outline-none"
                  >
                  <option v-for="department in departments" :key="department.id" :value="department.department_name">{{department.department_name}}</option>
                  </select>
                </div> 
               
                <div class="flex flex-col w-1/2 space-y-2">
                  <label for="department">Curriculum</label>
                  <select
                    name="department"
                    id=""
                    v-model="curriculumModules.curriculum_id" class="px-4 py-2 border rounded-lg focus:outline-none me-3"
                  >
                  <option v-for="curriculum in filteredCurricula" :key="curriculum.id" :value="curriculum.id">{{curriculum.curriculum_name}} (NTA {{curriculum.nta_level}})</option>
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
                  <input type="checkbox" :value="module.id" :checked="true" v-model="curriculumModules.module_id">
                  <label class="text-sm">{{ module.module_name}}</label>    
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
        curriculumModules: { 
          curriculum_id: "",
          module_id: [],
          created_at: "",
          updated_at: ""
        },
        selectedDepartmentId: 1,
        departments : [],
        modules: [],
        curricula: []
        
      };
    },
    methods: {
      async getDepartments(){
          await axios.get('/departments').then(({data})=>{
              this.departments = data.data;
          })
      },
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

      





      
      createCurriculumModule() {
        const now = new Date();
        const year = now.getFullYear();
        const month = this.formatTime(now.getMonth() + 1); // Months are zero-based
        const day = this.formatTime(now.getDate());
        const hours = this.formatTime(now.getHours());
        const minutes = this.formatTime(now.getMinutes());
        const seconds = this.formatTime(now.getSeconds());
  
        this.curriculumModules.created_at = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        this.curriculumModules.updated_at = this.curriculumModules.created_at;

        
        console.log("Form data", this.curriculumModules);
        const { curriculum_id, module_id } = this.curriculumModules;
        
        for(module in module_id){

          const formdata  = {
            curriculum_id: curriculum_id,
            module_id: module_id[module]
          }
          console.log(formdata);
          axios.post("/curriculumModule", formdata).then((response) => {
            console.log("API response:", response.data);
            
          })
          .catch((error) => {
            alert("unsuccesfully save " + error);
          });
        }
        alert('successfully created module!');
        window.location.reload();
        
        
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
      this.getDepartments();
      this.getModules();
      this.getAllCurriculum();
    },
  };
  </script>
  
  <style>
  </style>