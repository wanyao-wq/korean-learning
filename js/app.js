// 延世韩国语学习平台 - 主应用逻辑

// 全局变量
let currentLesson = null;
let currentTab = 'text';

// 学习进度管理
const ProgressManager = {
    key: 'korean_learning_progress',

    // 获取所有进度
    getAll: function() {
        const data = localStorage.getItem(this.key);
        return data ? JSON.parse(data) : {
            completedLessons: [],
            learnedWords: [],
            completedExercises: [],
            exerciseScores: {}
        };
    },

    // 保存进度
    save: function(data) {
        localStorage.setItem(this.key, JSON.stringify(data));
    },

    // 标记课程完成
    completeLesson: function(lessonId) {
        const progress = this.getAll();
        if (!progress.completedLessons.includes(lessonId)) {
            progress.completedLessons.push(lessonId);
            this.save(progress);
        }
    },

    // 标记单词已学
    learnWord: function(lessonId, wordIndex) {
        const progress = this.getAll();
        const key = `${lessonId}-${wordIndex}`;
        if (!progress.learnedWords.includes(key)) {
            progress.learnedWords.push(key);
            this.save(progress);
        }
    },

    // 保存练习分数
    saveExerciseScore: function(lessonId, score, total) {
        const progress = this.getAll();
        progress.exerciseScores[lessonId] = { score, total };
        if (!progress.completedExercises.includes(lessonId)) {
            progress.completedExercises.push(lessonId);
        }
        this.save(progress);
    },

    // 获取统计信息
    getStats: function() {
        const progress = this.getAll();
        return {
            completedLessons: progress.completedLessons.length,
            learnedWords: progress.learnedWords.length,
            completedExercises: progress.completedExercises.length
        };
    }
};

// 页面切换
function showPage(pageId) {
    // 隐藏所有页面
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // 显示目标页面
    document.getElementById(pageId).classList.add('active');

    // 更新导航按钮状态
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.page === pageId) {
            btn.classList.add('active');
        }
    });

    // 根据页面类型执行初始化
    if (pageId === 'home') {
        updateHomePage();
    } else if (pageId === 'practice') {
        updatePracticePage();
    } else if (pageId === 'progress') {
        updateProgressPage();
    }
}

// 更新首页
function updateHomePage() {
    // 更新统计信息
    const stats = ProgressManager.getStats();
    document.getElementById('total-lessons').textContent = stats.completedLessons;
    document.getElementById('total-words').textContent = stats.learnedWords;
    document.getElementById('total-exercises').textContent = stats.completedExercises;

    // 生成课程列表
    const lessonList = document.getElementById('lesson-list');
    lessonList.innerHTML = '';

    courseData.lessons.forEach(lesson => {
        const card = document.createElement('div');
        card.className = 'lesson-card';

        // 计算词汇数量（支持子单元结构）
        let vocabCount = 0;
        if (lesson.subunits && lesson.subunits.length > 0) {
            lesson.subunits.forEach(sub => {
                vocabCount += sub.vocab ? sub.vocab.length : 0;
            });
        } else {
            vocabCount = lesson.vocab ? lesson.vocab.length : 0;
        }

        card.innerHTML = `
            <h3>${lesson.title}</h3>
            <p>${lesson.titleChinese}</p>
            <p>词汇: ${vocabCount}个${lesson.subunits ? ' | ' + lesson.subunits.length + '个小单元' : ''}</p>
        `;
        card.onclick = () => openLesson(lesson.id);
        lessonList.appendChild(card);
    });
}

