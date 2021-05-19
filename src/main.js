import { delay } from '@/utils';

const sayHello = async (msg) => {
    await delay(2000);
    console.log(msg);
};

sayHello('hello');
