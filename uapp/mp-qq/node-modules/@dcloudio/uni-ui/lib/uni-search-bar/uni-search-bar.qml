<view class="uni-searchbar data-v-1b21e306"><view data-event-opts="{{[['tap',[['searchClick',['$event']]]]]}}" class="uni-searchbar__box data-v-1b21e306" style="{{'border-radius:'+(radius+'px')+';'+('background-color:'+(bgColor)+';')}}" bindtap="__e"><uni-icons class="uni-searchbar__box-icon-search data-v-1b21e306" vue-id="15a3b07e-1" color="#999999" size="18" type="search" bind:__l="__l"></uni-icons><block qq:if="{{show}}"><input class="uni-searchbar__box-search-input data-v-1b21e306" focus="{{showSync}}" placeholder="{{placeholder}}" maxlength="{{maxlength}}" confirm-type="search" type="text" data-event-opts="{{[['confirm',[['confirm',['$event']]]],['input',[['__set_model',['','searchVal','$event',[]]]]]]}}" value="{{searchVal}}" bindconfirm="__e" bindinput="__e"/></block><block qq:else><text class="uni-searchbar__text-placeholder data-v-1b21e306">{{placeholder}}</text></block><block qq:if="{{show&&(clearButton==='always'||clearButton==='auto'&&searchVal!=='')}}"><view data-event-opts="{{[['tap',[['clear',['$event']]]]]}}" class="uni-searchbar__box-icon-clear data-v-1b21e306" bindtap="__e"><uni-icons vue-id="15a3b07e-2" color="#999999" size="24" type="clear" class="data-v-1b21e306" bind:__l="__l"></uni-icons></view></block></view><block qq:if="{{cancelButton==='always'||show&&cancelButton==='auto'}}"><text data-event-opts="{{[['tap',[['cancel',['$event']]]]]}}" class="uni-searchbar__cancel data-v-1b21e306" bindtap="__e">{{cancelText}}</text></block></view>