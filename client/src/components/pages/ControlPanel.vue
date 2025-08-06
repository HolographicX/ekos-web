<template>
  <div class="pa-2">
    <div class="text-h4">Control Panel</div>
    <LastNotification />
    <v-divider class="mb-2"></v-divider>
    <v-expansion-panels>
      <v-expansion-panel v-model="devices" v-for="device in devices" :key="device.name">
        <v-expansion-panel-header>{{device.name}}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <Device :device="device" />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
<script>
import Device from "@/components/Device.vue";
import LastNotification from "@/components/common/LastNotification.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    Device,
    LastNotification,
  },
  beforeMount() {
    this.sendMessage({ type: "get_devices" });
  },
  computed: {
    ...mapState(["devices"]),
  },
  methods: {
    ...mapActions(["sendMessage"]),
  },
};
</script>
