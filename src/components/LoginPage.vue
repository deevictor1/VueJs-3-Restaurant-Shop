<template>
 <img src="../assets/dividi_logo.png"/>
    <h1> Login Page</h1>
    <div class="login">
        <input type="text" v-model="email" placeholder="Enter Email"/>
        <input type="password" v-model="password" placeholder="Enter Password"/>
        <button v-on:click="login" >Login</button>
        <p> Not Registered Yet?
        <router-link to="/sign-up">Sign Up Here</router-link>
        </p>

    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'LoginPage',
        data() 
        {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            async login()
            {
                let result = await axios.get (
                    `http://localhost:3000/users?email=${this.email}&password=${this.password}`
                )

                if (result.status == 200 && result.data.length>0) 
                {
                    localStorage.setItem ("user-info",JSON.stringify(result.data[0]));
                    this.$router.push({name:'HomePage'})
                }
                console.log (result)
            }
        },
        mounted()
        {
            let user = localStorage.getItem("user-info");
            if (user) 
            {
                this.$router.push({name:'HomePage'})
            }
        }

    }
</script>