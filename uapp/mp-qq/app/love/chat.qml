<view class="page _div data-v-12717398"><block qq:for="{{list}}" qq:for-item="item" qq:for-index="index"><view class="item _div data-v-12717398"><block qq:for="{{item.content}}" qq:for-item="item2" qq:for-index="index2"><view class="row _div data-v-12717398" style="{{(item2.ans_sex==1?'justify-content: flex-end;':'')}}"><block qq:if="{{item2.ans_sex==2}}"><view class="left _div data-v-12717398">{{item2.content}}</view></block><block qq:if="{{item2.ans_sex==1}}"><view data-event-opts="{{[['tap',[['setClipboardData',['$0'],[[['list','id+index',item.id+index],['content','id+index2',item2.id+index2,'content']]]]]]]}}" class="right _div data-v-12717398" bindtap="__e">{{item2.content}}</view></block></view></block></view></block></view>