import { types } from 'mobx-state-tree';
import ItemGroupStore from './ItemGroupStore';

const Store = types.model('store', {
    itemGroupStore: types.optional(ItemGroupStore, {})
});
export default Store;