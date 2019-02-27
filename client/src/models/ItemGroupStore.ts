import { types } from 'mobx-state-tree';
import axios from 'axios';
import ItemStore from './ItemStore';

const ItemGroupStore = types.model('itemGroupStore', {
    items: types.optional(types.array(ItemStore), [])
}).views((self) => ({

})).actions((self) => ({
    setItems(items: any) {
      self.items = items;
    }
  }))
  .actions((self) => ({
    getAll() {
      axios
        .get('/api/items', {
          headers: { 'content-Type': 'application/json' }
        })
        .then((res) => {
          console.log('getAll()', res.data);
          self.setItems(res.data);
        });
    }
  }))
  .actions((self) => ({
    afterCreate() {
      self.getAll();
      console.log('afterCreate()');
    }
  }));

export default ItemGroupStore;