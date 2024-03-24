// import main from '../main.js';
export default{
    template:`
    <div class="basketItem">
                            <div class="basketItem__info">
                                <img v-bind:src="src" alt="" class="basketItem__info__img">
                                <div class="basketItem__info__information">
                                    <div class="basketItem__info__information__name">{{name}}</div>
                                    <div class="basketItem__info__information__size">{{dought}}, {{size}}</div>
                                </div>
                            </div>
                            <div class="basketItem__interactive">
                                <div class="basketItem__interactive__count">
                                    <button class="basketItem__interactive__count__btnSubtract basketItem__interactive__count__btn" @click="fun(index, -1)"><div></div></button>
                                    <div class="basketItem__interactive__count__text">{{count}}</div>
                                    <button class="basketItem__interactive__count__btnAdd basketItem__interactive__count__btn" @click="fun(index, 1)"><div></div><div></div></button>
                                </div>
                                <div class="basketItem__interactive__price">{{price * count}}₽</div>
                                <button class="basketItem__interactive__btnDelete" @click="removefun(index)"><div></div><div></div></button>
                            </div>
                        </div>
    `,

    props: {
        src: String,
        name: String,
        price: Number,
        size: String,
        dought: String,
        index: Number,
        fun: Function,
        count:Number,
        removefun: Function,
        type: Number
    },

    data(){
        return{
            // count:1,
        }
    },

    computed: {
        
    },
    
    methods:{
        // countChange(num)
        // {
        //     this.fun(this.index, num);
        // }
    }
}