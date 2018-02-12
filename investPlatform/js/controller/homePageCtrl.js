//Author: ZHUHY

var routerApp = angular.module('haidaApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/main/sectionDistrictTab1');
	$stateProvider
		.state('main', {
			url: '/main',
			templateUrl: 'template/main.html',
			controller: "hpCtrl"
		})
		.state('stockInvest', {
			url: '/stockInvest',
			templateUrl: 'template/stockInvest.html',
			controller: "hpCtrl"
		})
		.state('resourceService', {
			url: '/resourceService',
			templateUrl: 'template/resourceService.html',
			controller: "hpCtrl"
		})
		.state('districtCommuni', {
			url: '/districtCommuni',
			templateUrl: 'template/districtCommuni.html',
			controller: "hpCtrl"
		})
		.state('main.sectionDistrictTab1', {
			url: '/sectionDistrictTab1',
			templateUrl: 'template/sectionDistrictTab1.html'
		})
		.state('main.sectionDistrictTab2', {
			url: '/sectionDistrictTab2',
			templateUrl: 'template/sectionDistrictTab2.html',
			controller: "tab2Ctrl"
		})
});

routerApp.controller('hpCtrl', ['$scope', '$location', function($scope, $location) {
	$scope.$location = $location;
	$(document).ready(function() {
		var currentLocation = $location.path();
		console.log(currentLocation);
		$(".naviele").removeClass("active");
		switch(currentLocation) {
			case "/main":
			case "/main/sectionDistrictTab1":
			case "/main/sectionDistrictTab2":
				$("#navi1").addClass("active");
				break;
			case "/stockInvest":
				$("#navi2").addClass("active");
				break;
			case "/resourceService":
				$("#navi3").addClass("active");
				break;
			case "/districtCommuni":
				$("#navi4").addClass("active");
				break;
		};
		$(".logo").click(function() {
			$(".naviele").removeClass("active");
			$("#navi1").addClass("active");
		});
	});
}]).controller('resourceCtrl', function($scope) {
	$scope.resources = [{
			"img": "images/sectionResourceElePic(1).png",
			"title": "开办公司",
			"intro": "一站式服务，省钱省力"
		}, {
			"img": "images/sectionResourceElePic(2).png",
			"title": "政策咨询",
			"intro": "最新咨询，全方位指导"
		}, {
			"img": "images/sectionResourceElePic(3).png",
			"title": "法律服务",
			"intro": "专业团队，真诚服务"
		}, {
			"img": "images/sectionResourceElePic(4).png",
			"title": "金融服务",
			"intro": "私人定制，理财投资"
		}, {
			"img": "images/sectionResourceElePic(5).png",
			"title": "人力资源",
			"intro": "海纳百川，有容乃大"
		}, {
			"img": "images/sectionResourceElePic(6).png",
			"title": "职业培训",
			"intro": "专业，不只是说说"
		}, {
			"img": "images/sectionResourceElePic(7).png",
			"title": "宣传推广",
			"intro": "集合渠道，火力全开"
		}, {
			"img": "images/sectionResourceElePic(8).png",
			"title": "文案策划",
			"intro": "品质，从这一刻开始"
		}, {
			"img": "images/sectionResourceElePic(9).png",
			"title": "网站建设",
			"intro": "专业，品牌的保证"
		}, {
			"img": "images/sectionResourceElePic(10).png",
			"title": "微信微博",
			"intro": "人气快速聚集"
		},

	]
});
routerApp.controller('tab2Ctrl', function($scope) {
	$(document).ready(function() {
		var pics = document.getElementsByClassName("strain");
		var wraps = document.getElementsByClassName("picWrap");
		var pitchs = document.getElementsByClassName("districtPitch");
		var details = document.getElementsByClassName("sectionDistrictRDetail");
		if(pics[0].offsetHeight > 200) {
			pics[0].style = "height:100%;width:auto;float:none;";
			pics[1].style = "height:100%;width:auto;float:none;";
			wraps[0].style = "height:200px;width:100%;background-color: transparent;";
			wraps[1].style = "height:200px;width:100%;background-color: transparent;";
			var pitchWidth = (wraps[0].offsetWidth - pics[0].offsetWidth) / 2;
			pitchs[0].style.width = pitchWidth + "px";
			pitchs[1].style.width = pitchWidth + "px";
			pitchs[0].style.height = details[0].offsetHeight + "px";
			pitchs[1].style.height = details[1].offsetHeight + "px";
		}
	});
});
routerApp.controller('jumpCtrl', function($scope) {
	$scope.jump = function(url) {
		window.location = url;
	}
});
///Author: JXY
routerApp.controller('stockEleCtrl', function($scope) {
	$scope.projects = [{
			"img": "images/sectionStockElePic1.jpg",
			"title": "项目名称:非凡美食",
			"intro ": "专注于年轻人餐饮市场，打造针对年轻人'新外卖'品牌",
			"invester": "领投人：创想科技",
			"member ": "团队成员：不一样的美食"

		}, {
			"img": "images/sectionStockElePic2.jpg",
			"title": "项目名称:户外星球",
			"intro ": "户外星球,全球最高端户外项目综合性平台",
			"invester": "领投人：壹号资本",
			"member ": "团队成员：央视大型栏目运营"

		}, {
			"img": "images/sectionStockElePic3.jpg",
			"title": "项目名称:黑马LIVE",
			"intro ": "票务电商平台",
			"invester": "领投人：田仆资产",
			"member ": "团队成员：黑马科技"

		}

	]

}).controller("brainCtrl", function($scope) {
	$scope.talents = [{
			"img": "images/sectionBrainElePic (1).png",
			"name": "黄梦龙",
			"group": "研发人员"
		}, {
			"img": "images/sectionBrainElePic (2).png",
			"name": "王国平",
			"group": "技术专家"
		}, {
			"img": "images/sectionBrainElePic (3).png",
			"name": "许寅",
			"group": "创业合伙人"
		}, {
			"img": "images/sectionBrainElePic (4).png",
			"name": "王闯",
			"group": "医药研发岗"
		}, {
			"img": "images/sectionBrainElePic (5).png",
			"name": "蒋雪勤",
			"group": "副教授"
		}, {
			"img": "images/sectionBrainElePic (6).png",
			"name": "倪小坚",
			"group": "特聘教授"
		}, {
			"img": "images/sectionBrainElePic (7).png",
			"name": "孟伟华",
			"group": "教授"
		}, {
			"img": "images/sectionBrainElePic (8).png",
			"name": "初江涛",
			"group": "技术主管"
		}

	]
}).controller("investerCtrl", function($scope) {
	$scope.records = [{
		"img": "images/sectionInvesterElePic(1).png",
		"name": "江平",
		"group": "银来集团-优正创投",
		"person": "项目总监",
		"inter": "互联网"
	}, {
		"img": "images/sectionInvesterElePic(2).png",
		"name": "何航程",
		"group": "浙江凯维投资管理有限公司",
		"person": "副总经理",
		"inter": "互联网"
	}, {
		"img": "images/sectionInvesterElePic(3).png",
		"name": "张路阳",
		"group": "Lenvon Capital",
		"person": "项目总监",
		"inter": "金融"
	}, {
		"img": "images/sectionInvesterElePic(4).png",
		"name": "张晓俊",
		"group": "蓝山投资",
		"person": "项目总监",
		"inter": "互联网"
	}, {
		"img": "images/sectionInvesterElePic(5).png",
		"name": "卢予海",
		"group": "蜂闻帝巢投资控股",
		"person": "副总裁",
		"inter": "互联网"
	}, {
		"img": "images/sectionInvesterElePic(6).png",
		"name": "魏欧",
		"group": "初心资本",
		"person": "投资经理",
		"inter": "金融"
	}]
});
routerApp.controller('rsCtrl', ['$scope', '$location', function($scope, $location) {}]);
routerApp.controller('dcCtrl', function($scope) {
	$(document).ready(function() {
		var wraps = document.getElementsByClassName("picLandWrap");
		var pics = document.getElementsByClassName("sectionLandElePic");
		var piClip = (pics[0].offsetWidth - wraps[0].offsetWidth) / 2;
		if(piClip > 0) {
			pics[0].style.marginLeft = "-" + piClip + "px";
			pics[0].style.marginRight = "-" + piClip + "px";
			pics[1].style.marginLeft = "-" + piClip + "px";
			pics[1].style.marginRight = "-" + piClip + "px";
			pics[2].style.marginLeft = "-" + piClip + "px";
			pics[2].style.marginRight = "-" + piClip + "px";
		}
	});
});
routerApp.controller('footerCtrl', function($scope) {
	if(document.documentElement.scrollTop + document.body.scrollTop > 100) {
		document.getElementById("scrollto").style.display = "block";
	}
	$("#scrollto").click(function() {
		var speed = 60; //scrollSpeed 
		$('html,body').animate({
			scrollTop: 0
		}, speed);
	});
	window.onscroll = function() {
		if(document.documentElement.scrollTop + document.body.scrollTop > 100) {
			$("#scrollto").fadeIn();
		} else {
			$("#scrollto").fadeOut();
		}
	}
});