// 打开课程
function openLesson(lessonId) {
    currentLesson = courseData.lessons.find(l => l.id === lessonId);
    if (!currentLesson) return;

    // 更新课程标题
    document.getElementById('lesson-title').textContent = currentLesson.title;

    // 重置标签页
    currentTab = 'text';

    // 检查是否有子单元
    if (currentLesson.subunits && currentLesson.subunits.length > 0) {
        // 显示子单元选择器
        showSubunitSelector();
        // 默认选择第一个子单元
        currentSubunit = currentLesson.subunits[0];
    } else {
        // 隐藏子单元选择器
        hideSubunitSelector();
        currentSubunit = null;
    }

    updateLessonContent();

    // 切换到课程页面
    showPage('lesson');

    // 标记课程已访问（可选：标记为完成）
    // ProgressManager.completeLesson(lessonId);
}

// 当前子单元
let currentSubunit = null;

// 显示子单元选择器
function showSubunitSelector() {
    let selector = document.getElementById('subunit-selector');
    if (!selector) {
        // 创建子单元选择器
        selector = document.createElement('div');
        selector.id = 'subunit-selector';
        selector.style.marginBottom = '20px';
        selector.style.display = 'flex';
        selector.style.gap = '10px';
        selector.style.flexWrap = 'wrap';

        // 插入到课程标题后面
        const lessonHeader = document.querySelector('.lesson-header');
        lessonHeader.parentNode.insertBefore(selector, lessonHeader.nextSibling);
    }

    // 清空选择器
    selector.innerHTML = '';

    // 添加子单元按钮
    currentLesson.subunits.forEach((subunit, index) => {
        const btn = document.createElement('button');
        btn.className = 'subunit-btn';
        btn.textContent = subunit.title;
        btn.style.padding = '8px 16px';
        btn.style.border = '2px solid #4ECDC4';
        btn.style.borderRadius = '20px';
        btn.style.background = index === 0 ? '#4ECDC4' : 'white';
        btn.style.color = index === 0 ? 'white' : '#4ECDC4';
        btn.style.cursor = 'pointer';

        btn.onclick = () => {
            currentSubunit = subunit;
            // 更新按钮状态
            selector.querySelectorAll('.subunit-btn').forEach(b => {
                b.style.background = 'white';
                b.style.color = '#4ECDC4';
            });
            btn.style.background = '#4ECDC4';
            btn.style.color = 'white';
            updateLessonContent();
        };

        selector.appendChild(btn);
    });
}

// 隐藏子单元选择器
function hideSubunitSelector() {
    const selector = document.getElementById('subunit-selector');
    if (selector) {
        selector.style.display = 'none';
    }
}

// 更新课程内容
function updateLessonContent() {
    if (!currentLesson) return;

    // 更新标签按钮状态
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.tab === currentTab) {
            btn.classList.add('active');
        }
    });

    // 更新标签面板
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    document.getElementById(`${currentTab}-tab`).classList.add('active');

    // 根据当前标签页加载内容
    switch (currentTab) {
        case 'text':
            loadTextContent();
            break;
        case 'vocab':
            loadVocabContent();
            break;
        case 'grammar':
            loadGrammarContent();
            break;
    }
}

// 加载课文内容
function loadTextContent() {
    const container = document.getElementById('text-tab');
    container.innerHTML = '<h3>课文内容</h3>';

    // 获取课文数据（优先使用子单元数据）
    const textData = currentSubunit ? currentSubunit.text : currentLesson.text;

    const textDiv = document.createElement('div');
    textDiv.className = 'text-content';

    textData.korean.forEach((korean, index) => {
        const textItem = document.createElement('div');
        textItem.className = 'text-item';
        textItem.style.marginBottom = '20px';
        textItem.style.padding = '15px';
        textItem.style.background = '#f9f9f9';
        textItem.style.borderRadius = '8px';

        const koreanP = document.createElement('p');
        koreanP.className = 'korean-text';
        koreanP.style.fontSize = '20px';
        koreanP.style.fontWeight = 'bold';
        koreanP.style.color = '#FF6B6B';
        koreanP.textContent = korean;

        const chineseP = document.createElement('p');
        chineseP.className = 'chinese-text';
        chineseP.style.color = '#666';
        chineseP.style.marginTop = '10px';
        chineseP.textContent = textData.chinese[index];

        textItem.appendChild(koreanP);
        textItem.appendChild(chineseP);
        textDiv.appendChild(textItem);
    });

    container.appendChild(textDiv);

    // 添加发音功能
    SpeechManager.addPronunciationToText(container);
}

