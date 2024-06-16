<template>
  <v-app>
    <div class="">
      <v-card
        class="tw-mx-auto tw-my-24"
        max-width="700"
        min-height="1050"
      >
        <Notification v-if="error" :message="error" />
        <!-- <Notification v-if="error" :message="invalid[0]" /> -->
        <v-tabs
          v-model="tab"
          align-with-title
        >
          <v-tabs-slider color="yellow" />
          <v-tab ripple href="#tab-1">
            1. Informasi Umum <i class="mdi mdi-chevron-right" aria-hidden="true" style="padding-top: 1px;" />
          </v-tab>
          <br>
          <v-tab ripple href="#tab-2">
            2. Data Pribadi <i class="mdi mdi-chevron-right" aria-hidden="true" style="padding-top: 1px;" />
          </v-tab>
          <v-tab ripple href="#tab-3">
            3. Informasi Universitas <i class="mdi mdi-chevron-right" aria-hidden="true" style="padding-top: 1px;" />
          </v-tab>
          <v-tab ripple href="#tab-4">
            4. Unggah Dokumen
          </v-tab>
        </v-tabs>

        <div class="px-4 py-5">
          <v-tabs-items v-model="tab">
            <ValidationObserver ref="observer" @submit.prevent="submit()">
              <form method="post">
                <!-- informasi umum -->
                <v-tab-item value="tab-1">
                  <v-card flat>
                    <div class="tw-mb-8 tw-px-4">
                      <nuxt-link to="/">
                        <span class="tw-text-yellow-500 tw-text-md "><i class="mdi mdi-chevron-left" /> Kembali ke halaman homepage</span>
                      </nuxt-link>
                    </div>
                    <div class="tw-font-bold tw-text-lg tw-px-4">
                      INFORMASI UMUM
                    </div>
                    <v-card-text>
                      <ValidationProvider
                        v-slot="{ errors }"
                        name="Nama Lengkap"
                        rules="required|regex:^(?![\s.]+$)[a-zA-Z\s.]*$"
                      >
                        <div class="tw-grid md:tw-grid-cols-3 tw-grid-cols-1 tw-mb-2">
                          <div class="tw-flex tw-flex-col">
                            <label class="tw-block tw-text-gray-500 tw-font-bold tw-pr-4">
                              Nama Lengkap
                            </label>
                            <span class="tw-text-x">Disertai gelar untuk sertifikat</span>
                          </div>
                          <div class="tw-col-span-2">
                            <input v-model="fullname" name="fullname" class="tw-form-input tw-w-full" type="text" placeholder="">
                          </div>
                          <div class="tw-hidden md:tw-block" />
                          <span class="tw-text-red-700 tw-text-xs">{{ errors[0] }}</span>
                        </div>
                      </ValidationProvider>

                      <ValidationProvider
                        v-slot="{ errors }"
                        name="Email"
                        rules="required|email"
                      >
                        <div class="tw-grid md:tw-grid-cols-3 tw-grid-cols-1 tw-mb-2">
                          <div class="tw-flex tw-items-center">
                            <label class="tw-block tw-text-gray-500 tw-font-bold tw-pr-4">
                              Email
                            </label>
                          </div>
                          <div class="tw-col-span-2">
                            <input v-model="email" name="email" class="tw-form-input tw-w-full" type="email" placeholder="">
                          </div>
                          <div class="tw-hidden md:tw-block" />
                          <span class="tw-text-red-700 tw-text-xs">{{ errors[0] }}</span>
                        </div>
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{ errors }"
                        name="Nomor Telepon"
                        rules="required|numeric"
                      >
                        <div class="tw-grid md:tw-grid-cols-3 tw-grid-cols-1">
                          <div class="tw-flex tw-items-center">
                            <label class="tw-block tw-text-gray-500 tw-font-bold tw-pr-4">
                              Nomor Telepon
                            </label>
                          </div>
                          <div class="tw-col-span-2">
                            <input v-model="phone_no" name="phone_no" class="tw-form-input tw-w-full" type="text" placeholder="">
                          </div>
                          <div class="tw-hidden md:tw-block" />
                          <span class="tw-text-red-700 tw-text-xs">{{ errors[0] }}</span>
                        </div>
                      </ValidationProvider>
                      <div class="tw-grid md:tw-grid-cols-3 tw-grid-cols-1 md:tw-gap-y-2">
                        <div class="tw-col-span-1" />
                        <div class="tw-rounded-md tw-my-2 tw-col-span-2 tw-w-full" style="background: #FFFAF2;">
                          <div class="tw-justify tw-pt-2 tw-pl-2 tw-flex-row tw-flex tw-items-center tw-justify-start tw-w-full">
                            <v-icon class="tw-mr-1" style="font-size: 15px;">
                              mdi-information-outline
                            </v-icon>
                            <h2 style=" color: #834E00; font-size: 15px;">
                              <b>
                                Mohon Perhatian
                              </b>
                            </h2>
                          </div>
                          <div class="tw-w-full tw-px-3 tw-pb-2 tw-items-end tw-justify-end tw-z-10">
                            <ul class="tw-list-disc tw-ml-8 tw-pl-8" style=" color: #B66D00;">
                              <li>untuk keperluan pembayaran ovo, pastikan nomor anda terhubung dengan akun ovo</li>
                            </ul>
                          </div>
                        </div>
                        <!-- tombol checkbox -->
                        <div class="tw-flex tw-items-center">
                          <label class="tw-block tw-text-gray-500 tw-font-bold tw-pr-4">
                            Nomor Whatsapp
                          </label>
                        </div>
                        <div class="tw-col-span-2 tw-flex tw-items-center">
                          <input
                            v-model="telpCheckbox"
                            class="tw-rounded tw-mr-2"
                            type="checkbox"
                            @click="istelpCheckbox"
                          >
                          <label class="tw-text-sm" style="color: #858585;"> sama dengan nomer telepon</label>
                        </div>
                      </div>
                      <ValidationProvider
                        v-slot="{ errors }"
                        name="Nomor Whatsapp"
                        rules="required|numeric"
                      >
                        <div class="tw-grid md:tw-grid-cols-3 tw-grid-cols-1 tw-mb-2">
                          <div class="tw-col-span-1" />
                          <div class="tw-col-span-2">
                            <input
                              v-model="wa_no"
                              name="wa_no"
                              class="tw-form-input tw-w-full"
                              type="text"
                            >
                            <span class="tw-text-red-700 tw-text-xs">{{ errors[0] }}</span>
                          </div>
                        </div>
                      </ValidationProvider>
                      <div class="tw-w-full">
                        <ValidationProvider
                          v-slot="{ errors }"
                          name="confirm"
                          rules="required"
                        >
                          <div class="tw-grid md:tw-grid-cols-3 tw-grid-cols-1">
                            <div class="tw-flex tw-items-center">
                              <label class="tw-block tw-text-gray-500 tw-font-bold tw-pr-4">
                                Kata Sandi
                              </label>
                            </div>
                            <div class="tw-relative tw-col-span-2 tw-w-full">
                              <div class="tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-items-center tw-px-2">
                                <input class="tw-hidden" type="checkbox">
                                <label v-if="fvisibility =='password'" class="tw-px-2 tw-py-1 tw-cursor-pointer" for="toggle" @click="switchhide('fpass')"><i class="mdi mdi-eye-off" aria-hidden="true" /></label>
                                <label v-if="fvisibility =='text'" class="tw-px-2 tw-py-1 tw-cursor-pointer" for="toggle" @click="switchshow('fpass')"><i class="mdi mdi-eye" aria-hidden="true" /></label>
                              </div>
                              <input
                                v-model="password"
                                class="tw-form-input tw-w-full"
                                :type="fvisibility"
                                name="password"
                                placeholder="Password"
                                required
                                autocomplete="off"
                                @input="password_check"
                              >
                            </div>
                            <div />
                            <span class="tw-col-span-2 tw-text-red-700 tw-text-xs">{{ errors[0] }}</span>
                            <div />
                            <div class="tw-flex tw-flex-col tw-col-span-2">
                              <p class="frmValidation" :class="{'frmValidation--passed' : password.length > 7}">
                                <i class="frmIcon fas" :class="password.length > 7 ? 'mdi mdi-check' : 'mdi mdi-close'" /> Longer than 7 characters
                              </p>
                              <p class="frmValidation" :class="{'frmValidation--passed' :has_lowercase }">
                                <i class="frmIcon fas" :class="has_lowercase ? 'mdi mdi-check' : 'mdi mdi-close'" /> Has a lowercase letter
                              </p>
                              <p class="frmValidation" :class="{'frmValidation--passed' : has_number }">
                                <i class="frmIcon fas" :class="has_number ? 'mdi mdi-check' : 'mdi mdi-close'" /> Has a number
                              </p>
                              <p class="frmValidation" :class="{'frmValidation--passed' : has_special }">
                                <i class="frmIcon fas" :class="has_special ? 'mdi mdi-check' : 'mdi mdi-close'" /> Has a special character
                              </p>
                            </div>
                          </div>
                        </ValidationProvider>
                      </div>
                      <ValidationProvider
                        v-slot="{ errors }"
                        rules="required|password:@confirm"
                      >
                        <div class="tw-grid md:tw-grid-cols-3 tw-grid-cols-1">
                          <div class="tw-flex tw-items-center">
                            <label class="tw-block tw-text-gray-500 tw-font-bold tw-pr-4">
                              Konfirmasi Kata Sandi
                            </label>
                          </div>
                          <div class="tw-relative tw-col-span-2 tw-w-full">
                            <div class="tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-items-center tw-px-2">
                              <input class="tw-hidden" type="checkbox">
                              <label v-if="svisibility =='password'" class="tw-px-2 tw-py-1 tw-cursor-pointer" for="toggle" @click="switchhide('spass')"><i class="mdi mdi-eye-off" aria-hidden="true" /></label>
                              <label v-if="svisibility =='text'" class="tw-px-2 tw-py-1 tw-cursor-pointer" for="toggle" @click="switchshow('spass')"><i class="mdi mdi-eye" aria-hidden="true" /></label>
                            </div>
                            <input
                              v-model="confirm_password"
                              name="confirm_password"
                              class="tw-form-input tw-w-full"
                              :type="passwordType"
                              placeholder=""
                            >
                          </div>
                          <div class="tw-hidden md:tw-block" />
                          <span class="tw-w-full md:tw-col-span-2 tw-text-red-700 tw-text-xs">{{ errors[0] }}</span>
                        </div>
                      </ValidationProvider>
                    </v-card-text>
                  </v-card>
                  <hr class="tw-pt-2 tw-mt-2">
                  <div class="tw-pt-4 tw-flex tw-justify-end">
                    <v-btn large color="primary p-2 content-center" @click="changeTab2()">
                      <p class="tw-px-8 mb-0">
                        Next
                      </p>
                    </v-btn>
                  </div>
                </v-tab-item>

                <!-- data pribadi -->
                <v-tab-item value="tab-2">
                  <v-card flat>
                    <div class="tw-font-bold tw-text-lg tw-px-4">
                      DATA PRIBADI
                    </div>
                    <v-card-text>
                      <ValidationProvider
                        v-slot="{ errors }"
                        rules="required"
                      >
                        <div class="tw-grid md:tw-grid-cols-3 tw-grid-cols-1 tw-mb-2">
                          <div class="tw-flex tw-items-center">
                            <label class="tw-block tw-text-gray-500 tw-font-bold tw-pr-4">
                              Tempat Lahir
                            </label>
                          </div>
                          <div class="tw-col-span-2">
                            <input v-model="born_place" name="born_place" class="tw-form-input tw-w-full" type="text" placeholder="">
                          </div>
                          <div class="tw-hidden md:tw-block" />
                          <span class="tw-text-red-700 tw-text-xs">{{ errors[0] }}</span>
                        </div>
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{ errors }"
                        rules="required"
                      >
                        <div class="tw-grid md:tw-grid-cols-3 tw-grid-cols-1 tw-mb-2">
                          <div class="tw-flex tw-items-center">
                            <label class="tw-block tw-text-gray-500 tw-font-bold tw-pr-4">
                              Tanggal Lahir
                            </label>
                          </div>
                          <div class="tw-col-span-2">
                            <input v-model="born_date" name="born_date" class="tw-form-input tw-w-full" type="date" placeholder="">
                          </div>
                          <div class="tw-hidden md:tw-block" />
                          <span class="tw-text-red-700 tw-text-xs">{{ errors[0] }}</span>
                        </div>
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{ errors }"
                        rules="required"
                      >
                        <div class="tw-grid md:tw-grid-cols-3 tw-grid-cols-1 tw-mb-2">
                          <div class="tw-flex tw-items-center">
                            <label class="tw-block tw-text-gray-500 tw-font-bold tw-pr-4">
                              Jenis Kelamin
                            </label>
                          </div>
                          <div class="tw-flex tw-flex-col tw-col-span-2">
                            <div class="tw-col-span-2">
                              <div class="tw-inline-flex">
                                <input v-model="gender" type="radio" name="gender" value="l" class="tw-form-radio">
                                <label>&nbsp;Laki-laki</label>
                              </div>
                              <div class="tw-inline-flex">
                                <input v-model="gender" type="radio" name="gender" value="p" class="tw-form-radio tw-ml-3">
                                <label>&nbsp;Perempuan</label>
                              </div>
                            </div>
                          </div>
                          <div class="tw-hidden md:tw-block" />
                          <span class="tw-text-red-700 tw-text-xs">{{ errors[0] }}</span>
                        </div>
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{ errors }"
                        rules="required"
                      >
                        <div class="tw-grid md:tw-grid-cols-3 tw-grid-cols-1 tw-mb-2">
                          <div class="tw-flex tw-items-center">
                            <label class="tw-block tw-text-gray-500 tw-font-bold tw-pr-4">
                              Provinsi
                            </label>
                          </div>
                          <div class="tw-col-span-2">
                            <select v-model="state_id" name="state" class="tw-form-select tw-w-full" @change="getCity">
                              <option selected disabled value="">
                                Pilih
                              </option>
                              <option v-for="state in states" :key="state.id" :value="state.id">
                                {{ state.name }}
                              </option>
                            </select>
                          </div>
                          <div class="tw-hidden md:tw-block" />
                          <span class="tw-text-red-700 tw-text-xs">{{ errors[0] }}</span>
                        </div>
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{ errors }"
                        rules="required"
                      >
                        <div class="tw-grid md:tw-grid-cols-3 tw-grid-cols-1 tw-mb-2">
                          <div class="tw-flex tw-items-center">
                            <label class="tw-block tw-text-gray-500 tw-font-bold tw-pr-4">
                              Kota/Kab
                            </label>
                          </div>
                          <div class="tw-col-span-2">
                            <select v-model="city_id" name="city" class="tw-form-select tw-w-full" @change="getDistrict">
                              <option selected disabled value="">
                                Pilih
                              </option>
                              <option v-for="city in cities" :key="city.id" :value="city.id">
                                {{ city.name }}
                              </option>
                            </select>
                          </div>
                          <div class="tw-hidden md:tw-block" />
                          <span class="tw-text-red-700 tw-text-xs">{{ errors[0] }}</span>
                        </div>
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{ errors }"
                        rules="required"
                      >
                        <div class="tw-grid md:tw-grid-cols-3 tw-grid-cols-1 tw-mb-2">
                          <div class="tw-flex tw-items-center">
                            <label class="tw-block tw-text-gray-500 tw-font-bold tw-pr-4">
                              Kecamatan
                            </label>
                          </div>
                          <div class="tw-col-span-2">
                            <select v-model="district_id" name="district" class="tw-form-select tw-w-full">
                              <option selected disabled value="">
                                Pilih
                              </option>
                              <option v-for="district in districts" :key="district.id" :value="district.id">
                                {{ district.name }}
                              </option>
                            </select>
                          </div>
                          <div class="tw-hidden md:tw-block" />
                          <span class="tw-text-red-700 tw-text-xs">{{ errors[0] }}</span>
                        </div>
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{ errors }"
                        rules="required"
                      >
                        <div class="tw-grid md:tw-grid-cols-3 tw-grid-cols-1 tw-mb-2">
                          <div class="tw-flex tw-items-center">
                            <label class="tw-block tw-text-gray-500 tw-font-bold tw-pr-4">
                              Desa/Kelurahan
                            </label>
                          </div>
                          <div class="tw-col-span-2">
                            <input v-model="village" name="village" class="tw-form-input tw-w-full" type="text" placeholder="">
                          </div>
                          <div class="tw-hidden md:tw-block" />
                          <span class="tw-text-red-700 tw-text-xs">{{ errors[0] }}</span>
                        </div>
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{ errors }"
                        rules="required"
                      >
                        <div class="tw-grid md:tw-grid-cols-3 tw-grid-cols-1 tw-mb-2">
                          <div class="tw-flex tw-items-center">
                            <label class="tw-block tw-text-gray-500 tw-font-bold tw-pr-4">
                              RT
                            </label>
                          </div>
                          <div class="tw-col-span-2">
                            <input v-model="rt" name="rt" class="tw-form-input tw-w-full" type="text" placeholder="">
                          </div>
                          <div class="tw-hidden md:tw-block" />
                          <span class="tw-text-red-700 tw-text-xs">{{ errors[0] }}</span>
                        </div>
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{ errors }"
                        rules="required"
                      >
                        <div class="tw-grid md:tw-grid-cols-3 tw-grid-cols-1 tw-mb-2">
                          <div class="tw-flex tw-items-center">
                            <label class="tw-block tw-text-gray-500 tw-font-bold tw-pr-4">
                              RW
                            </label>
                          </div>
                          <div class="tw-col-span-2">
                            <input v-model="rw" name="rw" class="tw-form-input tw-w-full" type="text" placeholder="">
                          </div>
                          <div class="tw-hidden md:tw-block" />
                          <span class="tw-text-red-700 tw-text-xs">{{ errors[0] }}</span>
                        </div>
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{ errors }"
                        rules="required"
                      >
                        <div class="tw-grid md:tw-grid-cols-3 tw-grid-cols-1 tw-mb-2">
                          <div class="tw-flex tw-items-center">
                            <label class="tw-block tw-text-gray-500 tw-font-bold tw-pr-4">
                              Alamat Lengkap
                            </label>
                          </div>
                          <div class="tw-col-span-2">
                            <textarea
                              v-model="address"
                              class="
                                    tw-form-input
                                    tw-block
                                    tw-w-full
                                    tw-px-3
                                    tw-py-1.5
                                    tw-text-base
                                    tw-font-normal
                                    tw-text-gray-700
                                    tw-bg-white tw-bg-clip-padding
                                    border tw-border-solid tw-border-gray-300
                                    tw-rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none
                                  "
                              rows="3"
                              placeholder=""
                            />
                          </div>
                          <div class="tw-hidden md:tw-block" />
                          <span class="tw-text-red-700 tw-text-xs">{{ errors[0] }}</span>
                        </div>
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{ errors }"
                        rules="required"
                      >
                        <div class="tw-grid md:tw-grid-cols-3 tw-grid-cols-1 tw-mb-2">
                          <div class="tw-flex tw-items-center">
                            <label class="tw-block tw-text-gray-500 tw-font-bold tw-pr-4">
                              Status Bekerja
                            </label>
                          </div>
                          <div class="tw-col-span-2">
                            <div class="tw-flex">
                              <div class="tw-inline-flex">
                                <input v-model="is_work" type="radio" name="is_work" value="true" class="tw-form-radio">
                                <label>&nbsp;Sudah Bekerja</label>
                              </div>
                              <div class="tw-inline-flex">
                                <input v-model="is_work" type="radio" name="is_work" value="false" class="tw-form-radio tw-ml-3">
                                <label>&nbsp;Belum Bekerja</label>
                              </div>
                            </div>
                          </div>
                          <div class="tw-hidden md:tw-block" />
                          <span class="tw-text-red-700 tw-text-xs">{{ errors[0] }}</span>
                        </div>
                      </ValidationProvider>
                    </v-card-text>
                    <hr class="p-1 tw-my-3">
                    <div class="tw-flex tw-gap-3 tw-justify-between">
                      <v-btn
                        class="tw-mr-2 tw-w-4"
                        outlined
                        large
                        color=" grey"
                        @click="changeTab1()"
                      >
                        <p class="tw-px-5 mb-0">
                          Back
                        </p>
                      </v-btn>
                      <v-btn large color="primary" @click="changeTab3()">
                        <p class="tw-px-5 mb-0">
                          Next
                        </p>
                      </v-btn>
                    </div>
                  </v-card>
                </v-tab-item>
                <!-- informasi universitas -->
                <v-tab-item value="tab-3">
                  <v-card flat>
                    <div class="tw-font-bold tw-text-lg tw-px-4">
                      INFORMASI UNIVERSITAS
                    </div>
                    <v-card-text>
                      <ValidationProvider
                        v-slot="{ errors }"
                        rules="required"
                      >
                        <div class="tw-grid md:tw-grid-cols-3 tw-grid-cols-1 tw-mb-2">
                          <div class="tw-flex tw-items-center">
                            <label class="tw-block tw-text-gray-500 tw-font-bold tw-pr-4">
                              Nama Universitas
                            </label>
                          </div>
                          <div class="tw-col-span-2">
                            <input v-model="university" name="university" class="tw-form-input tw-w-full" type="text" placeholder="">
                          </div>
                          <div class="tw-hidden md:tw-block" />
                          <span class="tw-text-red-700 tw-text-xs">{{ errors[0] }}</span>
                        </div>
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{ errors }"
                        rules="required"
                      >
                        <div class="tw-grid md:tw-grid-cols-3 tw-grid-cols-1 tw-mb-2">
                          <div class="tw-flex tw-items-center">
                            <label class="tw-block tw-text-gray-500 tw-font-bold tw-pr-4">
                              Akreditasi Fakultas Hukum
                            </label>
                          </div>
                          <div class="tw-col-span-2">
                            <input v-model="accreditation_faculty" name="accreditation_faculty" class="tw-form-input tw-w-full" type="text" placeholder="">
                          </div>
                          <div class="tw-hidden md:tw-block" />
                          <span class="tw-text-red-700 tw-text-xs">{{ errors[0] }}</span>
                        </div>
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{ errors }"
                        rules="required|decimal:2"
                      >
                        <div class="tw-grid md:tw-grid-cols-3 tw-grid-cols-1 tw-mb-2">
                          <div class="tw-flex tw-items-center">
                            <label class="tw-block tw-text-gray-500 tw-font-bold tw-pr-4">
                              IPK
                            </label>
                          </div>
                          <div class="tw-col-span-2">
                            <input v-model="ipk" name="ipk" class="tw-form-input tw-w-full" type="text" placeholder="Contoh: 3.99">
                          </div>
                          <div class="tw-hidden md:tw-block" />
                          <span class="tw-text-red-700 tw-text-xs">{{ errors[0] }}</span>
                        </div>
                      </ValidationProvider>
                    </v-card-text>
                  </v-card>
                  <hr class="p-1 ">
                  <div class="tw-flex tw-gap-3 tw-justify-between tw-mt-10">
                    <v-btn
                      class="tw-mr-2 tw-w-4"
                      outlined
                      large
                      color=" grey"
                      @click="changeTab2()"
                    >
                      <p class="tw-px-5 mb-0">
                        Back
                      </p>
                    </v-btn>
                    <v-btn color="primary" large @click="changeTab4()">
                      <p class="tw-px-5 mb-0">
                        Next
                      </p>
                    </v-btn>
                  </div>
                </v-tab-item>
                <!-- unggah dokumen -->
                <v-tab-item value="tab-4">
                  <v-card flat>
                    <div class="tw-font-bold tw-text-lg tw-px-4">
                      Unggah Dokumen
                    </div>
                    <v-card-text>
                      <div class="tw-grid md:tw-grid-cols-3 tw-grid-cols-1 tw-pb-3">
                        <div class="tw-flex tw-items-center">
                          <label class="tw-block tw-text-gray-500 tw-font-bold tw-pr-4">
                            Curriculum Vitae
                          </label>
                        </div>
                        <div class="tw-col-span-2 hover:tw-shadow-md">
                          <div class="tw-border-dashed tw-border-2 tw-rounded-md tw-w-full tw-h-full tw-relative">
                            <input
                              ref="cv"
                              class="tw-absolute tw-w-full tw-z-20 tw-h-full tw-cursor-pointer tw-opacity-0"
                              name="file"
                              type="file"
                              @change="handleFilesUploadCV"
                            >
                            <div class="tw-z-10 p-1 tw-mt-2">
                              <img src="~/assets/images/icon/upload.png" alt="upload" height="25px" width="25px" class="tw-mx-auto">
                              <h2 class="tw-mb-0 tw-mt-3 tw-text-black tw-text-center tw-text-xl">
                                Tarik file kesini atau klik untuk upload
                              </h2>
                              <p class="tw-text-gray-500 tw-text-center tw-mt-1 tw-text-xs">
                                Maksimum 10 MB, Format Pdf <br>
                                {{ cvName }}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- <hr class="p-1 "> -->
                      <div class="tw-grid md:tw-grid-cols-3 tw-grid-cols-1 tw-pb-3">
                        <div class="tw-flex tw-items-center">
                          <label class="tw-block tw-text-gray-500 tw-font-bold tw-pr-4">
                            KTP
                          </label>
                        </div>
                        <div class="tw-col-span-2 hover:tw-shadow-md">
                          <div class="tw-border-dashed tw-border-2 tw-rounded-md tw-w-full tw-h-full tw-relative">
                            <input
                              ref="ktp"
                              class="tw-absolute tw-w-full tw-z-20 tw-h-full tw-opacity-0 tw-cursor-pointer"
                              name="file"
                              type="file"
                              @change="handleFilesUploadKTP"
                            >
                            <div class="tw-z-10 p-1 tw-mt-2">
                              <img src="~/assets/images/icon/upload.png" alt="upload" height="25px" width="25px" class="tw-mx-auto">
                              <h2 class="tw-mb-0 tw-mt-3 tw-text-black tw-text-center tw-text-xl">
                                Tarik file kesini atau klik untuk upload
                              </h2>
                              <p class="tw-text-gray-500 tw-text-center tw-mt-1 tw-text-xs">
                                Maksimum 10 MB, Format Pdf <br>
                                {{ ktpName }}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- <hr class="p-1 "> -->
                      <div class="tw-grid md:tw-grid-cols-3 tw-grid-cols-1 tw-pb-3">
                        <div class="tw-flex tw-items-center">
                          <label class="tw-block tw-text-gray-500 tw-font-bold tw-pr-4">
                            Foto Pendaftar
                          </label>
                        </div>
                        <div class="tw-col-span-2 hover:tw-shadow-md">
                          <div class="tw-border-dashed tw-border-2 tw-rounded-md tw-w-full tw-h-full tw-relative">
                            <input
                              ref="foto"
                              class="tw-absolute tw-w-full tw-z-20 tw-h-full tw-opacity-0 tw-cursor-pointer"
                              name="file"
                              type="file"
                              @change="handleFilesUploadFoto"
                            >
                            <div class="tw-z-10 p-1 tw-mt-2">
                              <img src="~/assets/images/icon/upload.png" alt="upload" height="25px" width="25px" class="tw-mx-auto">
                              <h2 class="tw-mb-0 tw-mt-3 tw-text-black tw-text-center tw-text-xl">
                                Tarik file kesini atau klik untuk upload
                              </h2>
                              <p class="tw-text-gray-500 tw-text-center tw-mt-1 tw-text-xs">
                                Maksimum 10 MB, Format Pdf <br>
                                {{ fotoPendaftar }}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="tw-grid md:tw-grid-cols-3 tw-grid-cols-1 tw-pb-3">
                        <div class="tw-flex tw-items-center" />
                        <div class="tw-col-span-2">
                          <div class="tw-rounded-md" style="background: #FFFAF2;">
                            <div class="tw-justify tw-pt-3 tw-pl-3 tw-flex-row tw-flex tw-items-center tw-justify-start tw-w-full">
                              <v-icon class="tw-mr-3" style="font-size: 25px;">
                                mdi-information-outline
                              </v-icon>
                              <h2 style=" color: #834E00; font-size: 20px;">
                                <b>
                                  Mohon Perhatian
                                </b>
                              </h2>
                            </div>
                            <div class="tw-w-full md:tw-w-2/3 tw-pb-1 tw-items-end tw-justify-end tw-z-10">
                              <ul class="tw-list-disc tw-ml-10 tw-pl-10" style=" color: #B66D00;">
                                <li>Pas Foto ukuran 4x6 cm</li>
                                <li>
                                  Pas Foto harus berwarna dengan latar belakang polos berwarna apa saja bertipe JPG/JPEG/PNG
                                </li>
                                <li>Ukuran minimal file pas foto adalah 80KB</li>
                                <li>Ukuran maksimal file pas foto adalah 300KB</li>
                                <li>Orientasi pas foto adalah potrait.</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- <hr class="p-1 "> -->
                      <div class="tw-grid md:tw-grid-cols-3 tw-grid-cols-1 tw-pb-3">
                        <div class="tw-flex tw-items-center">
                          <label class="tw-block tw-text-gray-500 tw-font-bold tw-pr-4">
                            Ijazah
                          </label>
                        </div>
                        <div class="tw-col-span-2 hover:tw-shadow-md">
                          <div class="tw-border-dashed tw-border-2 tw-rounded-md tw-w-full tw-h-full tw-relative">
                            <input
                              ref="ijazah"
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
                              <p class="tw-text-gray-500 tw-text-center tw-mt-1 tw-text-xs">
                                Maksimum 10 MB, Format Pdf <br>
                                {{ ijazahName }}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- <hr class="p-1 "> -->
                      <div class="tw-grid md:tw-grid-cols-3 tw-grid-cols-1 tw-pb-3" style="visibility: hidden">
                        <div class="tw-flex tw-items-center">
                          <label class="tw-block tw-text-gray-500 tw-font-bold tw-pr-4">
                            Sertifikat Akreditasi Fakultas Hukum
                          </label>
                        </div>
                        <div class="tw-col-span-2 hover:tw-shadow-md">
                          <div class="tw-border-dashed tw-border-2 tw-rounded-md tw-w-full tw-h-full tw-relative">
                            <input
                              ref="sertifikat_akreditasi"
                              class="tw-absolute tw-w-full tw-z-20 tw-h-full tw-opacity-0 tw-cursor-pointer"
                              name="file"
                              type="file"
                              @change="handleFilesUploadSertifikatAkreditasi"
                            >
                            <div class="tw-z-10 p-1 tw-mt-2">
                              <img src="~/assets/images/icon/upload.png" alt="upload" height="25px" width="25px" class="tw-mx-auto">
                              <h2 class="tw-mb-0 tw-mt-3 tw-text-black tw-text-center tw-text-xl">
                                Tarik file kesini atau klik untuk upload
                              </h2>
                              <p class="tw-text-gray-500 tw-text-center tw-mt-1 tw-text-xs">
                                Maksimum 10 MB, Format Pdf
                                {{ akredi }}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr class="p-1 ">
                      <div class="tw-mt-10 tw-flex tw-justify-between">
                        <v-btn
                          class="tw-mr-2"
                          outlined
                          color=" grey"
                          large
                          @click="changeTab3()"
                        >
                          Back
                        </v-btn>
                        <v-btn
                          type="button"
                          color="primary"
                          large
                          dark
                          @click="submit"
                        >
                          Daftar Sekarang
                        </v-btn>
                      </div>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
              </form>
            </ValidationObserver>
          </v-tabs-items>
        </div>
      </v-card>
    </div>
  </v-app>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import Notification from '~/components/Notification'

