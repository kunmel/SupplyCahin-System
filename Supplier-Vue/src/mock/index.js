import Mock from 'mockjs'
import * as loginAPI from './login'
import * as userAPI from './user'
import * as homepageAPI from './homepage'
import * as excel from './excel'
import * as echarts from './echarts'
import * as draggable from './draggable'
import * as company from './company'

Mock.setup({
  timeout: '300-600'
})

// 登录相关接口
Mock.mock('/login/login', 'post', loginAPI.login)
Mock.mock('/login/logout', 'post', loginAPI.logout)
Mock.mock('/login/register', 'post', loginAPI.register)

// 用户信息相关接口
Mock.mock('/user/getInfo', 'post', userAPI.pullUserInfo)

// 首页 homepage 相关的接口
Mock.mock('/homepage/hometotal', 'post', homepageAPI.getHomeTotal)

// 借款 
Mock.mock('/excel/userFinance', 'post', excel.userFiannceData)
// // 首页 homepageDetailItem 接口
// Mock.mock('/homepage/detailItem', 'post', homepageAPI.getHomeDetailItem)
// // 首页 investmentRank 接口
// Mock.mock('/homepage/investmentRank', 'post', homepageAPI.getHomeInvestmentRank)

// 表格部分【导出表格中的票房数据】
Mock.mock('/api/getmoviepiaofang-mock', 'post', excel.piaofang)
Mock.mock('/excel/getMergeTableData', 'post', excel.mergeTableData)
Mock.mock('/excel/getUndoTable', 'post', excel.undoTableData)
Mock.mock('/excel/getGoodsTable', 'post', excel.GoodsTable)
// 自定义表格
Mock.mock('/excel/getFiles', 'post', excel.getFileList)
Mock.mock('/excel/delFiles', 'post', excel.delFiles)


// echarts菜单
Mock.mock('/echarts/getCateData', 'get', echarts.getCateData)
Mock.mock('/echarts/getDepartTop', 'post', echarts.getDepartTop)

// 拖拽
Mock.mock('/draggable/getFiles', 'post', draggable.getFileList)

//企业端接口
Mock.mock('/company/QueryProduct','post',company.allProduct)
Mock.mock('/company/StoreOrder','post',company.StoreOrder)
Mock.mock('/company/QueryOrderByBuyer','post',company.allOrder)

export default Mock
