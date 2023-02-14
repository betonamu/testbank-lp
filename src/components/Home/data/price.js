export const studentPricings = {
    student: [
        {
            label: "Gói cơ bản 1",
            price: 'Miễn Phí',
            descriptions: [
                {
                    label: "Nhận và làm bài thi hoặc bài tập được giao.",
                },
                {
                    label: "Xem điểm và đối chiếu kết quả sau khi làm bài.",
                },
                {
                    label: "Quản lý bài thi/bài tập đã làm",
                },
            ]
        },
        {
            label: "Gói cơ bản 2",
            price: '999,000đ /năm',
            descriptions: [
                {
                    label: "Nhận và làm bài thi hoặc bài tập được giao.",
                },
                {
                    label: "Xem điểm và đối chiếu kết quả sau khi làm bài.",
                },
                {
                    label: "Quản lý bài thi/bài tập đã làm",
                },
                {
                    label: "Có thể tải xuống lên đến 5 đề thi thử và thực hiện thi thử",
                    option: '(có thể tải thêm chỉ với ***** đ/đề)'
                },
            ]
        },
        {
            label: "Gói nâng cao",
            price: '999,000đ /năm',
            descriptions: [
                {
                    label: "Nhận và làm bài thi hoặc bài tập được giao.",
                },
                {
                    label: "Xem điểm và đối chiếu kết quả sau khi làm bài.",
                },
                {
                    label: "Quản lý bài thi/bài tập đã làm",
                },
                {
                    label: "Có thể tải xuống lên đến 20 đề thi thử và thực hiện thi thử",
                    option: '(có thể tải thêm chỉ với ***** đ/đề)'
                },
                {
                    label: 'Không giới hạn số bài tập thực hành'
                }
            ]
        },
        {
            label: "Gói tuỳ chỉnh",
            price: 'Gói tuỳ chỉnh',
            descriptions: [
                {
                    label: "I-test sẽ đưa ra danh sách các tính năng để bạn có thể " +
                        "tự do lựa chọn theo nhu cầu mà mình mong muốn sử dụng.",
                },
                {
                    label: "Sau đó, I-test sẽ liên hệ để tư vấn cho bạn.",
                },
            ]
        },
    ],
    parent: [
        {
            label: "Gói cơ bản",
            price: 'Miễn Phí',
            descriptions: [
                {
                    label: "Quản lý tài khoản của con (giới hạn x tài khoản)",
                    option: '(có thể tăng số lượng đề chỉ với ***** đ/đề)'
                },
                {
                    label: "Thấy được lớp con đang tham gia",
                },
                {
                    label: "Quản lý được lịch thi, bài thi, bài thực hành của con",
                },
                {
                    label: "Nhận được các thông báo về bài thi để nắm được tình hình học tập của con mình",
                },
            ]
        },
        {
            label: "Gói nâng cao",
            price: '999,000đ /năm',
            descriptions: [
                {
                    label: "Quản lý tài khoản của con (không giới hạn tài khoản)",
                },
                {
                    label: "Thấy được lớp con đang tham gia",
                },
                {
                    label: "Quản lý được lịch thi, bài thi, bài thực hành của con",
                },
                {
                    label: "Nhận được các thông báo về bài thi để nắm được tình hình học tập của con mình",
                },
            ]
        },
    ],
    teacher: [
        {
            label: "Gói cơ bản 1",
            price: 'Miễn Phí',
            descriptions: [
                {
                    label: "Được sử dụng x đề thi mẫu từ ngân hàng đề thi I-test",
                    option: '(có thể tăng số lượng đề chỉ với ***** đ/đề)'
                },
                {
                    label: "Quản lý bài thi của học sinh.",
                },
            ]
        },
        {
            label: "Gói cơ bản 2",
            price: '999,000đ /năm',
            descriptions: [
                {
                    label: "Được sử dụng x đề thi mẫu từ ngân hàng đề thi I-test",
                    option: "(có thể tăng số lượng đề chỉ với ***** đ/đề)"
                },
                {
                    label: "Quản lý kết quả bài thi",
                },
                {
                    label: "Quản lý lớp học với tổng số học sinh giới hạn là 50",
                    option: "(có thể tải thêm chỉ với ***** đ/đề)"
                },
                {
                    label: "Cho phép chỉnh sửa các đề thi mẫu đang sở hữu.",
                },
            ]
        },
        {
            label: "Gói nâng cao",
            price: '999,000đ /năm',
            descriptions: [
                {
                    label: "Được sử dụng x đề thi mẫu từ ngân hàng đề thi I-test",
                    option: "(có thể tải thêm chỉ với ***** đ/đề)"
                },
                {
                    label: "Quản lý kết quả bài thi",
                },
                {
                    label: "Quản lý lớp học với tổng số học sinh lên đến 100 học sinh.",
                    option: "(có thể tải thêm chỉ với ***** đ/đề)",
                },
                {
                    label: "Cho phép chỉnh sửa các đề thi mẫu đang sở hữu.",
                },
                {
                    label: 'Có thể tự thiết lập cấu trúc đề thi/bài tập theo nhu cầu'
                }
            ]
        },
        {
            label: "Gói tuỳ chỉnh",
            price: 'Gói tuỳ chỉnh',
            descriptions: [
                {
                    label: "I-test sẽ đưa ra danh sách các tính năng để bạn có thể " +
                        "tự do lựa chọn theo nhu cầu mà mình mong muốn sử dụng.",
                },
                {
                    label: "Sau đó, I-test sẽ liên hệ để tư vấn cho bạn.",
                },
            ]
        },
    ],
    school: [
        {
            label: "Gói cơ bản 1",
            price: 'Miễn Phí',
            descriptions: [
                {
                    label: "Được sử dụng x đề thi mẫu từ ngân hàng đề thi I-test",
                    option: "(có thể tăng số lượng đề chỉ với ***** đ/đề)"
                },
                {
                    label: "Quản lý lớp học, giáo viên & học sinh với số lượng giới hạn:\n" +
                        "Lớp học: 999\n" +
                        "Giáo viên: 999\n" +
                        "Học sinh: 999",
                },
            ]
        },
        {
            label: "Gói cơ bản 2",
            price: '999,000đ /năm',
            descriptions: [
                {
                    label: "Được sử dụng x đề thi mẫu từ ngân hàng đề thi I-test",
                    option: "(có thể tăng số lượng đề chỉ với ***** đ/đề)"
                },
                {
                    label: "Không giới hạn số lượng lớp học, giáo viên & học sinh quản lý",
                },
                {
                    label: "Quản lý kết quả bài thi",
                },
                {
                    label: "Cho phép chỉnh sửa các đề thi mẫu đang sở hữu.",
                },
            ]
        },
        {
            label: "Gói nâng cao",
            price: '999,000đ /năm',
            descriptions: [
                {
                    label: "Không giới hạn số lượng đề thi mẫu  sử dụng từ ngân hàng đề thi I-test",
                },
                {
                    label: "Không giới hạn số lượng lớp học, giáo viên & học sinh quản lý",
                },
                {
                    label: "Quản lý kết quả bài thi",
                },
                {
                    label: "Cho phép chỉnh sửa các đề thi mẫu đang sở hữu.",
                },
                {
                    label: 'Có thể tự thiết lập cấu trúc đề thi/bài tập theo nhu cầu'
                },
                {
                    label: 'Báo cáo thống kê'
                }
            ]
        },
        {
            label: "Gói tuỳ chỉnh",
            price: 'Gói tuỳ chỉnh',
            descriptions: [
                {
                    label: "I-test sẽ đưa ra danh sách các tính năng để bạn có thể " +
                        "tự do lựa chọn theo nhu cầu mà mình mong muốn sử dụng.",
                },
                {
                    label: "Sau đó, I-test sẽ liên hệ để tư vấn cho bạn.",
                },
            ]
        },
    ]
}