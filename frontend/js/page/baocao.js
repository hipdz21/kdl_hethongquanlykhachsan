var color = ['rgb(240, 102, 102)', 'rgb(196, 125, 208)', 'rgb(51, 149, 255)', 'rgb(115, 198, 99)', 'rgb(52, 182, 162)', 'rgb(255, 173, 51)', 'rgb(255, 130, 51)', 'rgb(96, 125, 139)', 'rgb(102, 39, 0)', 'rgb(48, 111, 36)', 'rgb(94, 23, 106)']
var colorRGBA = ['rgba(240, 102, 102,0.3)', 'rgba(196, 125, 208,0.3)', 'rgba(51, 149, 255,0.3)', 'rgba(115, 198, 99,0.3)', 'rgba(52, 182, 162,0.3)', 'rgba(255, 173, 51,0.3)', 'rgba(255, 130, 51,0.3)', 'rgba(96, 125, 139,0.3)', 'rgba(102, 39, 0,0.3)', 'rgba(48, 111, 36,0.3)', 'rgba(94, 23, 106,0.3)']
var now = new Date();

function nextTab(ele) {
    for (var i of document.querySelectorAll(".report--item")) {
        i.style.display = 'none';
    }
    document.getElementById(ele.value).style.display = 'block';
    if (ele.value == 'report--doanhthu')
        showBieuDoDoanhThu()
    if (ele.value == 'report--phong')
        showBieuDoPhong()
    if (ele.value == 'report--dichvu')
        showBieuDoDichVu()
    if (ele.value == 'report--khachhang')
        showBieuDoKhachHang()

}

