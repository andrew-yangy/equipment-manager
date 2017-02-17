/**
 * ShopReactNative
 *
 * @author Tony Wong
 * @date 2016-08-13
 * @email 908601756@qq.com
 * @copyright Copyright © 2016 EleTeam
 * @license The MIT License (MIT)
 */

import {Dimensions} from 'react-native';

let window = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
};
let categories = [
    "保健品",
    "美妆产品",
    "保金品",
    "日用品",
    "洗护产品",
    "护肤产品",
    "保健食品",
    "眼部护理产品",
    "家居卫生",
    "婴儿洗护产品",
    "日用洗护产品",
    "护肤品",
    "护发产品",
    "挂件饰品",
    "母婴用品",
    "常用药品",
    "婴儿药品",
    "日用保洁产品",
    "美味零食",
    "食品",
    "婴儿食品",
    "日常药品",
    "日用产品",
    "减肥产品",
    "婴儿用品",
    "美肤产品",
    "零食",
    "染发产品",
    "日用饮食",
    "婴幼儿药品",
    "孕妇用品",
    "外用药品",
    "儿童药品",
    "女性用品",
    "护肤用品",
    "防晒产品",
    "厨房用品",
    "保健药品",
    "保健零食",
    "奶粉",
    "孕妇食品",
    "服装饰品",
    "鞋类",
    "UGG",
    "服装系列",
    "服装",
    "外用药膏",
    "围巾",
    "精美饰品",
    "衣服",
    "彩妆",
    "时尚饰品",
    "婴幼儿食品",
    "美味食品",
    "玩具",
    "婴幼儿用品",
    "日用商品",
    "美发产品"
];
export default {
    window: window,
    categories:categories
};