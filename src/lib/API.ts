// @ts-ignore
import { BackendAsyncRequest } from '@compliance-total/react-lib'


import Config from '../config'

const { user, touch } = Config.api;

const UserApi = new BackendAsyncRequest(user);
const TouchApi = new BackendAsyncRequest(touch);

export {
    UserApi,
    TouchApi
}