// Bieu do bao cao doanh thu
function showBieuDoDoanhThu() {
    showBieuDoDoanhThuNgayTrongThang(now.getMonth() + 1, now.getFullYear());
    showBieuDoDoanhThuThangTrongNam(now.getFullYear());
    showBieuDoDoanhThuNam();
    showBieuDoTyLeDoanhThuThang(now.getMonth() + 1, now.getFullYear());
    showBieuDoDoanhBookingThuThangTrongNam(now.getFullYear());
    showBieuDoDoanhThuUseServiceThangTrongNam(now.getFullYear());
}
function showBieuDoDoanhThuNgayTrongThang(month, year) {

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(url + "/api/revenue-day-month?month=" + month + "&year=" + year, requestOptions)
        .then(response => response.json())
        .then(result => {
            var ctx = document.getElementById('bieuDoDoanhThuNgayTrongThang').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: result.map(function (item) {
                        return item[0];
                    }),
                    datasets: [{
                        label: 'Doanh thu',
                        data: result.map(function (item) {
                            return item[1];
                        }),
                        backgroundColor: 'rgba(66,185,131,0.5)'
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                },
                options: {
                    title: {
                        display: true,
                        text: 'Doanh thu theo ngày trong tháng ' + month + '/' + year
                    }
                }
            });
        })
        .catch(error => console.log('error', error));
}
function showBieuDoDoanhThuThangTrongNam(year) {
    var now = new Date();
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(url + "/api/revenue-month-year?year=" + year, requestOptions)
        .then(response => response.json())
        .then(result => {
            var ctx = document.getElementById('bieuDoDoanhThuThangTrongNam').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: result.map(function (item) {
                        return item[0];
                    }),
                    datasets: [{
                        label: 'Doanh thu',
                        data: result.map(function (item) {
                            return item[1];
                        }),
                        backgroundColor: 'rgba(13, 188, 255, 0.5)'
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                },
                options: {
                    title: {
                        display: true,
                        text: 'Doanh thu theo tháng trong năm ' + year
                    }
                }
            });
        })
        .catch(error => console.log('error', error));
}
function showBieuDoDoanhThuNam() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(url + "/api/revenue-year", requestOptions)
        .then(response => response.json())
        .then(result => {
            var ctx = document.getElementById('bieuDoDoanhThuNam').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: result.map(function (item) {
                        return item[0];
                    }),
                    datasets: [{
                        label: 'Doanh thu',
                        data: result.map(function (item) {
                            return item[1];
                        }),
                        backgroundColor: 'rgba(0, 255, 255, 0.5)'
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                },
                options: {
                    title: {
                        display: true,
                        text: 'Doanh thu theo năm'
                    }
                }
            });
        })
        .catch(error => console.log('error', error));
}
function showBieuDoTyLeDoanhThuThang(month, year) {
    var now = new Date();
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(url + "/api/revenue-booking-useservice-month?month=" + month + "&year=" + year, requestOptions)
        .then(response => response.json())
        .then(result => {
            var ctx = document.getElementById('bieuDoTyLeDoanhThuThang').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: ["Doanh thu phòng", "Doanh thu dịch vụ"],
                    datasets: [{
                        label: 'Doanh thu',
                        data: result[0],
                        backgroundColor: ['rgb(80, 184, 60)', 'rgb(255, 152, 0)']
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                },
                options: {
                    title: {
                        display: true,
                        text: 'Tỷ lệ doanh thu tháng ' + month + '/' + year
                    }
                }
            });
        })
        .catch(error => console.log('error', error));
}
function showBieuDoDoanhBookingThuThangTrongNam(year) {
    var now = new Date();
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(url + "/api/revenue-booking-month-year?year=" + year, requestOptions)
        .then(response => response.json())
        .then(result => {
            var ctx = document.getElementById('bieuDoDoanhBookingThuThangTrongNam').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: result.map(function (item) {
                        return item[0];
                    }),
                    datasets: [{
                        label: 'Doanh thu',
                        data: result.map(function (item) {
                            return item[1];
                        }),
                        backgroundColor: 'rgba(80, 184, 60, 0.7)'
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                },
                options: {
                    title: {
                        display: true,
                        text: 'Doanh thu phòng theo tháng trong năm ' + (year)
                    }
                }
            });
        })
        .catch(error => console.log('error', error));
}
function showBieuDoDoanhThuUseServiceThangTrongNam(year) {
    var now = new Date();
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(url + "/api/revenue-useservice-month-year?year=" + year, requestOptions)
        .then(response => response.json())
        .then(result => {
            var ctx = document.getElementById('bieuDoDoanhThuUseServiceThangTrongNam').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: result.map(function (item) {
                        return item[0];
                    }),
                    datasets: [{
                        label: 'Doanh thu',
                        data: result.map(function (item) {
                            return item[1];
                        }),
                        backgroundColor: 'rgba(255, 152, 0, 0.7)'
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                },
                options: {
                    title: {
                        display: true,
                        text: 'Doanh thu dịch vụ theo tháng trong năm ' + (year)
                    }
                }
            });
        })
        .catch(error => console.log('error', error));
}

