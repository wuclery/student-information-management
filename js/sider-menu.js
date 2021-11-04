$(function () {

	$(window).resize(function () {
		var ww = $(window).innerWidth();
		if (ww >= 992) {
			// $(".navbar-toggler ").addClass("d-none");
			$(".page-wrapper").addClass("toggled");
		} else {
			$(".page-wrapper").removeClass("toggled");
			// $(".navbar-toggler ").removeClass("d-none");
		}
	})

	$("#toggle-sidebar").click(function () {
		$(".page-wrapper").toggleClass("toggled");
	})
})

$(function () {
	//成绩表格排序切换
	var $theader = $('#score-table').find('th')
	$theader.click(function (e) {
		var iArray = $(this)
		iArray.children('i').toggleClass('bi-caret-down-fill bi-caret-up-fill')
	})
	//遍历个人成绩数据
	var html = [{
			"name": "高等数学",
			"course_type": "必修课",
			"score": "100",
			"credit": "4",
			"term": "2021-2022(1)",
			"tName": "李仕贤"
		},
		{
			"name": "高等数学",
			"course_type": "必修课",
			"score": "100",
			"credit": "4",
			"term": "2021-2022(1)",
			"tName": "李仕贤"
		},
		{
			"name": "高等数学",
			"course_type": "必修课",
			"score": "100",
			"credit": "4",
			"term": "2021-2022(1)",
			"tName": "李仕贤"
		},
		{
			"name": "高等数学",
			"course_type": "必修课",
			"score": "100",
			"credit": "4",
			"term": "2021-2022(1)",
			"tName": "李仕贤"
		},
		{
			"name": "高等数学",
			"course_type": "必修课",
			"score": "100",
			"credit": "4",
			"term": "2021-2022(1)",
			"tName": "李仕贤"
		}
	];
	for (let index = 0; index < html.length; index++) {
		var scoretbody = '<tr>' +
			'<td class="align-middle"><input type="checkbox"></td>' +
			'<td class="align-middle">' + html[index].name + '</td>' +
			'<td class="align-middle">' + html[index].credit + '</td>' +
			'<td class="align-middle">' + html[index].score + '</td>' +
			'<td class="align-middle">' + html[index].course_type + '</td>' +
			'<td class="align-middle">' + html[index].term + '</td>' +
			'<td class="align-middle">' + html[index].tName + '</td>' +
			'</tr>'
		$('#score-tbody').append(scoretbody)
	}
	// 遍历个人荣誉数据
	var datas = [{
		number: '1',
		honorname: '挑战杯',
		honordate: '2021-10-11',
		otherinfo: '一等奖',
		honorevi: '<a href="#">查看</a>'
	}, {
		number: '1',
		honorname: '挑战杯',
		honordate: '2021-10-11',
		otherinfo: '一等奖',
		honorevi: '<a href="#">查看</a>'
	}, {
		number: '1',
		honorname: '挑战杯',
		honordate: '2021-10-11',
		otherinfo: '一等奖',
		honorevi: '<a href="#">查看</a>'
	}, ]
	// 创建行
	for (let index = 0; index < datas.length; index++) {
		var honortbody = '<tr>' +
			'<td class="align-middle">' + datas[index].number + '</td>' +
			'<td class="align-middle">' + datas[index].honorname + '</td>' +
			'<td class="align-middle">' + datas[index].honordate + '</td>' +
			'<td class="align-middle">' + datas[index].otherinfo + '</td>' +
			'<td class="align-middle">' + datas[index].honorevi + '</td>' +
			'</tr>'
		$('#honor-tbody').append(honortbody)
	}
})