<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column>
        <v-btn v-if="deleted==true" block color="primary" dark @click="refresh()">REFRESH</v-btn>
        <v-card>
          <v-card-title>
            <h1>Users</h1>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout row wrap>
                <v-flex xs12 sm4 v-for="users in users" v-bind:key="users.user_name" style="margin-bottom:9px">
                  <v-card>
                    <v-card-title class="headline">
                      {{users.user_name}}
                    </v-card-title>
                    <v-spacer></v-spacer>
                    <v-card-text>
                      <span class="grey--text">{{users.user_email}}</span>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <router-link :to="{
                          name: 'EditUser',
                          params: {user_id: users.user_id }
                        }">
                        <v-icon style="color:black!important">edit</v-icon>
                      </router-link>
                      <v-btn v-on:click="onDelete(users.user_id)" icon>
                        <v-icon>delete</v-icon>
                      </v-btn>
                      <router-link :to="{
                            name: 'ShowDetails',
                            params: {user_id: users.user_id }
                          }">
                        <v-icon style="color:black!important">visibility
                        </v-icon>
                      </router-link>
                    </v-card-actions>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-btn to="add_user" absolute dark fab bottom right color="secondary">
            <v-icon>add</v-icon>
          </v-btn>
        </v-card>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
  import firebase from '../../../firebase'

  export default {
    data() {
      return {
        users: [],
        deleted: false
      }
    },
    created() {
      this.getUsers()
    },
    methods: {
      getUsers (){
        firebase.collection('users').get().then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.users.push(doc.data())
          })
        })
      },
      refresh (){
        window.location.reload()
      },
      onDelete (user_id){
        firebase.collection('users').where('user_id', '==', user_id).get().then(querySnapshot =>{
          querySnapshot.forEach(doc => {
            doc.ref.delete()
          })
        })
        this.deleted = true
      }
    }
  }
</script>

