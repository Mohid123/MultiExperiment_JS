const headersConfig = {
    // 'LOCALE': 'en',
    'Accept': 'application/json',
    // 'Access-Control-Allow-Origin': '*'
};

class Api_Service {
    constructor() { }

    setHeaders() {
        const header = {
          ...headersConfig,
          'Content-Type': 'application/json',
        };
        return new Headers(header);
    }

    objectToQueryString(obj) {
        const str = [];
        for (const p in obj)
          if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
          }
        return str.join('&');
    }

    async get(
        path,
        params
      ) {
        const options = {
          params: params ? { fromString: this.objectToQueryString(params) } : null,
          headers: this.setHeaders(),
          method: "GET"
        };
        
        return await this.mapAndCatchError(
           fetch(`https://cat-fact.herokuapp.com/${path}`, options)
        );
    }

   async post(
    path,
    body = {}
   ) {
    const options = {
      headers: this.setHeaders(),
      method: "POST",
      body: JSON.stringify(body)
    }
    return await this.mapAndCatchError(
      fetch(`https://jsonplaceholder.typicode.com/${path}`, options)
    )
   }

    async mapAndCatchError(response) {
        return await response.then(res => {
          if([200, 201, 204].includes(res.status))
          {
            return res.json().then(data => {
              return {
                data: data,
                status: res.status,
                text: res.statusText || "OK"
              }
            });
          }
          else {
            throw {
              data: null,
              status: res.status,
              text: res.statusText
            }
          }
        })
        .then((value => {
            const result = new ApiResponse();
            Object.assign(result, value);
            delete result.headers;
            return result;
        }))
        .catch(err => {
            const result = new ApiResponse();
            delete result.headers;
            if (
                err instanceof ErrorEvent ||
                err instanceof ProgressEvent ||
                err instanceof TypeError
              ) {
                result.errors.push({
                  code: 400,
                  text: 'Failed to send request. There might be an issue with the request url or body'
                });
              } else {
                result.errors.push({
                  code: err.status,
                  text: err.text,
                  error: err.text + ' Error'
                });
              }
            return result
        })
    }
}

class ApiResponse {
    headers;
    constructor() {
        this.errors = [];
    }
    status; //boolean
    data; // response data
    getErrorsText() {
        return this.errors.map((e) => e.text).join(' ');
    }
    hasErrors() {
        return this.errors.length > 0;
    }
}

export default Api_Service
