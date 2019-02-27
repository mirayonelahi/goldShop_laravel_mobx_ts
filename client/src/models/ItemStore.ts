import { types, getSnapshot } from 'mobx-state-tree';
import axios from 'axios';

const ItemStore = types
  .model('itemStore', {
    id: types.maybe(types.number),
    token: types.optional(types.string, ''),
    name: types.optional(types.string, ''),
    category: types.optional(types.string, ''),
    carat: types.optional(types.number, 18),
    weight: types.optional(types.number, 18),
    sold: types.optional(types.number, 0),
    // sellingDate: types.maybe(types.Date),
    createdAt: types.maybe(types.Date),
    updatedAt: types.maybe(types.Date)
  })
  .views(self => ({}))
  .actions(self => ({
    setItemStore(
      token: string,
      name: string,
      category: string,
      carat: number,
      weight: number,
      sold: number,
    //   sellingDate: Date
    ) {
      self.token = token;
      self.name = name;
      self.category = category;
      self.carat = carat;
      self.weight = weight;
      self.sold = sold;
    //   self.sellingDate = sellingDate;
    }
  }))
  .actions(self => ({
    save() {
      axios
        .post('/api/items', getSnapshot(self), {
          headers: { 'Content-Type': 'application/json' }
        })
        .then(res => {
          // tslint:disable-next-line: no-console
          console.log('data saved: ', res.data);
        //   self.setItemStore('', '', '',);
        });
    }
  }));

export default ItemStore;