// 加载词汇内容
function loadVocabContent() {
    const container = document.getElementById('vocab-tab');
    container.innerHTML = '<h3>词汇表</h3>';

    // 获取词汇数据（优先使用子单元数据）
    const vocabData = currentSubunit ? currentSubunit.vocab : currentLesson.vocab;

    const vocabGrid = document.createElement('div');
    vocabGrid.className = 'vocab-grid';

    vocabData.forEach((word, index) => {
        const vocabCard = document.createElement('div');
        vocabCard.className = 'vocab-card';
        vocabCard.innerHTML = `
            <div class="vocab-korean">${word.korean}</div>
            <div class="vocab-chinese">${word.chinese}</div>
            <div class="vocab-pronunciation">${word.pronunciation}</div>
        `;

        // 添加点击学习标记
        vocabCard.onclick = () => {
            ProgressManager.learnWord(currentLesson.id, index);
            vocabCard.style.background = '#e8f5e9';
            SpeechManager.speak(word.korean);
        };

        vocabGrid.appendChild(vocabCard);
    });

    container.appendChild(vocabGrid);

    // 添加发音功能
    SpeechManager.addPronunciationToVocab(container);
}

// 加载语法内容
function loadGrammarContent() {
    const container = document.getElementById('grammar-tab');
    container.innerHTML = '<h3>语法点</h3>';

    // 获取语法数据（优先使用子单元数据）
    const grammarData = currentSubunit ? currentSubunit.grammar : currentLesson.grammar;

    grammarData.forEach(grammar => {
        const grammarDiv = document.createElement('div');
        grammarDiv.className = 'grammar-point';

        const title = document.createElement('div');
        title.className = 'grammar-title';
        title.textContent = grammar.title;

        const explanation = document.createElement('p');
        explanation.textContent = grammar.explanation;

        const examplesDiv = document.createElement('div');
        examplesDiv.className = 'grammar-examples';

        grammar.examples.forEach(example => {
            const exampleDiv = document.createElement('div');
            exampleDiv.className = 'grammar-example';
            exampleDiv.innerHTML = `
                <p><strong>${example.korean}</strong></p>
                <p style="color: #666; margin-top: 5px;">${example.chinese}</p>
            `;
            examplesDiv.appendChild(exampleDiv);
        });

        grammarDiv.appendChild(title);
        grammarDiv.appendChild(explanation);
        grammarDiv.appendChild(examplesDiv);
        container.appendChild(grammarDiv);
    });
}

// 更新练习页面
function updatePracticePage() {
    const select = document.getElementById('practice-lesson-select');
    select.innerHTML = '<option value="">选择课程</option>';

    courseData.lessons.forEach(lesson => {
        const option = document.createElement('option');
        option.value = lesson.id;
        option.textContent = `${lesson.title} - ${lesson.titleChinese}`;
        select.appendChild(option);
    });

    // 清空练习容器
    document.getElementById('exercise-container').innerHTML = '<p style="text-align: center; color: #999;">请选择一个课程开始练习</p>';
}

// 加载练习题
function loadExercises(lessonId) {
    const lesson = courseData.lessons.find(l => l.id === parseInt(lessonId));
    if (!lesson) return;

    const container = document.getElementById('exercise-container');
    container.innerHTML = '';

    lesson.exercises.forEach((exercise, index) => {
        const exerciseDiv = document.createElement('div');
        exerciseDiv.className = 'exercise-item';
        exerciseDiv.innerHTML = `
            <div class="exercise-question">${index + 1}. ${exercise.question}</div>
            ${exercise.hint ? `<div class="exercise-hint">提示: ${exercise.hint}</div>` : ''}
            <input type="text" class="exercise-input" data-answer="${exercise.answer}" placeholder="请输入答案">
            <div class="exercise-answer" id="answer-${index}">
                <span class="answer-status"></span>
                <span class="correct-answer">正确答案: ${exercise.answer}</span>
            </div>
        `;
        container.appendChild(exerciseDiv);
    });
}

