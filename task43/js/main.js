let data = {
    message: "Hello Vue",
    label: '<label style="font-size: 24px; display: block;">Enter your name</label>',
    formShow: false,
    users: [
        { name: 'Djon' },
        { name: 'Anna' },
        { name: 'Pedro' },
    ],
    counter: 0,
    person: {
        name: '',
        age: ''
    },
    products: [
        { id: 1, title: 'Product One', price: 9.99, image: 'image1.jpg' },
        { id: 2, title: 'Product Two', price: 12.99, image: 'image2.jpg' },
        { id: 3, title: 'Product Three', price: 8.00, image: 'image3.jpg' },
        { id: 4, title: 'Product Four', price: 10.50, image: 'image4.jpg' }
    ],
    card: [],
    total: 0


}

let app = new Vue({
    el: "#app",
    data: data,
    computed: {
        reversMess: function () {
            return this.message.split('').reverse().join('')
        }
    },
    filters: {
        currency(price) {
            return '$' + price.toFixed(2)
        }
    },
    methods: {
        onSubmit: function () {
            alert(this.message)
        },
        showForm: function () {
            this.formShow = !this.formShow
        },
        inc: function () {
            return this.counter++
        },
        dostup: function () {
            userAge = this.person.age
            if (userAge < 18) {
                return 'Замало років'
            } else {
                return "Доступ дозволено"
            }
        },
        addToCard: function (prod) {
            this.total += prod.price
            let inCard = false;
            for (let i = 0; i < this.card.length; i++) {
                if (this.card[i].id === prod.id) {
                    inCard = true
                    this.card[i].quantity++
                    break;
                }
            }
            if (!inCard) {
                this.card.push({
                    id: prod.id,
                    title: prod.title,
                    price: prod.price,
                    quantity: 1
                })
            }
        },

        add: function (item) {
            this.total += item.price
            return item.quantity++
        },

        sub: function (item) {
            this.total -= item.price
            if (item.quantity > 1) {

                return item.quantity--
            } else {
                for (let i = 0; i < this.card.length; i++) {
                    if (this.card[i].id === item.id) {
                        this.card.splice(i, 1);
                        break;
                    }
                }
            }

        }

    }

})


var demo = new Vue({
    el: '#title',
    data: {
        show_title: false,
        text_content: 'Click'
    },
    methods: {
        showTitle: function () {
            this.show_tooltip = false;
        },
        toggleTitle: function () {
            this.show_title = !this.show_title;
        }
    }
})