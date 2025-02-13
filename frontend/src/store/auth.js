
import { defineStore,getActivePinia } from "pinia"; 
import { useToast } from "vue-toastification";

const toast = useToast();
export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
            module:[],
            authenticated: false,
            isLoading: false,
            isLoadingForgotPassword:false,
            isLoadingResetPassword:false,
            user: {}, 
            fmslogo:"",
            fmssite:"",
            activityLogs: [],
            activityLogsLoading: false
        }
    },
    getters: {
        getauthenticated(state) {
            return state.authenticated
        },
        getuser(state) {
            return state.user
        }, 
    },
    actions: {
        async resetPassword(data){
            this.isLoadingResetPassword = true;
            if(data.password != data.confirm_password){
                toast.error("Password not matched", {
                    timeout: 3000,
                });
                this.isLoadingResetPassword = false;
            }
            else{
                try {
                    let response = await this.axios.post('/reset-password', data);  
                    toast.success("Reset password successfully", {
                        timeout: 5000,
                    });
                    this.router.push("/"); 
                    this.isLoadingResetPassword = false;
                    
                } catch (err) { 
                    this.isLoadingResetPassword = false;
                    console.log(err.response.data)
                    if(err.response.status == 422){
                        toast.error(err.response.data.message, {
                            timeout: 5000,
                        });
                    }
                    else{
                        toast.error("Something wrong! Please try again", {
                            timeout: 3001,
                        });
                    }
                } 
            }
        },
        async forgotPassword(data){
            try {
                this.isLoadingForgotPassword = true;
                let response = await this.axios.get('forgot-password/'+data);     
                if(response.status == 200){
                    toast.success("Email Sent", {
                        timeout: 5000,
                    });
                }
                this.isLoadingForgotPassword = false;
                
            } catch (err) { 
                this.isLoadingForgotPassword = false;
                if(err.response.status == 422){
                    toast.error(err.response.data.message, {
                        timeout: 5000,
                    });
                }
                else{
                    toast.error("Something wrong! Please try again", {
                        timeout: 3000,
                    });
                }
                
                
            } 
        },
        async login(data) {
            try {
                this.isLoading = true;
                let response = await this.axios.post('/login', data);    
                localStorage.setItem("_token", response.data.data.token); 
                this.get_module();
                this.getuserDetails();   
            } catch (err) { 
                this.isLoading = false;
                toast.error("Login failed, please try again!", {
                    timeout: 3000,
                });
            } 
        }, 
        async logout() {  
            try {  
                let response = await this.axios.get('/logout'); 
                console.log(response)
                if(response.status === '200' || response.status === 200){
                    localStorage.removeItem('_token');
                    this.user = {};
                    this.authenticated = false;  
                    this.router.push("/");
                    const pinia = getActivePinia();
                    pinia._s.forEach((store) => store.$reset());
                }
                else{
                    toast.error("Logout Error, please try again!", {
                        timeout: 3000,
                    }); 
                }
            } catch (err) {  
                console.error(err);
                if(err.response.status == 401 || err.response.status == '401'){
                    this.router.push("/");
                }
                else{
                    toast.error("Logout Error, please try again!", {
                        timeout: 3000,
                    });
                }
            }   
        },
        async getuserDetails(){
            try {  
                let response = await this.axios.get('/user_details');     
                this.user = response.data.data; 
                this.authenticated = true;
                this.isLoading = false;
                toast.success("Login successfully", {
                    timeout: 1000,
                });
                this.router.push("/app/dashboard");
            } catch (err) { 
                this.isLoading = false;
                toast.error("Get User Details Error, please try again!", {
                    timeout: 3000,
                }); 
            }  
        },
        async getActivityLogs(){
            try {  
                this.activityLogsLoading = true;
                let response = await this.axios.get('/activity-logs');       
                this.activityLogs = response.data.data;  
                this.activityLogsLoading = false;
            } catch (err) { 
                this.activityLogsLoading = false;
                toast.error("Get Activity Logs Error, please try again!", {
                    timeout: 3000,
                }); 
            }  
        },
        async get_module(){
            try {
                 const response = await this.axios.get("module");
                 this.module = response.data.data;
            } catch (error) {
             
            }
         },
    },
    persist: true,
})