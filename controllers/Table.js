import Table from "../modoles/Table";
import formidable from "formidable";
import _ from "lodash";

export const create = (req, res) => {
  let table = new Table(req.body);

  table.save((err, data) => {
    if (err) {
      res.status(400).json({
        error: "Không thêm được",
      });
    }
    res.json(data);
  });
};

export const Id = (req, res, next, id) => {
  Table.findById(id).exec((err, table) => {
    if (err || !table) {
      res.status(400).json({
        error: "Không tìm thấy ",
      });
    }
    req.table = table;
    next();
  });
};
export const read = (req, res) => {
  return res.json(req.table);
};

export const remove = (req, res) => {
  let table = req.table;
  table.remove((err, table) => {
    if (err) {
      return res.status(400).json({
        error: "Không xóa được ",
      });
    }
    res.json({
      table,
      message: "Thông tin của bạn đã được xóa thành công",
    });
  });
};

export const list = (req, res) => {
  Table.find((err, data) => {
    if (err) {
      error: "Không tìm thấy thông tin";
    }
    res.json(data);
  });
};

export const update = (req, res) => {
  let table = req.table;
  table.name = req.body.name;
  table.floor_id = req.body.floor_id;

  table.save((err, data) => {
    if (err) {
      res.status(400).json({
        error: "Không sửa được thông tin",
      });
    }
    res.json(data);
  });
};
