import {requestInstance} from '../baseUrl';

export async function postLogin(usr: string, pwd: string): Promise<any> {
  const {data} = await requestInstance({
    method: 'post',
    url: '/login',
    data: {
      usr: usr,
      pwd: pwd,
    },
  });

  return data;
}