// Bieu do bao cao phong
function showBieuDoPhong() {
    showBieuDoSoLuongLoaiPhongThueTheoThang(now.getFullYear());
    showBieuDoDoanhThuLoaiPhongTheoThang(now.getFullYear());
    showBieuDoTyLeSoLuongLoaiPhongThueTheoThang(now.getMonth() + 1, now.getFullYear());
    showBieuDoTyLeDoanhThuLoaiPhongTheoThang(now.getMonth() + 1, now.getFullYear());
    showBieuDoTyLeSoLuongLoaiPhong();
}
function showBieuDoSoLuongLoaiPhongThueTheoThang(year) {
    var now = new Date()
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(url + "/api/report-number-roomtype-year?year=" + year, requestOptions)
        .then(response => response.json())
        .then(result => {
            //Lay nhan thang
            var labels = result.map(function (item) {
                return item[1];
            })
            labels = new Set(labels)
            labels = [...labels]

            //Lay ten loai phong
            var label = result.map(function (item) {
                return item[0];
            })
            label = new Set(label)
            label = [...label]

            var kq = []
            for (var rt of label) {
                var kqThang = []
                for (var m of labels) {
                    var soLuong = 0;
                    for (var j of result) {
                        if (m == j[1] && rt == j[0]) {
                            soLuong = j[2]
                        }
                    }
                    kqThang.push(soLuong)
                }
                kq.push(kqThang)
            }

            var datas = []
            for (var i = 0; i < label.length; i++) {
                datas.push({
                    label: label[i],
                    data: kq[i],
                    backgroundColor: color[i]
                })
            }
            var ctx = document.getElementById('bieuDoSoLuongLoaiPhongThueTheoThang').getContext('2d');
            // Tạo dữ liệu cho biểu đồ
            var data = {
                labels: labels,
                datasets: datas
            };
            // Cấu hình cho biểu đồ
            var options = {
                // responsive: true,
                // maintainAspectRatio: false
                title: {
                    display: true,
                    text: 'Số lượng thuê loại phòng theo tháng trong năm ' + year
                }
            };
            // Vẽ biểu đồ nhiều cột
            var myColumnChart = new Chart(ctx, {
                type: 'bar',
                data: data,
                options: options
            });
        })
        .catch(error => console.log('error', error));
}
function showBieuDoDoanhThuLoaiPhongTheoThang(year) {
    var now = new Date()
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(url + "/api/report-revenue-roomtype-year?year=" + year, requestOptions)
        .then(response => response.json())
        .then(result => {
            //Lay nhan thang
            var labels = result.map(function (item) {
                return item[1];
            })
            labels = new Set(labels)
            labels = [...labels]

            //Lay ten loai phong
            var label = result.map(function (item) {
                return item[0];
            })
            label = new Set(label)
            label = [...label]

            var kq = []
            for (var rt of label) {
                var kqThang = []
                for (var m of labels) {
                    var soLuong = 0;
                    for (var j of result) {
                        if (m == j[1] && rt == j[0]) {
                            soLuong = j[2]
                        }
                    }
                    kqThang.push(soLuong)
                }
                kq.push(kqThang)
            }

            var datas = []
            for (var i = 0; i < label.length; i++) {
                datas.push({
                    label: label[i],
                    data: kq[i],
                    backgroundColor: colorRGBA[i]
                })
            }
            var ctx = document.getElementById('bieuDoDoanhThuLoaiPhongTheoThang').getContext('2d');
            // Tạo dữ liệu cho biểu đồ
            var data = {
                labels: labels,
                datasets: datas
            };
            // Cấu hình cho biểu đồ
            var options = {
                // responsive: true,
                // maintainAspectRatio: false
                title: {
                    display: true,
                    text: 'Doanh thu loại phòng theo tháng trong năm ' + (year)
                }
            };
            // Vẽ biểu đồ nhiều cột
            var myColumnChart = new Chart(ctx, {
                type: 'line',
                data: data,
                options: options
            });
        })
        .catch(error => console.log('error', error));
}
function showBieuDoTyLeSoLuongLoaiPhongThueTheoThang(month, year) {
    var now = new Date();
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(url + "/api/report-number-roomtype-month?month=" + month + "&year=" + year, requestOptions)
        .then(response => response.json())
        .then(result => {
            var ctx = document.getElementById('bieuDoTyLeSoLuongLoaiPhongThueTheoThang').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: result.map(function (item) {
                        return item[0];
                    }),
                    datasets: [{
                        label: 'Doanh thu',
                        data: result.map(function (item) {
                            return item[1];
                        }),
                        backgroundColor: color
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                },
                options: {
                    title: {
                        display: true,
                        text: 'Tỷ lệ số lượng phòng được thuê theo loại phòng tháng ' + month + '/' + year
                    }
                }
            });
        })
        .catch(error => console.log('error', error));
}
function showBieuDoTyLeDoanhThuLoaiPhongTheoThang(month, year) {
    var now = new Date();
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(url + "/api/report-revenue-roomtype-month?month=" + month + "&year=" + year, requestOptions)
        .then(response => response.json())
        .then(result => {
            var ctx = document.getElementById('bieuDoTyLeDoanhThuLoaiPhongTheoThang').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: result.map(function (item) {
                        return item[0];
                    }),
                    datasets: [{
                        label: 'Doanh thu',
                        data: result.map(function (item) {
                            return item[1];
                        }),
                        backgroundColor: color
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                },
                options: {
                    title: {
                        display: true,
                        text: 'Tỷ lệ doanh thu phòng theo loại phòng tháng ' + month + '/' + year
                    }
                }
            });
        })
        .catch(error => console.log('error', error));
}
function showBieuDoTyLeSoLuongLoaiPhong() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(url + "/api/report-number-room", requestOptions)
        .then(response => response.json())
        .then(result => {
            var ctx = document.getElementById('bieuDoTyLeSoLuongLoaiPhong').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: result.map(function (item) {
                        return item[0];
                    }),
                    datasets: [{
                        label: 'Doanh thu',
                        data: result.map(function (item) {
                            return item[1];
                        }),
                        backgroundColor: color
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                },
                options: {
                    title: {
                        display: true,
                        text: 'Tỷ lệ số lượng phòng theo loại phòng'
                    }
                }
            });
        })
        .catch(error => console.log('error', error));
}

