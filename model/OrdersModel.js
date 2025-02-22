import { model } from 'mongoose';
import { OrdersSchema }from '../schemas/OrdersSchema';

export const OrdersModel = model('order', OrdersSchema);