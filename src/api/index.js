import axios from '@/utils/request'

export const Login = data => {
  return axios({
    url: `private/v1/login?username=${data.username}&password=${data.password}`,
    // url: 'private/v1/login',
    method: 'post'
    // data
  })
}
