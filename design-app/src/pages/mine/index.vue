<template>
    <div class="page" id="mine">
        <div class="welfare">
            <van-icon class="bell" name="bell" size="25px"/>
            <ul class="mineInfo">
                <li class="concern">.关注.
                    <span>{{concern}}</span>
                </li>
                <li class="userLogo">
                    <img :src="userLogo" alt="">
                </li>
                <li class="integral">.积分.
                    <span>{{intecral}}</span>
                </li>
            </ul>
            <div class="userName">{{userName}}</div>
            <ul class="welfareList">
                <li>
                     <router-link to="/mine/welfare">
                         <van-icon class="diamond-o" name="diamond-o" size="40px"/>
                         <div>会员福利</div>
                     </router-link>
                </li>
                <li>
                    <router-link to="/getIntegral">
                        <van-icon class="refund-o" name="refund-o" size="40px"/>
                        <div>获取积分</div>
                    </router-link>
                     
                </li>
                <li>
                    <router-link to="/leaveIntegral">
                        <van-icon class="after-sale" name="after-sale" size="40px"/>
                        <div>积分兑换</div>
                    </router-link>
                     
                </li>
            </ul>
        </div>
        <div class="point"></div>
        <router-view></router-view>
    </div>
</template>

<script>
import { getIntegral } from "../../services/mineService";
import Vue from "vue";
import { Icon } from "vant";
import "vant/lib/index.css";

Vue.use(Icon);
export default {
  data: function() {
    return {
      concern: 0,
      intecral: 0,
      userLogo: "",
      userName: ""
    };
  },
  created: function() {
    getIntegral().then(({ intecralList }) => {
      this.concern = intecralList.concern;
      this.intecral = intecralList.intecral;
      this.userLogo = intecralList.userLogo;
      this.userName = intecralList.userName;
      console.log(intecralList);
    });
  }
};
</script>

<style lang="scss" scoped>
#mine {
  display: flex;
  flex-direction: column;
  .welfare {
    width: 100%;
    height: 240px;
    background: #ffda44;
    .bell {
      margin: 10px;
      position: absolute;
      top: 0;
      right: 0;
    }
    .mineInfo {
      height: 110px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      li {
        font-size: 20px;
        span {
          display: block;
          font-size: 16px;
          text-align: center;
          color: #64605d;
        }
      }
      .userLogo {
        img {
          border-radius: 50%;
        }
      }
    }
    .userName {
      text-align: center;
      font-size: 25px;
      font-weight: 600;
    }
    .welfareList {
      height: 100px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      li a {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
  .point {
    width: 100%;
    flex: 4;
  }
}
</style>

