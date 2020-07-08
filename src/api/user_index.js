// 处理与用户相关操作
import axios from '@/utils/myaxios.js'
export const login = (data) => {
  return axios({
    url: 'login',
    method: 'post',
    data
  })
}