// Bieu do bao cao dich vu
function showBieuDoDichVu() {
    showBieuDoSoLuongDichVuTheoThang(now.getFullYear());
    showBieuDoDoanhThuDichVuTheoThang(now.getFullYear());
    showBieuDoTyLeSoLuongDichVuThang(now.getMonth() + 1, now.getFullYear());
    showBieuDoTyLeDoanhThuDichVuThang(now.getMonth() + 1, now.getFullYear());
}
function showBieuDoSoLuongDichVuTheoThang(year) {
    var now = new Date()
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(url + "/api/report-number-service-year?year=" + year, requestOptions)
        .then(response => response.json())
        .then(result => {
            //Lay nhan thang
            var labels = result.map(function (item) {
                return item[1];
            })
            labels = new Set(labels)
            labels = [...labels]

            //Lay ten loai phong
            var label = result.map(function (item) {
                return item[0];
            })
            label = new Set(label)
            label = [...label]

            var kq = []
            for (var rt of label) {
                var kqThang = []
                for (var m of labels) {
                    var soLuong = 0;
                    for (var j of result) {
                        if (m == j[1] && rt == j[0]) {
                            soLuong = j[2]
                        }
                    }
                    kqThang.push(soLuong)
                }
                kq.push(kqThang)
            }

            var datas = []
            for (var i = 0; i < label.length; i++) {
                datas.push({
                    label: label[i],
                    data: kq[i],
                    backgroundColor: color[i]
                })
            }
            var ctx = document.getElementById('bieuDoSoLuongDichVuTheoThang').getContext('2d');
            var data = {
                labels: labels,
                datasets: datas
            };
            var options = {
                title: {
                    display: true,
                    text: 'Số lượng dịch vụ được sử dụng trong năm ' + (year)
                }
            };
            // Vẽ biểu đồ nhiều cột
            var myColumnChart = new Chart(ctx, {
                type: 'bar',
                data: data,
                options: options
            });
        })
        .catch(error => console.log('error', error));
}
function showBieuDoDoanhThuDichVuTheoThang(year) {
    var now = new Date()
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(url + "/api/report-revenue-service-year?year=" + year, requestOptions)
        .then(response => response.json())
        .then(result => {
            //Lay nhan thang
            var labels = result.map(function (item) {
                return item[1];
            })
            labels = new Set(labels)
            labels = [...labels]

            //Lay ten loai phong
            var label = result.map(function (item) {
                return item[0];
            })
            label = new Set(label)
            label = [...label]

            var kq = []
            for (var rt of label) {
                var kqThang = []
                for (var m of labels) {
                    var soLuong = 0;
                    for (var j of result) {
                        if (m == j[1] && rt == j[0]) {
                            soLuong = j[2]
                        }
                    }
                    kqThang.push(soLuong)
                }
                kq.push(kqThang)
            }

            var datas = []
            for (var i = 0; i < label.length; i++) {
                datas.push({
                    label: label[i],
                    data: kq[i],
                    backgroundColor: colorRGBA[i]
                })
            }
            var ctx = document.getElementById('bieuDoDoanhThuDichVuTheoThang').getContext('2d');
            var data = {
                labels: labels,
                datasets: datas
            };
            var options = {
                title: {
                    display: true,
                    text: 'Doanh thu dịch vụ trong năm ' + (year)
                }
            };
            // Vẽ biểu đồ nhiều cột
            var myColumnChart = new Chart(ctx, {
                type: 'line',
                data: data,
                options: options
            });
        })
        .catch(error => console.log('error', error));
}
function showBieuDoTyLeSoLuongDichVuThang(month, year) {
    var now = new Date();
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(url + "/api/report-number-service-month?month=" + month + "&year=" + year, requestOptions)
        .then(response => response.json())
        .then(result => {
            var ctx = document.getElementById('bieuDoTyLeSoLuongDichVuThang').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: result.map(function (item) {
                        return item[0];
                    }),
                    datasets: [{
                        label: 'Doanh thu',
                        data: result.map(function (item) {
                            return item[1];
                        }),
                        backgroundColor: color
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                },
                options: {
                    title: {
                        display: true,
                        text: 'Tỷ lệ số lượng dịch vụ được sử dụng trong tháng ' + month + '/' + year
                    }
                }
            });
        })
        .catch(error => console.log('error', error));
}
function showBieuDoTyLeDoanhThuDichVuThang(month, year) {
    var now = new Date();
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(url + "/api/report-revenue-service-month?month=" + month + "&year=" + year, requestOptions)
        .then(response => response.json())
        .then(result => {
            var ctx = document.getElementById('bieuDoTyLeDoanhThuDichVuThang').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: result.map(function (item) {
                        return item[0];
                    }),
                    datasets: [{
                        label: 'Doanh thu',
                        data: result.map(function (item) {
                            return item[1];
                        }),
                        backgroundColor: color
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                },
                options: {
                    title: {
                        display: true,
                        text: 'Tỷ lệ số lượng dịch vụ được sử dụng trong tháng ' + month + '/' + year
                    }
                }
            });
        })
        .catch(error => console.log('error', error));
}
// Bieu do bao cao khach hang
function showBieuDoKhachHang() {
    getTop10Client(now.getMonth() + 1, now.getFullYear());
    showBieuDoTyLeKhachHangTheoDoTuoi();
    showBieuDoTyLeDoanhThuKhachHangTheoDoTuoi(now.getMonth() + 1, now.getFullYear());
}
function getTop10Client(month, year) {
    var now = new Date();
    document.querySelector(".report--item--title").innerHTML = 'Top 10 khách hàng có doanh thu cao nhất tháng ' + month + '/' + year;
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(url + "/api/top-10-client?month=" + month, requestOptions)
        .then(response => response.json())
        .then(result => {
            var html = '';
            var count = 0;
            for (var o of result) {
                count++;
                html += `<tr>
                <th scope="row">`+ count + `</th>
                <td>`+ o[0] + `</td>
                <td>`+ o[1] + `</td>
                <td>`+ formatMoneyVND(o[2]) + `</td>
                </tr>`
            }
            document.querySelector("#data-top-10-client").innerHTML = html;
        })
        .catch(error => console.log('error', error));
}
function showBieuDoTyLeKhachHangTheoDoTuoi() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(url + "/api/client-number-age", requestOptions)
        .then(response => response.json())
        .then(result => {
            var ctx = document.getElementById('bieuDoTyLeKhachHangTheoDoTuoi').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: result.map(function (item) {
                        return item[0];
                    }),
                    datasets: [{
                        label: 'Doanh thu',
                        data: result.map(function (item) {
                            return item[1];
                        }),
                        backgroundColor: color
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                },
                options: {
                    title: {
                        display: true,
                        text: 'Tỷ lệ số lượng khách hàng theo độ tuổi'
                    }
                }
            });
        })
        .catch(error => console.log('error', error));
}
function showBieuDoTyLeDoanhThuKhachHangTheoDoTuoi(month, year) {
    var now = new Date();
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(url + "/api/client-evenue-age?month=" + month + "&year=" + year, requestOptions)
        .then(response => response.json())
        .then(result => {
            var ctx = document.getElementById('bieuDoTyLeDoanhThuKhachHangTheoDoTuoi').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: result.map(function (item) {
                        return item[0];
                    }),
                    datasets: [{
                        label: 'Doanh thu',
                        data: result.map(function (item) {
                            return item[1];
                        }),
                        backgroundColor: color
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                },
                options: {
                    title: {
                        display: true,
                        text: 'Tỷ lệ doanh thu từ khách hàng theo độ tuổi tháng ' + month + '/' + year
                    }
                }
            });
        })
        .catch(error => console.log('error', error));
}

