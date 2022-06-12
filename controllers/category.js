import Category from '../modoles/category';
import formidable from 'formidable';
import _ from 'lodash';
export const create = (req, res) => {
    let category = new Category(req.body);
    category.save((error, data) => {
        if (error) {
            return res.status(400).json({
                error: "Không thêm duoc danh muc"
            })
        }
        res.json(data)
    })


}

export const categoryById = (req, res, next, id) => {
    Category.findById(id).exec((err, category) => {
        if (err || !category) {
            res.status(400).json({
                error: "Không tìm thấy Danh muc"
            })
        }
        req.category = category;
        next();
    })
}
export const read = (req, res) => {
    return res.json(req.category);
}

export const remove = (req, res) => {
    let category = req.category;
    category.remove((err, deletedcategory) => {
        if (err) {
            return res.status(400).json({
                error: "Không xóa được Danh muc"
            })
        }
        res.json({
            deletedcategory,
            message: "Danh muc đã được xóa thành công"
        })
    })
}

export const list = (req, res) => {
    Category.find((error, data) => {
        if (error) {
            error: "Không tìm thấy Danh muc"
        }
        console.log(data)
        res.json(data)
    })
}

export const update = (req, res) => {
    const form = formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {

        let cate = req.category;
        cate = _.assignIn(cate, fields);

        cate.save((err, data) => {
            if (err) {
                res.status(400).json({
                    error: "Không sửa được danh mục"
                })
            }
            res.json(data)
        })

    })
}