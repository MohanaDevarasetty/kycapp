<template>
  <div
    class="notifications"
    :class="notificationData.length === 0 ? 'no-notification-height' : ''"
  >
    <div v-if="notificationData.length>0">
      <li
        class="dropdown-item"
        v-for="notification in notificationData"
        :key="notification.id"
      >
        <span class="message-display"> {{ notification.message }} </span>
      </li>
    </div>
    <div v-if="notificationData.length === 0">
      <h5 id="no-notification">No Notifications Available</h5>
    </div>
  </div>
</template>

<script>

export default({
    name: "PushNotifications",
    data() {
        return {
            notificationData: []
        }
    }
})
</script>


<style scoped>

.notifications {
  white-space: normal;
  max-height: 400px;
  overflow-y: auto;
}

#no-notification {
  margin-left: 17px;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  vertical-align: middle;
}

.allnotification-link {
  text-align: center;
  cursor: pointer;
  font-size: 14px;
  padding: 10px 10px 10px 10px;
  border-top: 1px solid;
  border-bottom: 1px solid lightgrey;
}

.allnotification-link span:hover {
  color: #222b45;
}

.no-notification-height {
  height: 300px;
}



.message-display {
  font-size: 14px;
  white-space: pre-line;
}
</style>
