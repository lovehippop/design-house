<template>
    <div class="page" id="journal">
        <h1 class="title">杂志</h1>
        <scroller :top='44' :bottom='49'>
            <div class="date">{{time}}</div>
            <ul class="content">
                        <li class="contentItem"  v-for="item in getJournalCateList" :key="item.id">
                            <img class="book" :src="item.images" alt=""> 
                            <div class="publishDate">{{item.date}}</div>
                       </li>
            </ul>
        </scroller>
    </div>
</template>

<script>
import scroller from "../../common/components/scroller/scroller";
import { getJournalCateList } from "../../services/journalService";
export default {
  components: {
    scroller
  },
  data: function() {
    return {
      time: "",
      getJournalCateList: []
    };
  },
  created: function() {
    getJournalCateList().then(
      ({ journalContentList, journalContentListTime }) => {
        this.time = journalContentListTime.time;
        this.getJournalCateList = journalContentList;
      }
    );
  }
};
</script>

<style lang="scss" scoped>
#journal {
  width: 100%;
  //   padding: 0 20px;
  background: #f3f2f0;
  .title {
    height: 44px;
    font-size: 25px;
    text-align: center;
    line-height: 44px;
    color: #0f0f0d;
  }
  .date {
    font-size: 20px;
    font-weight: 700;
    line-height: 50px;
    color: #bebebe;
    padding-left: 20px;
  }
  .content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .contentItem {
      width: 150px;
      height: 245px;
      margin-bottom: 15px;
      box-shadow: 4px 4px 10px #bebebe;
      border: 1px solid #bebebe;
      .publishDate {
        line-height: 45px;
      }
    }
  }
}
</style>

