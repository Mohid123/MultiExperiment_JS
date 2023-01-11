const { fetch: originalFetch } = window;

class Request_Interceptor {
    constructor() {}

    Intercept_Request() {
        window.fetch = async (...args) => {
            let [resource, config ] = args;
            const isLoggedIn = getItem('user');
            const token = getItem('token');
            const response = await originalFetch(resource, config);

            if(isLoggedIn && token) {
                config.headers.append('Authorization', token)
                return response
            }
            return response;
        };
    }
}

const getItem = (itemName) => {
    const item = localStorage.getItem(itemName);
    return item ? JSON.parse(item) : null;
};

export default Request_Interceptor