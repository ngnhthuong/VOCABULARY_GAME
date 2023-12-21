import { Howl } from 'howler';

// Kiểm tra và yêu cầu cấp phép âm thanh
export const requestMusicPermission = async () => {
  try {
    if (window.AudioContext || window.webkitAudioContext) {
      const context = new (window.AudioContext || window.webkitAudioContext)();
      await context.resume();
      console.log('Audio context resumed successfully');
      return true; // Phát âm thanh được phép
    } else {
      console.error('Web Audio API is not supported in this browser');
      return false; // Phát âm thanh không được phép
    }
  } catch (error) {
    console.error('Error resuming audio context:', error);
    return false; // Phát âm thanh không được phép do lỗi
  }
};

// Play audio function
export const playAudio = (src) => {
  const sound = new Howl({
    src: [src],
    volume: 0.5,
    loop: true,
  });
  sound.play();
};