//Bắt sự kiện chọn tháng-năm, năm:
//Báo cáo doanh thu
document.getElementById('ipt_month_doanhthu').addEventListener('change', function () {
    // Lấy giá trị ngày tháng từ trường input
    var selectedDate = new Date(this.value);

    // Lấy tháng và năm đã chọn
    var selectedMonth = selectedDate.getMonth() + 1; // Cộng 1 vì tháng trong JavaScript được đếm từ 0 đến 11
    var selectedYear = selectedDate.getFullYear();

    // Hiển thị biểu đồ
    console.log('Tháng: ' + selectedMonth);
    console.log('Năm: ' + selectedYear);
    showBieuDoTyLeDoanhThuThang(selectedMonth, selectedYear);
    showBieuDoDoanhThuNgayTrongThang(selectedMonth, selectedYear);
});

document.getElementById('slt_year_doanhthu').addEventListener('change', function () {
    // Lấy giá trị đã chọn
    var selectedValue = this.value;

    // Hiển thị biểu đồ
    showBieuDoDoanhThuThangTrongNam(selectedValue);
    showBieuDoDoanhBookingThuThangTrongNam(selectedValue);
    showBieuDoDoanhThuUseServiceThangTrongNam(selectedValue);
});

//Báo cáo phòng
document.getElementById('ipt_month_phong').addEventListener('change', function () {
    // Lấy giá trị ngày tháng từ trường input
    var selectedDate = new Date(this.value);

    // Lấy tháng và năm đã chọn
    var selectedMonth = selectedDate.getMonth() + 1; // Cộng 1 vì tháng trong JavaScript được đếm từ 0 đến 11
    var selectedYear = selectedDate.getFullYear();
    //hien thi bieu do
    showBieuDoTyLeSoLuongLoaiPhongThueTheoThang(selectedMonth, selectedYear);
    showBieuDoTyLeDoanhThuLoaiPhongTheoThang(selectedMonth, selectedYear);
});
document.getElementById('slt_year_phong').addEventListener('change', function () {
    // Lấy giá trị đã chọn
    var selectedValue = this.value;

    // Hiển thị biểu đồ
    showBieuDoSoLuongLoaiPhongThueTheoThang(selectedValue);
    showBieuDoDoanhThuLoaiPhongTheoThang(selectedValue);
});

