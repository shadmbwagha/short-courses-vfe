<template>
    <div class="flex justify-end py-4 space-x-8 md:mx-10">
        <router-link :to="{name: 'moduleForm', params: {id: 0, isEdit: false}}">
            <button class="px-4 py-2 text-white bg-blue-500 rounded-lg tex-md">+ Add Course</button>
        </router-link>
    </div>
    
    <div class="mx-4 overflow-hidden rounded-lg shadow-lg md:mx-10">
    <table class="w-full table-fixed even:bg-gray-">
        <thead>
            <tr class="bg-gray-100">
                <th class="w-1/12 px-6 py-4 font-bold text-left text-gray-900 uppercase">sn</th>
                <th class="w-1/2 px-6 py-4 font-bold text-left text-gray-900 uppercase">Name</th>
                <th class="w-1/6 px-6 py-4 font-bold text-left text-gray-900 uppercase">code</th>
                <th class="w-1/4 px-6 py-4 font-bold text-left text-gray-900 uppercase">curriculum</th>
                <th class="w-1/4 px-6 py-4 font-bold text-left text-gray-900 uppercase">price</th>
                <th class="w-1/4 px-6 py-4 font-bold text-left text-gray-900 uppercase">status</th>
            </tr>
        </thead>
        <tbody class="bg-white">
            <tr v-for="(module,i) in modules" :key="module.id">
                <td class="px-6 py-4 border-b border-gray-200 text-md">{{ i+1 }}</td>
                <td class="px-6 py-4 truncate border-b border-gray-200 text-md hover:text-blue-500"><span>{{ module.name }}</span></td>
                <td class="px-6 py-4 truncate border-b border-gray-200 text-md hover:text-blue-500"><span>{{ module.code }}</span></td>
                <td class="px-6 py-4 truncate border-b border-gray-200 text-md hover:text-blue-500"><span v-for="curriculum in module.curriculum" :key="curriculum.id">{{ curriculum.name }}</span></td>
                <td class="px-6 py-4 truncate border-b border-gray-200 text-md hover:text-blue-500"><span v-for="curriculum in module.curriculum" :key="curriculum.id">{{ curriculum.pivot.price }}</span></td>
                <td class="px-6 py-4 text-sm border-b border-gray-200" >
                    <span class="px-2 py-1 text-xs text-white bg-green-500 rounded-full ">Active</span>
                </td>
                <td class="px-6 py-4 text-sm font-medium border-b border-gray-200">
                  <div class="inline-flex items-center rounded-md shadow-sm">
                    <button class="inline-flex items-center px-2 py-2 space-x-1 text-sm font-medium bg-white border rounded-l-lg text-slate-800 hover:text-blue-600 hover:bg-slate-100 border-slate-200">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                              stroke="currentColor" class="w-3 h-3">
                              <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return {
            modules : []
        }
    },
    methods: {
        async getCustomer() {
            await axios.get('/modules').then((data)=> {    
                this.modules = data.data.data;
                console.log(this.modules);
            })
        }
       
    },
    mounted () {
        this.getCustomer();
    }
}
</script>

<style>

</style>