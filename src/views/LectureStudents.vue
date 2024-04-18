<template>
    <div class="flex justify-end py-4 space-x-8 md:mx-10">
        <div>
            <input type="text" class="px-4 py-2 border rounded-lg focus:outline-none" placeholder="search here">
        </div>
        <router-link to="/lecturestudentsstartdate">
          <button class="px-4 py-2 text-white bg-blue-500 rounded-lg">Register Start Day</button>
        </router-link>
    </div>
  <div>
    <div class="mx-2 overflow-hidden rounded-lg shadow-lg md:mx-6">
    <table class="w-full table-fixed even:bg-gray-">
        <thead>
            <tr class="bg-gray-100">
                <th class="w-1 px-3 py-3 text-sm font-bold text-left text-gray-900 uppercase"></th>
                <th class="w-1/2 px-2 py-3 text-sm font-bold text-left text-gray-900 uppercase">Student Name</th>
                <th class="w-1/3 px-2 py-3 text-sm font-bold text-left text-gray-900 uppercase">Email</th>
                <!-- <th class="w-1/4 px-2 py-3 text-sm font-bold text-left text-gray-900 uppercase">Phone Number</th> -->
                <th class="w-1/6 px-2 py-3 text-sm font-bold text-left text-gray-900 uppercase">Start Date</th>
                <th class="w-1/6 px-2 py-3 text-sm font-bold text-left text-gray-900 uppercase">End Date</th>
                <th class="w-1/6 px-2 py-3 text-sm font-bold text-left text-gray-900 uppercase">Status </th>
                
            </tr>
        </thead>
        <tbody class="bg-white">
            <tr v-for="(student,i) in students" :key="student.module_name">
                <td class="px-3 py-3 text-sm border-b border-gray-200">{{ i + 1 }}</td>
                <td class="px-3 py-4 text-sm border-b border-gray-200">{{ student.first_name }} {{ student.last_name }}</td>
                <td class="px-3 py-4 text-sm border-b border-gray-200">{{ student.email }}</td>
                <!-- <td class="px-3 py-4 text-sm border-b border-gray-200">{{ student.phone_no }}</td> -->
                <td class="px-3 py-4 text-sm border-b border-gray-200"> - </td>
                <td class="px-3 py-4 text-sm border-b border-gray-200"> - </td>
                <td class="px-3 py-4 text-sm border-b border-gray-200" >
                    <span class="px-2 py-1 text-xs font-medium text-white bg-gray-500 rounded-full">{{ student.account_status }}</span>
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
      id: this.$store.state.id
    };
  },
  methods: {
    fetchAllStudents() {
      axios.get(`/lecturers/${this.id}/1/students`).then(({ data }) => {
        this.students = data;
      });
    },
    
  },
  computed: {
    
  },
  
  mounted() {
    this.fetchAllStudents();
  },
};
</script>

<style>

</style>