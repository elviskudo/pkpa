<template>
  <div class="tw-bg-white tw-p-4 tw-flex tw-flex-col tw-min-h-screen">
    <v-breadcrumbs :items="items">
      <template #item="{ item }">
        <v-breadcrumbs-item
          :href="item.href"
          :disabled="item.disabled"
        >
          {{ item.text.toUpperCase() }}
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
    <div class="tw-flex tw-flex-col tw-bg-transparent tw-mb-16">
      <div class="tw-p-4 tw-mt-4 tw-text-white tw-bg-[#FF9900] tw-rounded-md tw-shadow-md md:tw-w-full">
        <div class="tw-flex tw-items-center tw-justify-center">
          <span class="tw-text-1xl tw-font-semibold tw-tracking-wider tw-uppercase">{{ content.name }}</span>
        </div>
      </div>
      <div ref="bG" class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-pt-4 tw-mb-4">
        <div v-if="content.content_type_id=='8'">
          <iframe width="950" height="550" :src="content.url" />
        </div>
        <div v-if="content.content_type_id=='1'">
          <div v-if="content.access_limit == null">
            <video
              v-if="objCount.count == 0"
              id="vid"
              width="950"
              height="550"
              autoplay="autoplay"
              muted="muted"
              playsinline="playsinline"
              preload="metadata"
              data-aos="fade-up"
              style="pointer-events: none;"
            >
              <source :src="content.url">
            </video>
            <video
              v-else
              width="950"
              height="550"
              controls
              autoplay
              controlsList="nodownload"
              :src="content.url"
            >
              <!-- <source > -->
            </video>
            <div v-if="objCount.count==0" class="tw-rounded tw-cursor-pointer tw-bg-[#FF9900] tw-w-20 tw-text-center tw-mt-4" @click="unmute">
              <span ref="sound" class="tw-text-white">Unmute</span>
            </div>
          </div>
          <div v-else-if="(content.access_limit !== null) && (content.access_limit > objCount.count)">
            <video
              v-if="objCount.count == 0"
              id="vid"
              width="950"
              height="550"
              autoplay="autoplay"
              muted="muted"
              playsinline="playsinline"
              preload="metadata"
              data-aos="fade-up"
              style="pointer-events: none;"
            >
              <source :src="content.url">
            </video>
            <video
              v-else
              width="950"
              height="550"
              controls
              autoplay
              controlsList="nodownload"
              :src="content.url"
            >
              <!-- <source > -->
            </video>
            <div v-if="objCount.count==0" class="tw-rounded tw-cursor-pointer tw-bg-[#FF9900] tw-w-20 tw-text-center tw-mt-4" @click="unmute">
              <span ref="sound" class="tw-text-white">Unmute</span>
            </div>
          </div>
          <div v-else>
            <span>Anda telah mencapai batas akses</span>
          </div>
        </div>
        <div v-if="content.content_type_id=='2'" class="tw-flex tw-items-center tw-justify-center">
          <!-- <div class="tw-w-full tw-h-full"> -->
          <!-- <embed :src="content.url" style="border: 0; width: 100%; height: 100%"> -->
          <!-- for document -->
          <iframe
            style="border: 0;"
            class="doc"
            :src="content.url"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
          <!-- </div> -->
        </div>
        <div v-if="content.content_type_id=='4'">
          <!-- <iframe
            style="border: 0;"
            class="doc"
            :src="content.url"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          /> -->
          <div class="tw-flex tw-flex-row">
            <div class="tw-flex tw-flex-wrap tw-flex-col md:tw-flex-row tw-mt-10 tw-px-12">
              <div
                class="
                  tw-flex tw-flex-col
                  tw-w-full
                  lg:tw-w-3/6
                  sm:tw-px-4
                  lg:tw-px-10
                  md:tw-w-1/2 md:tw-justify md:tw-items-start md:tw-text-justify
                "
              >
                <p
                  class="
                    tw-text-lg
                    tw-font-bold
                    md:tw-justify md:tw-text-left
                  "
                >
                  {{ content.topic.name }}
                </p>
                <div v-html="content.description" />
                <!-- <p class="tw-text-justify tw-pt-6">
                  {{ content.description }}
                </p> -->
                <!-- <ol class="tw-list-decimal tw-pl-4">
                  <li>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</li>
                  <li>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</li>
                </ol> -->
                <div>
                  <div class="tw-mt-4">
                    <div class="tw-flex tw-flex-row">
                      <!-- dropdown -->
                      <div class="tw-dropdown tw-inline-block tw-relative">
                        <button class="tw-text-[#1D1D1D] tw-py-2 tw-px-4 tw-rounded tw-inline-flex tw-items-center btn-dropdown">
                          <svg width="23" height="23" viewBox="0 0 23 23" fill="none">
                            <g clip-path="url(#clip0_3295_10496)">
                              <path d="M16.5682 -6H4.6768C4.16871 -6 3.75684 -5.58813 3.75684 -5.07999V16.08C3.75684 16.5881 4.16871 17 4.67685 17H19.7034C20.2115 17 20.6235 16.5881 20.6235 16.08V-1.94476L16.5682 -6Z" fill="#E1E6E9" />
                              <path d="M20.6236 6.6748H2.37695V12.9762H20.6236V6.6748Z" fill="#27A2DB" />
                              <path d="M8.9743 8.42687C9.34595 8.7633 9.53136 9.23122 9.53136 9.83071C9.53136 10.43 9.35135 10.9044 8.9909 11.2536C8.63045 11.6031 8.07879 11.7777 7.33637 11.7777H6.05664V7.92212H7.38038C8.07162 7.92212 8.60309 8.09043 8.9743 8.42687ZM8.87509 9.84706C8.87509 8.96457 8.36965 8.52333 7.35838 8.52333H6.70751V11.1653H7.43018C7.89702 11.1653 8.25477 11.0543 8.50299 10.8316C8.75117 10.6093 8.87509 10.2811 8.87509 9.84706Z" fill="#EBF0F3" />
                              <path d="M13.5962 11.2454C13.2066 11.626 12.725 11.8163 12.1513 11.8163C11.5777 11.8163 11.0961 11.626 10.7064 11.2454C10.3164 10.865 10.1216 10.3905 10.1216 9.82247C10.1216 9.25421 10.3164 8.77996 10.7064 8.39932C11.0961 8.01869 11.5777 7.82861 12.1513 7.82861C12.725 7.82861 13.2066 8.01869 13.5962 8.39932C13.9863 8.77996 14.1811 9.25421 14.1811 9.82247C14.1811 10.3905 13.9863 10.8649 13.5962 11.2454ZM13.1195 8.83227C12.8565 8.56027 12.5337 8.42427 12.1513 8.42427C11.7689 8.42427 11.4462 8.56027 11.1831 8.83227C10.9206 9.10451 10.789 9.43441 10.789 9.82247C10.789 10.2105 10.9206 10.5404 11.1831 10.8124C11.4462 11.0847 11.7689 11.2207 12.1513 11.2207C12.5338 11.2207 12.8565 11.0847 13.1195 10.8124C13.3821 10.5404 13.5136 10.2105 13.5136 9.82247C13.5136 9.43446 13.3822 9.10446 13.1195 8.83227Z" fill="#EBF0F3" />
                              <path d="M16.7627 11.1875C16.9866 11.1875 17.1797 11.15 17.3417 11.0746C17.5033 10.9992 17.6726 10.8787 17.8494 10.7133L18.2682 11.1435C17.8602 11.5957 17.3646 11.822 16.782 11.822C16.1989 11.822 15.7155 11.6344 15.3312 11.2593C14.947 10.8843 14.7549 10.4098 14.7549 9.83617C14.7549 9.26251 14.9506 8.78468 15.3424 8.40203C15.7338 8.01982 16.2285 7.82861 16.8259 7.82861C17.4234 7.82861 17.9225 8.04923 18.3233 8.49048L17.91 8.94273C17.7259 8.76631 17.5522 8.64313 17.3884 8.57309C17.225 8.5033 17.0329 8.46828 16.812 8.46828C16.4224 8.46828 16.0952 8.59441 15.8303 8.84622C15.5655 9.09803 15.4331 9.41987 15.4331 9.81151C15.4331 10.2032 15.5646 10.5304 15.8276 10.7932C16.0907 11.0562 16.4022 11.1875 16.7627 11.1875Z" fill="#EBF0F3" />
                            </g>
                            <defs>
                              <clipPath id="clip0_3295_10496">
                                <rect width="23" height="23" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>&nbsp; <span>{{ content.topic.name }}</span>&nbsp; <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.41109 7.2845C5.36522 7.35112 5.30384 7.40559 5.23225 7.44323C5.16065 7.48086 5.08098 7.50052 5.00009 7.50052C4.91921 7.50052 4.83953 7.48086 4.76794 7.44323C4.69634 7.40559 4.63496 7.35112 4.58909 7.2845L0.0890912 0.7845C0.0370035 0.709528 0.00645823 0.621715 0.000774337 0.530602C-0.00491051 0.439489 0.0144834 0.348561 0.0568485 0.267696C0.0992136 0.186832 0.16293 0.119123 0.241074 0.0719283C0.319218 0.0247332 0.408801 -0.00014401 0.500092 -2.10596e-07L9.50009 5.76209e-07C9.59117 0.000376789 9.68042 0.0255739 9.75825 0.0728821C9.83608 0.12019 9.89954 0.18782 9.94181 0.268497C9.98408 0.349175 10.0035 0.439848 9.99814 0.530766C9.99273 0.621684 9.96263 0.709407 9.91109 0.784501L5.41109 7.2845Z" fill="#1D1D1D" />
                          </svg>
                        </button>
                        <ul class="tw-dropdown-menu tw-absolute tw-hidden tw-text-gray-700 tw-right-0 tw-shadow-[2px_2px_8px_rgba(0,0,0,0.15)]">
                          <li class="">
                            <a class="tw-flex tw-rounded-t tw-bg-white hover:tw-bg-[#146EB4] hover:tw-text-white tw-py-2 tw-px-4 tw-whitespace-no-wrap" @click="openFile(content.url)">
                              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.12672 9.33321C5.82101 9.01311 6.48512 8.85299 7.1187 8.85299H15.532V7.23502C15.532 6.61483 15.3095 6.08201 14.8644 5.63706C14.4194 5.19215 13.887 4.96972 13.2667 4.96972H7.76581V4.64615C7.76581 4.02596 7.54339 3.49339 7.09848 3.04858C6.65353 2.60367 6.12096 2.3811 5.50077 2.3811H2.26504C1.64485 2.3811 1.11228 2.60363 0.667333 3.04858C0.222385 3.49342 0 4.02599 0 4.64619V14.3535C0 14.3806 0.00173545 14.4228 0.00510009 14.4802C0.00842932 14.5374 0.0102002 14.5796 0.0102002 14.6065L0.0607053 14.5461L3.46842 10.5415C3.87961 10.0561 4.4324 9.65325 5.12672 9.33321Z" fill="#1D1D1D" />
                                <path d="M18.7322 10.2785C18.5537 10.1907 18.3498 10.1467 18.1205 10.1467H7.11878C6.67387 10.1467 6.19017 10.2665 5.6678 10.5059C5.1454 10.7455 4.7392 11.0366 4.44941 11.3807L1.05183 15.385C0.842798 15.6209 0.738281 15.8434 0.738281 16.0525C0.738281 16.2547 0.827639 16.3997 1.00625 16.4872C1.18486 16.5749 1.38876 16.6188 1.61801 16.6188H12.62C13.0649 16.6188 13.5483 16.499 14.0708 16.2598C14.5932 16.0205 14.9993 15.7289 15.2892 15.385L18.6868 11.3807C18.8957 11.1447 19.0001 10.9224 19.0001 10.7131C19.0002 10.511 18.911 10.3661 18.7322 10.2785Z" fill="#1D1D1D" />
                              </svg>&nbsp; Open
                            </a>
                          </li>
                          <li class="">
                            <a class="tw-flex tw-rounded-t tw-bg-white hover:tw-bg-[#146EB4] hover:tw-text-white tw-py-2 tw-px-4 tw-whitespace-no-wrap" @click="openFile(content.url)">
                              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2414_4527)">
                                  <path d="M9.00002 12C8.84627 12 8.69927 11.937 8.59352 11.826L4.65602 7.701C4.31477 7.344 4.56827 6.75 5.06252 6.75H7.12502V2.4375C7.12502 1.92075 7.54577 1.5 8.06252 1.5H9.93752C10.4543 1.5 10.875 1.92075 10.875 2.4375V6.75H12.9375C13.4318 6.75 13.6853 7.344 13.344 7.701L9.40652 11.826C9.30077 11.937 9.15377 12 9.00002 12Z" fill="#1D1D1D" />
                                  <path d="M16.6875 16.5H1.3125C0.58875 16.5 0 15.9112 0 15.1875V14.8125C0 14.0887 0.58875 13.5 1.3125 13.5H16.6875C17.4112 13.5 18 14.0887 18 14.8125V15.1875C18 15.9112 17.4112 16.5 16.6875 16.5Z" fill="#1D1D1D" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_2414_4527">
                                    <rect width="18" height="18" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>&nbsp; Download
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <!-- <div class="tw-flex tw-flex-row">
                      <div class="tw-dropdown tw-inline-block tw-relative">
                        <button class="tw-text-[#1D1D1D] tw-py-2 tw-px-4 tw-rounded tw-inline-flex tw-items-center btn-dropdown">
                          <svg width="23" height="23" viewBox="0 0 23 23" fill="none">
                            <g clip-path="url(#clip0_3295_10506)">
                              <path d="M16.5682 -6H4.6768C4.16871 -6 3.75684 -5.58813 3.75684 -5.07999V16.08C3.75684 16.5881 4.16871 17 4.67685 17H19.7034C20.2115 17 20.6235 16.5881 20.6235 16.08V-1.94476L16.5682 -6Z" fill="#E1E6E9" />
                              <path d="M20.6236 6.6748H2.37695V12.9762H20.6236V6.6748Z" fill="#D33737" />
                              <path d="M6.209 11.2025C6.25667 11.2355 6.341 11.2758 6.462 11.3235C6.583 11.3675 6.726 11.3895 6.891 11.3895C7.034 11.3895 7.15133 11.3657 7.243 11.318C7.33467 11.2667 7.40433 11.1915 7.452 11.0925C7.50333 10.9935 7.53633 10.8652 7.551 10.7075C7.56933 10.5498 7.5785 10.361 7.5785 10.141V8.095H8.3375V10.0805C8.3375 10.3738 8.321 10.6415 8.288 10.8835C8.255 11.1255 8.19083 11.3345 8.0955 11.5105C8.00017 11.6865 7.85533 11.8222 7.661 11.9175C7.47033 12.0128 7.2155 12.0605 6.8965 12.0605C6.7205 12.0605 6.56283 12.0403 6.4235 12C6.28417 11.9597 6.15583 11.8992 6.0385 11.8185L6.209 11.2025ZM10.1087 12V8.095H11.7642C11.9438 8.095 12.1088 8.13167 12.2592 8.205C12.4095 8.27833 12.5397 8.37733 12.6497 8.502C12.7633 8.62667 12.8513 8.766 12.9137 8.92C12.976 9.074 13.0072 9.23167 13.0072 9.393C13.0072 9.613 12.9558 9.822 12.8532 10.02C12.7505 10.218 12.6093 10.3793 12.4297 10.504C12.25 10.6287 12.0373 10.691 11.7917 10.691H10.8677V12H10.1087ZM10.8677 10.0255H11.7477C11.8393 10.0255 11.9218 9.99983 11.9952 9.9485C12.0685 9.89717 12.1272 9.82383 12.1712 9.7285C12.2152 9.6295 12.2372 9.51767 12.2372 9.393C12.2372 9.25733 12.2115 9.14183 12.1602 9.0465C12.1125 8.95117 12.0483 8.87967 11.9677 8.832C11.8907 8.78433 11.8063 8.7605 11.7147 8.7605H10.8677V10.0255ZM16.1579 12.0275C15.9049 12.0275 15.6648 11.9762 15.4374 11.8735C15.2138 11.7708 15.0158 11.6297 14.8434 11.45C14.6748 11.2667 14.5428 11.054 14.4474 10.812C14.3521 10.57 14.3044 10.3078 14.3044 10.0255C14.3044 9.75783 14.3521 9.50667 14.4474 9.272C14.5428 9.03367 14.6766 8.82467 14.8489 8.645C15.0213 8.46533 15.2229 8.32417 15.4539 8.2215C15.6849 8.11883 15.9361 8.0675 16.2074 8.0675C16.5741 8.0675 16.8876 8.14633 17.1479 8.304C17.4119 8.458 17.6099 8.66333 17.7419 8.92L17.1754 9.338C17.0764 9.14367 16.9371 8.99517 16.7574 8.8925C16.5814 8.78983 16.3889 8.7385 16.1799 8.7385C16.0149 8.7385 15.8646 8.77333 15.7289 8.843C15.5933 8.91267 15.4759 9.008 15.3769 9.129C15.2779 9.25 15.2009 9.38933 15.1459 9.547C15.0946 9.70467 15.0689 9.8715 15.0689 10.0475C15.0689 10.2345 15.0964 10.4068 15.1514 10.5645C15.2101 10.7222 15.2908 10.8597 15.3934 10.977C15.4998 11.0943 15.6226 11.1878 15.7619 11.2575C15.9013 11.3235 16.0553 11.3565 16.2239 11.3565C16.4219 11.3565 16.6108 11.3052 16.7904 11.2025C16.9738 11.0998 17.1443 10.9495 17.3019 10.7515V11.4995C16.9756 11.8515 16.5943 12.0275 16.1579 12.0275ZM17.2469 10.548H16.4604V9.9925H17.8739V12H17.2469V10.548Z" fill="white" />
                            </g>
                            <defs>
                              <clipPath id="clip0_3295_10506">
                                <rect width="23" height="23" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>&nbsp; <span>{{ content.topic.name }}</span>&nbsp; <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.41109 7.2845C5.36522 7.35112 5.30384 7.40559 5.23225 7.44323C5.16065 7.48086 5.08098 7.50052 5.00009 7.50052C4.91921 7.50052 4.83953 7.48086 4.76794 7.44323C4.69634 7.40559 4.63496 7.35112 4.58909 7.2845L0.0890912 0.7845C0.0370035 0.709528 0.00645823 0.621715 0.000774337 0.530602C-0.00491051 0.439489 0.0144834 0.348561 0.0568485 0.267696C0.0992136 0.186832 0.16293 0.119123 0.241074 0.0719283C0.319218 0.0247332 0.408801 -0.00014401 0.500092 -2.10596e-07L9.50009 5.76209e-07C9.59117 0.000376789 9.68042 0.0255739 9.75825 0.0728821C9.83608 0.12019 9.89954 0.18782 9.94181 0.268497C9.98408 0.349175 10.0035 0.439848 9.99814 0.530766C9.99273 0.621684 9.96263 0.709407 9.91109 0.784501L5.41109 7.2845Z" fill="#1D1D1D" />
                          </svg>
                        </button>
                        <ul class="tw-dropdown-menu tw-absolute tw-hidden tw-text-gray-700 tw-right-0 tw-shadow-[2px_2px_8px_rgba(0,0,0,0.15)]">
                          <li class="">
                            <a class="tw-flex tw-rounded-t tw-bg-white hover:tw-bg-[#146EB4] hover:tw-text-white tw-py-2 tw-px-4 tw-whitespace-no-wrap" @click="openFile(content.url)">
                              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.12672 9.33321C5.82101 9.01311 6.48512 8.85299 7.1187 8.85299H15.532V7.23502C15.532 6.61483 15.3095 6.08201 14.8644 5.63706C14.4194 5.19215 13.887 4.96972 13.2667 4.96972H7.76581V4.64615C7.76581 4.02596 7.54339 3.49339 7.09848 3.04858C6.65353 2.60367 6.12096 2.3811 5.50077 2.3811H2.26504C1.64485 2.3811 1.11228 2.60363 0.667333 3.04858C0.222385 3.49342 0 4.02599 0 4.64619V14.3535C0 14.3806 0.00173545 14.4228 0.00510009 14.4802C0.00842932 14.5374 0.0102002 14.5796 0.0102002 14.6065L0.0607053 14.5461L3.46842 10.5415C3.87961 10.0561 4.4324 9.65325 5.12672 9.33321Z" fill="#1D1D1D" />
                                <path d="M18.7322 10.2785C18.5537 10.1907 18.3498 10.1467 18.1205 10.1467H7.11878C6.67387 10.1467 6.19017 10.2665 5.6678 10.5059C5.1454 10.7455 4.7392 11.0366 4.44941 11.3807L1.05183 15.385C0.842798 15.6209 0.738281 15.8434 0.738281 16.0525C0.738281 16.2547 0.827639 16.3997 1.00625 16.4872C1.18486 16.5749 1.38876 16.6188 1.61801 16.6188H12.62C13.0649 16.6188 13.5483 16.499 14.0708 16.2598C14.5932 16.0205 14.9993 15.7289 15.2892 15.385L18.6868 11.3807C18.8957 11.1447 19.0001 10.9224 19.0001 10.7131C19.0002 10.511 18.911 10.3661 18.7322 10.2785Z" fill="#1D1D1D" />
                              </svg>&nbsp; Open
                            </a>
                          </li>
                          <li class="">
                            <a class="tw-flex tw-rounded-t tw-bg-white hover:tw-bg-[#146EB4] hover:tw-text-white tw-py-2 tw-px-4 tw-whitespace-no-wrap" @click="openFile(content.url)">
                              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2414_4527)">
                                  <path d="M9.00002 12C8.84627 12 8.69927 11.937 8.59352 11.826L4.65602 7.701C4.31477 7.344 4.56827 6.75 5.06252 6.75H7.12502V2.4375C7.12502 1.92075 7.54577 1.5 8.06252 1.5H9.93752C10.4543 1.5 10.875 1.92075 10.875 2.4375V6.75H12.9375C13.4318 6.75 13.6853 7.344 13.344 7.701L9.40652 11.826C9.30077 11.937 9.15377 12 9.00002 12Z" fill="#1D1D1D" />
                                  <path d="M16.6875 16.5H1.3125C0.58875 16.5 0 15.9112 0 15.1875V14.8125C0 14.0887 0.58875 13.5 1.3125 13.5H16.6875C17.4112 13.5 18 14.0887 18 14.8125V15.1875C18 15.9112 17.4112 16.5 16.6875 16.5Z" fill="#1D1D1D" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_2414_4527">
                                    <rect width="18" height="18" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>&nbsp; Download
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div> -->
                  </div>
                </div>
              </div>
              <div
                class="
                  tw-flex tw-flex-col
                  tw-w-full
                  lg:tw-w-3/6
                  sm:tw-px-4
                  lg:tw-px-10
                  md:tw-w-1/2 md:tw-justify md:tw-items-start md:tw-text-justify
                  tw-text-center
                "
              >
                <p
                  class="
                    sm:tw-text-center
                    tw-text-lg
                    tw-font-bold
                    md:tw-justify md:tw-text-left
                  "
                >
                  Upload Jawaban
                </p>

                <div class="tw-w-full">
                  <div class="">
                    <!-- <div class="tw-space-y-1 tw-text-center">
                      <svg class="tw-mx-auto" width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <path d="M14.0708 5.19852H11.1826C10.8636 5.19852 10.6049 5.45714 10.6049 5.77617C10.6049 6.0952 10.8636 6.35381 11.1826 6.35381H14.0708C14.3898 6.35381 14.6484 6.61243 14.6484 6.93146V14.4407C14.6484 14.7598 14.3898 15.0184 14.0708 15.0184H2.51806C2.19903 15.0184 1.94042 14.7598 1.94042 14.4407V6.93143C1.94042 6.6124 2.19903 6.35378 2.51806 6.35378H5.40623C5.72526 6.35378 5.98387 6.09516 5.98387 5.77613C5.98387 5.4571 5.72526 5.19849 5.40623 5.19849H2.51806C1.561 5.19849 0.785156 5.97433 0.785156 6.93139V14.4407C0.785156 15.3977 1.561 16.1736 2.51806 16.1736H14.0708C15.0278 16.1736 15.8037 15.3977 15.8037 14.4407V6.93143C15.8037 5.97437 15.0278 5.19852 14.0708 5.19852Z" fill="#1D1D1D" />
                        <path d="M11.5907 3.0573L8.70256 0.169136C8.47701 -0.0563787 8.11134 -0.0563787 7.88579 0.169136L4.99759 3.0573C4.77597 3.28678 4.78233 3.65245 5.01181 3.87407C5.23566 4.09028 5.59054 4.09028 5.81439 3.87407V3.87407C6.51634 3.17212 7.71656 3.66927 7.71656 4.66197V11.5526C7.71656 11.8716 7.97518 12.1302 8.29421 12.1302C8.61324 12.1302 8.87185 11.8716 8.87185 11.5526V4.66201C8.87185 3.6693 10.0721 3.17215 10.774 3.8741V3.8741C11.0035 4.09572 11.3692 4.08936 11.5908 3.85989C11.8069 3.63603 11.8069 3.28116 11.5907 3.0573Z" fill="#1D1D1D" />
                      </svg>
                      <div class="tw-flex tw-text-sm tw-font-bold">
                        <label for="file-upload" class="tw-relative tw-cursor-pointer tw-rounded-md tw-font-bold tw-text-indigo-600 hover:tw-text-indigo-500 focus-within:tw-outline-none focus-within:ring-2 focus-within:tw-ring-offset-2 focus-within:tw-ring-indigo-500">
                          <span>
                            Tarik file kesini atau klik untuk upload
                          </span>
                          <input id="file-upload" name="file-upload" type="file" class="sr-only">
                          <v-file-input
                            v-model="url"
                            label="File input"
                            filled
                            prepend-icon="mdi-camera"
                            class="tw-px-2 tw-py-2"
                          />
                          <input
                            ref="url"
                            class="tw-absolute tw-w-full tw-z-20 tw-h-full tw-opacity-0 tw-cursor-pointer"
                            name="file"
                            type="file"
                            @change="handleFilesUploadIjazah"
                          >
                        </label>
                      </div>
                      <p class="tw-text-xs tw-text-gray-500">
                        File : doc., xlxs., ppt., pdf., jpeg, jpg, png
                      </p>
                    </div>-->
                    <div class="tw-border-dashed tw-border-2 tw-rounded-md tw-w-full tw-h-full tw-relative">
                      <input
                        ref="url"
                        class="tw-absolute tw-w-full tw-z-20 tw-h-full tw-opacity-0 tw-cursor-pointer"
                        name="file"
                        type="file"
                        @change="handleFilesUploadIjazah"
                      >
                      <div class="tw-z-10 p-1 tw-mt-2">
                        <img src="~/assets/images/icon/upload.png" alt="upload" height="25px" width="25px" class="tw-mx-auto">
                        <h2 class="tw-mb-0 tw-mt-3 tw-text-black tw-text-center tw-text-xl">
                          Tarik file kesini atau klik untuk upload
                        </h2>
                        <p class="tw-text-black tw-text-center tw-mt-1 tw-text-xs">
                          Maksimum 10 MB, Format Pdf <br>
                          {{ urlName }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <p
                  class="
                    tw-w-full
                    tw-pt-4
                    tw-m-0
                    sm:tw-w-1/2 sm:tw-mx-auto
                    tw-text-sm
                    md:tw-w-3/4 md:tw-mx-auto
                    lg:tw-w-3/4 lg:tw-mx-auto
                    xl:tw-text-left
                    tw-min-w-full
                  "
                >
                  <v-btn
                    type="submit"
                    class="
                      tw-h-12
                      tw-text-white
                      tw-rounded
                      tw-font-bold
                      sm:tw-w-45
                      md:tw-w-45
                      lg:tw-w-45
                      xl:tw-w-45
                      tw-mb-4
                      tw-font-sans
                    "
                    style="color: rgb(255 255 255);"
                    color="#FF9900"
                    @click="submit"
                  >
                    Submit
                  </v-btn>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div v-if="content.content_type_id=='6'">
          <div class="img">
            <img :src="content.url" style="max-width: 950px; max-height:550px; width: 100%;">
          </div>
        </div>
      </div>
      <!-- <v-divider /> -->
      <div class="tw-mx-auto tw-w-full" style="max-width: 950px;">
        <div v-if="content.content_type_id!='4'">
          <span class="tw-text-lg tw-font-bold tw-px-0 tw-py-5">
            Deskripsi
          </span>
          <div class="tw-px-0 tw-mb-3" v-html="content.description" />
        </div>
        <div v-if="content.content_type_id=='3'" class="tw-pt-4">
          <table>
            <tr>
              <td class="tw-pr-4">
                Batas Akses
              </td>
              <td>:</td>
              <td class="tw-font-bold tw-pl-1">
                {{ content.access_limit }}
              </td>
            </tr>
            <tr>
              <td class="tw-pr-4">
                KKM
              </td>
              <td>:</td>
              <td class="tw-font-bold tw-pl-1">
                {{ content.min_value }}
              </td>
            </tr>
            <tr>
              <td class="tw-pr-4">
                Durasi
              </td>
              <td>:</td>
              <td class="tw-font-bold tw-pl-1">
                {{ content.duration }} Menit
              </td>
            </tr>
          </table>
          <div class="tw-py-5">
            <v-btn color="#FF9900" style="color: #fff;" @click="goQuiz">
              Mulai Kuis
            </v-btn>
          </div>
        </div>
      </div>
    </div>
    <div
      class="tw-bottom-0 tw-bg-white tw-fixed
             tw-inset-x-0
             tw-p-4
             lg:tw-ml-[17rem] tw-z-20"
    >
      <div class="tw-flex tw-justify-between tw-gap-2 tw-m-4">
        <div v-if="isFirst === false" class="tw-float-left tw-inline-block tw-bg-white">
          <a class="tw-inline-flex tw-items-center tw-justify-center tw-px-4 tw-py-2 tw-text-base tw-font-bold tw-leading-6 tw-text-gray-600 tw-whitespace-nowrap tw-bg-white tw-border tw-border-gray-200 tw-rounded-md tw-shadow-sm focus:tw-outline-none focus:tw-shadow-none tw-cursor-pointer" @click="$router.back()">
            Kembali
          </a>
        </div>
        <div v-else class="tw-float-left tw-inline-block tw-bg-white">
          <a class="tw-max-w-[300px] tw-text-ellipsis tw-overflow-hidden tw-inline-flex tw-items-center tw-justify-center tw-px-4 tw-py-2 tw-text-base tw-font-bold tw-leading-6 tw-text-gray-600 tw-whitespace-nowrap tw-bg-white tw-border tw-border-gray-200 tw-rounded-md tw-shadow-sm focus:tw-outline-none focus:tw-shadow-none tw-cursor-pointer" @click="fback()">
            Kembali
          </a>
        </div>
        <div class="tw-flex tw-justify-end tw-bg-white">
          <a v-if="showNext && content.content_type_id != '3'" ref="checkBtn" class="tw-inline-flex tw-items-center tw-justify-center tw-px-4 tw-py-2 tw-text-base tw-font-bold tw-leading-6 tw-text-gray-600 tw-whitespace-nowrap tw-bg-white tw-border tw-border-gray-200 tw-rounded-md tw-shadow-sm tw-bg-[#FF9900] focus:tw-outline-none focus:tw-shadow-none tw-cursor-pointer" @click.prevent="goNext()">
            Selanjutnya
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- </v-card>s -->
</template>

<script>
/* eslint-disable */
export default {
  data () {
    return {
      haveCourse: false,
      content: {},
      url: null,
      showNext: null,
      showFinish: null,
      items: [],
      objCount: {},
      firstContent: '',
      routeNow: '',
      urlName: '',
      isFirst: true,
      isProcessing: false
    }
  },
  async mounted () {
    if (typeof this.$route.params.id === 'undefined') {
      const res = await this.$axios.$get('/show-course/course')
      if (res.data.length === 0) {
        this.haveCourse = true
        return this.$router.push('/dashboard/user/course/')
      }
      if (res.data.length > 0) {
        const firstPrefix = res.data[0].id
        const secondPrefix = res.data[0].content_topic_id
        return this.$router.push(`/dashboard/user/course/${firstPrefix}/${secondPrefix}`)
      }
    }

    try {
      const res = await this.$axios.$get(`/bank-content-topic/${this.$route.params.id}`)
      this.content = res.data
      // console.log(res.data.topic.course.name)
      const ArrData = []
      const objData = {}
      const objData2 = {}
      const objData3 = {}
      objData.text = res.data.topic.course.name
      objData.disabled = false
      objData.href = '/dashboard/user/myclass'
      ArrData.push(objData)

      objData2.text = res.data.topic.name
      objData2.disabled = true
      objData2.href = this.$route.path
      ArrData.push(objData2)

      objData3.text = res.data.name
      objData3.disabled = false
      objData3.href = this.$route.path
      ArrData.push(objData3)

      this.items = ArrData

      // check count access content
      const path = this.$route.path
      const splitPath = path.split('/')
      const res2 = await this.$axios.$get(`history-access-content/count/?package_content_course_id=${splitPath[4]}&content_topic_id=${res.data.id}`)
      this.objCount = res2.data

      const paths = this.$route.path
      const splitPaths = paths.split('/')
      const coba = await this.$axios.get(`/course/course-topic-menu/${splitPaths[4]}`)
      this.firstContent = Number(coba.data.data[0].content_topic_id)
      this.routeNow = Number(splitPaths[5])
      if (this.firstContent === this.routeNow) {
        this.isFirst = true
      } else {
        this.isFirst = false
      }

      const progressData = coba.data.data.find(item => this.routeNow === item.content_topic_id)
      if (progressData.progress_id) {
        this.showNext = true
      }

      const video = document.getElementById('vid')
      if (video) {
        video.addEventListener('timeupdate', () => {
          const beforeVideoEnd = video.duration - 5
          if (video.currentTime > beforeVideoEnd) {
            this.showNext = true
            video.removeEventListener('timeupdate', () => {})
          }
        })
      }

      if (this.content.content_type_id !== 3) {
        this.$refs.bG.classList.add('tw-bg-transparent')
      } else {
        this.$refs.bG.classList.remove('tw-bg-transparent')
      }
    } catch (e) {
      console.log(e)
    }

    const btnDropdowns = document.getElementsByClassName('btn-dropdown')
    for (let i = 0; i < btnDropdowns.length; i++) {
      btnDropdowns[i].addEventListener('click', (e) => {
        console.log(e.currentTarget.nextSibling.nextSibling.classList.toggle('cei-show-dropdown'))
      })
    }
    // console.log(btnDropdowns[1])
  },
  methods: {
    async submit () {
      const formData = new FormData()
      formData.append('content_topic_id', this.content.id)
      formData.append('content_type_id', this.content.content_type_id)
      formData.append('url', this.url)

      const config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }
      try {
        const res = await this.$axios.$post('answer-task', formData, config)
        if (!res.error) {
          this.$swal({
            icon: 'success',
            title: 'Sukses..!!',
            text: 'Data berhasil disimpan'
          })
        } else {
          this.$swal({
            icon: 'error',
            title: 'Oops...',
            text: res.message
          })
        }
      } catch (err) {
        console.log(err)
        this.$swal({
          icon: 'error',
          title: 'Oops...',
          text: err.message
        })
      }
    },
    openFile (file) {
      window.open(file, '_blank')
    },
    fback () {
      this.$router.push('/dashboard/user/myclass')
    },
    unmute () {
      const video = document.getElementById('vid')
      const sound = this.$refs.sound
      video.muted = !video.muted

      if (video.muted) {
        sound.innerHTML = 'Unmute'
      } else {
        sound.innerHTML = 'Mute'
      }
    },
    goQuiz () {
      // this.$router.push(`quiz/${this.$route.params.id}`)
      window.location.href = `quiz/${this.$route.params.id}`
    },
    handleFilesUploadIjazah () {
      const file = event.target.files[0]
      if (typeof file !== 'undefined') {
        this.urlName = file.name
      }
      this.url = this.$refs.url.files[0]
    },
    async goNext () {
      if (this.isProcessing) {
        return
      }

      this.isProcessing = true
      const path = this.$route.path
      const splitPath = path.split('/')
      try {
        // add counter access content
        // if (this.content.content_type_id === 1) {
        //   const params = {
        //     package_content_course_id: splitPath[4],
        //     content_topic_id: this.$route.params.id
        //   }
        //   await this.$axios.$post('history-access-content', params)
        // }
        const data = { content_topic_id: this.$route.params.id, package_content_course_id: splitPath[4] }
        const res = await this.$axios.$post('progress-user', data)
        splitPath[5] = res.data.next
        window.history.pushState({}, '', splitPath.join('/'))
        window.location.reload()
      } catch (err) {
        this.$router.push('/dashboard/user/myclass')
        // this.$swal({
        //   icon: 'error',
        //   title: 'Oops...',
        //   text: err.message
        // })
      } finally {
        setTimeout(() => {
          this.isProcessing = false
        }, 1000)
      }
    }
  }
  // plugins: [
  //   require('@tailwindcss/aspect-ratio')
  // ]
}
</script>

