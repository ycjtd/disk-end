const {BASE_URL} = require('../config/base')

const mkData = function(id){
  let user_id = id
  // 虚拟数据
  const data = [
    {
      file_id: "100",
      file_name: "i-1.jpg",
      file_src:`${BASE_URL}/static/mock/image/origin/i-1.jpg`,
      file_mini:`${BASE_URL}/static/mock/image/mini/i-1.jpg`,
      file_owner:user_id,
      file_year:'2021',
      file_month:'05',
      file_day:'20',
      file_time:'2021/05/20',
      file_size:889800,
      file_type:'image/jpg'
    },
    {
      file_id: "101",
      file_name: "i-2.jpg",
      file_src:`${BASE_URL}/static/mock/image/origin/i-2.jpg`,
      file_mini:`${BASE_URL}/static/mock/image/mini/i-2.jpg`,
      file_owner:user_id,
      file_year:'2021',
      file_month:'05',
      file_day:'20',
      file_time:'2021/05/20',
      file_size:885361,
      file_type:'image/jpg'
    },
    {
      file_id: "102",
      file_name: "v-1.mp4",
      file_src:`${BASE_URL}/static/mock/video/origin/v-1.mp4`,
      file_mini:`${BASE_URL}/static/mock/video/mini/v-1.jpg`,
      file_owner:user_id,
      file_year:'2021',
      file_month:'05',
      file_day:'20',
      file_time:'2021/05/20',
      file_size:5033941,
      file_type:'video/mp4'
    },
    {
      file_id: "103",
      file_name: "i-3.png",
      file_src:`${BASE_URL}/static/mock/image/origin/i-3.png`,
      file_mini:`${BASE_URL}/static/mock/image/mini/i-3.png`,
      file_owner:user_id,
      file_year:'2021',
      file_month:'05',
      file_day:'21',
      file_time:'2021/05/21',
      file_size:2755579,
      file_type:'image/png'
    },
    {
      file_id: "104",
      file_name: "i-4.jpg",
      file_src:`${BASE_URL}/static/mock/image/origin/i-4.jpg`,
      file_mini:`${BASE_URL}/static/mock/image/mini/i-4.jpg`,
      file_owner:user_id,
      file_year:'2021',
      file_month:'05',
      file_day:'21',
      file_time:'2021/05/21',
      file_size:1033361,
      file_type:'image/jpg'
    },
    {
      file_id: "105",
      file_name: "i-5.jpg",
      file_src:`${BASE_URL}/static/mock/image/origin/i-5.jpg`,
      file_mini:`${BASE_URL}/static/mock/image/mini/i-5.jpg`,
      file_owner:user_id,
      file_year:'2021',
      file_month:'05',
      file_day:'21',
      file_time:'2021/05/21',
      file_size:176046,
      file_type:'image/jpg'
    },
    {
      file_id: "106",
      file_name: "v-2.mp4",
      file_src:`${BASE_URL}/static/mock/video/origin/v-2.mp4`,
      file_mini:`${BASE_URL}/static/mock/video/mini/v-2.jpg`,
      file_owner:user_id,
      file_year:'2021',
      file_month:'05',
      file_day:'21',
      file_time:'2021/05/21',
      file_size:3827070,
      file_type:'video/mp4'
    },
    {
      file_id: "107",
      file_name: "i-6.jpg",
      file_src:`${BASE_URL}/static/mock/image/origin/i-6.jpg`,
      file_mini:`${BASE_URL}/static/mock/image/mini/i-6.jpg`,
      file_owner:user_id,
      file_year:'2021',
      file_month:'05',
      file_day:'21',
      file_time:'2021/05/21',
      file_size:533255,
      file_type:'image/jpg'
    },
    {
      file_id: "108",
      file_name: "v-3.mp4",
      file_src:`${BASE_URL}/static/mock/video/origin/v-3.mp4`,
      file_mini:`${BASE_URL}/static/mock/video/mini/v-3.jpg`,
      file_owner:user_id,
      file_year:'2021',
      file_month:'05',
      file_day:'22',
      file_time:'2021/05/22',
      file_size:2558891,
      file_type:'video/mp4'
    },
    {
      file_id: "109",
      file_name: "v-3.mp4",
      file_src:`${BASE_URL}/static/mock/video/origin/v-4.mp4`,
      file_mini:`${BASE_URL}/static/mock/video/mini/v-4.jpg`,
      file_owner:user_id,
      file_year:'2021',
      file_month:'05',
      file_day:'22',
      file_time:'2021/05/22',
      file_size:4483724,
      file_type:'video/mp4'
    },
    {
      file_id: "110",
      file_name: "i-7.jpg",
      file_src:`${BASE_URL}/static/mock/image/origin/i-7.jpg`,
      file_mini:`${BASE_URL}/static/mock/image/mini/i-7.jpg`,
      file_owner:user_id,
      file_year:'2021',
      file_month:'05',
      file_day:'23',
      file_time:'2021/05/23',
      file_size:1098362,
      file_type:'image/jpg'
    },
    {
      file_id: "111",
      file_name: "i-8.jpg",
      file_src:`${BASE_URL}/static/mock/image/origin/i-8.jpg`,
      file_mini:`${BASE_URL}/static/mock/image/mini/i-8.jpg`,
      file_owner:user_id,
      file_year:'2021',
      file_month:'05',
      file_day:'23',
      file_time:'2021/05/23',
      file_size:607573,
      file_type:'image/jpg'
    },
    {
      file_id: "112",
      file_name: "i-9.jpg",
      file_src:`${BASE_URL}/static/mock/image/origin/i-9.jpg`,
      file_mini:`${BASE_URL}/static/mock/image/mini/i-9.jpg`,
      file_owner:user_id,
      file_year:'2021',
      file_month:'05',
      file_day:'23',
      file_time:'2021/05/23',
      file_size:254312,
      file_type:'image/jpg'
    },
    {
      file_id: "113",
      file_name: "i-10.jpg",
      file_src:`${BASE_URL}/static/mock/image/origin/i-10.jpg`,
      file_mini:`${BASE_URL}/static/mock/image/mini/i-10.jpg`,
      file_owner:user_id,
      file_year:'2021',
      file_month:'05',
      file_day:'23',
      file_time:'2021/05/23',
      file_size:903717,
      file_type:'image/jpg'
    },
    {
      file_id: "114",
      file_name: "i-11.jpeg",
      file_src:`${BASE_URL}/static/mock/image/origin/i-11.jpeg`,
      file_mini:`${BASE_URL}/static/mock/image/mini/i-11.jpeg`,
      file_owner:user_id,
      file_year:'2021',
      file_month:'05',
      file_day:'23',
      file_time:'2021/05/23',
      file_size:1367031,
      file_type:'image/jpeg'
    },
    {
      file_id: "115",
      file_name: "i-12.jpeg",
      file_src:`${BASE_URL}/static/mock/image/origin/i-12.jpeg`,
      file_mini:`${BASE_URL}/static/mock/image/mini/i-12.jpeg`,
      file_owner:user_id,
      file_year:'2021',
      file_month:'05',
      file_day:'23',
      file_time:'2021/05/23',
      file_size:175486,
      file_type:'image/jpeg'
    },
    {
      file_id: "116",
      file_name: "i-13.png",
      file_src:`${BASE_URL}/static/mock/image/origin/i-13.png`,
      file_mini:`${BASE_URL}/static/mock/image/mini/i-13.png`,
      file_owner:user_id,
      file_year:'2021',
      file_month:'05',
      file_day:'23',
      file_time:'2021/05/23',
      file_size:175486,
      file_type:'image/png'
    },
    {
      file_id: "117",
      file_name: "v-5.mp4",
      file_src:`${BASE_URL}/static/mock/video/origin/v-5.mp4`,
      file_mini:`${BASE_URL}/static/mock/video/mini/v-5.jpg`,
      file_owner:user_id,
      file_year:'2021',
      file_month:'05',
      file_day:'24',
      file_time:'2021/05/24',
      file_size:5023255,
      file_type:'video/mp4'
    },
    {
      file_id: "118",
      file_name: "i-14.jpg",
      file_src:`${BASE_URL}/static/mock/image/origin/i-14.jpg`,
      file_mini:`${BASE_URL}/static/mock/image/mini/i-14.jpg`,
      file_owner:user_id,
      file_year:'2021',
      file_month:'05',
      file_day:'25',
      file_time:'2021/05/25',
      file_size:190779,
      file_type:'image/jpg'
    },
    {
      file_id: "119",
      file_name: "v-6.mp4",
      file_src:`${BASE_URL}/static/mock/video/origin/v-6.mp4`,
      file_mini:`${BASE_URL}/static/mock/video/mini/v-6.jpg`,
      file_owner:user_id,
      file_year:'2021',
      file_month:'05',
      file_day:'25',
      file_time:'2021/05/25',
      file_size:1579004,
      file_type:'video/mp4'
    },
    {
      file_id: "120",
      file_name: "i-15.jpg",
      file_src:`${BASE_URL}/static/mock/image/origin/i-15.jpg`,
      file_mini:`${BASE_URL}/static/mock/image/mini/i-15.jpg`,
      file_owner:user_id,
      file_year:'2021',
      file_month:'05',
      file_day:'25',
      file_time:'2021/05/25',
      file_size:369281,
      file_type:'image/jpg'
    },
    {
      file_id: "121",
      file_name: "i-16.jpg",
      file_src:`${BASE_URL}/static/mock/image/origin/i-16.jpg`,
      file_mini:`${BASE_URL}/static/mock/image/mini/i-16.jpg`,
      file_owner:user_id,
      file_year:'2021',
      file_month:'05',
      file_day:'25',
      file_time:'2021/05/25',
      file_size:621957,
      file_type:'image/jpg'
    },
    {
      file_id: "122",
      file_name: "i-17.jpg",
      file_src:`${BASE_URL}/static/mock/image/origin/i-17.jpg`,
      file_mini:`${BASE_URL}/static/mock/image/mini/i-17.jpg`,
      file_owner:user_id,
      file_year:'2021',
      file_month:'05',
      file_day:'25',
      file_time:'2021/05/25',
      file_size:819231,
      file_type:'image/jpg'
    },
    {
      file_id: "123",
      file_name: "v-7.mp4",
      file_src:`${BASE_URL}/static/mock/video/origin/v-7.mp4`,
      file_mini:`${BASE_URL}/static/mock/video/mini/v-7.jpg`,
      file_owner:user_id,
      file_year:'2021',
      file_month:'05',
      file_day:'25',
      file_time:'2021/05/25',
      file_size:4934745,
      file_type:'video/mp4'
    },
    {
      file_id: "124",
      file_name: "i-18.jpg",
      file_src:`${BASE_URL}/static/mock/image/origin/i-18.jpg`,
      file_mini:`${BASE_URL}/static/mock/image/mini/i-18.jpg`,
      file_owner:user_id,
      file_year:'2021',
      file_month:'05',
      file_day:'25',
      file_time:'2021/05/25',
      file_size:59491,
      file_type:'image/jpg'
    },
    {
      file_id: "125",
      file_name: "i-19.jpg",
      file_src:`${BASE_URL}/static/mock/image/origin/i-19.jpg`,
      file_mini:`${BASE_URL}/static/mock/image/mini/i-19.jpg`,
      file_owner:user_id,
      file_year:'2021',
      file_month:'05',
      file_day:'26',
      file_time:'2021/05/26',
      file_size:237092,
      file_type:'image/jpg'
    },
    {
      file_id: "126",
      file_name: "i-20.jpg",
      file_src:`${BASE_URL}/static/mock/image/origin/i-20.jpg`,
      file_mini:`${BASE_URL}/static/mock/image/mini/i-20.jpg`,
      file_owner:user_id,
      file_year:'2021',
      file_month:'05',
      file_day:'26',
      file_time:'2021/05/26',
      file_size:48640,
      file_type:'image/jpg'
    },
    {
      file_id: "127",
      file_name: "v-8.mp4",
      file_src:`${BASE_URL}/static/mock/video/origin/v-8.mp4`,
      file_mini:`${BASE_URL}/static/mock/video/mini/v-8.jpg`,
      file_owner:user_id,
      file_year:'2021',
      file_month:'05',
      file_day:'27',
      file_time:'2021/05/27',
      file_size:1377021,
      file_type:'video/mp4'
    },
    {
      file_id: "128",
      file_name: "i-20.jpg",
      file_src:`${BASE_URL}/static/mock/image/origin/i-20.jpg`,
      file_mini:`${BASE_URL}/static/mock/image/mini/i-20.jpg`,
      file_owner:user_id,
      file_year:'2021',
      file_month:'05',
      file_day:'27',
      file_time:'2021/05/27',
      file_size:48640,
      file_type:'image/jpg'
    },
    {
      file_id: "129",
      file_name: "i-2.jpg",
      file_src:`${BASE_URL}/static/mock/image/origin/i-2.jpg`,
      file_mini:`${BASE_URL}/static/mock/image/mini/i-2.jpg`,
      file_owner:user_id,
      file_year:'2021',
      file_month:'05',
      file_day:'27',
      file_time:'2021/05/27',
      file_size:885361,
      file_type:'image/jpg'
    },
    {
      file_id: "130",
      file_name: "i-17.jpg",
      file_src:`${BASE_URL}/static/mock/image/origin/i-17.jpg`,
      file_mini:`${BASE_URL}/static/mock/image/mini/i-17.jpg`,
      file_owner:user_id,
      file_year:'2021',
      file_month:'05',
      file_day:'27',
      file_time:'2021/05/27',
      file_size:819231,
      file_type:'image/jpg'
    },
    {
      file_id: "131",
      file_name: "i-10.jpg",
      file_src:`${BASE_URL}/static/mock/image/origin/i-10.jpg`,
      file_mini:`${BASE_URL}/static/mock/image/mini/i-10.jpg`,
      file_owner:user_id,
      file_year:'2021',
      file_month:'05',
      file_day:'27',
      file_time:'2021/05/27',
      file_size:903717,
      file_type:'image/jpg'
    },
    {
      file_id: "132",
      file_name: "i-14.jpg",
      file_src:`${BASE_URL}/static/mock/image/origin/i-14.jpg`,
      file_mini:`${BASE_URL}/static/mock/image/mini/i-14.jpg`,
      file_owner:user_id,
      file_year:'2021',
      file_month:'05',
      file_day:'28',
      file_time:'2021/05/28',
      file_size:190779,
      file_type:'image/jpg'
    },
    {
      file_id: "133",
      file_name: "i-17.jpg",
      file_src:`${BASE_URL}/static/mock/image/origin/i-17.jpg`,
      file_mini:`${BASE_URL}/static/mock/image/mini/i-17.jpg`,
      file_owner:user_id,
      file_year:'2021',
      file_month:'05',
      file_day:'28',
      file_time:'2021/05/28',
      file_size:819231,
      file_type:'image/jpg'
    },
    {
      file_id: "134",
      file_name: "v-5.mp4",
      file_src:`${BASE_URL}/static/mock/video/origin/v-5.mp4`,
      file_mini:`${BASE_URL}/static/mock/video/mini/v-5.jpg`,
      file_owner:user_id,
      file_year:'2021',
      file_month:'05',
      file_day:'28',
      file_time:'2021/05/28',
      file_size:5023255,
      file_type:'video/mp4'
    },
    {
      file_id: "135",
      file_name: "v-10.mp4",
      file_src:`${BASE_URL}/static/mock/video/origin/v-10.mp4`,
      file_mini:`${BASE_URL}/static/mock/video/mini/v-10.jpg`,
      file_owner:user_id,
      file_year:'2021',
      file_month:'05',
      file_day:'29',
      file_time:'2021/05/29',
      file_size:5023255,
      file_type:'video/mp4'
    },
    {
      file_id: "136",
      file_name:"i-1.jpg",
      file_src:`${BASE_URL}/static/mock/image/origin/i-1.jpg`,
      file_mini:`${BASE_URL}/static/mock/image/mini/i-1.jpg`,
      file_owner:user_id,
      file_year:'2021',
      file_month:'05',
      file_day:'29',
      file_time:'2021/05/29',
      file_size:889800,
      file_type:'image/jpg'
    },
    {
      file_id: "137",
      file_name: "i-16.jpg",
      file_src:`${BASE_URL}/static/mock/image/origin/i-16.jpg`,
      file_mini:`${BASE_URL}/static/mock/image/mini/i-16.jpg`,
      file_owner:user_id,
      file_year:'2021',
      file_month:'05',
      file_day:'29',
      file_time:'2021/05/29',
      file_size:621957,
      file_type:'image/jpg'
    },
    {
      file_id: "138",
      file_name: "v-9.mp4",
      file_src:`${BASE_URL}/static/mock/video/origin/v-9.mp4`,
      file_mini:`${BASE_URL}/static/mock/video/mini/v-9.jpg`,
      file_owner:user_id,
      file_year:'2021',
      file_month:'05',
      file_day:'29',
      file_time:'2021/05/29',
      file_size:5023255,
      file_type:'video/mp4'
    },
    {
      file_id: "139",
      file_name: "i-9.jpg",
      file_src:`${BASE_URL}/static/mock/image/origin/i-9.jpg`,
      file_mini:`${BASE_URL}/static/mock/image/mini/i-9.jpg`,
      file_owner:user_id,
      file_year:'2021',
      file_month:'05',
      file_day:'29',
      file_time:'2021/05/29',
      file_size:254312,
      file_type:'image/jpg'
    },
  ];
  return data
}

module.exports = mkData