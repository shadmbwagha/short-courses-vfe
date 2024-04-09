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
            <router-link to="/devp" class="flex items-center p-2 text-gray-900 rounded-lg darkv:text-white hover:bg-gray-100 darkv:hover:bg-gray-700 group">
               <svg class="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z"/>
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z"/>
               </svg>

               <span class="ms-3">Dashboard</span>
               <!-- <span class="inline-flex items-center justify-center w-3 h-3 p-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full ms-3 darkv:bg-blue-900 darkv:text-blue-300">2</span> -->
            </router-link>
         </li>
         <li>
            <router-link to="/devp" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"/>
               </svg>

               <span class="ms-3">Courses</span>
               <!-- <span class="inline-flex items-center justify-center w-3 h-3 p-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full ms-3 darkv:bg-blue-900 darkv:text-blue-300">2</span> -->
            </router-link>
         </li>
         <li>
            <router-link to="/devp" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
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
    
                    <span class="flex flex-1 whitespace-nowrap">
                        <svg class="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-3 5h3m-6 0h.01M12 16h3m-6 0h.01M10 3v4h4V3h-4Z"/>
                        </svg>

                        <span class="ms-3">
                            Academic Records
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
                              <span class="flex-1 whitespace-nowrap">Results</span>
                              <!-- <img src="../assets/images/man.svg" alt="" class="flex flex-shrink-0 w-5 h-5 transition duration-75 group-hover:text-gray-900"> -->
                           </router-link>
                        </li>
                        <!-- <li>
                           <router-link to="/devp" class="flex items-center py-2 text-gray-900 rounded-lg darkv:text-white hover:bg-gray-100 darkv:hover:bg-gray-700 group"> 
                              <span class="flex-1 whitespace-nowrap">Transcript</span>
                               <img src="../assets/images/man.svg" alt="" class="flex flex-shrink-0 w-5 h-5 transition duration-75 group-hover:text-gray-900">
                           </router-link>
                        </li> -->
                    </ul>
                </article>
    
            </details>
        </li>
        
         <li>
            <router-link to="/transcript" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17v-5h1.5a1.5 1.5 0 1 1 0 3H5m12 2v-5h2m-2 3h2M5 10V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1v6M5 19v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1M10 3v4a1 1 0 0 1-1 1H5m6 4v5h1.375A1.627 1.627 0 0 0 14 15.375v-1.75A1.627 1.627 0 0 0 12.375 12H11Z"/>
               </svg>

               <span class="ms-3">Transcript</span>
            </router-link>
         </li>
         <li>
            <router-link to="/devp" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="2" d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
               </svg>

               <span class="ms-3">Profile</span>
            </router-link>
         </li>
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