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
                  <svg class="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z"/>
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z"/>
                  </svg>
                  <span class="ms-3">Dashboard</span>
                   <!-- <span class="inline-flex items-center justify-center w-3 h-3 p-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full ms-3 darkv:bg-blue-900 darkv:text-blue-300">2</span> -->
                </router-link>
             </li>
             <li>
                <router-link to="/students" class="flex items-center p-2 text-gray-900 rounded-lg darkv:text-white hover:bg-gray-100 darkv:hover:bg-gray-700 group">
                  <svg class="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                     <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
                  </svg>
                   <span class="ms-3">Student</span>
                </router-link>
             </li>
             <li>
                <router-link :to="{name : 'payments'}" class="flex items-center p-2 text-gray-900 rounded-lg darkv:text-white hover:bg-gray-100 darkv:hover:bg-gray-700 group">
                  <svg class="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                     <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 7V6a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1M3 18v-7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
                  </svg> 
                  <span class="ms-3">Payments</span>
                </router-link>
             </li>
             <li>
               <details class="group">
       
                   <summary
                       class="flex items-center justify-between gap-2 p-2 text-gray-900 marker:content-none hover:cursor-pointer">
       
                       <span class="flex flex-1 gap-2 whitespace-nowrap">
                           <svg class="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3v4a1 1 0 0 1-1 1H5m4 10v-2m3 2v-6m3 6v-3m4-11v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"/>
                           </svg>
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