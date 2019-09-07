const app = new Vue({
    el: '#app',

    data: {
        title: 'Crear Productos',
        subTitle: 'Producto',

        name: '',
        price: '',
        description: '',
        date: '',

        products: []
    },

    methods: {
        createProducts: function(event) {
            this.products.push({
                name: this.name,
                price: this.price,
                description: this.description,
                date: this.date
            })
            
            this.name = '';
            this.price = '';
            this.description = '';
            this.date = '';
            event.preventDefault();
        },

        deleteProducts: function(name) {
            this.products.splice(name, 1);
        }
    }

})