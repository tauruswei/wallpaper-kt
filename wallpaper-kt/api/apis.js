import {request} from "@/utils/request.js"

export function apiGetBanner(){
	return request({
		url:"/homeBanner"		
	})	
}

export function apiGetDayRandom(){
	return request({url:"/randomWall"})
}
