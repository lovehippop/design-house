<template>
    <div id="designerContent">
        <div class="designerContentItem" v-for="item in userInfoList" :key="item.id">
            <router-link to="/mine" class="userInfo"  >
                <img class="userLogo" :src="item.userLogo" alt="">
                <div class="userTextInfo">
                    <div class="userName">{{item.userName}}</div>
                    <div class="address">{{item.space}}</div>
                </div>
            </router-link>
            <div class="spaceImg" >
                <img :src="item.images[0]" alt="">
                <img :src="item.images[1]" alt="">
            </div>
        </div>
    </div>
</template>
<script>
import { getJournalCateList } from "../../services/designerService";
export default {
  data: function() {
    return {
      userInfoList: []
    };
  },
  created: function() {
    getJournalCateList().then(data => {
      this.userInfoList = data.designerContent;
    });
  }
};
</script>
<style lang="scss" scoped>
#designerContent {
  width: 100%;
  .designerContentItem {
    height: 170px;
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    .userInfo {
      height: 65px;
      display: flex;
      align-items: center;
      .userLogo {
        border-radius: 50%;
        margin-right: 10px;
      }
      .userName {
        color: #48474c;
      }
      .address {
        color: #bdbdbd;
      }
    }
    .spaceImg {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>

