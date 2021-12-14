/*
 * @Author: wanghh
 * @Date: 2021-12-14 10:59:12
 * @LastEditors: wanghh
 * @LastEditTime: 2021-12-14 11:19:20
 * @Description: 联系接口ts的使用
 */
interface User  {
    firstName?: string;
    lastName?: string
}

const user = {
    firstName: 'WHH',
    lastName: '123'
}

function generName(user: User): string {
    return user.firstName + ' ' + user.lastName;
}
const Demo1 = () => {
    return(
        <div>
            {generName(user)}
        </div>
    )
}
export default Demo1