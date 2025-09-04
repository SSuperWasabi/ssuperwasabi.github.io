document.addEventListener('DOMContentLoaded', function() {
    // 모든 '지도' 버튼에 대해 이벤트 리스너를 추가합니다.
    var mapButtons = document.querySelectorAll('.buttons a[href*="naver.me"]');
    mapButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // 기본 링크 동작을 막습니다.
            var mapLink = this.getAttribute('href');
            alert('지도로 이동합니다: ' + mapLink); // 알림창을 띄웁니다.
            window.open(mapLink, '_blank'); // 새 창에서 지도를 엽니다.
        });
    });

    // 모든 '후기' 버튼에 대해 이벤트 리스너를 추가합니다.
    var reviewButtons = document.querySelectorAll('.buttons a:not([href*="naver.me"])');
    reviewButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // 기본 링크 동작을 막습니다.
            var reviewLink = this.getAttribute('href');
            alert('블로그 후기로 이동합니다: ' + reviewLink); // 알림창을 띄웁니다.
            window.open(reviewLink, '_blank'); // 새 창에서 블로그 후기를 엽니다.
        });
    });
});