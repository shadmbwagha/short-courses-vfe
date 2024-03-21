<template>
    
    <div class="my-8 text-sm text-center">
      <h3 class="font-medium">{{modules.department}}</h3>
      <h4>{{modules.curriculum_name}}(NTA {{ modules.nta_level }})</h4>
    </div>
  <div>
    <div class="mx-4 overflow-hidden rounded-lg shadow-sm md:mx-10">
    <table class="w-full table-fixed even:bg-gray-">
        <thead>
            <tr class="bg-gray-100">
                <th class="w-1 px-4 py-3 text-sm font-bold text-left text-gray-900 uppercase">Sn</th>
                <th class="w-1/4 px-4 py-3 text-sm font-bold text-left text-gray-900 uppercase">Module Code</th>
                <th class="w-1/2 px-4 py-3 text-sm font-bold text-left text-gray-900 uppercase">Module Name</th>
                <!-- <th class="w-1/4 px-4 py-3 text-sm font-bold text-left text-gray-900 uppercase">Department</th> -->
                <th class="w-1/6 px-4 py-3 text-sm font-bold text-left text-gray-900 uppercase">Credit</th>
                <th class="w-1/12 px-4 py-3 text-sm font-bold text-left text-gray-900 uppercase">CA</th>
                <th class="w-1/12 px-4 py-3 text-sm font-bold text-left text-gray-900 uppercase">SE</th>
                <th class="w-1/12 px-4 py-3 text-sm font-bold text-left text-gray-900 uppercase">L hrs</th>
                <th class="w-1/12 px-4 py-3 text-sm font-bold text-left text-gray-900 uppercase">prac hrs</th>
                <th class="w-1/12 px-4 py-3 text-sm font-bold text-left text-gray-900 uppercase">self hrs</th>
            </tr>
        </thead>
        <tbody class="bg-white">
            <tr v-for="(module,i) in modules.modules" :key="module.module_name">
                <td class="px-4 py-3 text-sm border-b border-gray-200">{{ i + 1 }}</td>
                <td class="px-6 py-4 text-sm border-b border-gray-200">{{ module.module_code }}</td>
                <td class="px-4 py-3 text-sm truncate border-b border-gray-200">{{ module.module_name }}</td>
                <!-- <td class="px-6 py-4 text-sm border-b border-gray-200">{{ module.department.department }}</td> -->
                <td class="px-6 py-4 text-sm truncate border-b border-gray-200">{{ module.credit }}</td>
                <td class="px-4 py-3 text-sm border-b border-gray-200">{{ module.CA}}</td>
                <td class="px-4 py-3 text-sm border-b border-gray-200">{{ module.SE }}</td>
                <td class="px-4 py-3 text-sm border-b border-gray-200">{{ module.learning_hours }}</td>
                <td class="px-4 py-3 text-sm border-b border-gray-200">{{ module.practical_hours }}</td>
                <td class="px-4 py-3 text-sm border-b border-gray-200">{{ module.B }}</td>         
            </tr>

            <!-- Add more rows here -->
        </tbody>
    </table>
</div>
<div class="flex justify-end py-4 space-x-8 md:mx-10">
        <div>
            <input type="text" class="px-4 py-2 border rounded-lg focus:outline-none" placeholder="search here">
        </div>
        <!-- <router-link :to="{name: 'moduleForm', params: {id: 0, isEdit: false}}">
            <button class="px-4 py-2 text-white bg-blue-500 rounded-lg">+ Add Module</button>
        </router-link> -->
        <div>
          <button class="px-4 py-2 text-white bg-blue-500 rounded-lg">+ Add Modules(Excel)</button>
        </div>
    </div>
</div>

</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      modules: [],
      id: this.$route.params.id
    };
  },
  methods: {
    fetchAllModules() {
      axios.get(`/curricula/${this.id}`).then(({ data }) => {
        this.modules = data.data;
        console.log(this.modules);
      });
    },
  },
  mounted() {
    this.fetchAllModules();
  },
};
</script>

<style>

</style>