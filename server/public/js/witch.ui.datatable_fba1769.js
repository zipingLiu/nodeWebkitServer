!function(t){t.fn.witchDataTable=function(d){function e(){var t="<thead><tr>",e=d.thead;for(key in e)t+='<th style="width:'+e[key]+'">'+key+"</th>";t+="</tr></thead>";var a=d.data;t+="<tbody>";for(key in a)t+="<tr><td>"+n.data("line")+"</td><td>"+key+"</td><td>"+a[key]+"</td></tr>";t+="</tbody>",n.append(t)}var a={thead:{}},d=t.extend(a,d),n=this;n.data("line",1),e()}}(jQuery);