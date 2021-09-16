var groot = new Vue({
    el: '#groot',
    data: {
      listItems: [
          'patate',
          'cipolle',
          'zucchine',
          'melanzane',
          'happy-hippo',
          'parmigiano',
          'latte'
      ],
      newItem: '',
    },
    methods: {
        checked: function(){

        },
        importNewItem: function(){
            this.listItems.push(this.newItem)
            this.newItem = '' 
        }
    }
  });