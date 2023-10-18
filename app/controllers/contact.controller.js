
// no signin
exports.findAllFilm = (req, res) => {
    res.send({ message: "findAll hander"})
};
exports.findFilm = (req, res) => {
    res.send({ message: "find one film"})
};
exports.findAllScreenings = (req, res) => {
    res.send({ message: "tìm all phim"})
};
exports.register = (req, res) => {
    res.send({ message: "Đăng ký tài khoản"})
};
exports.login = (req, res) => {
    res.send({ message: "Đăng nhập "})
};

// user
exports.Booked = (req, res) => {
    res.send({ message: "tien hanh dat ve"})
};
exports.updateBooked = (req, res) => {
    res.send({ message: "Chinh sua dat ve"})
};
exports.deleteBooked = (req, res) => {
    res.send({ message: "xoa dat ve"})
};
exports.showBooked = (req, res) => {
    res.send({ message: "Ve dax dat"})
};
exports.showAllBooked = (req, res) => {
    res.send({ message: "xem tat ca ve dat"})
};
exports.deleteHistoryBooked = (req, res) => {
    res.send({message: "xoa lich su da dat"})
};

//admin
exports.createFilm = (req, res) => {
    res.send({ message: "create film"})
};
exports.updateFilm = (req, res) => {
    res.send({ message: "update film"})
};
exports.deleteAllFilm = (req, res) => {
    res.send({ message: "delete all film"})
};
exports.deleteFilm = (req, res) => {
    res.send({ message: "delete  film"})
};

exports.findAllAcc = (req, res) => {
    res.send({ message: "Danh sách acc nô lệ"})
}
exports.findAcc = (req, res) => {
    res.send({ message: "Tim acc lỏ"})
}
exports.createAcc = (req, res) => {
    res.send({ message: "create account"})
};
exports.deleteAcc = (req, res) => {
    res.send({ message: "xoa tai khoan"})
}

exports.findScreenings = (req, res) => {
    res.send({ message: "tim "})
};
exports.createScreenings = (req, res) => {
    res.send({ message: "create Screenings "})
};
exports.updateScreenings = (req, res) => {
    res.send({ message: "update Screenings"})
};
exports.deleteScreenings = (req, res) => {
    res.send({ message: "xóa suát chiếu "})
};
exports.deleteAllScreenings = (req, res) => {
    res.send({ message: "xóa tất cả suát chiếu "})
};