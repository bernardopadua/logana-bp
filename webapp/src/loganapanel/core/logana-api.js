//Core
import Config from '../core/config'
import axios from 'axios'

class LoganaAPI {
    constructor(token){
        this.token = token;
        this.http = (m,u,p=null,d=null) => {
            let retObj = { 
                method: m,
                baseURL: Config.host_api,
                url: u
            };

            if (m == 'get'){
                retObj.params = {
                    ...p,
                    token: this.token
                };
            } else {
                retObj.data = {
                    ...d,
                    token: this.token
                }
            }

            return retObj;
        };

        this.request = axios.create({
            baseURL: Config.host_api
        });

    }    

    objToData(objData){
        let httpData = new FormData();
        for(const field in objData){
            if(field!==undefined)
                httpData.append(field, objData[field]);
        }
        httpData.append('token', this.token);
        return httpData;
    }

    objToParam(objData){
        return {
            params: {
                ...objData,
                token: this.token
            }
        }
    }

    getLog(cb){
        //const httpReq = this.http('get', '/log/getlog');        
        //axios(httpReq)
        const params = this.objToParam({});
        this.request.get('/log/getlog', params)
        .then((r)=>{
            cb(r);
        });
    }

    getForums(cb){
        //const httpReq = this.http('get', '/log/getforum');
        //axios(httpReq)

        const params = this.objToParam({});
        this.request.get('/log/getforum', params)
        .then((r)=>{
            cb(r);
        })
    }

    getStatus(cb){
        const params = this.objToParam({});
        this.request.get('/log/getstatus', params)
        .then((r)=>{
            cb(r);
        })
    }

    createLog(cb, data){        
        const httpData  = this.objToData(data);
        this.request.post('/log/create', httpData)
        .then((r)=>{
            cb(r);
        })
    }

}

export default LoganaAPI;