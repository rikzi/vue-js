const app = Vue.createApp({
    // data,functions
    data(){
        return {
            teks : 'hello guys',
            isShow:true,
            books: [
                {author : 'agus',title: 'mencari kucing',src:'assets/1.jpg',fav : true},
                {author : 'saifudin',title: 'mencari anjing',src:'assets/2.jpg',fav : false,},
                {author : 'agus',title: 'mencari janda',src:'assets/33.jpg',fav : true,},
        ]}
    },
    methods:{
        toggleTeks(){
            this.isShow = !this.isShow
            console.log('ke klik guys')
        },
        handleEvent(e,data){
            console.log(e,e.type)
            if (data) {
                console.log(data)
            }
        },
        toggles(book){
            book.fav = !book.fav
        }
        ,
        reset(){
            for (const book of this.books) {
                book.fav = true
            }
        }    
    },
    computed:{
        filteredBooks(){
            return this.books.filter((firstArray)=>firstArray.fav)
        },
    }

})

app.mount('#app')