export default {
  components: { Notification, ValidationObserver, ValidationProvider },
  data () {
    return {
      fullname: '',
      email: '',
      phone_no: '',
      wa_no: '',
      password: '',
      confirm_password: '',
      gender: '',
      born_place: '',
      born_date: '',
      address: '',
      rt: '',
      rw: '',
      village: '',
      district_id: '',
      city_id: '',
      state_id: '',
      is_work: null,
      university: '',
      accreditation_faculty: '',
      ipk: '',
      cv: '',
      ktp: '',
      foto: '',
      ijazah: '',
      sertifikat_akreditasi: '',
      tab: null,
      error: null,
      states: [],
      cities: [],
      districts: [],
      fvisibility: 'password',
      svisibility: 'password',
      passwordType: 'password',
      cvName: '',
      ktpName: '',
      fotoPendaftar: '',
      ijazahName: '',
      akredi: '',
      telpCheckbox: false,
      message: '',
      has_number: false,
      has_lowercase: false,
      has_uppercase: false,
      has_special: false
    }
  },
  async mounted () {
    try {
      const states = await this.$axios.$get('state')
      this.states = states.data.map(obj => ({ id: obj.id, name: obj.name }))
    } catch (err) {
      // console.log(err)
    }
  },
  methods: {
    password_check () {
      this.has_number = /\d/.test(this.password)
      this.has_lowercase = /[a-z]/.test(this.password)
      // this.has_uppercase = /[A-Z]/.test(this.password)
      this.has_special = /[!@#'$%^&*)(+=._-]/.test(this.password)
    },
    istelpCheckbox () {
      if (this.telpCheckbox === false) {
        this.wa_no = this.phone_no
      }
      if (this.telpCheckbox === true) {
        this.wa_no = ''
      }
    },
    async submit () {
      const isValid = await this.$refs.observer.validate()
      if (isValid) {
        this.register()
        // data is valid - post your form data
      } else {
        this.$swal({
          icon: 'error',
          title: 'Data tidak lengkap..!',
          text: 'Silakan lengkapi data Anda'
          // footer: '<a href="">Why do I have this issue?</a>'
        })
        this.tab = 'tab-1'
        window.scrollTo(0, 0)
      }
    },
    async register () {
      try {
        const formData = new FormData()
        formData.append('cv', this.cv)
        formData.append('ktp', this.ktp)
        formData.append('foto', this.foto)
        formData.append('ijazah', this.ijazah)
        formData.append('sertifikat_akreditasi', this.sertifikat_akreditasi)
        formData.append('fullname', this.fullname.trim())
        formData.append('email', this.email)
        formData.append('phone_no', this.phone_no)
        formData.append('wa_no', this.wa_no)
        formData.append('password', this.password)
        formData.append('gender', this.gender)
        formData.append('born_place', this.born_place)
        formData.append('born_date', this.born_date)
        formData.append('address', this.address)
        formData.append('rt', this.rt)
        formData.append('rw', this.rw)
        formData.append('village', this.village)
        formData.append('district_id', this.district_id)
        formData.append('city_id', this.city_id)
        formData.append('state_id', this.state_id)
        formData.append('is_work', this.is_work)
        formData.append('university', this.university)
        formData.append('accreditation_faculty', this.accreditation_faculty)
        formData.append('ipk', this.ipk)
        const config = {
          headers: {
            'content-type': 'multipart/form-data'
          }
        }
        await this.$axios.$post('auth/register', formData, config)
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password
          }
        })
        this.$router.push('/')
      } catch (e) {
        // console.log(e)
        this.error = e.response.data.message
        this.$swal({
          icon: 'error',
          title: 'Data tidak valid',
          text: e.response.data.message
          // footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    },
    switchhide (action) {
      if (action === 'spass') {
        this.svisibility = 'text'
        this.passwordType = 'text'
      } else {
        this.fvisibility = 'text'
      }
    },
    switchshow (action) {
      if (action === 'spass') {
        this.svisibility = 'password'
        this.passwordType = 'password'
      } else {
        this.fvisibility = 'password'
      }
    },
    /*
      Handles a change on the file upload
    */
    handleFilesUploadCV () {
      const file = event.target.files[0]
      if (typeof file !== 'undefined') {
        this.cvName = file.name
      }
      this.cv = this.$refs.cv.files[0]
    },
    handleFilesUploadKTP () {
      const file = event.target.files[0]
      if (typeof file !== 'undefined') {
        this.ktpName = file.name
      }
      this.ktp = this.$refs.ktp.files[0]
    },
    handleFilesUploadFoto () {
      const file = event.target.files[0]
      if (typeof file !== 'undefined') {
        this.fotoPendaftar = file.name
      }
      this.foto = this.$refs.foto.files[0]
    },
    handleFilesUploadIjazah () {
      const file = event.target.files[0]
      if (typeof file !== 'undefined') {
        this.ijazahName = file.name
      }
      this.ijazah = this.$refs.ijazah.files[0]
    },
    handleFilesUploadSertifikatAkreditasi () {
      const file = event.target.files[0]
      if (typeof file !== 'undefined') {
        this.akredi = file.name
      }
      this.sertifikat_akreditasi = this.$refs.sertifikat_akreditasi.files[0]
    },
    async changeTab1 () {
      const isValid = await this.$refs.observer.validate()
      if (isValid) {
        this.tab = 'tab-1'
        window.scrollTo(0, 0)
        // data is valid - post your form data
      } else {
        this.$swal({
          icon: 'error',
          title: 'Data tidak lengkap..!',
          text: 'Silakan lengkapi data Anda'
          // footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    },
    async changeTab2 () {
      const isValid = await this.$refs.observer.validate()
      if (isValid) {
        this.tab = 'tab-2'
        window.scrollTo(0, 0)
        // data is valid - post your form data
      } else {
        this.$swal({
          icon: 'error',
          title: 'Data tidak lengkap..!',
          text: 'Silakan lengkapi data Anda'
          // footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    },
    async changeTab3 () {
      const isValid = await this.$refs.observer.validate()
      if (isValid) {
        this.tab = 'tab-3'
        window.scrollTo(0, 0)
        // data is valid - post your form data
      } else {
        this.$swal({
          icon: 'error',
          title: 'Data tidak lengkap..!',
          text: 'Silakan lengkapi data Anda'
          // footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    },
    async changeTab4 () {
      const isValid = await this.$refs.observer.validate()
      if (isValid) {
        this.tab = 'tab-4'
        window.scrollTo(0, 0)
        // data is valid - post your form data
      } else {
        this.$swal({
          icon: 'error',
          title: 'Data tidak lengkap..!',
          text: 'Silakan lengkapi data Anda'
          // footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    },
    async getCity () {
      const cities = await this.$axios.$get(`city/${this.state_id}`)
      this.cities = cities.data.map(obj => ({ id: obj.id, name: obj.name }))
      this.districts = []
    },
    async getDistrict () {
      const districts = await this.$axios.$get(`district/${this.city_id}`)
      this.districts = districts.data.map(obj => ({ id: obj.id, name: obj.name }))
    }
  }
}
</script>

<style scoped lang="scss">
 ::v-deep .v-application--wrap {
    min-height: fit-content;
  }
  .v-application p {
    margin-bottom: 5px !important;
  }

  @media (min-width:340px) {
    .togglef {
      margin-left: 170px;
    }
    .toggles {
      margin-left: 170px;
    }
  }
  @media (min-width:768px) {
    .togglef {
      margin-left: 400px;
    }
    .toggles {
      margin-left: 400px;
    }
  }
  i.v-icon::before {
  color: #FF9900 !important;
  font-size: 35px;
}

input[name="gender"],[name="is_work"] {
  color: #FF9900;
}

input[type="checkbox"]::before {
  color: gainsboro;
  border-block-color: #000;
}
.tw-text-x{
    font-size: 10px;
  }
   body{background-color: #EFEFEF;}
        .container{width:400px; margin:50px auto; background: white; padding:10px; font-family: Arial, Helvetica, sans-serif, sans-serif; border-radius: 3px;}
        h1{ font-size: 24px; text-align: center; text-transform: uppercase;}
        .frmField{background-color:white; color:#495057; line-height: 1.25; font-size: 16px; font-family: 'Roboto', sans-serif; border:0; padding: 10px; border:1px solid #dbdbdb;  border-radius: 3px;}
        .frmLabel{display: block; margin-bottom: 10px; font-weight: bold;}
        .frmValidation{font-size: 13px; }
        .frmValidation--passed{color:#717b85;}
        .frmIcon{color:#EB0029;}
            .frmValidation--passed .frmIcon{color:#0fa140;}

.howToBuild{ text-align:center; color:purple;}
.howToBuild a{ color:grey; font-weight:bold; text-decoration:none; text-transform:uppercase; }
</style>
