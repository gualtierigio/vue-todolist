var groot = new Vue({
    el: '#groot',
    data: {
      listItems: [
        { content: 'patate',
          done: false
        },
        { content: 'cipolle',
          done: false
        },
        { content: 'zucchine',
          done: false
        },
        { content: 'birre',
          done: false
        },
        { content: 'pane',
          done: false
        },
        { content: 'mortadella',
          done: false
        },
        { content: 'salame',
          done: false
        },],
      newItem: '',
    },
    methods: {

        checked: function(index){
            this.listItems.splice(index, 1)
            
        },

        importNewItem: function(){

            if (this.newItem.trim().length > 0) {
                this.listItems.push(this.newItem)
                this.newItem = '' 
            }
        },

        sbarraElemento(index) {
            this.listItems[index].done = ! this.listItems[index].done;
        }
    }
  });