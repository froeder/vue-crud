<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <v-layout column>
                <v-card>
                    <v-card-text>
                        <v-container grid-list-md>
                            <h1>User Details</h1>
                            <br>
                            <h2>ID: {{id}}</h2>
                            <h3>Name: {{name}}</h3>
                            <h4>E-mail: {{email}}</h4>
                        </v-container>
                        <v-btn to="/users" block color="primary">
                          <v-icon>arrow_back</v-icon> Back
                        </v-btn>
                    </v-card-text>
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
              id: '',
              name: '',
              email: ''
            }
        },
        beforeCreate() {
            firebase.collection('users')
                .where('user_id', '==', this.$route.params.user_id).get().then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        this.name = doc.data().user_name
                        this.email = doc.data().user_email
                        this.id = doc.data().user_id
                    })
                })

        }
    }
</script>
