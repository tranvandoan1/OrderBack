import Saveorder from '../modoles/SaveOrder';
import _ from 'lodash';
export const create = (req, res) => {
    const saveorder = new Saveorder(req.body);
    saveorder.save((err, data) => {
        if (err) {
            res.status(400).json({
                error: "Không thêm được sp oder"
            })
        }
        res.json(data)
    })

}

export const saveorderId = (req, res, next, id) => {
    Saveorder.findById(id).exec((err, saveorder) => {
        if (err || !saveorder) {
            res.status(400).json({
                error: "Không tìm thấy sp oder"
            })
        }
        req.saveorder = saveorder;
        next();
    })
}
export const read = (req, res) => {
    return res.json(req.saveorder);
}

export const remove = (req, res) => {
    let saveorder = req.saveorder;
    saveorder.remove((err, saveorder) => {
        if (err) {
            return res.status(400).json({
                error: "Không xóa được sp oder"
            })
        }
        res.json({
            saveorder,
            message: "Sp oder đã được xóa thành công"
        })
    })
}

export const list = (req, res) => {

    Saveorder.find((err, data) => {
        if (err) {
            error: "Không tìm thấy sp oder"
        }
        res.json(data)
    })

}

export const update = (req, res) => {
    const saveorder = req.saveorder

    saveorder.id_user = req.body.id_user
    saveorder.id_pro = req.body.id_pro
    saveorder.id_table = req.body.id_table
    saveorder.name = req.body.name
    saveorder.price = req.body.price
    saveorder.amount = req.body.amount
    saveorder.photo = req.body.photo
    saveorder.weight = req.body.weight
    saveorder.floor_id = req.body.floor_id

    saveorder.save((err, data) => {
        if (err) {
            res.status(400).json({
                error: "Không sửa được sp oder"
            })
        }
        res.json(data)
    })

}