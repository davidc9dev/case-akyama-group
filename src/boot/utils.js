export default {
    name: 'PageIndex',
    data() {
        return {
        }
    },
    methods:{
        searchItems(route){
            let data = []
            for (let i = 0; i <= localStorage.length; i++) {
                let itemLocal = localStorage.getItem(i)
                itemLocal = JSON.parse(itemLocal)
                if(itemLocal?.route == route && itemLocal?.ativo) data.push(itemLocal);
            }
            return data
        },
        optionsItems(route,items){
            let allData = this.searchItems(route)
            console.log(allData,'alldata')
            allData.map(item=>{
                items.push({item:item.descricao ||item.nome, value:item.id})
            })
            return items
        },
        searchData(id,data){
            let dataItem = localStorage.getItem(id)
            if(dataItem){
                data = JSON.parse(dataItem)
            }
            return data
        }
    },
}
