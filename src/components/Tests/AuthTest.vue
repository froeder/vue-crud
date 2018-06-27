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