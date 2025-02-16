<template>
    <v-container>
        <v-data-table-server
            :headers="headers"
            :items="data"
            height="400"
            :items-length="pagination"
        >
            <template v-slot:top>
                    <VToolbar
                        class="mb-2 text-"
                        color="secondary"
                        dark
                        flat
                        align="center"
                    >
                        <VToolbarTitle> {{ title }}</VToolbarTitle>
                    </VToolbar>
            </template>
            <template v-slot:item.actions="{ item }">
                <td class="text-left">
                    <v-btn
                        flat
                        round
                        icon="mdi-eye"
                        color="primary"
                        size="small"
                        title="Visualizar"
                        class="mr-2"
                        @click=" $router.push('/alunos/show/' + item.id)"
                    />
                    <v-btn
                        flat
                        round
                        dense
                        icon="mdi-pencil"
                        color="secondary"
                        size="small"
                        title="Editar"
                        class="mr-2"
                        @click="$router.push(`/${route}/show/${item.id}`)"
                    />
                    <v-btn
                        flat
                        round
                        dense
                        icon="mdi-delete"
                        color="red"
                        size="small"
                        title="Deletar"
                        class="mr-2"
                        @click="$router.push(`/${route}/show/${item.id}`)"
                    />
              </td>
            </template>
        </v-data-table-server>
    </v-container>
</template>
<script>
    export default {
        name: 'PageIndex',
        props:{
            data: Array,
            headers: Array,
            title:String,
            pagination:Number,
            route:String,
        },
        data() {
            return {
        
            }
        }
    }

</script>