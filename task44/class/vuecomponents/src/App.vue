<template>
  <div>
    <h1>Hello Vue</h1>
    <user
      v-for="user in users"
      :name="user.userName"
      :description="user.userDescription"
      :isActive="user.isActive"
      :key="user.userID"
    />
  </div>
</template>

<script>
import user from "./components/user.vue";

export default {
  components: {
    user: user,
  },
  data() {
    return {
      users: [
        {
          userID: 1,
          userName: "Alex",
          userDescription: "This is Admin",
          isActive: true,
        },
        {
          userID: 2,
          userName: "Loha",
          userDescription: "This is client",
          isActive: false,
        },
        {
          userID: 3,
          userName: "Djon",
          userDescription: "This is manager",
          isActive: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>
