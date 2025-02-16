<template >
    <v-container>
        <v-responsive>
            <v-row>
                <v-col col="4">
                <DefaultTitle :title="'rafael zema'" :subtitle="'vereado'" ></DefaultTitle>
                    teste
                </v-col>
                <v-col col="4">
                    teste
                </v-col>
            </v-row>
        </v-responsive>
    </v-container>    
</template>
<script>
    import DefaultTitle from '@/components/DefaultTitle.vue';
    export default {
        componentes:{
            DefaultTitle
        },
        data() {
            return {
             
            }
        },
        async created(){
            console.log('logs',this.$router.params,this.$router.props)
        }
    }

</script>