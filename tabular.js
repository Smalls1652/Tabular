//Created by Smalls
//Contact info: tim.small2010@gmail.com
//This code is almost inoperable now-a-days.
//Last edit: October 2011
 
//This work is licensed under the Creative Commons Attribution-NonCommercial 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/4.0/.
 
var whattab = 0;
var tabwhat;
var conn = 1;
var currentt = 0;
var resized = 0;
var tabs = new Array();
 
if (window.XMLHttpRequest)  
{
    sitej = new XMLHttpRequest();
}
else
 if (window.ActiveXObject)
 {
   sitej = new ActiveXObject("Microsoft.XMLHTTP");
 }
 
function sendRecent(siteurl)
{
sitej.open("POST", "sendrecentjs.php", true);
sitej.setRequestHeader("Content-type","application/x-www-form-urlencoded");
sitej.send("url=" + siteurl);
}
 
function sourceSize(tab)
{
        var pageSRC = document.getElementById("tab" + tab).src;
        document.write(pageSRC);
}
 
function hidelogin()
{
document.getElementById('login').style.display = "none";
document.getElementById('tabular').style.display = "";
}
 
function hidetab()
{
document.getElementById('tabu' + currentt).style.display = "none";
}
 
function clicker()
{
var site = prompt('Please enter a URL', 'http://');
if(site==null)
{
alert('Nothing entered');
}
else
{
clicky(site);
}
}
 
function startup(siteurl)
{
whattab = whattab+1;
if(currentt>0)
{
document.getElementById('tabu' + currentt).style.display = "none";
}
currentt = whattab;
document.getElementById('tabnum').innerHTML= "Current Tab: " +currentt;
document.getElementById('dookie').innerHTML= document.getElementById('dookie').innerHTML + '<span id="tab' + whattab + 'name"><a href="javascript:void(0)" onclick="clicktab(' +whattab+ ');">-<span id="tabname' + whattab + '">New Tab ' + whattab + '</span>-</a></span> ';
document.getElementById('dood').innerHTML= document.getElementById('dood').innerHTML + ' <div id="tabu'+whattab+'" style="width:800px;height:5000px;"><iframe src="' + siteurl +'" style="display:show;" id="tab' +whattab + '" onclick="sourceSize('+whattab+')" frameborder="0" height="500%" width="100%" noresize="noresize"></iframe></div>';
}
 
function clicky(siteurl)
{
whattab = whattab+1;
if(currentt>0)
{
document.getElementById('tabu' + currentt).style.display = "none";
}
currentt = whattab;
document.getElementById('tabnum').innerHTML= "Current Tab: " +currentt;
document.getElementById('dookie').innerHTML= document.getElementById('dookie').innerHTML + '<span id="tab' + whattab + 'name"><a href="javascript:void(0)" onclick="clicktab(' +whattab+ ');">-<span id="tabname' + whattab + '">New Tab ' + whattab + '</span>-</a></span> ';
document.getElementById('dood').innerHTML= document.getElementById('dood').innerHTML + ' <div id="tabu'+whattab+'" style="width:800px;height:5000px;"><iframe src="' + siteurl +'" style="display:show;" id="tab' +whattab + '" onclick="sourceSize('+whattab+')" frameborder="0" height="500%" width="100%" noresize="noresize"></iframe></div>';
}
 
function renametab()
{
var newname = prompt('Please enter a new name', '');
document.getElementById('tabname' + currentt).innerHTML = newname;
}
 
function resize()
{
if(resized==0)
{
document.getElementById('tabu' + currentt).style.width = '239px';
document.getElementById('tabuno').style.width = '235px';
document.getElementById('tab' + currentt).style.width = '239px';
document.getElementById('tabnum').style.width = '239px';
document.getElementById('taboptions').style.width = '230px';
document.getElementById('dood').style.width = '239px';
resized = 1;
}
else if(resized==1)
{
document.getElementById('tabu' + currentt).style.width = '800';
document.getElementById('tabuno').style.width = '800px';
document.getElementById('tab' + currentt).style.width = '800';
document.getElementById('tabnum').style.width = '800';
document.getElementById('taboptions').style.width = '795';
resized = 0;
}
}
 
function openmain()
{
document.getElementById('tab' + currentt).src = "http://myworldnet.co.cc/new.php";
}
 
function newsite()
{
var newsite = prompt('Please enter a new URL', 'http://');
if(newsite=="")
{
alert('Nothing entered.');
}
else
{
document.getElementById('tab' + currentt).src = newsite;
}
}
 
function closemenu()
{
document.getElementById('taboptions').style.display = "none";
}
 
function clicktab(a)
{
if(a == currentt)
{
document.getElementById('taboptions').style.display = "";
}
else
{
document.getElementById('tabu' + currentt).style.display = "none";
document.getElementById('tabu' + a).style.display = "";
currentt=a;
document.getElementById('tabnum').innerHTML= "Current Tab: " +currentt;
}
}
 
function closetab()
{
document.getElementById('tab' + currentt + 'name').innerHTML = '';
document.getElementById('tabu' + currentt).innerHTML = '';
document.getElementById('taboptions').style.display = 'none';
}
