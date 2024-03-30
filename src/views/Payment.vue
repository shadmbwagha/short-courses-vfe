<template>
    <div class="flex justify-end py-4 space-x-8 md:mx-10">
        <div>
            <input type="text" class="px-4 py-2 border rounded-lg focus:outline-none" placeholder="Search Here">
        </div>
         <router-link :to="{name: 'studentPaymentRegistration'}"><!--:to="{name: 'studentForm', params: {id: 0, isEdit: false}} -->
            <button class="px-4 py-2 text-white bg-blue-500 rounded-lg">+ Add Payments</button>
        </router-link>
        <!-- <router-link to="studentModuleRegistration">
          <button class="px-4 py-2 text-white bg-blue-500 rounded-lg">Register Student Module</button>
        </router-link> -->
    </div>
  <div>
    <div class="mx-2 overflow-hidden rounded-lg shadow-lg md:mx-6">
    <table class="w-full table-fixed even:bg-gray-">
        <thead>
            <tr class="bg-gray-100">
                <th class="w-1 px-3 py-3 text-sm font-bold text-left text-gray-900 uppercase"></th>
                <th class="w-1/2 px-2 py-3 text-sm font-bold text-left text-gray-900 uppercase">Student Name</th>
                <th class="w-1/4 px-2 py-3 text-sm font-bold text-left text-gray-900 uppercase">Paid</th>
                <th class="w-1/4 px-2 py-3 text-sm font-bold text-left text-gray-900 uppercase">Due</th>
                <th class="w-1/4 px-2 py-3 text-sm font-bold text-left text-gray-900 uppercase">Total</th>
                <th class="w-1/3 px-2 py-3 text-sm font-bold text-left text-gray-900 uppercase ">Courses</th>
                <!-- <th class="w-1/4 px-2 py-3 text-sm font-bold text-left text-gray-900 uppercase">Phone Number</th> -->
                <th class="w-1/6 px-2 py-3 text-sm font-bold text-left text-gray-900 uppercase">Status </th>
                <th class="w-1/4 px-2 py-3 text-sm font-bold text-left text-gray-900 uppercase">
                    Action
                </th>

            </tr>
        </thead>
        <tbody class="bg-white">
            <tr v-for="(student,i) in students" :key="student.module_name">
                <td class="px-3 py-3 text-sm border-b border-gray-200">{{ i + 1 }}</td>
                <td class="px-3 py-4 text-sm border-b border-gray-200">{{ student.first_name }} {{ student.last_name }}</td>
                <td class="px-3 py-3 text-sm truncate border-b border-gray-200">{{ student.total_paid}}</td>
                <td class="px-3 py-3 text-sm truncate border-b border-gray-200">{{ student.debt}}</td>
                <td class="px-3 py-3 text-sm truncate border-b border-gray-200">{{ calculateTotalPrice(student.modules) }}</td>
                <td class="px-3 py-3 text-sm truncate border-b border-gray-200">
                  <ul>
                    <li v-for="(module, index) in student.modules" :key="index">
                      {{ module.name }}
                    </li>
                  </ul>
                </td>
                <!-- <td class="px-3 py-4 text-sm border-b border-gray-200">{{ student.phone_no }}</td> -->
                <td class="px-3 py-4 text-sm border-b border-gray-200" >
                    <span class="px-2 py-1 text-xs font-medium text-white bg-green-500 rounded-full">{{ student.account_status }}</span>
                </td>
                <td class="px-3 py-4 text-sm font-medium border-b border-gray-200">
                  <div class="inline-flex items-center rounded-md shadow-sm">
                    <button class="inline-flex items-center px-2 py-2 space-x-1 text-sm font-medium bg-white border rounded-l-lg text-slate-800 hover:text-blue-600 hover:bg-slate-100 border-slate-200" @click="updateCurriculum(curriculum.id)">
                      <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                              stroke="currentColor" class="w-3 h-3">
                              <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                          </svg>
                      </span>
                    </button>
                    <router-link class="inline-flex items-center px-2 py-2 space-x-1 text-sm font-medium bg-white text-slate-800 hover:text-blue-600 hover:bg-slate-100 border-y border-slate-200" :to="{name: 'studentPayments', params: {id: student.id}}">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-3 h-3">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </span>
                    </router-link>
                    <router-link class="inline-flex items-center px-2 py-2 space-x-1 text-sm font-medium bg-white border rounded-r-lg text-slate-800 hover:text-blue-600 hover:bg-slate-100 border-slate-200" :to="{name: 'studentPayments', params: {id: student.id}}">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                          stroke="currentColor" class="w-3 h-3">
                          <path stroke-linecap="round" stroke-linejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                      </span>
                    </router-link>
                  </div>
                </td>
            </tr>

            <!-- Add more rows here -->
        </tbody>
    </table>
</div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      students: [],
      
    };
  },
  methods: {
    fetchAllModules() {
      axios.get("/students/payments").then(({ data }) => {
        this.students = data;
      });
    },
    calculateTotalPrice(modules) {
      return modules.reduce((totalPrice, module) => Number(totalPrice) + Number(module.curriculums[0].pivot.price), 0);
    }
  },
  computed: {
    
  },
  
  mounted() {
    this.fetchAllModules();
  },
};
</script>

<style>

</style>