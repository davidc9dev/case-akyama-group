<template >
    <v-container>
        <v-responsive>
            <v-row>
                <v-col>
                    <DefaultTitle :title="'rafael zema'" :subtitle="'vereado'" ></DefaultTitle>
                    <DefaultTable title="Listagem de alunos" route="alunos" :headers="headers" :data="virtualBoats" :pagination="pagination" ></DefaultTable>
                </v-col>
            </v-row>
        </v-responsive>
    </v-container>    
</template>
<script>
    import DefaultTable from '@/components/DefaultTable.vue';
    import DefaultTitle from '@/components/DefaultTitle.vue';
    export default {
        name: 'PageIndex',
        componentes:{
            DefaultTable,
            DefaultTitle
        },
        data() {
            return {
                pagination:13,
                headers:[
                    { title: 'Ações', align: 'start', key: 'actions' },
                    { title: 'Boat Type', align: 'start', key: 'name' },
                    { title: 'Speed (knots)', align: 'end', key: 'speed' },
                    { title: 'Length (m)', align: 'end', key: 'length' },
                    { title: 'Price ($)', align: 'end', key: 'price' },
                    { title: 'Year', align: 'end', key: 'year' },
                ],
                virtualBoats:[
                    {   
                        id:1,
                        actions:'',
                        name: 'Speedster',
                        speed: 35,
                        length: 22,
                        price: 300000,
                        year: 2021,
                  },
                ]
            }
        }
    }

</script>