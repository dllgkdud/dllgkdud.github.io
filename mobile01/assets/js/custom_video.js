const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');

// video 클릭 이벤트 구현
video.addEventListener('click', togglePlay); 

//비디오 재생 및 일시 정지 기능 구현
function togglePlay() {
    // 비디오 재생 상태에 따른 메소드 호출
    const method = video.paused ? 'play' : 'pause';  
    video[method]();
}

//재생 및 일시정지 기능에 따른 아이콘 표시 토글
function updateButton() {
    const icon = this.paused ? '►' : '❚❚';
    toggle.textContent = icon;
}
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

// 토글버튼 기능 이벤트 핸들러
toggle.addEventListener('click', togglePlay);  