// 检查答案
function checkAnswers() {
    const inputs = document.querySelectorAll('.exercise-input');
    let correctCount = 0;
    const total = inputs.length;

    inputs.forEach((input, index) => {
        const userAnswer = input.value.trim();
        const correctAnswer = input.dataset.answer;
        const answerDiv = document.getElementById(`answer-${index}`);
        const statusSpan = answerDiv.querySelector('.answer-status');

        if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
            statusSpan.textContent = '✓ 正确!';
            statusSpan.className = 'answer-correct';
            input.style.borderColor = '#4caf50';
            correctCount++;
        } else {
            statusSpan.textContent = '✗ 错误';
            statusSpan.className = 'answer-wrong';
            input.style.borderColor = '#f44336';
        }

        answerDiv.classList.add('show');
    });

    // 保存练习分数
    const lessonSelect = document.getElementById('practice-lesson-select');
    if (lessonSelect.value) {
        ProgressManager.saveExerciseScore(parseInt(lessonSelect.value), correctCount, total);
    }

    // 显示结果
    alert(`练习完成！正确率: ${correctCount}/${total} (${Math.round(correctCount/total*100)}%)`);
}

// 更新进度页面
function updateProgressPage() {
    const stats = ProgressManager.getStats();
    const progress = ProgressManager.getAll();

    // 更新进度条
    const chart = document.getElementById('progress-chart');
    const totalLessons = courseData.lessons.length;
    const percentage = Math.round(stats.completedLessons / totalLessons * 100);

    chart.innerHTML = `
        <div class="progress-bar" style="width: ${percentage}%"></div>
        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 24px; font-weight: bold; color: #333;">
            ${percentage}%
        </div>
    `;

    // 更新详细信息
    const details = document.getElementById('progress-details');
    details.innerHTML = `
        <div class="progress-item">
            <div class="progress-item-title">已完成课程</div>
            <div class="progress-item-value">${stats.completedLessons}/${totalLessons}</div>
        </div>
        <div class="progress-item">
            <div class="progress-item-title">已学词汇</div>
            <div class="progress-item-value">${stats.learnedWords}</div>
        </div>
        <div class="progress-item">
            <div class="progress-item-title">完成练习</div>
            <div class="progress-item-value">${stats.completedExercises}</div>
        </div>
        <div class="progress-item">
            <div class="progress-item-title">平均正确率</div>
            <div class="progress-item-value">${calculateAverageScore()}%</div>
        </div>
    `;
}

// 计算平均正确率
function calculateAverageScore() {
    const progress = ProgressManager.getAll();
    const scores = progress.exerciseScores;

    if (Object.keys(scores).length === 0) return 0;

    let totalScore = 0;
    let totalCount = 0;

    Object.values(scores).forEach(score => {
        totalScore += score.score;
        totalCount += score.total;
    });

    return Math.round(totalScore / totalCount * 100);
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 初始化导航按钮
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            showPage(btn.dataset.page);
        });
    });

    // 初始化标签页按钮
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentTab = btn.dataset.tab;
            updateLessonContent();
        });
    });

    // 初始化练习选择器
    document.getElementById('practice-lesson-select').addEventListener('change', (e) => {
        if (e.target.value) {
            loadExercises(e.target.value);
        }
    });

    // 初始化检查答案按钮
    document.getElementById('check-answers').addEventListener('click', checkAnswers);

    // 显示首页
    showPage('home');
});
