$(document).ready(function(){var t;$(".add").click(function(){var e=$(".element").length,t=$(".element:last").attr("id").split("_"),i=Number(t[1])+1;e<10&&($(".element:last").after("<div class='element' id='div_"+i+"'></div>"),$("#div_"+i).append("<input type='email' placeholder='Add names or email addresses' id='add_"+i+"'><input type=\"submit\" value='Send Invite'><span id='remove_"+i+"' class='remove'>+</span>"))}),$(".container").on("click",".remove",function(){var e=this.id.split("_")[1];$("#div_"+e).remove()}),$("#tutorial").on("hidden.bs.modal",function(){$("#tutorial iframe").attr("src",$("#tutorial iframe").attr("src"))}),$(".selectAll").click(function(e){var t=$("table");$(".form-check input:checkbox",t).prop("checked",this.checked)}),t=!1,document.body.addEventListener("mousemove",function e(){!1===t&&(document.documentElement.classList.add("mouse"),document.body.removeEventListener("mousemove",e))}),document.body.addEventListener("touchstart",function(){t=!0}),document.body.addEventListener("touchend",function(){t=!1}),document.body.addEventListener("click",function(){t=t&&!1}),function(){try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}}()&&document.documentElement.classList.add("touch"),window.onload=function(){var e=document.querySelector("#phone");window.intlTelInput(e)},$(".notification_close").on("click",function(){$(".header__notification").slideUp()}),$("#mob_nav").on("click",function(){$(this).toggleClass("active")}),$(".btnNext").click(function(){$(".nav-tabs .active").parent().next("li").find("a").trigger("click")}),$(".btnPrevious").click(function(){$(".nav-tabs .active").parent().prev("li").find("a").trigger("click")}),$(".steps__choose li").on("click",function(){$(this).toggleClass("active")}),$(".steps__device li a").on("click",function(){$(".steps__device li a").removeClass("active"),$(this).toggleClass("active")}),$(".steps__instructions li a").on("click",function(){$(".steps__instructions li a").removeClass("active"),$(this).toggleClass("active")}),$(".chart_open").on("click",function(){$(this).toggleClass("rotate"),$(".chart__content").slideToggle(),$(".plan_graph__top").toggleClass("b-b")}),$(".feedback_item__list li a").on("click",function(){$(this).parent("li").parent(".feedback_item__list").find("a").removeClass("active"),$(this).toggleClass("active")}),$(".accordion_action").on("click",function(){$(this).parent().find(".htu_list_item").slideToggle(),$(this).parent(".box").toggleClass("active")}),$(".toggle-password").click(function(){$(this).toggleClass("fa-eye fa-eye-slash");var e=$(".show_pass");"password"==e.attr("type")?e.attr("type","text"):e.attr("type","password")}),$(".icon_close").on("click",function(){$(this).parent("li").fadeOut()}),$(".dropdown-menu").click(function(e){e.stopPropagation()}),$(window).on("load",function(){$("#tutorial").modal("show")}),$("#nav-home-tab").on("click",function(){$(".billing_subscribed").hide(),$(".billing_active").show()}),$("#nav-profile-tab").on("click",function(){$(".billing_subscribed").show(),$(".billing_active").hide()}),$("#nav-contact-tab").on("click",function(){$(".billing_subscribed").show(),$(".billing_active").hide()}),$(".billing_check .cr").on("click",function(){$(".billing_pay_meth").slideToggle(),$(".billing_pay_meth ul li a").removeClass("active")}),$(".plans_method__check .cr").on("click",function(){$(".plans_info__select").slideToggle()}),$(".professional_billing ul li a").on("click",function(){$(".professional_billing ul li a").removeClass("active"),$(this).addClass("active")}),$(".accordion_arrow").on("click",function(){$(".billing_accordion").removeClass("active"),$(this).parent(".billing_accordion").addClass("active"),$(this).parent(".billing_accordion").find(".accordion_hidden").slideToggle()}),$(".plans_info__select a").on("click",function(){$(".plans_info__select a").removeClass("active"),$(this).addClass("active")}),$(".plans_method__card").on("click",function(){$(".plans_method__check").slideToggle()}),$(function(){var e=document.getElementById("myChart").getContext("2d");new Chart(e,{type:"line",data:{labels:["15-6-2019","20-6-2019","25-6-2019","30-6-2019","06-6-2019"],datasets:[{label:"My First dataset",backgroundColor:"transparent",pointBackgroundColor:"#fff",pointBorderColor:"#2693ff",pointRadius:4,borderColor:"#e6e6e6",data:[0,10,5,2,20]}]},options:{scales:{xAxes:[{gridLines:{display:!1,drawBorder:!1},ticks:{fontColor:"#808080",fontSize:11,top:25}}],yAxes:[{gridLines:{display:!1,drawBorder:!1},ticks:{display:!1}}]}}})}),Chart.Legend.prototype.afterFit=function(){this.height=this.height+50},$(function(){var e=document.getElementById("myChart2").getContext("2d");new Chart(e,{type:"line",data:{labels:["06:00","12:00","18:00","24:00"],datasets:[{label:"Download",yAxisID:"A",backgroundColor:"transparent",pointBackgroundColor:"#fff",pointBorderColor:"#39b54a",pointRadius:0,borderColor:"#39b54a",borderWidth:1,data:[1,4,5,5]},{label:"Upload",yAxisID:"B",backgroundColor:"transparent",pointBackgroundColor:"#fff",pointBorderColor:"#f7931e",pointRadius:0,borderColor:"#f7931e",borderDash:[8,3],borderWidth:1,data:[2,4,6,10]}]},options:{responsive:!0,scales:{xAxes:[{gridLines:{display:!1,drawBorder:!1},ticks:{fontColor:"#808080",fontSize:11,top:25}}],yAxes:[{gridLines:{display:!1,drawBorder:!1},ticks:{display:!1},id:"A",type:"linear"},{gridLines:{display:!1,drawBorder:!1},ticks:{display:!1},id:"B",type:"linear"}]}}})});var e=document.getElementById("filt-monthly"),i=document.getElementById("filt-yearly"),o=document.getElementById("switcher"),n=document.getElementById("monthly"),a=document.getElementById("yearly");e.addEventListener("click",function(){o.checked=!1,e.classList.add("toggler--is-active"),i.classList.remove("toggler--is-active"),n.classList.remove("hide"),a.classList.add("hide")}),i.addEventListener("click",function(){o.checked=!0,i.classList.add("toggler--is-active"),e.classList.remove("toggler--is-active"),n.classList.add("hide"),a.classList.remove("hide")}),o.addEventListener("click",function(){i.classList.toggle("toggler--is-active"),e.classList.toggle("toggler--is-active"),n.classList.toggle("hide"),a.classList.toggle("hide")}),$(function(){$(".modal_professional").modalWizard()})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJpc190b3VjaF9ldmVudCIsImNsaWNrIiwidG90YWxfZWxlbWVudCIsImxlbmd0aCIsInNwbGl0X2lkIiwiYXR0ciIsInNwbGl0IiwibmV4dGluZGV4IiwiTnVtYmVyIiwiYWZ0ZXIiLCJhcHBlbmQiLCJvbiIsImRlbGV0ZWluZGV4IiwidGhpcyIsImlkIiwicmVtb3ZlIiwiZSIsInRhYmxlIiwicHJvcCIsImNoZWNrZWQiLCJib2R5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhc01vdXNlIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNyZWF0ZUV2ZW50IiwiaXNUb3VjaERldmljZSIsIndpbmRvdyIsIm9ubG9hZCIsImlucHV0IiwicXVlcnlTZWxlY3RvciIsImludGxUZWxJbnB1dCIsInNsaWRlVXAiLCJ0b2dnbGVDbGFzcyIsInBhcmVudCIsIm5leHQiLCJmaW5kIiwidHJpZ2dlciIsInByZXYiLCJyZW1vdmVDbGFzcyIsInNsaWRlVG9nZ2xlIiwiZmFkZU91dCIsInN0b3BQcm9wYWdhdGlvbiIsIm1vZGFsIiwiaGlkZSIsInNob3ciLCJhZGRDbGFzcyIsImN0eCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsIkNoYXJ0IiwidHlwZSIsImRhdGEiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwiYmFja2dyb3VuZENvbG9yIiwicG9pbnRCYWNrZ3JvdW5kQ29sb3IiLCJwb2ludEJvcmRlckNvbG9yIiwicG9pbnRSYWRpdXMiLCJib3JkZXJDb2xvciIsIm9wdGlvbnMiLCJzY2FsZXMiLCJ4QXhlcyIsImdyaWRMaW5lcyIsImRpc3BsYXkiLCJkcmF3Qm9yZGVyIiwidGlja3MiLCJmb250Q29sb3IiLCJmb250U2l6ZSIsInRvcCIsInlBeGVzIiwiTGVnZW5kIiwicHJvdG90eXBlIiwiYWZ0ZXJGaXQiLCJoZWlnaHQiLCJ5QXhpc0lEIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJEYXNoIiwicmVzcG9uc2l2ZSIsImQiLCJ0IiwibSIsInkiLCJ0b2dnbGUiLCJtb2RhbFdpemFyZCJdLCJtYXBwaW5ncyI6IkFBR0FBLEVBQUVDLFVBQVVDLE1BQU0sV0FpRGQsSUFDUUMsRUE3Q1JILEVBQUUsUUFBUUksTUFBTSxXQUVaLElBQUlDLEVBQWdCTCxFQUFFLFlBQVlNLE9BRzlCQyxFQURTUCxFQUFFLGlCQUFpQlEsS0FBSyxNQUNmQyxNQUFNLEtBQ3hCQyxFQUFZQyxPQUFPSixFQUFTLElBQU0sRUFHbkNGLEVBRk8sS0FJTkwsRUFBRSxpQkFBaUJZLE1BQU0sZ0NBQWlDRixFQUFXLFlBRXJFVixFQUFFLFFBQVVVLEdBQVdHLE9BQU8sMEVBQTJFSCxFQUFXLGlFQUFtRUEsRUFBWSxnQ0FLM01WLEVBQUUsY0FBY2MsR0FBRyxRQUFRLFVBQVUsV0FFakMsSUFFSUMsRUFGS0MsS0FBS0MsR0FDSVIsTUFBTSxLQUNHLEdBRzNCVCxFQUFFLFFBQVVlLEdBQWFHLFdBTTdCbEIsRUFBRSxhQUFhYyxHQUFHLGtCQUFtQixXQUNqQ2QsRUFBRSxvQkFBb0JRLEtBQUssTUFBT1IsRUFBRSxvQkFBb0JRLEtBQUssVUFLakVSLEVBQUUsY0FBY0ksTUFBTSxTQUFTZSxHQUMzQixJQUFJQyxFQUFPcEIsRUFBRSxTQUNiQSxFQUFFLDZCQUE2Qm9CLEdBQU9DLEtBQUssVUFBVUwsS0FBS00sV0FNdERuQixHQUFpQixFQVNyQkYsU0FBU3NCLEtBQUtDLGlCQUFpQixZQVAvQixTQUFTQyxLQUNpQixJQUFuQnRCLElBQ0NGLFNBQVN5QixnQkFBZ0JDLFVBQVVDLElBQUksU0FDdkMzQixTQUFTc0IsS0FBS00sb0JBQW9CLFlBQWFKLE1BTXZEeEIsU0FBU3NCLEtBQUtDLGlCQUFpQixhQUFjLFdBQ3pDckIsR0FBaUIsSUFFckJGLFNBQVNzQixLQUFLQyxpQkFBaUIsV0FBWSxXQUN2Q3JCLEdBQWlCLElBRXJCRixTQUFTc0IsS0FBS0MsaUJBQWlCLFFB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VUMsSUFBSSxVQUdwQnlELEVBQUU3RCxpQkFBaUIsUUFBUyxXQUN4QjhELEVBQUVoRSxTQUFVLEVBQ1orRCxFQUFFMUQsVUFBVUMsSUFBSSxzQkFDaEJULEVBQUVRLFVBQVVULE9BQU8sc0JBQ25CcUUsRUFBRTVELFVBQVVDLElBQUksUUFDaEI0RCxFQUFFN0QsVUFBVVQsT0FBTyxVQUd2Qm9FLEVBQUU5RCxpQkFBaUIsUUFBUyxXQUN4QjZELEVBQUUxRCxVQUFVOEQsT0FBTyxzQkFDbkJ0RSxFQUFFUSxVQUFVOEQsT0FBTyxzQkFDbkJGLEVBQUU1RCxVQUFVOEQsT0FBTyxRQUNuQkQsRUFBRTdELFVBQVU4RCxPQUFPLFVBS3ZCekYsRUFBRSxXQUNFQSxFQUFFLHVCQUF1QjBGIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ3VzdG9tXG4gKi9cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gUmV3YXJkcyBhZGQgbmV3IGZvcm1cblxuICAgIC8vIEFkZCBuZXcgZWxlbWVudFxuICAgICQoXCIuYWRkXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vIEZpbmRpbmcgdG90YWwgbnVtYmVyIG9mIGVsZW1lbnRzIGFkZGVkXG4gICAgICAgIHZhciB0b3RhbF9lbGVtZW50ID0gJChcIi5lbGVtZW50XCIpLmxlbmd0aDtcbiAgICAgICAgLy8gbGFzdCA8ZGl2PiB3aXRoIGVsZW1lbnQgY2xhc3MgaWRcbiAgICAgICAgdmFyIGxhc3RpZCA9ICQoXCIuZWxlbWVudDpsYXN0XCIpLmF0dHIoXCJpZFwiKTtcbiAgICAgICAgdmFyIHNwbGl0X2lkID0gbGFzdGlkLnNwbGl0KFwiX1wiKTtcbiAgICAgICAgdmFyIG5leHRpbmRleCA9IE51bWJlcihzcGxpdF9pZFsxXSkgKyAxO1xuICAgICAgICB2YXIgbWF4ID0gMTA7XG4gICAgICAgIC8vIENoZWNrIHRvdGFsIG51bWJlciBlbGVtZW50c1xuICAgICAgICBpZih0b3RhbF9lbGVtZW50IDwgbWF4ICl7XG4gICAgICAgICAgICAvLyBBZGRpbmcgbmV3IGRpdiBjb250YWluZXIgYWZ0ZXIgbGFzdCBvY2N1cmFuY2Ugb2YgZWxlbWVudCBjbGFzc1xuICAgICAgICAgICAgJChcIi5lbGVtZW50Omxhc3RcIikuYWZ0ZXIoXCI8ZGl2IGNsYXNzPSdlbGVtZW50JyBpZD0nZGl2X1wiKyBuZXh0aW5kZXggK1wiJz48L2Rpdj5cIik7XG4gICAgICAgICAgICAvLyBBZGRpbmcgZWxlbWVudCB0byA8ZGl2PlxuICAgICAgICAgICAgJChcIiNkaXZfXCIgKyBuZXh0aW5kZXgpLmFwcGVuZChcIjxpbnB1dCB0eXBlPSdlbWFpbCcgcGxhY2Vob2xkZXI9J0FkZCBuYW1lcyBvciBlbWFpbCBhZGRyZXNzZXMnIGlkPSdhZGRfXCIrIG5leHRpbmRleCArXCInPjxpbnB1dCB0eXBlPVxcXCJzdWJtaXRcXFwiIHZhbHVlPSdTZW5kIEludml0ZSc+PHNwYW4gaWQ9J3JlbW92ZV9cIiArIG5leHRpbmRleCArIFwiJyBjbGFzcz0ncmVtb3ZlJz4rPC9zcGFuPlwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gUmVtb3ZlIGVsZW1lbnRcbiAgICAkKCcuY29udGFpbmVyJykub24oJ2NsaWNrJywnLnJlbW92ZScsZnVuY3Rpb24oKXtcblxuICAgICAgICB2YXIgaWQgPSB0aGlzLmlkO1xuICAgICAgICB2YXIgc3BsaXRfaWQgPSBpZC5zcGxpdChcIl9cIik7XG4gICAgICAgIHZhciBkZWxldGVpbmRleCA9IHNwbGl0X2lkWzFdO1xuXG4gICAgICAgIC8vIFJlbW92ZSA8ZGl2PiB3aXRoIGlkXG4gICAgICAgICQoXCIjZGl2X1wiICsgZGVsZXRlaW5kZXgpLnJlbW92ZSgpO1xuXG4gICAgfSk7XG5cbiAgICAvLyBNb2RhbCBjbG9zZSBzdG9wIHZpZGVvXG5cbiAgICAkKCcjdHV0b3JpYWwnKS5vbignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI3R1dG9yaWFsIGlmcmFtZVwiKS5hdHRyKFwic3JjXCIsICQoXCIjdHV0b3JpYWwgaWZyYW1lXCIpLmF0dHIoXCJzcmNcIikpO1xuICAgIH0pO1xuXG4gICAgLy8gU2VsZWN0IGFsbCBiaWxsaW5nXG5cbiAgICAkKCcuc2VsZWN0QWxsJykuY2xpY2soZnVuY3Rpb24oZSl7XG4gICAgICAgIHZhciB0YWJsZT0gJCgndGFibGUnKTtcbiAgICAgICAgJCgnLmZvcm0tY2hlY2sgaW5wdXQ6Y2hlY2tib3gnLHRhYmxlKS5wcm9wKCdjaGVja2VkJyx0aGlzLmNoZWNrZWQpO1xuICAgIH0pO1xuXG4gICAgLy8gUmVtb3ZlIGhvdmVyIG9uIHRvdWNoIGRldmljZXNcblxuICAgIChmdW5jdGlvbiBhZGRQb2ludGVyQ2xhc3NlcygpIHtcbiAgICAgICAgdmFyIGlzX3RvdWNoX2V2ZW50ID0gZmFsc2U7XG5cbiAgICAgICAgZnVuY3Rpb24gaGFzTW91c2UoKSB7XG4gICAgICAgICAgICBpZihpc190b3VjaF9ldmVudCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbW91c2UnKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhc01vdXNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFzTW91c2UpO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGZ1bmN0aW9uICgpICB7XG4gICAgICAgICAgICBpc190b3VjaF9ldmVudCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZnVuY3Rpb24gKCkgIHtcbiAgICAgICAgICAgIGlzX3RvdWNoX2V2ZW50ID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkgIHtcbiAgICAgICAgICAgIGlmKGlzX3RvdWNoX2V2ZW50KSBpc190b3VjaF9ldmVudCA9IGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICBmdW5jdGlvbiBpc1RvdWNoRGV2aWNlKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFdmVudCgnVG91Y2hFdmVudCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGlzVG91Y2hEZXZpY2UoKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RvdWNoJyk7XG4gICAgICAgIH1cbiAgICB9KSgpO1xuXG4gICAgLy8gUGhvbmVcblxuICAgIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHt2YXIgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bob25lXCIpOyB3aW5kb3cuaW50bFRlbElucHV0KGlucHV0KTt9O1xuXG4gICAgLy8gSGVhZGVyIG5vdGlmaWNhdGlvblxuXG4gICAgJCgnLm5vdGlmaWNhdGlvbl9jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmhlYWRlcl9fbm90aWZpY2F0aW9uJykuc2xpZGVVcCgpO1xuICAgIH0pO1xuXG4gICAgLy8gSGFtYnVyZ2VyXG5cbiAgICAkKCcjbW9iX25hdicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICB9KTtcblxuICAgIC8vIFN0ZXBzIHRhYnNcblxuICAgICQoJy5idG5OZXh0JykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJy5uYXYtdGFicyAuYWN0aXZlJykucGFyZW50KCkubmV4dCgnbGknKS5maW5kKCdhJykudHJpZ2dlcignY2xpY2snKTtcbiAgICB9KTtcblxuICAgICQoJy5idG5QcmV2aW91cycpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCcubmF2LXRhYnMgLmFjdGl2ZScpLnBhcmVudCgpLnByZXYoJ2xpJykuZmluZCgnYScpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgfSk7XG5cbiAgICAvLyBTdGVwcyBjaG9vc2VcblxuICAgICQoJy5zdGVwc19fY2hvb3NlIGxpJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICB9KTtcblxuICAgICQoJy5zdGVwc19fZGV2aWNlIGxpIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5zdGVwc19fZGV2aWNlIGxpIGEnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgJCgnLnN0ZXBzX19pbnN0cnVjdGlvbnMgbGkgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLnN0ZXBzX19pbnN0cnVjdGlvbnMgbGkgYScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICAvLyBDaGFydCBvcGVuXG5cbiAgICAkKCcuY2hhcnRfb3BlbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygncm90YXRlJyk7XG4gICAgICAgICQoJy5jaGFydF9fY29udGVudCcpLnNsaWRlVG9nZ2xlKCk7XG4gICAgICAgICQoJy5wbGFuX2dyYXBoX190b3AnKS50b2dnbGVDbGFzcygnYi1iJyk7XG4gICAgfSk7XG5cbiAgICAvLyBTdWJtaXQgZmVlZGJhY2sgYWN0aXZlXG5cbiAgICAkKCcuZmVlZGJhY2tfaXRlbV9fbGlzdCBsaSBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgnbGknKS5wYXJlbnQoJy5mZWVkYmFja19pdGVtX19saXN0JykuZmluZCgnYScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICAvLyBUdXRvcmlhbHMgbG9nb3NcblxuICAgIC8vICQoJy50dXRvcmlhbHNfX2xvZ29zIGxpIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAgICQoJy50dXRvcmlhbHNfX2xvZ29zIGxpIGEnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgLy8gICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIC8vIH0pO1xuXG4gICAgLy8gVHV0b3JpYWxzIGluc3RydWN0aW9uc1xuXG4gICAgLy8gJCgnLnR1dG9yaWFsc19faW5zdHJ1Y3Rpb25zIGxpIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAgICQoJy50dXRvcmlhbHNfX2luc3RydWN0aW9ucyBsaSBhJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIC8vICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAvLyB9KTtcblxuICAgIC8vIEhvdyB0byB1c2UgYWNjb3JkaW9uXG5cbiAgICAkKCcuYWNjb3JkaW9uX2FjdGlvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5maW5kKCcuaHR1X2xpc3RfaXRlbScpLnNsaWRlVG9nZ2xlKCk7XG4gICAgICAgICQodGhpcykucGFyZW50KCcuYm94JykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgLy8gU2hvdyBwYXNzd29yZFxuXG4gICAgJChcIi50b2dnbGUtcGFzc3dvcmRcIikuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoXCJmYS1leWUgZmEtZXllLXNsYXNoXCIpO1xuICAgICAgICB2YXIgaW5wdXQgPSAkKCcuc2hvd19wYXNzJyk7XG4gICAgICAgIGlmIChpbnB1dC5hdHRyKFwidHlwZVwiKSA9PSBcInBhc3N3b3JkXCIpIHtcbiAgICAgICAgICAgIGlucHV0LmF0dHIoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlucHV0LmF0dHIoXCJ0eXBlXCIsIFwicGFzc3dvcmRcIik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIENsb3NlIG5vdGlmaWNhdGlvblxuXG4gICAgJCgnLmljb25fY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgJCh0aGlzKS5wYXJlbnQoJ2xpJykuZmFkZU91dCgpO1xuICAgIH0pO1xuXG4gICAgJChcIi5kcm9wZG93bi1tZW51XCIpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuXG4gICAgLy8gTW9kYWwgZGFzaGJvYXJkXG5cbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJyN0dXRvcmlhbCcpLm1vZGFsKCdzaG93Jyk7XG4gICAgfSk7XG5cbiAgICAvLyBCaWxsaW5nXG5cbiAgICAkKCcjbmF2LWhvbWUtdGFiJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICQoJy5iaWxsaW5nX3N1YnNjcmliZWQnKS5oaWRlKCk7XG4gICAgICAgJCgnLmJpbGxpbmdfYWN0aXZlJykuc2hvdygpO1xuICAgIH0pO1xuXG4gICAgJCgnI25hdi1wcm9maWxlLXRhYicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmJpbGxpbmdfc3Vic2NyaWJlZCcpLnNob3coKTtcbiAgICAgICAgJCgnLmJpbGxpbmdfYWN0aXZlJykuaGlkZSgpO1xuICAgIH0pO1xuXG4gICAgJCgnI25hdi1jb250YWN0LXRhYicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmJpbGxpbmdfc3Vic2NyaWJlZCcpLnNob3coKTtcbiAgICAgICAgJCgnLmJpbGxpbmdfYWN0aXZlJykuaGlkZSgpO1xuICAgIH0pO1xuXG4gICAgJCgnLmJpbGxpbmdfY2hlY2sgLmNyJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuYmlsbGluZ19wYXlfbWV0aCcpLnNsaWRlVG9nZ2xlKCk7XG4gICAgICAgICQoJy5iaWxsaW5nX3BheV9tZXRoIHVsIGxpIGEnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICAkKCcucGxhbnNfbWV0aG9kX19jaGVjayAuY3InKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5wbGFuc19pbmZvX19zZWxlY3QnKS5zbGlkZVRvZ2dsZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gQmlsbGluZyBwYXltZW50XG5cbiAgICAkKCcucHJvZmVzc2lvbmFsX2JpbGxpbmcgdWwgbGkgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLnByb2Zlc3Npb25hbF9iaWxsaW5nIHVsIGxpIGEnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgLy8gQmlsbGluZyBtb2JpbGVcblxuICAgICQoJy5hY2NvcmRpb25fYXJyb3cnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5iaWxsaW5nX2FjY29yZGlvbicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoJy5iaWxsaW5nX2FjY29yZGlvbicpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoJy5iaWxsaW5nX2FjY29yZGlvbicpLmZpbmQoJy5hY2NvcmRpb25faGlkZGVuJykuc2xpZGVUb2dnbGUoKTtcbiAgICB9KTtcblxuICAgICQoJy5wbGFuc19pbmZvX19zZWxlY3QgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLnBsYW5zX2luZm9fX3NlbGVjdCBhJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICB9KTtcblxuICAgICQoJy5wbGFuc19tZXRob2RfX2NhcmQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5wbGFuc19tZXRob2RfX2NoZWNrJykuc2xpZGVUb2dnbGUoKTtcbiAgICB9KTtcblxuICAgIC8vIENoYXJ0XG5cbiAgICAkKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Q2hhcnQnKS5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB2YXIgY2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XG4gICAgICAgICAgICAvLyBUaGUgdHlwZSBvZiBjaGFydCB3ZSB3YW50IHRvIGNyZWF0ZVxuICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxuXG4gICAgICAgICAgICAvLyBUaGUgZGF0YSBmb3Igb3VyIGRhdGFzZXRcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBsYWJlbHM6IFsnMTUtNi0yMDE5JywgJzIwLTYtMjAxOScsICcyNS02LTIwMTknLCAnMzAtNi0yMDE5JywgJzA2LTYtMjAxOSddLFxuICAgICAgICAgICAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ015IEZpcnN0IGRhdGFzZXQnLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6ICcjMjY5M2ZmJyxcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRSYWRpdXM6IDQsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI2U2ZTZlNicsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFswLCAxMCwgNSwgMiwgMjBdXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8vIENvbmZpZ3VyYXRpb24gb3B0aW9ucyBnbyBoZXJlXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgc2NhbGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIHhBeGVzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhd0JvcmRlcjogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRDb2xvcjogXCIjODA4MDgwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDExLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMjVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgICAgIHlBeGVzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhd0JvcmRlcjogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIENoYXJ0LkxlZ2VuZC5wcm90b3R5cGUuYWZ0ZXJGaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmhlaWdodCArIDUwO1xuICAgIH07XG5cbiAgICAkKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Q2hhcnQyJykuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdmFyIGNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xuICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGxhYmVsczogWycwNjowMCcsICcxMjowMCcsICcxODowMCcsICcyNDowMCddLFxuICAgICAgICAgICAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0Rvd25sb2FkJyxcbiAgICAgICAgICAgICAgICAgICAgeUF4aXNJRDogJ0EnLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6ICcjMzliNTRhJyxcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRSYWRpdXM6IDAsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzM5YjU0YScsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbMSwgNCwgNSwgNV1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnVXBsb2FkJyxcbiAgICAgICAgICAgICAgICAgICAgeUF4aXNJRDogJ0InLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6ICcjZjc5MzFlJyxcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRSYWRpdXM6IDAsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI2Y3OTMxZScsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckRhc2g6IFs4LDNdLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogWzIsIDQsIDYsIDEwXVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgc2NhbGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIHhBeGVzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhd0JvcmRlcjogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRDb2xvcjogXCIjODA4MDgwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDExLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMjVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgICAgIHlBeGVzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhd0JvcmRlcjogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdBJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdsaW5lYXInXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYXdCb3JkZXI6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnQicsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbGluZWFyJ1xuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBQbGFucyBUb2dnbGVcblxuICAgIHZhciBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWx0LW1vbnRobHlcIiksXG4gICAgICAgIGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbHQteWVhcmx5XCIpLFxuICAgICAgICB0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzd2l0Y2hlclwiKSxcbiAgICAgICAgbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9udGhseVwiKSxcbiAgICAgICAgeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwieWVhcmx5XCIpO1xuXG4gICAgZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgdC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIGUuY2xhc3NMaXN0LmFkZChcInRvZ2dsZXItLWlzLWFjdGl2ZVwiKTtcbiAgICAgICAgZC5jbGFzc0xpc3QucmVtb3ZlKFwidG9nZ2xlci0taXMtYWN0aXZlXCIpO1xuICAgICAgICBtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICB5LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgIH0pO1xuXG4gICAgZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgdC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgZC5jbGFzc0xpc3QuYWRkKFwidG9nZ2xlci0taXMtYWN0aXZlXCIpO1xuICAgICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJ0b2dnbGVyLS1pcy1hY3RpdmVcIik7XG4gICAgICAgIG0uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgIHkuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgfSk7XG5cbiAgICB0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICBkLmNsYXNzTGlzdC50b2dnbGUoXCJ0b2dnbGVyLS1pcy1hY3RpdmVcIik7XG4gICAgICAgIGUuY2xhc3NMaXN0LnRvZ2dsZShcInRvZ2dsZXItLWlzLWFjdGl2ZVwiKTtcbiAgICAgICAgbS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICAgICAgeS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICB9KTtcblxuICAgIC8vIFBsYW4gbW9kYWwgd2l6YXJkXG5cbiAgICAkKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKFwiLm1vZGFsX3Byb2Zlc3Npb25hbFwiKS5tb2RhbFdpemFyZCgpO1xuICAgIH0pO1xuXG59KTsiXX0=
