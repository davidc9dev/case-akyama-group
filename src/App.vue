<template>
<v-app theme="light" >
  <v-navigation-drawer v-model="isDrwareOpen">
    <div class="pa-5 text-h2">
            <!-- <Logo /> -->
            Menu
        </div>
        <v-divider></v-divider>
    <div>
        <v-list>
            <v-list-group :value="item.header" v-for="(item) in sideBar" :key="item.header">
              <template v-slot:activator="{props}">
                <v-list-item
                  v-bind="props"
                  :title="item.header"
                >
                </v-list-item>                
              </template>
              <NavItem v-for="(item,i) in item.items" :item="item" :level="i" :key="item.title"></NavItem>
            </v-list-group>
        </v-list>
    </div>
  </v-navigation-drawer>
  <v-app-bar flat class="border-b">
    <v-app-bar-nav-icon @click="isDrwareOpen = !isDrwareOpen"></v-app-bar-nav-icon>
    <v-app-bar-title>Gerenciador de Notas</v-app-bar-title>
    <template #append>
     <avatarSettings />
    </template>
  </v-app-bar>

    <router-view />
  </v-app>
</template>

<script >
import HorizontalBar from '@/layouts/navigationBars/HorizontalBar.vue'
import avatarSettings from '@/layouts/navigationBars/avatarSettings.vue'
import NavItem from '@/layouts/navigationBars/Navtem.vue'
import NavGroup from '@/layouts/navigationBars/NavGroup.vue'
import sidebarItem from '@/layouts/navigationBars/sidebarItem.js'
export default{
    components:{
      HorizontalBar,
      avatarSettings,
      NavItem,
      NavGroup
    },
    data(){
      return{
        isDrwareOpen:false,
        sideBar :sidebarItem

      }
    },
    methods:{

    },
  }
</script>
