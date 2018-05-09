<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <v-layout column>
                <v-container grid-list-md>
                    <v-card>
                        <v-card-text>
                            <h1>Add User</h1>
                            <v-layout row wrap>
                                <v-flex xs4>
                                    <v-text-field id="nome" v-model="addUserData.user_id" label="ID"> </v-text-field>
                                </v-flex>
                                <v-flex xs4>
                                    <v-text-field id="email" v-model="addUserData.user_name" label="Name"></v-text-field>
                                </v-flex>
                                <v-flex xs4>
                                    <v-text-field id="nome" v-model="addUserData.user_email" label="E-mail"> </v-text-field>
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
                            <v-btn color="green" @click="onAdd">
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
                users: [],
                addUserData: {
                    user_id: '',
                    user_name: '',
                    user_email: '',
                }
            }
        },
        created() {
            this.getUsers()
        },
        methods: {
            getUsers() {
                firebase.collection('users').get().then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                      const users = []
                      users.push(doc.data())
                    })
                })
            },
            onAdd() {
                firebase.collection('users').add(this.addUserData).then(this.getUsers) //Função que insere o objeto addUserData para a collection usuarios

                /* Deixar os campo em branco */
                this.addUserData.user_name = ''
                this.addUserData.user_email = ''
                this.addUserData.user_id = ''
            }
        }
    }
</script>
