$( "document" ).ready(function(){
	

	/* border:2px solid #F0F0F0;
	border-right:0px solid #F0F0F0; */
	
	var acsmokemap;
	var newacsmokemap;
	var newacsmoke ='';
	var acsmoke='1';
	var newacsm;
	var acsm;
	var newacmap = 'main';
	var acmap = 'main';
	var buttond = '2px solid #F0F0F0';
	var buttonac = '2px solid #f4ff49';
	var acpic = '';
	var newacpic = '';
	var smleft;
	var smtop;
	var zi = 0;
	
	
	$(document).mousemove(function(e){
		var mx=0;
		var my=0;
		mx = e.pageX;
		my = e.pageY;
		$('#coor').text('X ' + mx + ' Y ' + my);
	})
	
	
	
	$('.map').mousedown(function(){
		newacmap = $(this).attr("id");
		if (newacmap!='bets4pro'){
		newacsmokemap='.smoke'+newacmap;
		newacpic ='#map'+newacmap;
		newacmap ='#'+newacmap;
		if (newacmap != acmap){
		unactive();
		}
		active();
		}
		acmap=newacmap;
		acpic=newacpic;
		acsmokemap=newacsmokemap;
	})
	
	function unactive() {
		$(acpic).css('display','none');
		$(acsmokemap).css('display','none');
		$(acsmoke).css('display','none');
		if (newacmap=='#toptext'){
		$('#tags').css('display','none');
		}
	}
	
	function active() {
		$(newacpic).css('display','block');
		$(newacsmokemap).css('display','block');
		if (newacmap!='#toptext'){
		$('#tags').css('display','block');
		}
		
	}
	
	$('.smokes').mousedown(function(){
		newacsmoke = $(this).attr("id");
		newacsm='#'+newacsmoke;
		newacsmoke='.'+newacsmoke;
		
		$(acsmoke).css('display','none');
		$(acsm).css('border','3px solid #B8B8B8');
		
		$(newacsmoke).css('display','block');
		$(newacsm).css('border','3px solid #AF002A');
		
		acsmoke=newacsmoke;
		acsm=newacsm;
	})
	
})