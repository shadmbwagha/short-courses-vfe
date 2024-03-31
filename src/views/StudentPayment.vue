<template>
    
    <div class="flex flex-col items-center justify-center my-8 space-y-2 text-sm text-center">
      <h3 class="font-bold capitalize">{{student.first_name}} {{student.last_name}}</h3>
      <h4>{{student.email}}/ {{student.phone_no}}</h4>
      <h6 class="px-2 py-1 text-xs font-medium text-center text-white rounded-full w-fit" :class="{'bg-red-500': summary.debt > 0 , 'bg-green-500': summary.debt == 0}">{{ (student.debt > 0) ? 'NOT COMPLETED' : 'COMPLETED'}}</h6>
    </div>
  <div>
    <div class="mx-4 overflow-hidden rounded-lg shadow-sm md:mx-10">
    <table class="w-full table-fixed even:bg-gray-">
        <thead>
            <tr class="bg-gray-100">
                <th class="w-1 px-4 py-3 text-sm font-bold text-left text-gray-900 uppercase">Sn</th>
                <th class="w-1/2 px-4 py-3 text-sm font-bold text-left text-gray-900 uppercase">Receipt Number</th>
                <th class="w-1/4 px-4 py-3 text-sm font-bold text-left text-gray-900 uppercase">Amount</th>
                <th class="w-1/3 px-4 py-3 text-sm font-bold text-left text-gray-900 uppercase">Payment Date</th>
            </tr>
        </thead>
        <tbody class="bg-white">
            <tr v-for="(module,i) in bills" :key="module.module_name">
                <td class="px-4 py-3 text-sm border-b border-gray-200">{{ i + 1 }}</td>
                <td class="px-6 py-4 text-sm border-b border-gray-200">{{ module.receipt_no}}</td>
                <td class="px-6 py-4 text-sm border-b border-gray-200">{{ module.amount}}</td>
                <td class="px-4 py-3 text-sm text-green-500 truncate border-b border-gray-200">{{ module.payment_date }}</td>
            </tr>
            <tr>
                <td colspan="2" class="px-6 py-4 text-sm font-bold text-center border-b border-gray-200">Total Paid</td>
                <td class="px-6 py-4 text-sm border-b border-gray-200">{{summary.total_paid}}</td>
            </tr>
            <tr>
                <td colspan="2" class="px-6 py-4 text-sm font-bold text-center border-b border-gray-200">Due Payments</td>
                <td class="px-6 py-4 text-sm border-b border-gray-200">{{summary.debt}}</td>
            </tr>
            <tr>
                <td colspan="2" class="px-6 py-4 text-sm font-bold text-center border-b border-gray-200">Total</td>
                <td class="px-6 py-4 text-sm border-b border-gray-200">{{summary.total_owed}}</td>
            </tr>

            <!-- Add more rows here -->
        </tbody>
    </table>
</div>
<!-- <div class="flex justify-end py-4 space-x-8 md:mx-10">
        <div>
            <input type="text" class="px-4 py-2 border rounded-lg focus:outline-none" placeholder="search here">
        </div>
        <router-link :to="{name: 'moduleForm', params: {id: 0, isEdit: false}}">
            <button class="px-4 py-2 text-white bg-blue-500 rounded-lg">+ Add Module</button>
        </router-link>
        <div>
          <button class="px-4 py-2 text-white bg-blue-500 rounded-lg">+ Add Modules(Excel)</button>
        </div>
    </div>-->
</div> 

</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      bills: [],
      student:[],
      summary: [],
      id: this.$route.params.id
    };
  },
  methods: {
    fetchStudent(){
        axios.get(`/students/${this.id}`).then(({ data }) => {
        this.student = data.data[0];
        console.log(this.student);
      });
    },
    fetchStudentPaymentSummary(){
        axios.get(`/bills/${this.id}/payments`).then(({ data }) => {
        this.summary = data;
        console.log(this.summary);
      });
    },
    fetchAllBills() {
      axios.get(`/bills/${this.id}/details`).then(({ data }) => {
        this.bills = data;
        console.log(this.bills);
      });
    },
  },
  mounted() {
    this.fetchAllBills();
    this.fetchStudent();
    this.fetchStudentPaymentSummary();
  },
};
</script>

<style>

</style>