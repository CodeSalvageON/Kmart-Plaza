if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  $("#title-screen").hide();

  $("#error-page-mobile").show();
  $("#mobile-notice").show();
}