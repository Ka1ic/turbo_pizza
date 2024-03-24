// import main from '../main.js';
export default{
    template:`
    <div class="product {{clas}}" :class="{active: type === sort}" :class="{active: 0 === sort}">
                    <img v-bind:src="src" alt="" class="product__img">
                    <div class="content__title">{{name}}</div>
                    <div class="product__menus">
                        <div class="product__menus__height">
                            <button class="product__menus__height__button" :class="{active: product.heightIndex === 0}" @click = "product.heightIndex = 0">тонкое</button>
                            <button class="product__menus__height__button" :class="{active: product.heightIndex === 1}" @click = "product.heightIndex = 1">традиционное</button>
                        </div>
                        <div class="product__menus__width">
                            <button class="product__menus__width__button" :class="{active: product.widthIndex === 0}" @click = "product.widthIndex = 0">26 см.</button>
                            <button class="product__menus__width__button" :class="{active: product.widthIndex === 1}" @click = "product.widthIndex = 1">30 см.</button>
                            <button class="product__menus__width__button" :class="{active: product.widthIndex === 2}" @click = "product.widthIndex = 2">40 см.</button>
                        </div>
                    </div>
                    <div class="product__footer">
                        <div class="product__footer__price">от {{price}}₽</div>
                        <button class="product__footer__btn-add" @click="fun(getInfo())">+ Добавить<div class="product__footer__btn-add__num" :class="{active: inbasket > 0}"><div class="product__footer__btn-add__num__text">{{inbasket}}</div></div></button>
                    </div>
                </div>
    `,

    props: {
        src: String,
        name: String,
        price: Number,
        type: Number,
        sort: Number,
        popular: Number,
        fun: Function,
        inbasket: Number
    },

    data(){
        return{
            sizes:['26см.','30см.','40см.'],
            doughts:['тонкое тесто', 'традиционное тесто'],
            product:{
                heightIndex: 0,
                widthIndex: 0,
            }
        }
    },

    computed: {
        
    }, 
    
    methods:{
        getInfo()
        {
            let result = {
                src: this.src,
                name: this.name,
                price: this.price,
                type: this.type,
                size: this.sizes[this.product.widthIndex],
                dought: this.doughts[this.product.heightIndex],
                count: 1,
            };
            return result;
        }
    }
}