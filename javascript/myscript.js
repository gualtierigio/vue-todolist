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
        checked: function(index){
            this.listItems.splice(index, 1)
            
        },
        importNewItem: function(){
            this.listItems.push(this.newItem)
            this.newItem = '' 
        }
    }
  });