<template>
  <SkeletonLoader
    v-if="
      finished === false ||
      !getStatusDetails ||
      Object.keys(lanyard).length === 0
    "
    class="w-6/12 h-5"
  />

  <div
    v-else
    style="color: rgba(209,213,219,var(--tw-text-opacity));"
    class="status glass flex items-center space-x-2 text-gray-700 rounded-md"
  >
    <div :class="`h-3 w-3 rounded-md flex-shrink-0 ${getDiscordStatus}`" />
    
    <div class="text-sm leading-tight truncate" :title="getStatusDetails">
      {{ getStatusDetails }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      finished: false,
      lanyard: {},
      socket: null,
    }
  },
  computed: {
    /**
     * Returns status detail as string.
     * @returns {string}
     */
    getStatusDetails() {
      const lanyard = this.lanyard
      if (!lanyard) return {}
      const filtered =
        lanyard.activities?.filter((activity) => activity.type !== 4)?.pop() || {}
      // Offline
      if (this.lanyard?.discord_status === "offline") return "Offline"
      // Spotify
      else if (
        filtered.name === "Spotify" &&
        filtered.details &&
        filtered.state
      ) {
        const song = filtered.details || "something"
        return `Listening to ${song}`
      }
    },
    /**
     * Returns Discord status colors.
     * @returns {string} Tailwind color classes
     */
    getDiscordStatus() {
      switch (this.lanyard.discord_status) {
        case "online":
          return "bg-green-500"
        case "idle":
          return "bg-yellow-500"
        case "dnd":
          return "bg-red-500"
        default:
          return "bg-gray-500 dark:bg-gray-200"
      }
    },
  },
  beforeDestroy() {
    this.socket?.close()
  },
  mounted() {
    /**
     * Connect to Lanyard Socket API, send heartbeat every 30 seconds and replace the Vue data value with the message
     */
    this.socket = new WebSocket("wss://api.lanyard.rest/socket")
    this.socket.addEventListener("open", () => {
      // Subscribe to ID
      this.socket.send(
        JSON.stringify({
          op: 2,
          d: {
            subscribe_to_id: "698919263985205269",
          },
        })
      )
      // Send heartbeat every 30 seconds
      setInterval(() => {
        this.socket.send(
          JSON.stringify({
            op: 3,
          })
        )
      }, 30000)
    })
    this.socket.addEventListener("message", ({ data }) => {
      const { t: type, d: status } = JSON.parse(data)
      if (type === "INIT_STATE" || type === "PRESENCE_UPDATE")
        this.lanyard = status || {}
      this.finished = true
    })
  },
}
</script>
