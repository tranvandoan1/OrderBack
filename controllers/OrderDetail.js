import OrderDetail from '../modoles/OrderDetail';
import _ from 'lodash';

export const create = (req, res) => {

    let orderdetail = new OrderDetail(req.body);
    orderdetail.save((err, data) => {
        if (err) {
            res.status(400).json({
                error: "Không thêm được sản phẩm"
            })
        }
        res.json(data)
    })

}


export const Id = (req, res, next, id) => {
    OrderDetail.findById(id).exec((err, orderdetail) => {
        if (err || !orderdetail) {
            res.status(400).json({
                error: "Không tìm thấy sản phẩm"
            })
        }
        req.orderdetail = orderdetail;
        next();
    })
}
export const read = (req, res) => {
    return res.json(req.orderdetail);
}

export const remove = (req, res) => {
    let orderdetail = req.orderdetail;
    orderdetail.remove((err, oder) => {
        if (err) {
            return res.status(400).json({
                error: "Không xóa được sản phẩm"
            })
        }
        res.json({
            orderdetail,
            message: "Sản phẩm đã được xóa thành công"
        })
    })
}

export const list = (req, res) => {
    OrderDetail.find((err, data) => {
        if (err) {
            error: "Không tìm thấy sản phẩm"
        }
        res.json(data)
    })
}