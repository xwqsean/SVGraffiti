import Stamper from './base/Stamper';

// 计算三次贝塞尔控制点
const calBezierCtrlPoint = (ps, i, a, b) => {
    if (!a || !b) {
        a = 0.25;
        b = 0.25;
    }
    var pAx;
    var pAy;
    var pBx;
    var pBy;
    //处理两种极端情形
    if (i < 1) {
        pAx = ps[0].x + (ps[1].x - ps[0].x) * a;
        pAy = ps[0].y + (ps[1].y - ps[0].y) * a;
    } else {
        pAx = ps[i].x + (ps[i + 1].x - ps[i - 1].x) * a;
        pAy = ps[i].y + (ps[i + 1].y - ps[i - 1].y) * a;
    }
    if (i > ps.length - 3) {
        var last = ps.length - 1;
        pBx = ps[last].x - (ps[last].x - ps[last - 1].x) * b;
        pBy = ps[last].y - (ps[last].y - ps[last - 1].y) * b;
    } else {
        pBx = ps[i + 1].x - (ps[i + 2].x - ps[i].x) * b;
        pBy = ps[i + 1].y - (ps[i + 2].y - ps[i].y) * b;
    }
    return {
        pA: {
            x: pAx,
            y: pAy
        },
        pB: {
            x: pBx,
            y: pBy
        }
    }
};

export default class Graffiti extends Stamper {

    constructor(attrs = {}) {
        super('path', {
            'd': 'M250 150 L150 350 L350 350 Z',
            ...attrs
        });
    }
}