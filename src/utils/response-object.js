class ResponseObject{
    constructor(success,message="",data={},error={}){
        this.success = success;
        this.message = message;
        this.data = data;
        this.error = error;
        console.log(this.error)
    }
}

module.exports = ResponseObject