import {request} from "./request";

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

export class Shops {
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.sells = shopInfo.cSells
    this.goods = shopInfo.cGoods
    this.score = shopInfo.score
  }
}

export class GoodsParam {
  constructor(info, rule) {
    this.image =info.images ? info.images[0] : ''
    this.infos = info.set
    this.sizes = rule.tables
  }
}

export function getGoodsRecommend(){
  return request({
      url:'/recommend'
  });
}