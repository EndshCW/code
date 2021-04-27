if(self==top){
   
    let fun={
        data:{
            type:0,
            sucai:[],
            templates:""
        },
        addmodule:function(...arg){
           fun.popup.mask();
           console.log(fun.data.sucai)
           let type = 750,arry = fun.data.sucai,tem={"groups":[],"sellergroups":[]};
          if(arg==1)
          type=620;
  
           for(let i=0;i<arry.length;i++){
            new Promise((resolve)=>{
                let img = new Image();
                img.src = arry[i];
                setTimeout(check,40);
                function check(){
                    if(img.width>0||img.height>0){
                        tem.groups.push(
                            {
                                "type": "group",
                                "bizCode": 0,
                                "hide": false,
                                "propertyPanelVisible": true,
                                "level": 1,
                                "boxStyle": {
                                    "background-color": "#ffffff",
                                    "width": type,
                                    "height": parseInt(img.height*type/img.width)
                                },
                                "position": "middle",
                                "groupName": "模块",
                                "components": [{
                                    "type": "component",
                                    "sellerEditable": true,
                                    "level": 2,
                                    "boxStyle": {
                                        "rotate": 0,
                                        "z-index": "0",
                                        "top": 0,
                                        "left": 0,
                                        "width": type,
                                        "background-image": img.src,
                                        "height": parseInt(img.height*type/img.width)
                                    },
                                    "componentName": "图片组件",
                                    "clipType": "rect",
                                    "imgStyle": {
                                        "top": 0,
                                        "left": 0,
                                        "width": type,
                                        "height": parseInt(img.height*type/img.width)
                                    },
                                    "isEdit": false,
                                    "componentType": "pic",
                                    "componentId": "component161579229369"+i,
                                    "groupId": "group161579228799"+i,
                                    "selected": false
                                }],
                                "groupId": "group161579228799"+i,
                                "id": "group161579228799"+i,
                                "bizName": "图文模块"
                            }
                            
                        )
                        resolve(i)
                    }else
                    setTimeout(check,40);
                }

        }
    
        ).then((e)=>{
            if(e==arry.length-1){
                let token_=false;
                    fun.ajax("https://xiangqing.wangpu.taobao.com/GetToken.do?_input_charset=utf-8","post",{},function(e){if(JSON.parse(e).msg==""){token_=JSON.parse(e).data}else{fun.popup.msg(JSON.parse(e).msg,2000);$('.jianxiu-mask').remove()}},function(e){fun.popup.msg("服务器在偷懒",2000);$('.jianxiu-mask').remove()})
                if(token_!=false){
            $.ajax({
                url:'https://xiangqing.wangpu.taobao.com/template/ajax/commit_item_template.do?_input_charset=utf-8&_tb_token_='+token_,
                type:'post',
                async:false,
                data:{
                    opt: 1,
itemId: window.wde_config.itemId,
templateId: window.wde_config.templateId,
templateContent: JSON.stringify(tem),
freeTry: window.wde_config.freeTry,
clientType: window.wde_config.clientType,
version: window.wde_config.currentVersion,
checkLevel: 'group'
                },
                success:(e)=>{
                    if(JSON.parse(e).msg==""){
                      location.reload()
                    }
                    else
                    {fun.popup.msg(JSON.parse(e).msg,2000);$('.jianxiu-mask').remove()}
                },
                error:(e)=>{
                    fun.popup.msg("服务器在偷懒",2000);$('.jianxiu-mask').remove()
                }
            })
        }
            $('.jianxiu-mask').remove();
            }
        })
  
           }
         
     


 
          
        },
        addListener:function(...arg){
            $('body').delegate(arg[0],arg[1],arg[2]);
        },
        ajax:function(...arg){
            $.ajax({
                url:arg[0],
                type:arg[1],
                async:false,
                data:arg[2],
                success:arg[3],
                error:arg[4]
            })
        },
        append:function(...arg){
            $(arg[0]).append(arg[1])
        },
        popup:{
            msg:function(...arg){
                $('body').append('<div class="jianxiu-msg" style="background: rgba(0,0,0,0.8);position:fixed;left:50%;top:50%;z-index:10001;transform: translate(-50%,-50%);width: 350px;min-height: 150px;box-shadow: 3px 3px 5px grey;border-radius:10px;color: #fff;"><div style="width:320px;height: auto;overflow:hidden;margin: 15px;font-size: 18px;margin-top: 30px;overflow-wrap: anywhere;">'+arg[0]+'</div></div>')
         setTimeout(function(){
             $('.jianxiu-msg').remove()
         },arg[1])
            },
            mask:function(){
                $('body').append('<div class="jianxiu-mask" style="background:rgba(0,0,0,0.3);width:100%;height:100%;position:fixed;left:0px;top:0px;z-index:100001;display:flex;justify-content:center;align-items:center;"><i style="color:#006;font-size:30px"><i></div>')
    
            },
            choose:function(text,...arg){
                let div = "";
                console.log(arg)
                new Promise((resolve)=>{
                   if(arg.length==1){
                        div = '<div style="margin: 15px;    margin-top: 25px;display: flex;justify-content: center;width: 320px;"><button class="jianxiu-popup-btn1" style="outline:none;border: none;    color: #fff;    background: #1795ff;    border-radius: 5px;    line-height: 30px;width: 80px;height:30px;">'+arg[0][0]+'</button></div>';
                   }else{
                    if(arg.length==2){
                        div = '<div style="margin: 15px;    margin-top: 25px;display: flex;justify-content: center;width: 320px;"><button class="jianxiu-popup-btn1" style="outline:none;border: none;    color: #fff;    background: #1795ff;    border-radius: 5px;    line-height: 30px;width: 80px;height:30px;">'+arg[0][0]+'</button><button class="jianxiu-popup-btn2" style="outline:none;border: none;    color: #fff;    background: #1795ff;    border-radius: 5px;    line-height: 30px;margin-left:10px;width: 80px;height:30px;">'+arg[1][0]+'</button></div>';
                   }else{
                    div = '<div style="margin: 15px;    margin-top: 25px;display: flex;justify-content: center;width: 320px;"><button class="jianxiu-popup-btn1" style="outline:none;border: none;    color: #fff;    background: #1795ff;    border-radius: 5px;    line-height: 30px;width: 80px;height:30px;">'+arg[0][0]+'</button><button class="jianxiu-popup-btn2" style="outline:none;border: none;    color: #fff;    background: #1795ff;    border-radius: 5px;    line-height: 30px;margin-left:10px;width: 80px;height:30px;">'+arg[1][0]+'</button><button class="jianxiu-popup-btn3" style="outline:none;border: none;    color: #fff;    background: #1795ff;    border-radius: 5px;    line-height: 30px;margin-left:10px;width: 80px;height:30px;">'+arg[2][0]+'</button></div>';
                }
                      
                    }
                    resolve()
                }).then(()=>{
                    $('body').append('<div class="jianxiu-choose" style="background:#fff;position:fixed;left:50%;top:50%;z-index:10001;transform: translate(-50%,-50%);width: 350px;min-height: 150px;box-shadow: 3px 3px 5px grey;"><div style="width:320px;height: auto;overflow:hidden;margin: 15px;font-size: 18px;margin-top: 30px;overflow-wrap: anywhere;">'+text+'</div>'+div+'</div>')
         
                })
                  },
        }
    }
    fun.append('body','<div class="jianxiu-wangpu-controller" style="position:fixed;z-index:10001;right:10px;top:200px;width:50px;height:100px;border:1px solid gray;box-shadow:1px 1px 1px gray;border-radius: 5px;background: rgba(0,0,0,0.6);display: flex;flex-direction: column;align-items: center;" data-spm-anchor-id="a2113b.11507331.0.i2.4dc92109xVE0Et"><div style="margin-top: 10px;"><img src="" style="width:30px;height:30px"></div><div style="margin-top: 8px;font-size: 18px;text-align: center;color: #fff;"><a id="jianxiu-wangpu-open" href="javascript:;" style="color:#fff" data-spm-anchor-id="a2113b.11507331.0.0">展开装修</a></div></div><div class="jianxiu-wangpu-container" style="display:none;position:fixed;z-index:10001;right: 10px;top:200px;width:130px;height:250px;border:1px solid gray;box-shadow: 2px 2px 2px grey;border-radius: 10px;background: rgba(0,0,0,0.8);flex-direction: column;align-items: center;"><ul style="color:#fff;margin-top: 10px;font-size:15px;"><li class="jianxiu-btn" data-index="0" style="border-bottom: 1px solid gray;cursor:pointer;margin-top: 5px;padding: 10px;">快捷视频添加</li><li class="jianxiu-btn" data-index="1" style="border-bottom: 1px solid gray;cursor:pointer;margin-top: 5px;padding: 10px;">超高模块发布</li><li class="jianxiu-btn" data-index="2" style="border-bottom: 1px solid gray;cursor:pointer;margin-top: 5px;padding: 10px;">导入全套图片</li><li class="jianxiu-btn" data-index="3" style="cursor:pointer;margin-top: 5px;padding: 10px;">数据导入导出</li><li class="jianxiu-btn" data-index="4" style="cursor:pointer;margin-top: 5px;padding: 10px;color:red;font-weight: 800;">工具使用帮助</li></ul></div>')
    setTimeout(function(){console.log(window)},10000)
    
fun.addListener("#jianxiu-wangpu-open","click",function(e){

    if(this.parentNode.parentNode.style.right=="150px"){
        this.parentNode.parentNode.style.right="10px";
        this.innerHTML="展"+"开"+"装"+"修";
        $('.jianxiu-wangpu-container').css('display','none')
    }else{
        this.parentNode.parentNode.style.right="150px";
        this.innerHTML="隐"+"藏"+"装"+"修";
        $('.jianxiu-wangpu-container').css('display','flex')

    }
    
    })

    fun.addListener(".jianxiu-btn","click",function(e){
  
        if(this.dataset.index=="0"){
        
            
                fun.popup.choose("请在保存后再进行此操作，如已经保存点击确定<br><br><i>视频数量：</i><input class='jianxiu-input' type='number' min='1' max='5' style='margin-top: 10px;outline:none'><br><br><i>是否自动播放：</i><input class='jianxiu-input' type='checkbox'><br><br><i>视频类型：</i><i>横版</i><input class='jianxiu-input' type='radio' name='v-type' checked>&nbsp;<i>竖版</i> <input class='jianxiu-input' type='radio' name='v-type'><br><br><i>视频链接：<i><input class='jianxiu-input' type='text' placeholder='横版16:9，竖版9:16' style='outline:none'>",["取消"],["确定"]);
                fun.addListener(".jianxiu-popup-btn1","click",function(e){
                    $('.jianxiu-choose').remove()
                })
                fun.addListener(".jianxiu-popup-btn2","click",function(e){
                    let inputs = [$('.jianxiu-input')[0].value,$('.jianxiu-input')[1].value,$('.jianxiu-input')[2].value,$('.jianxiu-input')[3].value,$('.jianxiu-input')[4].value];
                   if(inputs[0]!=""&&inputs[4]!=""){
                    if((/cloud\.video\.taobao\.com(.*)p\/(2|1)\/e/).test(inputs[4])){
                    $('.jianxiu-choose').remove();
                    fun.popup.mask();
                    let token_=false,mode1=false;
                    fun.ajax("https://xiangqing.wangpu.taobao.com/GetToken.do?_input_charset=utf-8","post",{},function(e){if(JSON.parse(e).msg==""){token_=JSON.parse(e).data}else{fun.popup.msg(JSON.parse(e).msg,2000);$('.jianxiu-mask').remove()}},function(e){fun.popup.msg("服务器在偷懒",2000);$('.jianxiu-mask').remove()})
                
                    if(token_!=false){
                    fun.ajax("https://xiangqing.wangpu.taobao.com/template/ajax/get_template.do?_input_charset=utf-8&itemId="+window.wde_config.itemId+"&templateId="+window.wde_config.templateId+"&clientType="+window.wde_config.clientType+"&version="+window.wde_config.currentVersion+"&bizSource=","post",{},function(e){if(JSON.parse(e).msg==""){mode1=JSON.parse(e).data.detailContext;}else{fun.popup.msg(JSON.parse(e).msg,2000);$('.jianxiu-mask').remove()}},function(e){fun.popup.msg("服务器在偷懒");$('.jianxiu-mask').remove()})
            
                }
                if(mode1!=false){
                    let group=JSON.parse(mode1);
            
for(let i = 0; i<parseInt(inputs[0]);i++){
    let video = inputs[4],h1=420,h2=348;
    if(inputs[1]==true||inputs[1]=="true"){
        video.replace(/p\/2\/e/,"p/1/e");
    }
    if(inputs[3]=="true"||inputs[3]==true){
h1=620*620/420;
h2=620*620/348
    }
    
                    group.groups.splice(0,0,{
                        "type": "video",
                        "bizCode": 1,
                        "hide": false,
                        "propertyPanelVisible": true,
                        "level": 1,
                        "boxStyle": {
                            "width": 620,
                            "height": h1
                        },
                        "position": "middle",
                        "groupName": "视频模块",
                        "scenario": "wde",
                        "components": [{
                            "componentType": "video",
                            "boxStyle": {
                                "top": 0,
                                "left": 0,
                                "width": 620,
                                "height": h2
                            },
                            "componentId": "",
                            "sellerEditable": true,
                            "groupId": "",
                            "type": "component",
                            "params": {
                                "videoName": " ",
                                "videoDesc": " ",
                                "coverUrl": "//img.alicdn.com/tfs/TB1j4umn0zJ8KJjSspkXXbF7VXa-750-472.png",
                                "duration": 11,
                                "state": 6,
                                "stateDesc": "通过审核",
                                "title": "商品视频",
                                "videoId": 277192405901,
                                "videoType": 1,
                                "videoUrl": video,
                                "videoResourceUrl": video
                            },
                            "componentName": "视频组件"
                        }],
                        "groupId": '1610509753438'+i,
                        "id": '1610509753438'+i,
                        "bizName": "视频"
                    });
                }
                    $.ajax({
            
                        url:"https://xiangqing.wangpu.taobao.com/template/ajax/commit_item_template.do?_input_charset=utf-8&_tb_token_="+token_+"",
                        type: "post",
                        async:false,
                    
                          data: {
                              opt: 1,
                    itemId: window.wde_config.itemId,
                    templateId: window.wde_config.templateId,
                    templateContent: JSON.stringify(group),
                        freeTry: window.wde_config.freeTry,
                    clientType: window.wde_config.clientType,
                    version: window.wde_config.currentVersion,
                    checkLevel: 'group'
                          },
                          
                          success: function(data) {
                           
                            if (JSON.parse(data).error==false) {
                          location.reload();
                      }else{
                        fun.popup.msg(JSON.parse(data).msg,2000);
                        $('.jianxiu-mask').remove()
                      }
                          },
                          error: function(data) {
                            fun.popup.msg("服务器在偷懒",2000)  ;
                            $('.jianxiu-mask').remove()
                          }
                         
                        }) 
                
                    }
                }else{
                    fun.popup.msg('请填写正确的视频链接(淘宝素材中心复制视频链接)',2000)
                }
                }else{
                    fun.popup.msg('请填写完整数据',2000)
                }
                })

            
            
    
        }else{
            if(this.dataset.index=="3"){
               
                  
                fun.popup.choose("请选择操作<br><br><i style='position: relative;top: -50px;'>导入/导出数据：</i><textarea class='jianxiu-textarea' style='position: relative;margin-top: 3px;outline: none;' rows='3' cols='15' data-spm-anchor-id='a2113b.11507331.0.i1.1ebc2109Kl72uc'></textarea>",["取消"],["导入"],["导出"]);
                fun.addListener(".jianxiu-popup-btn1","click",function(e){
                    $('.jianxiu-choose').remove()
                })
                fun.addListener(".jianxiu-popup-btn2","click",function(e){
                        if($('.jianxiu-textarea').val()!=""){
                            fun.popup.mask()
                            let token_=false;
                            fun.ajax("https://xiangqing.wangpu.taobao.com/GetToken.do?_input_charset=utf-8","post",{},function(e){if(JSON.parse(e).msg==""){token_=JSON.parse(e).data}else{fun.popup.msg(JSON.parse(e).msg,2000);$('.jianxiu-mask').remove()}},function(e){fun.popup.msg("服务器在偷懒",2000);$('.jianxiu-mask').remove()})
                        if(token_!=false){
                    $.ajax({
                        url:'https://xiangqing.wangpu.taobao.com/template/ajax/commit_item_template.do?_input_charset=utf-8&_tb_token_='+token_,
                        type:'post',
                        async:false,
                        data:{
                            opt: 1,
        itemId: window.wde_config.itemId,
        templateId: window.wde_config.templateId,
        templateContent: $('.jianxiu-textarea').val(),
        freeTry: window.wde_config.freeTry,
        clientType: window.wde_config.clientType,
        version: window.wde_config.currentVersion,
        checkLevel: 'group'
                        },
                        success:(e)=>{
                            if(JSON.parse(e).msg==""){
                              location.reload()
                            }
                            else
                            {fun.popup.msg(JSON.parse(e).msg,2000);$('.jianxiu-mask').remove()}
                        },
                        error:(e)=>{
                            fun.popup.msg("服务器在偷懒",2000);$('.jianxiu-mask').remove()
                        }
                    })
                }
                      $('.jianxiu-choose').remove();
                        }else{
                            fun.popup.msg("请贴进要导入的数据！",2000)
                        }

                })
                fun.addListener(".jianxiu-popup-btn3","click",function(e){
                    window.postMessage({jianxiu_datas:0},"*");
                    let time = 0;
                    setTimeout(fun1,100);
                    function fun1(){
                        if(fun.data.templates!=""){
                      $('.jianxiu-textarea').val(fun.data.templates)
                      $('.jianxiu-textarea').select();
                      document.execCommand("Copy");
                      $('.jianxiu-choose').remove();
                      fun.popup.msg("已复制，请直接粘贴",2000)
                    }else{
                            if(time<=100){
                            setTimeout(fun1,100); 
                            }else{
                                fun.popup.msg('请求超时',2000)
                            }
                            time++;
                        }
                    }


                })
   
            }else{
                if(this.dataset.index=="2"){
                    fun.data.type=1;
                    fun.append('body','<div id="jianxiu-sucai" style="position: fixed;z-index: 1000;top: 0;background: rgba(15,15,15,0.3);height: 100%;width: 100%;"><div style="background:#fff;position:fixed;top:80px;left:20%;width:1050px;height:510px;"></div><iframe id="jianxiu-sucai-pick" style="position:fixed;top:90px;left:22%;width:980px;height:500px;" src="https://sucai.wangpu.taobao.com/select.htm?appkey=tu&needHeader=false&type=pic&filterByPhone=false&max=100&handleId=callback0"></iframe></div>')
               
                }else{
                    if(this.dataset.index=="1"){
                        fun.popup.choose("请选择操作",["取消"],["保存"],["发布"]);
                        fun.addListener(".jianxiu-popup-btn1","click",function(e){
                            $('.jianxiu-choose').remove()
                        })
                        fun.addListener(".jianxiu-popup-btn2","click",function(e){
                            window.postMessage({jianxiu_superH:1},"*");
                            $('.jianxiu-choose').remove()

                        })
                        fun.addListener(".jianxiu-popup-btn3","click",function(e){
                            window.postMessage({jianxiu_superH:0},"*");
                            $('.jianxiu-choose').remove()

                        })
                    }else{
                        if(this.dataset.index=="4"){
                            fun.popup.msg("暂无内容",2000)
                        }else{
                            
                        }
                    } 
                }
            }
        }
        
        })

        window.addEventListener('message',function(e){
            let data = e.data;
            if(data.jianxiu_close!=undefined){
                $('#jianxiu-sucai').remove();
                fun.data.type=0;
            }
            if(data.jianxiu_sucai!=undefined){
                data.jianxiu_sucai==0? fun.popup.msg("请选择一张gif",2000):fun.data.sucai=data.jianxiu_sucai;
                $('#jianxiu-sucai').remove();
                fun.addmodule(parseInt(window.wde_config.clientType));
            }
            if(data.jianxiu_datasd!=undefined){
                fun.data.templates=JSON.stringify(data.jianxiu_datasd)
                fun.data.type=0;
            }
        },false)

}