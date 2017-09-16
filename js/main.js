
	
	/* клик появление */
			
			$(function() {
				$('.salo').click(function(){ /* клик  */
					$('.z').fadeIn(300);/* клик появление */
					$('#wrapper').fadeIn(300);/* клик появление */
				});
			});
	/* клик выключение*/		
			$(function() {
				$('.close').click(function(){
					$('.z').fadeOut(300);
					$('#wrapper').fadeOut(300);
				});
			});	

		$(function() {
			$('#top2').click(function(){
				$("html, body").stop().animate({
					scrollTop: $($('#skroll-5')).offset().top + "px"
				}, {
					duration: 600
				});
				return false;
			});
		});
			
/* forms */

		$(function() {
			$('#contact').validate(
			{	
				rules:{
					"username":{
						required:true,
						maxlength:40
					},
					"phone":{
						required:true
					}
				},
				messages:{
					"username":{
						required:""
					},
					"phone":{
						required:""
					}
				},		
			})
		});	
		
		
	/* */		

		$(document).ready(function() {
			$("a.scroll").click(function() {
				$("html, body").stop().animate({
					scrollTop: $($(this).attr("href")).offset().top + "px"
				}, {
					duration: 600
				});
				return false;
			});
		});
			
	/* thnx */			
			$(function() { 
				$('#contact').ajaxForm(function() { 
					$('good.php').fadeIn(300);
					$('#box-3-3').delay(3000).fadeOut(300);
					$('#form, #form2')[0].reset();
				}); 
			}); 		