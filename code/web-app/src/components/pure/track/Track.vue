<template>
  <div>
    <div :class="{ 'ba bw1 b--light-gray br2': !noBorder  }" class="ph3 mw8">
      <div class="pointer">
        <div class="dib v-mid pr2">
          <i class="fa fa-play" aria-hidden="true"></i>
        </div>
        <h2 @click="$emit('open-track')" class="lh-copy dib v-mid black mv2 dim navy " v-text="label"></h2>
      </div>
      <div class="description username f5 gray"><span class="black-50">{{timeAgo}}</span> by <span class="dim pointer" @click="$emit('open-profile')">{{username}}</span></div>
      <div class="mt3 pointer" @click="$emit('open-track')">
        <img :src="waveformSrc" class="w-100" />
      </div>

      <div v-if="description" class="mt4 f5 black-80 lh-copy measure-wide" v-text="description">

      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      timeAgo: {
        type: String,
        required: true,
      },
      username: {
        type: String,
        required: true,
      },
      label: {
        type: String,
        required: true,
      },
      waveformSrc: {
        type: String,
        required: true,
      },
      noBorder: {
        type: Boolean,
        default: false,
      },
      description: {
        type: String,
        required: false,
      }
    },
  }
</script>
