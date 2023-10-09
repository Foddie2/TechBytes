<template>
        <!-- <link rel="preconnect" href="https://fonts.googleapis.com"> -->
        <!-- <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> -->
        <!-- <link href="https://fonts.googleapis.com/css2?family=Anton&family=Open+Sans:wght@300;400&display=swap" rel="stylesheet"> -->
        <div id="gradBgn">
          <div class="position-relative">
            <div class="d-flex justify-content-between p-3 align-items-center position-fixed w-100">
              <div>
                <img src="/static_files/images/logos/htmlWhiteLogo.png" alt="Company Logo" height="48">
              </div>
              <div>
                <div class="d-flex position-relative">
                  <div class="d-none d-sm-block"><a href="#" class="custom-link">About</a></div>
                  <div class="d-none d-sm-block">
                    <a href="#" class="custom-link">Pages <i class="ms-1 gg-chevron-down"></i></a>
                  </div>
                  <div id="subMenu">
                    <span class="hamLine"></span>
                    <span class="hamLine"></span>
                    <span class="hamLine"></span>
                  </div>
                  <div id="fullPageMenu" class="visually-hidden">
                    <div class="anton d-flex align-items-center position-fixed vh-100 w-100 start-0 top-0 blurOverlay">
                      <div class="container">
                        <div class="display-1"><a href="#" class="custom-link">About</a></div>
                        <div class="display-1"><a href="#" class="custom-link">Services</a></div>
                        <div class="display-1"><a href="#" class="custom-link">Contact</a></div>
                      </div>
                    </div>
                  </div>
                  <div class="p-4 start-0 top-0 position-fixed vh-100 align-items-center d-none d-md-flex" >
                    <div class="openSans">
                      <div class="selected sideLink ms-3 my-3"><span class="avatar">H</span> Home</div>
                      <div class="sideLink ms-3 my-3"><span class="avatar">G</span> Utilities</div>
                      <div class="sideLink ms-3 my-3"><span class="avatar">C</span> Blog</div>
                      <div class="sideLink ms-3 my-3"><span class="avatar">C</span> Contact</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

    </div>
</template>

<script>
	var subMenu = document.getElementById('subMenu')
      var fullPageMenu = document.getElementById('fullPageMenu')
      subMenu.addEventListener('click',function(){
        if(subMenu.className === 'menuClicked') {
          subMenu.className = ""
          setTimeout(function(){fullPageMenu.className = "visually-hidden"},200)
        }else{
          subMenu.className = 'menuClicked'
          fullPageMenu.className = "slideRight"
        }
      })
    export default {
        
    }
</script>

<style lang="scss" scoped>
#gradBgn {
    width:100%;
    position:relative;
  }
  .anton {
    font-family: 'Anton', sans-serif;
  }
  .openSans {
    font-family: 'Open Sans', sans-serif;
  }
  .blurOverlay {
    background:#fff;
    background:rgba(0,0,0,0.8);
  
    z-index:11;
  }
  #gradBgn {
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#5e004b+0,9e0041+100 */
    background: rgb(94,0,75); /* Old browsers */
    background: -moz-linear-gradient(45deg,  rgba(94,0,75,1) 0%, rgba(158,0,65,1) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(45deg,  rgba(94,0,75,1) 0%,rgba(158,0,65,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(45deg,  rgba(94,0,75,1) 0%,rgba(158,0,65,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5e004b', endColorstr='#9e0041',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
    background: url('/static_files/images/html/stayMenuBgn.jpg') no-repeat;
    background-size:cover;
  
    position:fixed;
    top:0;
    height:100vh;
    width:100%;
    overflow:auto
  }
  .custom-link:hover {
    color : #fff
  }
  .custom-link {
    text-decoration : none;
    color : #cecece;
    min-width:120px;
    display:inline-block;
  }
  .hamLine {
    display:block;
    width:24px;
    margin-top:4px;
    border-top:1px solid #fff;
    vertical-align:middle;
    transform-origin:15% 15%;
    transition : all 200ms linear;
  }
  #subMenu {
    display:inline-grid;
    cursor:pointer;
    z-index:12;
  }
  
  .slideRight .custom-link{
    transform : translateX(20px);
    transition : transform 200ms linear;
  }
  
  .menuClicked .hamLine:nth-child(1){
    transform: rotate(45deg)
  }
  .menuClicked .hamLine:nth-child(3){
    transform: rotate(-45deg)
  }
  .menuClicked .hamLine:nth-child(2){
    display:none;
  }


</style>