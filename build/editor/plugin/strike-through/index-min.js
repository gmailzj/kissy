/*
Copyright 2012, KISSY UI Library v1.40dev
MIT Licensed
build time: Dec 7 00:25
*/
KISSY.add("editor/plugin/strike-through/index",function(b,e,c,d){function a(){}b.augment(a,{pluginRenderUI:function(a){d.init(a);a.addButton("strikeThrough",{cmdType:"strikeThrough",tooltip:"删除线 "},c.Button)}});return a},{requires:["editor","../font/ui","./cmd"]});
