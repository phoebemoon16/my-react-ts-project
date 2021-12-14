/*
 * @Author: wanghh
 * @Date: 2021-12-09 18:15:54
 * @LastEditors: wanghh
 * @LastEditTime: 2021-12-09 18:25:44
 * @Description: 
 */

import React from 'react';
interface UserLayoutState {
    isError: boolean;
  }
  

class UserLayout extends React.PureComponent<any, UserLayoutState> {
    state: UserLayoutState = {
      isError: false,
    };
    render(){
        return (
            <div> userlayout 页面</div>
        )
    }

}
export default UserLayout;