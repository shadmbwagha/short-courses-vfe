<template>
    <div class="flex items-center justify-center h-screen -m-8 bg-slate-200">
      <div class="w-3/4 px-6 py-4 bg-white shadow-md">
        <div>
          <h1 class="mt-4 font-bold text-center text-md">
            Student Payment Registration
          </h1>
          <div>
            
          </div>
          <form action="" @submit.prevent="createStudentPayment">
            <div class="flex flex-col">
             <div class="flex justify-between mt-8 space-x-6">
                <div class="flex flex-col w-1/2 space-y-2">
                  <label for="department">student</label>
                  <select
                    name="department"
                    id=""
                    v-model="payment.student_id" class="px-4 py-2 border rounded-lg focus:outline-none me-3"
                  >
                  <option v-for="student in students" :key="student.id" :value="student.id">{{student.first_name}} {{student.last_name}}</option>
                  </select>
                </div>
                <div class="flex flex-col w-1/2 space-y-2">
                  <label for="department">Amount</label>
                  <input
                    type="number"
                    class="px-4 py-2 border rounded-lg focus:outline-none"
                    placeholder="i.e analogue electronics"
                    v-model="payment.amount"
                  />
                </div>     
              </div>
              <div class="flex mt-8 space-x-6">
                <div class="flex flex-col w-1/2 space-y-2">
                  <label for="department">Receipt Number</label>
                  <input
                    type="number"
                    class="px-4 py-2 border rounded-lg focus:outline-none"
                    placeholder="COU 0746"
                    v-model="payment.receipt_no"
                  />
                </div>  
                <div class="flex flex-col w-1/2 space-y-2">
                  <label for="department">Date Paid</label>
                  <input
                    type="date"
                    class="px-4 py-2 border rounded-lg focus:outline-none"
                    v-model="payment.payment_date"
                  />
                </div>  
              </div>

              <div class="flex mt-8 space-x-6">
                <div class="flex flex-col w-full space-y-2">
                  <label for="department">Receipt Number</label>
                  <input
                    type="file"
                    class="px-4 py-2 border rounded-lg focus:outline-none"
                    placeholder="COU 0746"
                 
                  />
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
        
        payment: {
          student_id: 0,
          amount: 0,
          receipt_no: '',
          payment_date: ''
        },
        modules: [],
        students: []
        
      };
    },
    methods: {
      
      async getAllStudents() {
        await axios.get("/students").then(({ data }) => {
          this.students = data;
        });
    },
    
      
      createStudentPayment() {
          console.log(this.payment)
          axios.post("/bills", this.payment).then((response) => {
            this.$toast.success('This is a success !'+ response.data);  
            this.$router.push('/payments');
          })
          .catch((error) => {
            alert("unsuccesfully save " + error);
          });
        
      },
      formatTime(value) {
        return value < 10 ? `0${value}` : value;
      },
      
    },
    computed: {
      
    },
    watch: {
    // Watch for changes in the filterCriteria and fetch data accordingly
    
    },
    mounted() {
      this.getAllStudents();
    },
  };
  </script>
  
  <style>
  </style>