<style scoped>
/* .bottom-bar{
  width: 76.4%;
  margin-left: -16px;
  border-top: 1px solid #C2C2C2;
} */

/* .btn-pagination {
  font-weight: 700;
  font-family: 'Open Sans', sans-serif;
  color: #4A4A4A;
  border: 1px solid #C2C2C2;
  font-size: 16px;
  line-height: 24px;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 8px;
  padding-bottom: 9px;
  border-radius: 5px;
} */
/* @media only screen and (max-width: 1080px){
  .remove-spacing{
    padding: 0px 0px 0px 0px !important;
    margin: 0px 12px 0px 0px !important
  }

  .bottom-bar{
    width: 96.5%;
    margin-left: -16px;
    border-top: 1px solid #C2C2C2;
  }

  .btn-pagination {
    font-weight: 700;
    font-family: 'Open Sans', sans-serif;
    color: #4A4A4A;
    border: 1px solid #C2C2C2;
    font-size: 16px;
    line-height: 24px;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 8px;
    padding-bottom: 9px;
    border-radius: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 200px;
  }
} */
.theme--light.v-application  {
  background: none !important;
  border: none;
}
</style>

<style scoped lang="scss">
::v-deep .container {
    height: 100% !important;
    width: 100% !important;
    background-color:#ffffff;
  }
  .trans {
    color: #ff9900;
    border: 2px solid #ff9900;
    background-color: transparent;
  }
  .trans:hover {
    color: #ffffff;
    background-color: #ff9900;
  }
  .doc{
    width:950px;
    height:600px
  }
  iframe, object, embed {
    max-width: 100%;
  }
  ::v-deep ul {
    list-style-type: disc;
    padding-left: 15px;
  }
  ::v-deep ol {
    list-style-type: decimal;
    padding-left: 15px;
  }

</style>
