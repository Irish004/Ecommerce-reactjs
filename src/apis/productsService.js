import axiosClients from './axiosClients';

const getProducts = async () => {
    const res = axiosClients.get('/product');
    return (await res).data;
};

export { getProducts };
