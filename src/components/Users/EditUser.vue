<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column>
        <v-container grid-list-md>
          <v-card>
            <v-card-text>
              <h1>Edit User</h1>
              <v-layout row wrap>
                <v-flex xs4>
                  <v-text-field id="nome" v-model="editUser.user_id" label="ID"></v-text-field>
                </v-flex>
                <v-flex xs4>
                  <v-text-field id="email" v-model="editUser.user_name" label="Nome"></v-text-field>
                </v-flex>
                <v-flex xs4>
                  <v-text-field id="nome" v-model="editUser.user_email" label="E-mail"> </v-text-field>
                </v-flex>
              </v-layout>
            </v-card-text>
            <v-card-actions>
              <v-btn to="/users" color="primary">
                <v-icon color="white">arrow_back</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn color="red">
                <v-icon color="white">cancel</v-icon>
              </v-btn>
              <v-btn color="green" @click="onEdit">
                <v-icon color="white">save</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-container>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
  import firebase from '../../../firebase'

  export default {
    data() {
      return {
        usuarios: [],
        editUser: {
          user_name: '',
          user_id: '',
          user_email: ''
        }
      }
    },
    beforeCreate() {
      firebase.collection('users')
        .where('user_id', '==', this.$route.params.user_id).get().then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.editUser.user_name = doc.data().user_name
            this.editUser.user_email = doc.data().user_email
            this.editUser.user_id = doc.data().user_id
          })
        })
    },
    methods: {
      onEdit() {
        firebase.collection('users')
          .where('user_id', '==', this.$route.params.user_id).get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
              doc.ref.set({
                user_id: this.$route.params.user_id,
                user_name: this.editUser.user_name,
                user_email: this.editUser.user_email
              })
            })
          })
      }
    }
  }
</script>
