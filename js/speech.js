// 韩语发音功能
// 使用Web Speech API实现韩语朗读

const SpeechManager = {
    // 检查浏览器是否支持语音合成
    isSupported: function() {
        return 'speechSynthesis' in window;
    },

    // 朗读韩语文本
    speak: function(text, lang = 'ko-KR') {
        if (!this.isSupported()) {
            console.warn('浏览器不支持语音合成');
            alert('您的浏览器不支持语音合成功能，请使用Chrome或Edge浏览器');
            return;
        }

        // 取消之前的朗读
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        utterance.rate = 0.8; // 语速稍慢，便于学习
        utterance.pitch = 1;

        // 尝试找到韩语语音
        const voices = window.speechSynthesis.getVoices();
        const koreanVoice = voices.find(voice => voice.lang.startsWith('ko'));

        if (koreanVoice) {
            utterance.voice = koreanVoice;
        }

        window.speechSynthesis.speak(utterance);
    },

    // 创建发音按钮
    createSpeakButton: function(text, lang = 'ko-KR') {
        const button = document.createElement('button');
        button.className = 'speak-btn';
        button.innerHTML = '🔊';
        button.title = '点击朗读';
        button.onclick = (e) => {
            e.stopPropagation();
            this.speak(text, lang);
        };
        return button;
    },

    // 为词汇卡片添加发音功能
    addPronunciationToVocab: function(container) {
        const vocabCards = container.querySelectorAll('.vocab-card');
        vocabCards.forEach(card => {
            const koreanText = card.querySelector('.vocab-korean').textContent;
            const speakBtn = this.createSpeakButton(koreanText);
            card.appendChild(speakBtn);
            card.style.cursor = 'pointer';
            card.onclick = () => this.speak(koreanText);
        });
    },

    // 为课文添加发音功能
    addPronunciationToText: function(container) {
        const textItems = container.querySelectorAll('.text-item');
        textItems.forEach(item => {
            const koreanText = item.querySelector('.korean-text').textContent;
            const speakBtn = this.createSpeakButton(koreanText);
            item.appendChild(speakBtn);
        });
    },

    // 停止朗读
    stop: function() {
        if (this.isSupported()) {
            window.speechSynthesis.cancel();
        }
    }
};

// 页面加载时初始化语音
document.addEventListener('DOMContentLoaded', function() {
    if (SpeechManager.isSupported()) {
        // 预加载语音列表
        window.speechSynthesis.getVoices();
    }
});
