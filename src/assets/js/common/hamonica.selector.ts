/* eslint-disable no-prototype-builtins */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-fallthrough */
/* eslint-disable no-empty */
/* eslint-disable no-useless-escape */
/* eslint-disable no-prototype-builtins */

'use strict';

/**
 * Pure JS로 반복되거나 불필요한 소스가 나열되는 소스를 모아 Jquery 형식의 함수로 제공한다.
 * @author 장진철(zerocooldog@pionnet.co.kr)
 */

    /**
     * Dom Element를 탐색 한다.
     * 
     * @param {String} selectorPattern css 형식의 selector 표현식.
     * @author 장진철(zerocooldog@pionnet.co.kr)
     */
    let selector:any = function (selectorPattern) {
		return new selector.fn.init(selectorPattern);
    };


    selector.fn = selector.prototype = {

        constructor : selector,

        init : function(selectorPattern ) {


			//초기화 
			//nodeType은 DOM 객체일 경우 존재하는 속성이다. 1은 element,2는 attibute ,3은 text노드를 가르킨다.
			//HTMLCollection으로 넘어오는 객체는 배열형식으로 넘어오기 때문에 length 프로퍼티 체크 후 바로 elems에 대입한다.
			this.elems = [];
			this.length = 0;

            let idPattern = /^(#[a-zA-Z0-9]*)$/ig;                      // ID 패턴을 찾기 위한 표현식, ex) #ad, #a32fb, #1ab34
            let isIDSelector = idPattern.test(selectorPattern);         // ID 패턴이 맞는지 확인.
    
    
			if(selectorPattern instanceof selector) {
				return selectorPattern;
			} if(selectorPattern instanceof HTMLElement) {
				this.elems.push(selectorPattern);
			} else if(isIDSelector){
                //ID로 조회된 엘리먼트를 this.elems 항목에 저장한다.
                let idElement = document.getElementById(selectorPattern.replace("#",""));
                if(idElement){
                    this.elems.push(idElement);
                }

            }else{

                // CSS Query Selector를 이용하여 element들을 조회 한다.
                let queryElements = document.querySelectorAll(selectorPattern);

                if(queryElements){

                    //querySelectorAll 로 조회된 엘리먼트를 this.elems 항목에 저장한다.
                    let queryElementsLength = queryElements.length;

                    for (let i = 0; i < queryElementsLength; i++) {
                        this.elems.push(queryElements[i]);
                    }
                }
            }

			this.length = this.elems.length;

			return this;
        },

        /**
         * 빈 값인지 검증.
         * @author 장진철(zerocooldog@pionnet.co.kr)
         */
        isEmpty : (object) => { 
            return object === undefined || object === null || object.length === 0 || Number.isNaN(object); 
        },

        
        /**
         * 탐색 된 elements들을 순환 처리 한다.
         * 
         * @param {function} callback 처리할 함수.
         * @return selector
         * @author 장진철(zerocooldog@pionnet.co.kr)
         */
        each : function(callback) {

            let elemsLength = this.length;

			for(var i=0; i < elemsLength; i++) {			
				callback.call(this.elems[i],i,this.elems[i]);
			};
			
			return this;
		},		

        /**
         * 특정 위치에 있는 특정 elements를 가져온다.
         * 
         * @param {Number} idx 반환 할 elemet의 위치
         * @return HTMLElement
         * @author 장진철(zerocooldog@pionnet.co.kr)
         */
		get :  function(idx) {
			return (idx !== undefined && !Number.isNaN(idx)) ? this.elems[idx] : this.elems;
        },
        /**
         * css에서 제공하는 eq문법을 함수로 제공.
         * 특정 위치에 있는 특정 elements를 가져온다.
         * 
         * @param {Number} idx 반환 할 elemet의 위치
         * @return HTMLElement
         * @author 장진철(zerocooldog@pionnet.co.kr)
         */
		eq :  function(idx) {
			return this.get(idx);
		},

        /**
         * 탐색된 elements의 갯수를 반환한다.
         * 
         * @return Number
         * @author 장진철(zerocooldog@pionnet.co.kr)
         */
		size :  function() {
			return this.length;
        },
        
        /**
         * 탐색된 elements의 가로 크기를 반환한다.
         * 
         * .width(392) : 가로 크기 설정
         * .width() : 392
         * 값이 없을 경우 : 0
         * 
         * @return Number
         * @author 장진철(zerocooldog@pionnet.co.kr)
         */
		width : function() {
			var args = arguments;
			
			if(this.length == 1 && args.length == 0)  {

                return Number(this.elems[0].clientWidth);
                
			} else if(args.length == 1){

				this.elems.forEach((element) => {
                    element.style.width = args[0] +'px';
				});
            }
			
			return 0;
		},

        /**
         * 탐색된 elements의 세로 크기를 반환 및 변경 한다.
         * 
         * .height(392) : 세로 크기 설정
         * .height() : 392
         * 값이 없을 경우 : 0
         * 
         * @return Number
         * @author 장진철(zerocooldog@pionnet.co.kr)
         */
		height : function() {

			var args = arguments;
			
			if(this.length == 1 && args.length == 0)  {
				return Number(this.elems[0].clientHeight);
			} else if(args.length == 1){
                
				this.elems.forEach((element) => {
                    element.style.height = args[0] +'px';
				});
            }
			
			return 0;
        },
        
        
        /**
         * 탐색된 input element의 값을 변경 하거나 반환한다.
         * .val() :  값을 반환.
         * .val('changevalue') : 값을 변경.
         * 
         * @return Number
         * @author 장진철(zerocooldog@pionnet.co.kr)
         */
        val : function() {
			var args = arguments;
			
			if(this.length == 1 && args.length == 0)  {
				return this.elems[0].value;
			} else  {
				this.elems.forEach((element) => {
					if(args.length == 1 && typeof args[0] == "string") {
						element.value = args[0];
					}
				});
				 
				return this;
			}
            
		},

        /**
         * 탐색된 element의 style 값을 반환하거나 변경 한다.
         * .css('name') : 스타일 값을 반환.
         * .css({ value : 'change', name : 'name' }) : 속성 값을 Object 형식으로 변경.
         * .css('name','changevalue') : 속성 값을 변경.
         * 
         * @return Number
         * @author 장진철(zerocooldog@pionnet.co.kr)
         */
		css : function() {
			var args = arguments;
            
            if(this.length == 1 && args.length == 0)  {
				return this.elems[0].style[args[0]];
            } else {
				this.elems.forEach((element) => {
                    if(args.length == 1 && typeof args[0] == "object") { 
                        for(var key in args[0]) {
                            element.style[key] = args[0][key];
                        }
                    } else if(args.length == 2 && typeof args[0] == "string") {
                        element.style[args[0]] = args[1];
                    }
                });
            }
			return this;
		},

         /**
         * 탐색된 element를 속성 값을 반환하거나 변경 한다.
         * .attr('name') : 속성 값을 반환.
         * .attr({ value : 'change', name : 'name' }) : 속성 값을 Object 형식으로 변경.
         * .attr('name','changevalue') : 속성 값을 변경.
         * 
         * @return Number
         * @author 장진철(zerocooldog@pionnet.co.kr)
         */
		attr : function() {
            var args = arguments;
            
            if(this.length == 1 && args.length == 1 && typeof(args[0]) == 'string')  {
				return this.elems[0].getAttribute(args[0]);
            } else {
				this.elems.forEach((element) => {

                    if(args.length == 1 && typeof args[0] == "object") { 
                        for(var key in args[0]) {
                            element.setAttribute(key, args[0][key]);
                        }
                    } else if(args.length == 2 && typeof args[0] == "string") {
                        element.setAttribute(args[0], args[1]);
                    }
        
                });
            }
			
			return this;
        },
        
        /**
         * 탐색된 element를 속성 값을 제거한다.
         * .attr('name') : 속성 값을 제거.
         * 
         * @return Number
         * @author 이승헌(lsh0872@pionnet.co.kr)
         */
        removeAttr : function() {
            var args = arguments;
            if( !(args.length == 1 && typeof(args[0]) == 'string') ) return this;
        
            this.elems.forEach((element) => {
                element.removeAttribute(args[0]);
            });
			
			return this;
        },

        /**
         * 탐색된 element를 노출한다.
         * 
         * @return Number
         * @author 장진철(zerocooldog@pionnet.co.kr)
         */
		show : function() {

  	  	    this.elems.forEach((element) => {
				element.style.display = "block";
            });
			
			return this;
		},

        
        /**
         * 탐색된 element를 숨긴다.
         * 
         * @return Number
         * @author 장진철(zerocooldog@pionnet.co.kr)
         */
		hide : function() {

  	  	    this.elems.forEach((element) => {
				element.style.display = "none";
            });
			
			return this;
		},

        /**
         * 탐색된 element를 제거한다.
         * 
         * @return Number
         * @author 장진철(zerocooldog@pionnet.co.kr)
         */
		remove : function() {

  	  	    this.elems.forEach((element) => {
                element.remove();
            });
			
			return this;
        },
        
        /**
         * 탐색된 element를 속성 값을 반환하거나 변경 한다.
         * .attr('name') : 속성 값을 반환.
         * .attr({ value : 'change', name : 'name' }) : 속성 값을 Object 형식으로 변경.
         * .attr('name','changevalue') : 속성 값을 변경.
         * 
         * @return Number
         * @author 장진철(zerocooldog@pionnet.co.kr)
         */
		addClass : function(classNames) {


            // 매개변수 값이 없으면 진행하지 않는다.
            if(classNames === undefined || classNames == null || classNames == "" ){
                return this;
            }
   
            var classArr = classNames.split(" ");

			this.elems.forEach((element) => {

                classArr.forEach(className => {
                    element.classList.add(className);
                });
    
            });
			
			return this;
        },
        
        /**
         * 탐색된 element를 속성 값을 반환하거나 변경 한다.
         * .attr('name') : 속성 값을 반환.
         * .attr({ value : 'change', name : 'name' }) : 속성 값을 Object 형식으로 변경.
         * .attr('name','changevalue') : 속성 값을 변경.
         * 
         * @return Number
         * @author 장진철(zerocooldog@pionnet.co.kr)
         */
		removeClass : function(classNames) {


            // 매개변수 값이 없으면 진행하지 않는다.
            if(classNames === undefined || classNames == null || classNames == "" ){
                console.warn("[" + classNames + "] 클래스명이 올바르지 않습니다.");
                return this;
            }
   
            var classArr = classNames.split(" ");

            this.elems.forEach((element) => {

                classArr.forEach(className => {
                    element.classList.remove(className);
                });
    
            });
			
			return this;
		},

        /**
         * 탐색된 element에 클래스명이 있는지 확인한다.
         * .hasClass('name') : 클래스명 존재여부
         * 
         * @return Number
         * @author 장진철(zerocooldog@pionnet.co.kr)
         */
		hasClass : function(className) {


            // 매개변수 값이 없으면 진행하지 않는다.
            if(className === undefined || className == null || className == "" ){
                console.warn("[" + className + "] 클래스명이 올바르지 않습니다.");
                return false;
            }

            if(this.length > 0){
                return this.elems[0].classList.contains(className);
            }
			
			return false;
        },
        
        /**
         * 탐색된 elements의 innerHTML 값을 반환하거나 변경 한다.
         * 
         * .html() : .innerHTML 값을 반환.
         * .html('<div>추가 내용</div>') : .innerHTML 값을 변경.
         * 
         * @return Number
         * @author 장진철(zerocooldog@pionnet.co.kr)
         */
		html : function() {

			var args = arguments;
			
			if(this.elems.length == 1 && args.length == 0)  {
				return this.elems[0].innerHTML;
			} else {

      	  	    this.elems.forEach((element) => {
                    if(args.length == 1 && typeof args[0] == "string") {
						element.innerHTML = args[0];
					}
                });
			 
				return this;
			}
        },
        
        		/**
		* A.appendTo(B)
		* A 엘리먼트가 B 엘리먼트 안쪽(자식노드의) 마지막노드로 이동한다.
		* ex)selector('#aaa').insertBefore(selector("#cccc"));
		*
		* @param obj DOM 객체 또는 selector객체
		* @author 장진철 zerocooldog@pionnet.co.kr
		**/
		appendTo : function(obj) {

  	  	    this.elems.forEach(() => {

				if(obj.constructor == selector){
					obj.append(this);
				} else if(obj.nodeType) {
					obj.appendChild(this);
				}
			});
			
			return this;
		},

		/**
		* A.prependTo(B)
		* A 엘리먼트가 B 엘리먼트 안으로(자식노드의) 첫번째노드로 이동한다.
		* ex)selector('#aaa').prependTo(selector("#cccc"));
		*
		* @param obj DOM 객체 또는 selector객체
		* @author 장진철 zerocooldog@pionnet.co.kr
		**/
		prependTo : function(obj) {

            this.elems.forEach(() => {

				if(obj.constructor == selector){
					obj.prepend(this);
				} else if(obj.nodeType) {
					obj.insertBefore(this, obj.childNodes[0]);
				}
			});
			
			return this;
		},


		/**
		* A.insertBefore(B)
		* A 엘리먼트가 B 항목 앞으로 이동한다.
		* ex)selector('#aaa').insertBefore(selector("#cccc"));
		*
		* @param obj DOM 객체 또는 selector객체
		* @author 장진철 zerocooldog@pionnet.co.kr
		**/
		insertBefore : function(obj) {

			if(this.length > 0) {

				var elem = this.get(),
					target = (obj.length == 1) ? obj.get(0) : selector(obj).get(0),
					parent = (target[0].parentNode) ? target[0].parentNode : target[0].parentElement;

				for (var i = 0,elemLength = elem.length; i < elemLength; i++) {
					parent.insertBefore(elem[i], target[0]);
				};

			}
			
			return this;
		},


		/**
		* A.insertAfter(B)
		* A 엘리먼트가 B 항목 뒤로 이동한다.
		* ex)selector('#aaa').insertAfter(selector("#cccc"));
		*
		* @param obj DOM 객체 또는 _j객체
		* @author 장진철 zerocooldog@pionnet.co.kr
		**/
		insertAfter : function(obj) {

			if(this.length > 0) {

				var elem = this.get(),
					target = (obj.length == 1) ? obj.get(0) : selector(obj).get(0),
					parent = (target[0].parentNode) ? target[0].parentNode : target[0].parentElement;

				for (var i = 0,elemLength = elem.length; i < elemLength; i++) {
					parent.insertBefore(elem[i], target[0].nextSibling);
				};

			}
			
			return this;
		},


		/**
		* A.append(B)
		* B엘리먼트를 A 엘리먼트 안쪽(자식노드) 끝 부분에 붙인다.
		* ex)selector('#aaa').append(selector("#cccc"));
		*
		* @param obj DOM 객체 또는 selector객체
		* @author 장진철 zerocooldog@pionnet.co.kr
		**/		
		append : function(obj) {

			this.each(function(i,el) {

				if(typeof obj == "string") { 

					this.innerHTML += obj;

				} else if(obj.constructor == selector){

					if(obj.length > 0){
						obj.each(function(){
							el.appendChild(this);
						});
					}

				} else if(obj.nodeType) {
					this.appendChild(obj);
				}
			});
			
			return this;
		},		


		/**
		* A.prepend(B)
		* B엘리먼트를 A 엘리먼트 안쪽(자식노드)  맨 앞 부분에 붙인다.
		* ex)selector('#aaa').prepend(selector("#cccc"));
		*
		* @param obj DOM 객체 또는 selector객체
		* @author 장진철 zerocooldog@pionnet.co.kr
		**/		
		prepend : function(obj) {

			this.each(function(i,el) {

				if(typeof obj == "string") { 
					this.innerHTML += obj;

				} else if(obj.constructor == selector){

					if(obj.length > 0) {
						obj.each(function(){
							el.insertBefore(this, el.childNodes[0]);
						});
					}

				} else if(obj.nodeType) {
					this.insertBefore(obj, this.childNodes[0]);
				}
			});
			
			return this;
		},	
		
		/**
		* 부모 엘리먼트를 찾는다.
		* @param obj DOM 객체 또는 _j객체
		* @author 장진철 zerocooldog@pionnet.co.kr
		**/		
		parent : function() {

			var parent = null;
			if(this.length > 0){
				parent = (this.elems[0].parentNode) ? this.elems[0].parentNode : this.elems[0].parentElement;
			}
			
			return selector(parent);
		},	
    }

    selector.fn.init.prototype = selector.fn;

export default selector;