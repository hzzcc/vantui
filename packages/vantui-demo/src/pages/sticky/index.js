import { Block, View, ScrollView } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'
import {
  ConfigProvider,
  ShareSheet,
  Calendar,
  Skeleton,
  DropdownItem,
  DropdownMenu,
  GridItem,
  Grid,
  IndexAnchor,
  IndexBar,
  Circle,
  Overlay,
  Picker,
  CollapseItem,
  Collapse,
  Rate,
  DatetimePicker,
  TreeSelect,
  Transition,
  Toast,
  Tag,
  TabbarItem,
  Tabbar,
  Tabs,
  Tab,
  Switch,
  Uploader,
  SwipeCell,
  SubmitBar,
  Sticky,
  Steps,
  Stepper,
  Slider,
  SidebarItem,
  Sidebar,
  Search,
  Row,
  RadioGroup,
  Radio,
  Progress,
  Popup,
  Panel,
  Notify,
  NoticeBar,
  NavBar,
  Loading,
  Image,
  Icon,
  GoodsActionButton,
  GoodsActionIcon,
  GoodsAction,
  Field,
  Empty,
  Divider,
  Dialog,
  CountDown,
  Col,
  CheckboxGroup,
  Checkbox,
  CellGroup,
  Cell,
  Card,
  Button,
  Area,
  ActionSheet,
} from '@antmjs/vantui'

import DemoBlock from '../../components/demo-block/index'
import './index.scss'

export default class Index extends React.Component {
  constructor() {
    super()
  }

  state = {
    container: null,
    scrollTop: 0,
    offsetTop: 0,
  }

  onReady = () => {
    this.setState({
      container: () => Taro.createSelectorQuery().select('#container'),
    })
  }

  onScroll = (event) => {
    Taro.createSelectorQuery()
      .select('#scroller')
      .boundingClientRect((res) => {
        this.setState({
          scrollTop: event.detail.scrollTop,
          offsetTop: res.top,
        })
      })
      .exec()
  }

  render() {
    const { container, scrollTop, offsetTop } = this.state
    return (
      <Block>
        <DemoBlock title="基础用法">
          <Sticky>
            <Button type="primary" style="margin-left: 15px">
              基础用法
            </Button>
          </Sticky>
        </DemoBlock>
        <DemoBlock title="吸顶距离">
          <Sticky offsetTop={50}>
            <Button type="info" customStyle="margin-left: 115px">
              吸顶距离
            </Button>
          </Sticky>
        </DemoBlock>
        <DemoBlock title="指定容器">
          <View id="container" style="height: 150px; background-color: #fff;">
            <Sticky container={container}>
              <Button type="warning" customStyle="margin-left: 215px;">
                指定容器
              </Button>
            </Sticky>
          </View>
        </DemoBlock>
        <DemoBlock title="嵌套在 scroll-view 内使用">
          <ScrollView
            onScroll={this.onScroll}
            scrollY
            id="scroller"
            style="height: 200px; background-color: #fff;"
          >
            <View style="height: 400px; padding-top: 50px;">
              <Sticky scrollTop={scrollTop} offsetTop={offsetTop}>
                <Button type="warning">嵌套在 scroll-view 内</Button>
              </Sticky>
            </View>
          </ScrollView>
        </DemoBlock>
      </Block>
    )
  }
}
