
jQuery(function(){
	jQuery('#ower-option').on('click', function(){
		if(jQuery(this).attr('checked') == 'checked'){
			jQuery('.ya-add-ower-form').slideDown();
			jQuery(".ya-add-staff-member").slideUp();
		}
		else{
			jQuery('.ya-add-ower-form').hide();
		}
	});
	
	jQuery('#ower-option:checked').each(function(){
		if(jQuery(this).attr('checked') == 'checked'){
			jQuery('.ya-add-ower-form').css('display', 'block')
		}
		else{
			jQuery('.ya-add-ower-form').css('display', 'none');
		}
	});
	
	jQuery('#add-staff-member-option').on('click', function(){
		if(jQuery(this).attr('checked') == 'checked'){
			jQuery('.ya-add-staff-member').slideDown();
			jQuery(".ya-add-ower-form").slideUp();
		}
		else{
			jQuery('.ya-add-staff-member').slideUp();
		}
	});
	
	jQuery('#add-staff-member-option:checked').each(function(){
		if(jQuery(this).attr('checked') == 'checked'){
			jQuery('.ya-add-staff-member').css('display', 'block');
		}
		else{
			jQuery('.ya-add-staff-member').css('display', 'none');
		}
	});
	
})
