// Garden Gnome Software - Skin
// Pano2VR 5.0.1/15068
// Filename: 9too-1.ggsk
// Generated dom jan 15 16:14:25 2017

function pano2vrSkin(player,base) {
	var ggSkinVars = [];
	var me=this;
	var flag=false;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=me.player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		me.ggUserdata=me.player.userdata;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		me.ggCurrentTime=new Date().getTime();
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		if (hotspot.skinid=='Hotspot-logo+tag') {
			this.__div=document.createElement('div');
			this.__div.ggId="Hotspot-logo+tag";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 120px;';
			hs+='position : absolute;';
			hs+='top : 104px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._logotag=document.createElement('div');
			this._logotag__img=document.createElement('img');
			this._logotag__img.className='ggskin ggskin_svg';
			this._logotag__img.setAttribute('src',basePath + 'images/logotag.svg');
			this._logotag__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._logotag__img['ondragstart']=function() { return false; };
			this._logotag.appendChild(this._logotag__img);
			this._logotag.ggId="logo+tag";
			this._logotag.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._logotag.ggVisible=true;
			this._logotag.className='ggskin ggskin_svg ';
			this._logotag.ggType='svg';
			hs ='';
			hs+='height : 81px;';
			hs+='left : -91px;';
			hs+='position : absolute;';
			hs+='top : -80px;';
			hs+='visibility : inherit;';
			hs+='width : 187px;';
			this._logotag.setAttribute('style',hs);
			this._logotag.style[domTransform + 'Origin']='50% 50%';
			me._logotag.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._logotag.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._logotag.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._logotag);
		} else
		if (hotspot.skinid=='Hotspot-bt-explore') {
			this.__div=document.createElement('div');
			this.__div.ggId="Hotspot-bt-explore";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 207px;';
			hs+='position : absolute;';
			hs+='top : 219px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebranco=document.createElement('div');
			this._pulsebranco__img=document.createElement('img');
			this._pulsebranco__img.className='ggskin ggskin_svg';
			this._pulsebranco__img.setAttribute('src',basePath + 'images/pulsebranco.svg');
			this._pulsebranco__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebranco__img['ondragstart']=function() { return false; };
			this._pulsebranco.appendChild(this._pulsebranco__img);
			this._pulsebranco.ggId="pulse-branco";
			this._pulsebranco.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebranco.ggVisible=true;
			this._pulsebranco.className='ggskin ggskin_svg ';
			this._pulsebranco.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -25px;';
			hs+='position : absolute;';
			hs+='top : -25px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebranco.setAttribute('style',hs);
			this._pulsebranco.style[domTransform + 'Origin']='50% 50%';
			me._pulsebranco.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebranco.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebranco.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebranco);
			this._btexplore=document.createElement('div');
			this._btexplore__img=document.createElement('img');
			this._btexplore__img.className='ggskin ggskin_svg';
			this._btexplore__img.setAttribute('src',basePath + 'images/btexplore.svg');
			this._btexplore__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._btexplore__img['ondragstart']=function() { return false; };
			this._btexplore.appendChild(this._btexplore__img);
			this._btexplore.ggId="bt-explore";
			this._btexplore.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._btexplore.ggVisible=true;
			this._btexplore.className='ggskin ggskin_svg ';
			this._btexplore.ggType='svg';
			hs ='';
			hs+='height : 60px;';
			hs+='left : -24px;';
			hs+='position : absolute;';
			hs+='top : -22px;';
			hs+='visibility : inherit;';
			hs+='width : 48px;';
			this._btexplore.setAttribute('style',hs);
			this._btexplore.style[domTransform + 'Origin']='50% 50%';
			me._btexplore.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._btexplore.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._btexplore.onclick=function () {
				me.player.changePanLog(-16,true);
				me.player.changeTiltLog(-3,true);
			}
			this._btexplore.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._btexplore);
		} else
		if (hotspot.skinid=='Hotspot-bt-contato') {
			this.__div=document.createElement('div');
			this.__div.ggId="Hotspot-bt-contato";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 235px;';
			hs+='position : absolute;';
			hs+='top : 312px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebrancocontato=document.createElement('div');
			this._pulsebrancocontato__img=document.createElement('img');
			this._pulsebrancocontato__img.className='ggskin ggskin_svg';
			this._pulsebrancocontato__img.setAttribute('src',basePath + 'images/pulsebrancocontato.svg');
			this._pulsebrancocontato__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebrancocontato__img['ondragstart']=function() { return false; };
			this._pulsebrancocontato.appendChild(this._pulsebrancocontato__img);
			this._pulsebrancocontato.ggId="pulse-branco-contato";
			this._pulsebrancocontato.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebrancocontato.ggVisible=true;
			this._pulsebrancocontato.className='ggskin ggskin_svg ';
			this._pulsebrancocontato.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -24px;';
			hs+='position : absolute;';
			hs+='top : -89px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebrancocontato.setAttribute('style',hs);
			this._pulsebrancocontato.style[domTransform + 'Origin']='50% 50%';
			me._pulsebrancocontato.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebrancocontato.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebrancocontato.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebrancocontato);
			this._btcontato=document.createElement('div');
			this._btcontato__img=document.createElement('img');
			this._btcontato__img.className='ggskin ggskin_svg';
			this._btcontato__img.setAttribute('src',basePath + 'images/btcontato.svg');
			this._btcontato__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._btcontato__img['ondragstart']=function() { return false; };
			this._btcontato.appendChild(this._btcontato__img);
			this._btcontato.ggId="bt-contato";
			this._btcontato.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._btcontato.ggVisible=true;
			this._btcontato.className='ggskin ggskin_svg ';
			this._btcontato.ggType='svg';
			hs ='';
			hs+='height : 85px;';
			hs+='left : -23px;';
			hs+='position : absolute;';
			hs+='top : -86px;';
			hs+='visibility : inherit;';
			hs+='width : 48px;';
			this._btcontato.setAttribute('style',hs);
			this._btcontato.style[domTransform + 'Origin']='50% 50%';
			me._btcontato.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._btcontato.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._btcontato.onclick=function () {
				me._infocontato.ggVisible = !me._infocontato.ggVisible;
				me._infocontato.style[domTransition]='none';
				me._infocontato.style.visibility=((me._infocontato.ggVisible)&&(Number(me._infocontato.style.opacity)>0||!me._infocontato.style.opacity))?'inherit':'hidden';
			}
			this._btcontato.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._btcontato);
			this._infocontato=document.createElement('div');
			this._infocontato__img=document.createElement('img');
			this._infocontato__img.className='ggskin ggskin_svg';
			this._infocontato__img.setAttribute('src',basePath + 'images/infocontato.svg');
			this._infocontato__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._infocontato__img['ondragstart']=function() { return false; };
			this._infocontato.appendChild(this._infocontato__img);
			this._infocontato.ggId="info-contato";
			this._infocontato.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._infocontato.ggVisible=false;
			this._infocontato.className='ggskin ggskin_svg ';
			this._infocontato.ggType='svg';
			hs ='';
			hs+='height : 138px;';
			hs+='left : -139px;';
			hs+='position : absolute;';
			hs+='top : -226px;';
			hs+='visibility : hidden;';
			hs+='width : 284px;';
			this._infocontato.setAttribute('style',hs);
			this._infocontato.style[domTransform + 'Origin']='50% 50%';
			me._infocontato.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._infocontato.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._infocontato.onclick=function () {
				me._infocontato.style[domTransition]='none';
				me._infocontato.style.visibility='hidden';
				me._infocontato.ggVisible=false;
			}
			this._infocontato.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._infocontato);
		} else
		if (hotspot.skinid=='Hotspot-bt-VR') {
			this.__div=document.createElement('div');
			this.__div.ggId="Hotspot-bt-VR";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 260px;';
			hs+='position : absolute;';
			hs+='top : 431px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebrancovr=document.createElement('div');
			this._pulsebrancovr__img=document.createElement('img');
			this._pulsebrancovr__img.className='ggskin ggskin_svg';
			this._pulsebrancovr__img.setAttribute('src',basePath + 'images/pulsebrancovr.svg');
			this._pulsebrancovr__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebrancovr__img['ondragstart']=function() { return false; };
			this._pulsebrancovr.appendChild(this._pulsebrancovr__img);
			this._pulsebrancovr.ggId="pulse-branco-vr";
			this._pulsebrancovr.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebrancovr.ggVisible=true;
			this._pulsebrancovr.className='ggskin ggskin_svg ';
			this._pulsebrancovr.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -24px;';
			hs+='position : absolute;';
			hs+='top : -89px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebrancovr.setAttribute('style',hs);
			this._pulsebrancovr.style[domTransform + 'Origin']='50% 50%';
			me._pulsebrancovr.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebrancovr.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebrancovr.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebrancovr);
			this._btvr=document.createElement('div');
			this._btvr__img=document.createElement('img');
			this._btvr__img.className='ggskin ggskin_svg';
			this._btvr__img.setAttribute('src',basePath + 'images/btvr.svg');
			this._btvr__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._btvr__img['ondragstart']=function() { return false; };
			this._btvr.appendChild(this._btvr__img);
			this._btvr.ggId="bt-VR";
			this._btvr.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._btvr.ggVisible=true;
			this._btvr.className='ggskin ggskin_svg ';
			this._btvr.ggType='svg';
			hs ='';
			hs+='height : 85px;';
			hs+='left : -23px;';
			hs+='position : absolute;';
			hs+='top : -86px;';
			hs+='visibility : inherit;';
			hs+='width : 48px;';
			this._btvr.setAttribute('style',hs);
			this._btvr.style[domTransform + 'Origin']='50% 50%';
			me._btvr.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._btvr.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._btvr.onclick=function () {
				me._infovr.ggVisible = !me._infovr.ggVisible;
				me._infovr.style[domTransition]='none';
				me._infovr.style.visibility=((me._infovr.ggVisible)&&(Number(me._infovr.style.opacity)>0||!me._infovr.style.opacity))?'inherit':'hidden';
				me._videogoogle.style[domTransition]='none';
				me._videogoogle.style.opacity='1';
				me._videogoogle.style.visibility=me._videogoogle.ggVisible?'inherit':'hidden';
				me._videogoogle.ggVisible = !me._videogoogle.ggVisible;
				me._videogoogle.style[domTransition]='none';
				me._videogoogle.style.visibility=((me._videogoogle.ggVisible)&&(Number(me._videogoogle.style.opacity)>0||!me._videogoogle.style.opacity))?'inherit':'hidden';
			}
			this._btvr.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._btvr);
			this._infovr=document.createElement('div');
			this._infovr__img=document.createElement('img');
			this._infovr__img.className='ggskin ggskin_svg';
			this._infovr__img.setAttribute('src',basePath + 'images/infovr.svg');
			this._infovr__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._infovr__img['ondragstart']=function() { return false; };
			this._infovr.appendChild(this._infovr__img);
			this._infovr.ggId="info-VR";
			this._infovr.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._infovr.ggVisible=false;
			this._infovr.className='ggskin ggskin_svg ';
			this._infovr.ggType='svg';
			hs ='';
			hs+='height : 266px;';
			hs+='left : -140px;';
			hs+='position : absolute;';
			hs+='top : -351px;';
			hs+='visibility : hidden;';
			hs+='width : 284px;';
			this._infovr.setAttribute('style',hs);
			this._infovr.style[domTransform + 'Origin']='50% 50%';
			me._infovr.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._infovr.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._infovr.onclick=function () {
				me._infovr.style[domTransition]='none';
				me._infovr.style.visibility='hidden';
				me._infovr.ggVisible=false;
				me._videogoogle.style[domTransition]='none';
				me._videogoogle.style.opacity='0';
				me._videogoogle.style.visibility='hidden';
				me._videogoogle.style[domTransition]='none';
				me._videogoogle.style.visibility='hidden';
				me._videogoogle.ggVisible=false;
			}
			this._infovr.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._infovr);
			this._videogoogle=document.createElement('div');
			this._videogoogle__text=document.createElement('div');
			this._videogoogle.className='ggskin ggskin_textdiv';
			this._videogoogle.ggTextDiv=this._videogoogle__text;
			this._videogoogle.ggId="video-google";
			this._videogoogle.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._videogoogle.ggVisible=false;
			this._videogoogle.className='ggskin ggskin_text ';
			this._videogoogle.ggType='text';
			hs ='';
			hs+='height : 160px;';
			hs+='left : -139px;';
			hs+='opacity : 0;';
			hs+='position : absolute;';
			hs+='top : -367px;';
			hs+='visibility : hidden;';
			hs+='width : 280px;';
			this._videogoogle.setAttribute('style',hs);
			this._videogoogle.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 280px;';
			hs+='height: 160px;';
			hs+='border: 0px solid #000000;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._videogoogle__text.setAttribute('style',hs);
			this._videogoogle__text.innerHTML="<iframe width=\"280\" height=\"160\" src=\"https:\/\/www.youtube.com\/embed\/SCrkZOx5Q1M\" frameborder=\"0\" allowfullscreen><\/iframe>";
			this._videogoogle.appendChild(this._videogoogle__text);
			me._videogoogle.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._videogoogle.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._videogoogle.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._videogoogle);
		} else
		if (hotspot.skinid=='Hotspot-tour-praia') {
			this.__div=document.createElement('div');
			this.__div.ggId="Hotspot-tour-praia";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 260px;';
			hs+='position : absolute;';
			hs+='top : 428px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebrancotourpraia=document.createElement('div');
			this._pulsebrancotourpraia__img=document.createElement('img');
			this._pulsebrancotourpraia__img.className='ggskin ggskin_svg';
			this._pulsebrancotourpraia__img.setAttribute('src',basePath + 'images/pulsebrancotourpraia.svg');
			this._pulsebrancotourpraia__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebrancotourpraia__img['ondragstart']=function() { return false; };
			this._pulsebrancotourpraia.appendChild(this._pulsebrancotourpraia__img);
			this._pulsebrancotourpraia.ggId="pulse-branco-tourPraia";
			this._pulsebrancotourpraia.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebrancotourpraia.ggVisible=true;
			this._pulsebrancotourpraia.className='ggskin ggskin_svg ';
			this._pulsebrancotourpraia.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -24px;';
			hs+='position : absolute;';
			hs+='top : -86px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebrancotourpraia.setAttribute('style',hs);
			this._pulsebrancotourpraia.style[domTransform + 'Origin']='50% 50%';
			me._pulsebrancotourpraia.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebrancotourpraia.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebrancotourpraia.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebrancotourpraia);
			this._bttourpraia=document.createElement('div');
			this._bttourpraia__img=document.createElement('img');
			this._bttourpraia__img.className='ggskin ggskin_svg';
			this._bttourpraia__img.setAttribute('src',basePath + 'images/bttourpraia.svg');
			this._bttourpraia__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._bttourpraia__img['ondragstart']=function() { return false; };
			this._bttourpraia.appendChild(this._bttourpraia__img);
			this._bttourpraia.ggId="bt-tour-praia";
			this._bttourpraia.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._bttourpraia.ggVisible=true;
			this._bttourpraia.className='ggskin ggskin_svg ';
			this._bttourpraia.ggType='svg';
			hs ='';
			hs+='height : 85px;';
			hs+='left : -23px;';
			hs+='position : absolute;';
			hs+='top : -83px;';
			hs+='visibility : inherit;';
			hs+='width : 48px;';
			this._bttourpraia.setAttribute('style',hs);
			this._bttourpraia.style[domTransform + 'Origin']='50% 50%';
			me._bttourpraia.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._bttourpraia.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._bttourpraia.onclick=function () {
				me.player.openNext("{node2}","");
			}
			this._bttourpraia.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._bttourpraia);
		} else
		{
			this.__div=document.createElement('div');
			this.__div.ggId="Hotspot-tour-coroa";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 260px;';
			hs+='position : absolute;';
			hs+='top : 428px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._pulsebrancotourcoroa=document.createElement('div');
			this._pulsebrancotourcoroa__img=document.createElement('img');
			this._pulsebrancotourcoroa__img.className='ggskin ggskin_svg';
			this._pulsebrancotourcoroa__img.setAttribute('src',basePath + 'images/pulsebrancotourcoroa.svg');
			this._pulsebrancotourcoroa__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._pulsebrancotourcoroa__img['ondragstart']=function() { return false; };
			this._pulsebrancotourcoroa.appendChild(this._pulsebrancotourcoroa__img);
			this._pulsebrancotourcoroa.ggId="pulse-branco-tourCoroa";
			this._pulsebrancotourcoroa.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pulsebrancotourcoroa.ggVisible=true;
			this._pulsebrancotourcoroa.className='ggskin ggskin_svg ';
			this._pulsebrancotourcoroa.ggType='svg';
			hs ='';
			hs+='height : 50px;';
			hs+='left : -24px;';
			hs+='position : absolute;';
			hs+='top : -86px;';
			hs+='visibility : inherit;';
			hs+='width : 50px;';
			this._pulsebrancotourcoroa.setAttribute('style',hs);
			this._pulsebrancotourcoroa.style[domTransform + 'Origin']='50% 50%';
			me._pulsebrancotourcoroa.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._pulsebrancotourcoroa.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._pulsebrancotourcoroa.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._pulsebrancotourcoroa);
			this._bttourcoroa=document.createElement('div');
			this._bttourcoroa__img=document.createElement('img');
			this._bttourcoroa__img.className='ggskin ggskin_svg';
			this._bttourcoroa__img.setAttribute('src',basePath + 'images/bttourcoroa.svg');
			this._bttourcoroa__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._bttourcoroa__img['ondragstart']=function() { return false; };
			this._bttourcoroa.appendChild(this._bttourcoroa__img);
			this._bttourcoroa.ggId="bt-tour-coroa";
			this._bttourcoroa.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._bttourcoroa.ggVisible=true;
			this._bttourcoroa.className='ggskin ggskin_svg ';
			this._bttourcoroa.ggType='svg';
			hs ='';
			hs+='height : 85px;';
			hs+='left : -23px;';
			hs+='position : absolute;';
			hs+='top : -83px;';
			hs+='visibility : inherit;';
			hs+='width : 48px;';
			this._bttourcoroa.setAttribute('style',hs);
			this._bttourcoroa.style[domTransform + 'Origin']='50% 50%';
			me._bttourcoroa.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._bttourcoroa.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._bttourcoroa.onclick=function () {
				me.player.openNext("{node1}","");
			}
			this._bttourcoroa.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._bttourcoroa);
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	this.addSkin();
};