(function (global, $) {

  function scrollOn(){
    console.log(this);
    this.onscroll =  function(){
      var nav  = document.querySelector('.nav');
      var scrollY = this.scrollY || this.scrollTop;
      console.log(scrollY);
        if (scrollY > 0) {
          this.$(nav).addClass('nav-active');
          console.log('on');
        }else{
          this.$(nav).removeClass('nav-active');
          console.log('off');
      }
    };
  }
  scrollOn();

})(this , this.jQuery);
