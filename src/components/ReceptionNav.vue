<template>
    <button data-drawer-target="separator-sidebar" data-drawer-toggle="separator-sidebar" aria-controls="separator-sidebar" type="button" class="fixed top-0 left-0 inline-flex items-center p-2 mt-2 text-sm text-gray-500 rounded-lg ms-3 sm:hidden hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-gray-400 darkv:text-gray-400 darkv:hover:bg-gray-700 darkv:focus:ring-gray-600">
       <span class="sr-only">Open sidebar</span>
       <svg class="w-6 h-6 text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
       <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
       </svg>
    </button>
    
    <aside id="separator-sidebar" class="fixed left-0 z-40 w-56 h-screen transition-transform -translate-x-full top-15 sm:translate-x-0" aria-label="Sidebar">
       <div class="h-full px-3 py-4 overflow-y-auto bg-slate-100 darkv:bg-gray-800">
          <ul class="space-y-2">
            
             <li>
                <router-link to="/dashboard" class="flex items-center p-2 text-gray-900 rounded-lg darkv:text-white hover:bg-gray-100 darkv:hover:bg-gray-700 group">
                  
                  <span class="flex-1 whitespace-nowrap">Dashboard</span>
                   <!-- <span class="inline-flex items-center justify-center w-3 h-3 p-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full ms-3 darkv:bg-blue-900 darkv:text-blue-300">2</span> -->
                </router-link>
             </li>
             <li>
                <router-link to="/students" class="flex items-center p-2 text-gray-900 rounded-lg darkv:text-white hover:bg-gray-100 darkv:hover:bg-gray-700 group">
                 
                   <span class="flex-1 whitespace-nowrap">Student</span>
                </router-link>
             </li>
             <li>
                <router-link :to="{name : 'payments'}" class="flex items-center p-2 text-gray-900 rounded-lg darkv:text-white hover:bg-gray-100 darkv:hover:bg-gray-700 group">
                   <span class="flex-1 whitespace-nowrap">Payments</span>
                </router-link>
             </li>
             <li>
               <details class="group">
       
                   <summary
                       class="flex items-center justify-between gap-2 p-2 text-gray-900 marker:content-none hover:cursor-pointer">
       
                       <span class="flex flex-1 gap-2 whitespace-nowrap">
                           <span>
                               Report
                           </span>
                       </span>
                       <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                           width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                           <path fill-rule="evenodd"
                               d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                           </path>
                       </svg>
                   </summary>
       
                   <article class="px-4 pb-4">
                       <ul class="flex flex-col gap-1 pl-2">
                           <li>
                              <router-link to="/devp" class="flex items-center py-2 text-gray-900 rounded-lg darkv:text-white hover:bg-gray-100 darkv:hover:bg-gray-700 group"> 
                                 <span class="flex-1 whitespace-nowrap">Students</span>
                                 <!-- <img src="../assets/images/man.svg" alt="" class="flex flex-shrink-0 w-5 h-5 transition duration-75 group-hover:text-gray-900"> -->
                              </router-link>
                           </li>
                           <li>
                              <router-link to="/devp" class="flex items-center py-2 text-gray-900 rounded-lg darkv:text-white hover:bg-gray-100 darkv:hover:bg-gray-700 group"> 
                                 <span class="flex-1 whitespace-nowrap">Staff</span>
                                 <!-- <img src="../assets/images/man.svg" alt="" class="flex flex-shrink-0 w-5 h-5 transition duration-75 group-hover:text-gray-900"> -->
                              </router-link>
                           </li>     
                       </ul>
                   </article>
       
               </details>
           </li>
             <!-- <li>
                <router-link to="/modules" class="flex items-center p-2 text-gray-900 rounded-lg darkv:text-white hover:bg-gray-100 darkv:hover:bg-gray-700 group">
                   <span class="flex-1 whitespace-nowrap">Course</span>
                </router-link>
             </li> -->
             <!-- <li>
                <router-link :to="{name: 'lectures' }" class="flex items-center p-2 text-gray-900 rounded-lg darkv:text-white hover:bg-gray-100 darkv:hover:bg-gray-700 group">
                   <span class="flex-1 whitespace-nowrap">Instructor</span>
                </router-link>
             </li> -->
             <!-- <li>
                <router-link to="/curricula" class="flex items-center p-2 text-gray-900 rounded-lg darkv:text-white hover:bg-gray-100 darkv:hover:bg-gray-700 group">
                   <span class="flex-1 whitespace-nowrap">Curriculum</span>
                </router-link>
             </li> -->
          </ul>
          
          
       </div>
    </aside>
    
    
    </template>
    
    <script>
    export default {
    
    }
    </script>
    
    <style>
    
    </style>