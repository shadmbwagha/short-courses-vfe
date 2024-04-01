<template>
    <div class="flex justify-end py-4 space-x-8 md:mx-10">
        <div>
            <input type="text" class="px-4 py-2 border rounded-lg focus:outline-none" placeholder="search here">
        </div>
         <router-link :to="{name: 'studentForm'}"><!--:to="{name: 'studentForm', params: {id: 0, isEdit: false}} -->
            <button class="px-4 py-2 text-white bg-blue-500 rounded-lg">+ Register student</button>
        </router-link>
        <router-link to="studentModuleRegistration">
          <button class="px-4 py-2 text-white bg-blue-500 rounded-lg">Register Student Module</button>
        </router-link>
    </div>
  <div>
    <div class="mx-2 overflow-hidden rounded-lg shadow-lg md:mx-6">
    <table class="w-full table-fixed even:bg-gray-">
        <thead>
            <tr class="bg-gray-100">
                <th class="w-1 px-3 py-3 text-sm font-bold text-left text-gray-900 uppercase"></th>
                <th class="w-1/2 px-2 py-3 text-sm font-bold text-left text-gray-900 uppercase">Student Name</th>
                <th class="w-1/4 px-2 py-3 text-sm font-bold text-left text-gray-900 uppercase">Total</th>
                <th class="w-1/2 px-2 py-3 text-sm font-bold text-left text-gray-900 uppercase ">Courses</th>
                <th class="w-1/4 px-2 py-3 text-sm font-bold text-left text-gray-900 uppercase">Phone Number</th>
                <th class="w-1/6 px-2 py-3 text-sm font-bold text-left text-gray-900 uppercase">Status </th>
                <!-- <th class="w-1/12 px-4 py-3 text-sm font-bold text-left text-gray-900 uppercase">CA</th>
                <th class="w-1/12 px-4 py-3 text-sm font-bold text-left text-gray-900 uppercase">SE</th>
                <th class="w-1/12 px-4 py-3 text-sm font-bold text-left text-gray-900 uppercase">L hrs</th>
                <th class="w-1/12 px-4 py-3 text-sm font-bold text-left text-gray-900 uppercase">prac hrs</th>
                <th class="w-1/12 px-4 py-3 text-sm font-bold text-left text-gray-900 uppercase">self hrs</th> -->
            </tr>
        </thead>
        <tbody class="bg-white">
            <tr v-for="(student,i) in students" :key="student.module_name">
                <td class="px-3 py-3 text-sm border-b border-gray-200">{{ i + 1 }}</td>
                <td class="px-3 py-4 text-sm border-b border-gray-200">{{ student.first_name }} {{ student.last_name }}</td>
                <td class="px-3 py-3 text-sm truncate border-b border-gray-200">{{ calculateTotalPrice(student.modules) }}</td>
                <td class="px-3 py-3 text-sm truncate border-b border-gray-200">
                  <ul>
                    <li v-for="(module, index) in student.modules" :key="index">
                      {{ module.name }}
                    </li>
                  </ul>
                </td>
                <td class="px-3 py-4 text-sm border-b border-gray-200">{{ student.phone_no }}</td>
                <td class="px-3 py-4 text-sm border-b border-gray-200" >
                    <span class="px-2 py-1 text-xs font-medium text-white bg-green-500 rounded-full">{{ student.account_status }}</span>
                </td>
                <!-- <td class="px-6 py-4 text-sm truncate border-b border-gray-200">{{ module.credit }}</td>
                <td class="px-4 py-3 text-sm border-b border-gray-200">{{ module.CA}}</td>
                <td class="px-4 py-3 text-sm border-b border-gray-200">{{ module.SE }}</td>
                <td class="px-4 py-3 text-sm border-b border-gray-200">{{ module.learning_hours }}</td>
                <td class="px-4 py-3 text-sm border-b border-gray-200">{{ module.practical_hours }}</td>
                <td class="px-4 py-3 text-sm border-b border-gray-200">{{ module.B }}</td>-->
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
      axios.get("/students").then(({ data }) => {
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