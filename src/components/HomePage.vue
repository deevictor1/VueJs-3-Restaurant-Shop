<template>
    <Header/>
    <h1>Hello {{name}}, Welcome To HomePage</h1>
    <table border="1">
    <tr>
    <td>Id</td> 
    <td>Name</td> 
    <td>Contact</td> 
    <td>Address</td> 
    <td>Actions</td> 
    </tr>
    <tr v-for="item in restaurants" :key="item.id">
    <td>{{item.id}}</td>
    <td>{{item.name}}</td>
    <td>{{item.contact}}</td>
    <td>{{item.address}}</td>
    <td>
        <router-link :to="'/update/'+item.id"> Update </router-link>
        <button v-on:click="deleteResto(item.id)">DELETE</button>
    </td>
    
    </tr>
    </table>
</template>


<script>
import axios from 'axios'
import Header from './Header.vue';
export default {
    name: "HomePage",
    data()
    {
        return{
            name: '',
            restaurants: [],
        }
    },
    components: {
        Header
    },

    methods: {
        async deleteResto(id) {
            let result = await axios.delete("http://localhost:3000/restaurants/"+id);

            if (result.status == 200)
            {
                this.loadData()
            }
        },

        async loadData() 
        {
            let user = localStorage.getItem("user-info");
            this.name= JSON.parse(user).name;
            if (!user) 
            {
                this.$router.push({name:'SignUp'})
            }
            let result = await axios.get ("http://localhost:3000/restaurants");
            this.restaurants=result.data;
        }
    },

    async mounted()
        {
            this.loadData();
        },

}
</script>

<style>
td{
    width:160px;
    height:40px;
}
</style>
