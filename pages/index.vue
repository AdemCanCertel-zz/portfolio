<template>
  <div>
    <header style="backdrop-filter: blur(16px);" class="sticky top-0 full-container mt-2 text-gray-400">
      <Header/>
    </header>
    <main>
      <div class="full-container">
        <section>
          <div class="space-y-5 mt-10">
            <div class="title text-gray-100 text-xl md:text-3xl text-highlight font-semibold">
              <h1>AdemCan Certel</h1>
              <h1 class="text-xl">
                <span class="text-green-400">Front-end</span> Developer
              </h1>
            </div>
            <div style="color: rgba(229,231,235);" class="text-md">
              Hi there, my name is  AdemCan Certel 17 years old high school student in Turkey from 2017 I am doing the site with web technologies. Doing web projects through JavaScript.
            </div>
          </div>
          <div class="flex mt-4 space-x-4">
            <div class="flex">
              <Status/>
            </div>
          </div>
        </section>
      </div>
      <div class="full-container mt-10">
        <section class="full-container">
           <h1 style="color: rgba(229,231,235);" class="text-2xl font-semibold -ml-7">Projects I currently work on</h1>
        </section>
        <div class="mt-2 grid gap-2 md:gap-4 md:grid-cols-2">
          <div>
            <a href="https://github.com/AdemCanCertel/ademcancertel.github.io" target="_blank">
            <div class="rounded-lg border border-opacity-25 flex">
              <div class="p-4">
                <h3 style="--tw-text-opacity: 1; color: rgba(243,244,246,var(--tw-text-opacity));" class="font-medium text-lg text-gray-700 truncate">Twitter Clone</h3>
                <p style="--tw-text-opacity: 1; color: rgba(243,244,246,var(--tw-text-opacity));" class="text-gray-400 line-clamp-2">Next.js, a Twitter Clone project using Tailwind CSS technologies.</p>
              </div>
            </div>
            </a>
          </div>
           <div>
            <a href="https://github.com/AdemCanCertel/ademcancertel.github.io" target="_blank">
            <div class="rounded-lg border border-opacity-25 flex">
              <div class="p-4">
                <h3 style="--tw-text-opacity: 1; color: rgba(243,244,246,var(--tw-text-opacity));" class="font-medium text-lg text-gray-700 truncate">This Website</h3>
                <p style="--tw-text-opacity: 1; color: rgba(243,244,246,var(--tw-text-opacity));" class="text-gray-400 line-clamp-2">These are the source code for my personal web page.</p>
              </div>
            </div>
            </a>
          </div>
        </div>
      </div>
       <div class="full-container mt-10">
        <section>
            <h1 style="color: rgba(229,231,235);" class="text-xl font-semibold">Education</h1>
            <div class="mt-4 grid gap-2">
                <div class="overflow-hidden">
                    <a href="https://alibeyeml.meb.k12.tr/tema/index.php" style="color: rgba(209,213,219,var(--tw-text-opacity));" class="text-gray-700">
                        <h1 class="text-lg">Alibeyköy MTAL</h1>
                    </a>
                        <div class="flex space-x-3 divide-x-3 divide-gray-400 text-lg text-gray-700 items-center">
                            <div class="flex items-center flex-shrink-0 space-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" style="color: #c0bfbf;" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <span style="color: #D1D5DB;" class="text-sm">2019-</span>
                            </div>
                            <div style="color: #D1D5DB; text-overflow: ellipsis;" class="pl-2 text-sm">Computer-Aided Drawing of Machine Technologies</div>
                        </div>
                </div>
            </div>
        </section>
    </div>
    </main>
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
import Status from '~/components/Status.vue';

export default {

}
</script>

<style>
  body {
    background-color: #111827;
  }

  .full-container {
    max-width: 42rem;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
}
</style>