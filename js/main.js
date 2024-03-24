import vProduct from './components/vProduct.js';
import vBasketProduct from './components/vBasketProduct.js';

const App = {
    components: {
        vProduct,
        vBasketProduct,
    },
    data(){
        return{
            categoryes:[
                {id: 0, name: "Все"},
                {id: 1, name: "Мясные"},
                {id: 2, name: "Вегетарианские"},
                {id: 3, name: "Гриль"},
                {id: 4, name: "Острые"},
                {id: 5, name: "Закрытые"},
            ],
            filter:{
                filterMenuEnabled: false,
                categoryIndex:0,
                sortIndex: 0,
                sortTypes: ['популярности', 'цене', 'алфавиту'],
            },
            basket: {
                products: [
                    // { src:'/assets/pizza1.png', name:'Чизбургер-пицца', price:395, size: '26см.', dought: 'тонкое тесто', count: 1},
                    // { src:'/assets/pizza1.png', name:'Чизбургер-пицца', price:395, size: '26см.', dought: 'тонкое тесто', count: 1},
                ],
            },
            products: [
                { src:'./assets/pizza1.png', name:'Чизбургер-пицца', price:395, type: 1, popular: 0, size: '26см.', dought: 'тонкое тесто'},
                { src:'./assets/pizza2.png', name:'Сырная', price:450, type: 2, popular: 1, size: '26см.', dought: 'тонкое тесто'},
                { src:'./assets/pizza3.png', name:'Креветки по-азиатски', price:290, type: 3, popular: 2, size: '26см.', dought: 'тонкое тесто'},
                { src:'./assets/pizza4.png', name:'Сырный цыпленок', price:385, type: 4, popular: 3, size: '26см.', dought: 'тонкое тесто'},
                { src:'./assets/pizza1.png', name:'Чизбургер-пицца', price:395, type: 1, popular: 4, size: '26см.', dought: 'тонкое тесто'},
                { src:'./assets/pizza2.png', name:'Сырная', price:450, type: 2, popular: 5, size: '26см.', dought: 'тонкое тесто'},
                { src:'./assets/pizza3.png', name:'Креветки по-азиатски', price:290, type: 3, popular: 6, size: '26см.', dought: 'тонкое тесто'},
                { src:'./assets/pizza4.png', name:'Сырный цыпленок', price:385, type: 4, popular: 7, size: '26см.', dought: 'тонкое тесто'},
            ],
            page: 'main',
            // product:{
            //     heightIndex: 0,
            //     widthIndex: 0
            // },
        }
    },

    methods:{
        check()
        {
            console.log('!');
        },
        sort(index, list){//0 - popular, 1 - price, 2 - alfabet

            // console.log(index);
            let sortList = list;

            if(index == 0)
            {
                sortList.sort((a, b) => a.popular - b.popular);
            }
            else if(index == 1)
            {
                sortList.sort((a, b) => a.price - b.price);
            }
            else if(index == 2)
            {
                sortList.sort((a,b) => a.name.localeCompare(b.name));
            }

            return sortList;
        },
        menuEnable(isDisable = false)
        {
            if(isDisable)
            {
                this.filter.filterMenuEnabled = false;
            }
            else
            {
                this.filter.filterMenuEnabled = !this.filter.filterMenuEnabled;
            }
            // console.log(this.filter.filterMenuEnabled);
        },
        sumBasketPrices()
        {
            let sum = 0;

            this.basket.products.forEach(element => {
                sum += element.price * element.count;
            });

            return sum;
        },
        basketCount()
        {
            let count = 0;

            this.basket.products.forEach(element => {
                count += element.count;
            });

            return count;
        },
        removeBasketItem(index)
        {
            this.basket.products.splice(index,1);
        },
        basketClear()
        {
            this.basket.products.length = 0;
        },
        addToBasket(item)
        {
            let equalsIndex = -1;
            for(let i = 0; i < this.basket.products.length; i++)
            {
                item.count = this.basket.products[i].count;
                if(JSON.stringify(item) ===JSON.stringify(this.basket.products[i]))
                {
                    equalsIndex = i;
                    break;
                }
            }

            if(equalsIndex != -1)
            {
                this.basket.products[equalsIndex].count++;
            }
            else
            {
                item.count = 1;
                this.basket.products.push(item);
            }
        },
        countBasketItemChange(index, num)
        {
            if(num != -1 || this.basket.products[index].count > 1)
            {
                this.basket.products[index].count += num;
            }
        },
        countInBasket(typeIndex)
        {
            let num = 0;
            for(let i = 0; i < this.basket.products.length; i++)
            {
                if(typeIndex === this.basket.products[i].type)
                {
                    num += this.basket.products[i].count;
                }
            }
            return num;
        }
    }
}
//App.component('v-product', vProduct);

Vue.createApp(App).mount('#app')