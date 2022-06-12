import Floors from '../modoles/Floors';
import formidable from 'formidable';
import _ from 'lodash';

export const create = (req, res) => {

    let floor = new Floors(req.body);

    floor.save((err, data) => {
        if (err) {
            res.status(400).json({
                error: "Không thêm được"
            })
        }
        res.json(data)
    })

}


export const Id = (req, res, next, id) => {
    Floors.findById(id).exec((err, floor) => {
        if (err || !floor) {
            res.status(400).json({
                error: "Không tìm thấy "
            })
        }
        req.floor = floor;
        next();
    })
}
export const read = (req, res) => {
    return res.json(req.floor);
}

export const remove = (req, res) => {
    let floor = req.floor;
    floor.remove((err, floor) => {
        if (err) {
            return res.status(400).json({
                error: "Không xóa được "
            })
        }
        res.json({
            floor,
            message: "Thông tin của bạn đã được xóa thành công"
        })
    })
}

export const list = (req, res) => {
    Floors.find((err, data) => {
        if (err) {
            error: "Không tìm thấy thông tin"
        }
        res.json(data)
    })
}

export const update = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "ko thành côgn"
            })
        }

        let floor = req.floor;
        floor = _.assignIn(floor, fields);

        floor.save((err, data) => {
            if (err) {
                res.status(400).json({
                    error: "Không sửa được thông tin"
                })
            }
            res.json(data)
        })
    });
}