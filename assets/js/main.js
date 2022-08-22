
let urlName = window.location.pathname;
let path_end = urlName.split("/");
let last_path = path_end[4];
let url_id =last_path.split(".");
let active_url_id = url_id[0];
let final_url_id = active_url_id;
let img_id = '#'+final_url_id + ' '  + 'img';
console.log(img_id)

document.getElementById(final_url_id).classList.add('active');

let index_icon = "assets/img/dashboard_active.png"; 
let video_icon = "assets/img/videomanagement_active.png"; 
let series_icon = "assets/img/seriesmanagement_active.png"; 
let profile_icon = "assets/img/myprofile_active.png";  
let final_img = "";
switch(final_url_id){
    case 'index':
    final_img = index_icon;
    break;
    case 'vid-menagement':
        final_img =  video_icon;
        break;
    case 'series-management':
        final_img = series_icon;
        break;
    case 'profile-Edit':
        final_img = profile_icon;
        break;
    
    default:
        final_img = "";


}
document.querySelector(img_id).src = final_img;


// seeting optin
$('#headingTwo').click(function(){
    $('#headingTwo').toggleClass('active');
    $('.side-menu').removeClass('active')
document.querySelector( "#headingTwo img" ).src = "assets/img/videomanagement_active.png";

})

$('#sdc').click(function(){
    $(".left-siderbar").toggle(1000);
    // alert("Hi");
})