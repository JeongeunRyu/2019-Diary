import axios    from 'axios'

const DOMAIN = 'http://127.0.0.1:8000'

const serverRequest = (method, url, data) => {
  return axios({ method, url: DOMAIN+url, data })

}

export const view = {
  postView(){
    return serverRequest('get','/api/index')
  },
  postDelete(id){
    return serverRequest('post', '/api/post/delete/'+id)
  },
}

export const show = {
  postShow(id){
    return serverRequest()
  }
}

export const write = {
  postWrite(data){
    return serverRequest('post','/api/post/create',data)

  }
}

export const edit = {
  postEdit(id){
    return serverRequest('post','/api/post/create',data)
  },
  postUpdate(id){
    return serverRequest('post','/api/post/create',data)
  }
}
