<template>
  <v-app>
    <div class="tw-rounded tw-border tw-p-9 tw-mt-3 md:tw-mx-12 tw-w-full tw-max-w-xl">
      <div class="tw-w-full">
        <div class="tw-col-span-2">
          <p class="tw-text-sm tw-leading-4" style="margin-bottom: 0;">
            Ujian Akhir PKPA
          </p>
          <p class="tw-text-xl tw-leading-4 tw-font-bold">
            Isaac Newton
          </p>
        </div>
        <hr class="tw-mt-5">
        <div class="tw-col-span-2">
          <div class="sm:tw-flex sm:tw-flex-row tw-font-normal">
            <div class="tw-col-span-6 tw-my-5">
              <table>
                <tr>
                  <td>Tanggal Ujian</td>
                  <td>&nbsp; : 10 November 2021</td>
                </tr>
                <tr>
                  <td>Durasi</td>
                  <td>&nbsp; : 54 Menit</td>
                </tr>
                <tr>
                  <td>Nilai AKhir</td>
                  <td>&nbsp; : <span class="tw-font-bold">A</span></td>
                </tr>
              </table>
            </div>
            <div class="tw-col-span-4 tw-my-5 tw-ml-auto">
              <div>
                <p class="tw-text-sm tw-leading-4">
                  Status
                </p>
              </div>
              <div>
                <button class="tw-py-3 tw-px-5 tw-font-bold" style="color: #FF9900; background: rgba(242, 102, 36, 0.05); border: 1px solid rgba(242, 102, 36, 0.5); border-radius: 6px;">
                  Complete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<style scoped>
.theme--light {
  background-color: #FFFFFF !important;
  border: none;
}
.v-application p {
    margin-bottom: 8px !important;
}
</style>

<style scoped lang="scss">
::v-deep .v-application--wrap {
    min-height: fit-content;
}
</style>

<style scoped lang="scss">
 .container {
    height: auto !important;
    width: 100% !important;
    background-color:#ffffff;
  }
</style>
