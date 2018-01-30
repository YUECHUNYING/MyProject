<template>
    <div class="container">
        <div class="container-fluid">
            <!--<div class="row">
                <div class="col-sm" style="background:#345345">111</div>
                <div class="col-sm" style="background:#378565">222</div>
                <div class="col-sm" style="background:#889988">333</div>
            </div>
            <div class="row">
                <div class="col" style="background:#665544;color:#fff">测试col</div>
            </div>
            <div class="row">
                <div class="col">col1</div>
                <div class="col">col2</div>
                <div class="col">col3</div>
            </div>
            <div class="row">
                <div class="col" style="background:#777">one</div>
                <div class="col-6" style="background:#999">two---col-6</div>
                <div class="col" style="background:#ccc">three</div>
            </div>
            <div class="row">
                <div class="col" style="background:#777">one</div>
                <div class="col-5" style="background:#999">two</div>
                <div class="col" style="background:#ccc">three</div>
            </div>
            <div class="row justify-content-md-center">
                <div class="col col-lg-2" style="background:#777">one</div>
                <div class="col-md-auto" style="background:#999">two--col-{breakpoint}-auto基于内容的自然宽度的大小列</div>
                <div class="col col-lg-2" style="background:#ccc">three</div>
                <div class="col-md-auto" style="background:#999">two--col-{breakpoint}-auto基于内容的自然宽度的大小列col-{breakpoint}-auto基于内容的自然宽度的大小列</div>
            </div>-->
            <!--<div class="row">
                <div class="col" style="background:#777">one</div>
                <div class="col-md-auto" style="background:#999">two--练习并且熟悉col-{breakpoint}-auto（根据内容变动）</div>
                <div class="col col-lg-2" style="background:#ccc">three</div>
            </div>
            <div class="row">
                <div class="col">等宽多列</div>
                <div class="col">等宽多列</div>
                <div class="w-100">当想要换行的时候先加上这个属性，class="w-100",并且内容自定义</div>
                <div class="col">等宽多列</div>
                <div class="col">等宽多列</div>
            </div>
            <div class="row">
                <div class="col" style="background:#ffff99">111</div>
                <div class="col" style="background:#ffff66">222</div>
                <div class="col" style="background:#ffff33">333</div>
                <div class="col" style="background:#ffff11">444</div>
            </div>
            <div class="row">
                <div class="col-8" style="background:#00ff99">88888</div>
                <div class="col-4" style="background:#00ff33">44444</div>
            </div>
            <div class="row">
                <div class="col-sm" style="background:#ffff99">col-sm</div>
                <div class="col-sm" style="background:#ffff66">col-sm</div>
            </div>
            <div class="row">
                <div class="col-sm-8" style="background:#00ff33">col-cm-8</div>
                <div class="col-sm-4" style="background:#00ff99">col-sm-4</div>
            </div>
            <div class="row">
                <div class="col-12 col-md-8" style="background:#ccc">col-12,col-md-8（md《min-width:768px,当大于等于768px的时候，按照col-md-8走，小于768px的时候按照col-12走》）</div>
                <div class="col-6 col-md-4" style="background:#999">col-6,col-md-4</div>
            </div>
            <div class="row">
                <div class="col-6 col-md-4" style="background:#ffff99">col-6 col-md-4</div>
                <div class="col-6 col-md-4" style="background:#ffff66">col-6 col-md-4</div>
                <div class="col-6 col-md-4" style="background:#ffff33">col-6 col-md-4(md是当宽度大于等于768px的时候，当大于768px的时候，按照col-6走，也就是一半)</div>
            </div>-->
            <!--垂直方向上的对齐（vretical alignment） align-item-start align-item-center align-item-end align-self-start align-self-center align-self-end-->
            <div class="row align-item-start">
                <div class="col" style="background:#cc005c">Use flexbox alignment utilities to vertically and horizontally align columns</div>
                <div class="col" style="background:#cc0051">Use flexbox alignment utilities to vertically and horizontally align columns</div>
                <div class="col" style="background:#cc005f">Use flexbox alignment utilities to vertically ang horizontally align columns</div>
            </div>
            <div class="row align-item-center">
                <div class="col" style="background:#8A2BE2">Use flexbox alignment utilities to vertically align columns</div>
                <div class="col" style="background:#E6E6FA">Use flexbox alignment utilities to horizontally align columns</div>
                <div class="col" style="background:#B0C4DE">flexbox alignment utilities</div>
            </div>
            <div class="row align-item-end">
                <div class="col" style="background:#00FA9A">align-item-end</div>
                <div class="col" style="background:#3CB371">align-item-end</div>
                <div class="col" style="background:#00FF7F">align-item-end</div>
            </div>
            <div class="row">
                <div class="col align-self-start">lalalalal</div>
                <div class="col align-self-center">hahahahaha</div>
                <div class="col align-self-end">blablablablabla</div>
            </div>
            <!--水平方向上的对齐（horizontal alignment）包括justify-content-start/justify-content-center/justify-content-end/justify-content-around/justify-content-between-->
            <div class="row justify-content-start">
                <div class="col-4" style="background:rgba(86,61,124,.15)">justify-content-start</div>
                <div class="col-4" style="background:rgba(86,61,124,.2)">justify-content-start</div>
            </div>
            <div class="row justify-content-center">
                <div class="col-4" style="background:rgba(86,61,124,.15)">justify-content-center</div>
                <div class="col-4" style="background:rgba(86,61,124,.15)">justify-content-center</div>
            </div>
            <div class="row justify-content-end">
                <div class="col-4" style="background:rgba(86,61,124,.15)">justify-content-end</div>
                <div class="col-4" style="background:rgba(86,61,124,.15)">justify-content-end</div>
            </div>
            <div class="row justify-content-around">
                <div class="col-4" style="background:rgba(86,61,124,.15)">justify-content-around</div>
                <div class="col-4" style="background:rgba(86,61,124,.15)">justify-content-around</div>
            </div>
            <div class="row justify-content-between">
                <div class="col-4" style="background:rgba(86,61,124,.15)">justify-content-between</div>
                <div class="col-4" style="background:rgba(86,61,124,.15)">justify-content-between</div>
            </div>
            <div class="row no-gutters">
                <div class="col-12 col-sm-6 col-md-8" style="background:rgba(86,61,124,.1)">col-12/col-sm-6/col-md-8(sm指的是最小宽度是576px的时候，当宽度大于等于576px的时候，按照col-sm-6排版展示)</div>
                <div class="col-12 col-md-4" style="background:rgba(86,61,124,.15)">col-12/col-md-4</div>
            </div>
            <div class="row">
                <div class="col-9">9999</div>
                <div class="col-4">4444</div>
                <div class="col-6">6666</div>
            </div>
            <div class="row">
                <div class="col-6 col-sm-3">col-6/col-sm-3(sm是当宽度大于等于576px的时候，按照col-sm-3来展示)</div>
                <div class="col-6 col-sm-3">这种情况是当宽度大于等于576px的时候，按照col-sm-3来展示，否则按照col-6来展示</div>
            </div>
            <div class="row">
                <div class="col-6 col-sm-4">col-6/col-sm-4</div>
                <div class="col-6 col-sm-4">col-6/col-sm-4</div>
                <div class="w-100 d-done d-md-block"></div>
                <div class="col-6 col-sm-4">col-6/col-sm-4</div>
                <div class="col-6 col-sm-4">col-6/col-sm-4</div>
            </div>
            <!--order classes-->
            <div class="row">
                <div class="col">one----order classes</div>
                <div class="col order-12">two</div>
                <div class="col order-1">three</div>
            </div>
            <div class="row">
                <div class="col">中间中间</div>
                <div class="col order-last">order-last(视觉上显示在最后)</div>
                <div class="col order-first">order-first(视觉上显示在前面)</div>
            </div>
            <!--offset classes-->
            <div class="row">
                <div class="col-md-4">col-md-4</div>
                <div class="col-md-4 offset-md-4">col-md-4/offset-md-4</div>
            </div>
            <div class="row">
                <div class="col-md-3 offset-md-3">col-md-3/offset-md-3</div>
                <div class="col-md-3 offset-md-3">col-md-3/offset-md-3</div>
            </div>
            <div class="row">
                <div class="col-md-6 offset-md-3">col-md-6/offset-md-3</div>
            </div>
            <!--ml-auto,mr-auto,使得兄弟队列远离彼此-->
            <div class="row">
                <div class="col-md-4"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Bootstrap'
}
</script>
