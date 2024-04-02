<template>
    <div class="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-2 sm:px-8">
        <div class="flex items-center overflow-hidden bg-white border rounded-sm shadow">
            <div class="p-4 bg-green-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-white" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
                    </path>
                </svg>
            </div>
            <div class="px-4 text-gray-700">
                <h3 class="text-sm tracking-wider">Total Students</h3>
                <p class="text-3xl">{{ dashboard.student_count}}</p>
            </div>
        </div>
        <div class="flex items-center overflow-hidden bg-white border rounded-sm shadow">
            <div class="p-4 bg-blue-400"><svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-white" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2">
                    </path>
                </svg></div>
            <div class="px-4 text-gray-700">
                <h3 class="text-sm tracking-wider">Total Courses</h3>
                <p class="text-3xl">{{ dashboard.module_count}}</p>
            </div>
        </div>
        <div class="flex items-center overflow-hidden bg-white border rounded-sm shadow">
            <div class="p-4 bg-indigo-400"><svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-white" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z">
                    </path>
                </svg></div>
            <div class="px-4 text-gray-700">
                <h3 class="text-sm tracking-wider">Total Trainee</h3>
                <p class="text-3xl">{{ dashboard.lecturer_count }}</p>
            </div>
        </div>
        <div class="flex items-center overflow-hidden bg-white border rounded-sm shadow">
            <div class="p-4 bg-red-400"><img src="../assets/images/cash.svg" class="w-12 h-12 text-white" style="color:white"></div>
            <div class="px-4 text-gray-700">
                <h3 class="text-sm tracking-wider">Complete Payments</h3>
                <p class="text-3xl">34.12%</p>
            </div>
        </div>
    </div>

    <div>
        <div class="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-2 sm:px-8">
            <div class="">
                <router-link to="/creditForm">
                    <button class="w-full px-6 py-2 text-white bg-blue-500 rounded-sm text-md">+ Add student</button>
                </router-link>
            </div>
            <div>
                <router-link to="/creditForm">
                    <button class="w-full px-6 py-2 text-white bg-blue-500 rounded-sm text-md">+ Payments</button>
                </router-link>
            </div> 
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return {
            dashboard: [],
            
        }
    },
    methods: {
        async fetchAllDashboard() {
            await axios.get("/dashboard").then(({ data }) => {
                this.dashboard = data;
               
            });
        },
    },
    mounted(){
        this.fetchAllDashboard();
    }
}
</script>

<style>

</style>