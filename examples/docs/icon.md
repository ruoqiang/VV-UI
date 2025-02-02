<script>
  var iconList = require('../icon.json');
  var iconList2 = require('../../packages/theme-default/src/fonts2/iconfont.json')
   
console.log(iconList2)
   
  export default {
    data() {
      return {
        icons: iconList,
        icons2:iconList2
      };
    },
    computed: {
      icon2Class() {
        return 
      }
    }
  }
</script>
<style lang="less">
  .demo-icon .source > i {
    font-size: 24px;
    color: #8492a6;
    margin: 0 20px;
    font-size: 1.5em;
    vertical-align: middle;
  }
  
  .demo-icon .source > button {
    margin: 0 20px;
  }

  .icon-list {
    overflow: hidden;
    list-style: none;
    padding: 0;
    border: solid 1px #eaeefb;
    border-radius: 4px;
  }
  .icon-list li {
    float: left;
    width: 16.66%;
    text-align: center;
    height: 120px;
    line-height: 120px;
    color: #666;
    font-size: 13px;
    transition: color .15s linear;

    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-right: -1px;
    margin-bottom: -1px;
    span {
      display: inline-block;
      line-height: normal;
      vertical-align: middle;
      font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',SimSun,sans-serif;
      color: #99a9bf;
    }
    i {
      display: block;
      font-size: 32px;
      margin-bottom: 15px;
      color: #3f536e;
    }
    &:hover {
      color: rgb(92, 182, 255);
    }
  }
</style>

# Icon 图标

----
语义化的矢量图形，```E8-UI``` 使用开源的 Iconfont (阿里妈妈MUX倾力打造的矢量图标管理、交流平台) 作为图标库，并制作成了 ```icon font```。
### 如何使用

使用 ```class="icon"``` 来声明图标，具体图标的名称请 ```copy``` 相应的标签

<div class="demo-block">
  <i class="e8-icon-close fs-24"></i>
  <i class="e8-icon-link fs-24"></i>
  <i class="e8-icon-tag fs-24"></i>
  <i class="e8-icon-smile fs-24"></i>
</div>

::: demo
```html

<i class="e8-icon-close fs-24"></i>
<i class="e8-icon-link fs-24"></i>
<i class="e8-icon-tag fs-24"></i>
<i class="e8-icon-smile fs-24"></i>

```
:::

### 图标示例

<ul class="icon-list">
  <li v-for="name in icons" :key="name">
    <span>
      <i :class="'e8-' + name"></i>
      {{'e8-' + name}}
    </span>
  </li>
</ul>

### 图标示例2

<ul class="icon-list">
  <li v-for="item in icons2.glyphs" :key="item.font_class">
    <span>
      <i :class="'e8-icon2-' + item['font_class']"></i>
      e8-icon2-{{item.font_class}}
    </span>
  </li>
  <!-- <span class="e8-icon2-close">
    </span> -->
</ul>

### 自己如何添加自定义图标

- 1.登录阿里图标库 [`https://www.iconfont.cn/home/index`](https://www.iconfont.cn/home/index) ,选择自己想要的图标，或者设计给到上传上去
- 2.添加到项目后下载拷贝到项目中，参照packages/theme-default/src/fonts与packages/theme-default/src/icon.css修改好，并新增配置gulpfile.js拷贝图标文件