//Báo cáo dịch vụ
document.getElementById('ipt_month_dichvu').addEventListener('change', function () {
    // Lấy giá trị ngày tháng từ trường input
    var selectedDate = new Date(this.value);

    // Lấy tháng và năm đã chọn
    var selectedMonth = selectedDate.getMonth() + 1; // Cộng 1 vì tháng trong JavaScript được đếm từ 0 đến 11
    var selectedYear = selectedDate.getFullYear();
    //hien thi bieu do
    showBieuDoTyLeSoLuongDichVuThang(selectedMonth, selectedYear);
    showBieuDoTyLeDoanhThuDichVuThang(selectedMonth, selectedYear);
});
document.getElementById('slt_year_dichvu').addEventListener('change', function () {
    // Lấy giá trị đã chọn
    var selectedValue = this.value;

    // Hiển thị biểu đồ
    showBieuDoSoLuongDichVuTheoThang(selectedValue);
    showBieuDoDoanhThuDichVuTheoThang(selectedValue);
});

//Báo cáo khách hàng
document.getElementById('ipt_month_khachhang').addEventListener('change', function () {
    // Lấy giá trị ngày tháng từ trường input
    var selectedDate = new Date(this.value);

    // Lấy tháng và năm đã chọn
    var selectedMonth = selectedDate.getMonth() + 1; // Cộng 1 vì tháng trong JavaScript được đếm từ 0 đến 11
    var selectedYear = selectedDate.getFullYear();
    //hien thi bieu do
    getTop10Client(selectedMonth, selectedYear);
    showBieuDoTyLeDoanhThuKhachHangTheoDoTuoi(selectedMonth, selectedYear);
});