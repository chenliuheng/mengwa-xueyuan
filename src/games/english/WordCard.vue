<template>
  <div class="word-card-game">
    <div class="header">
      <button @click="$router.push('/english')">← 返回</button>
      <h2>🃏 单词卡片</h2>
      <span>⭐ {{ score }}</span>
    </div>
    
    <div class="progress">
      <span>第 {{ current + 1 }} / {{ words.length }} 题</span>
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: ((current + 1) / words.length * 100) + '%' }"></div>
      </div>
    </div>
    
    <div class="card-area">
      <div class="card" :class="{ flipped: isFlipped }" @click="flipCard">
        <div class="card-front">
          <span class="emoji">{{ words[current].emoji }}</span>
        </div>
        <div class="card-back">
          <span class="word">{{ words[current].word }}</span>
          <span class="pronunciation">{{ words[current].pron }}</span>
        </div>
      </div>
    </div>
    
    <div class="actions" v-if="isFlipped">
      <button class="btn-next" @click="nextWord">下一个 →</button>
    </div>
    
    <div class="hint" v-if="!isFlipped">
      <p>👆 点击卡片看看是什么</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const words = [
  { emoji: '🍎', word: 'apple', pron: '/ˈæpəl/' },
  { emoji: '🐶', word: 'dog', pron: '/dɔːɡ/' },
  { emoji: '🐱', word: 'cat', pron: '/kæt/' },
  { emoji: '🚗', word: 'car', pron: '/kɑːr/' },
  { emoji: '🏠', word: 'house', pron: '/haʊs/' },
  { emoji: '🌞', word: 'sun', pron: '/sʌn/' },
  { emoji: '🌙', word: 'moon', pron: '/muːn/' },
  { emoji: '⭐', word: 'star', pron: '/stɑːr/' },
  { emoji: '🎈', word: 'balloon', pron: '/bəˈluːn/' },
  { emoji: '🍕', word: 'pizza', pron: '/ˈpiːtsə/' }
]

const current = ref(0)
const isFlipped = ref(false)
const score = ref(0)

const flipCard = () => {
  isFlipped.value = !isFlipped.value
}

const nextWord = () => {
  score.value += 10
  if (current.value < words.length - 1) {
    current.value++
    isFlipped.value = false
  } else {
    alert(`🎉 完成！获得 ${score.value} 经验值！`)
    score.value = 0
    current.value = 0
    isFlipped.value = false
  }
}
</script>

<style scoped>
.word-card-game {
  min-height: 100vh;
  background: linear-gradient(135deg, #E8F5E9, #C8E6C9);
  padding: 20px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.header button {
  padding: 8px 16px;
  border: none;
  background: white;
  border-radius: 8px;
  cursor: pointer;
}

.header h2 {
  font-size: 20px;
  color: #2E7D32;
}

.header span {
  font-size: 18px;
  font-weight: bold;
  color: #FF9800;
}

.progress {
  margin-bottom: 30px;
}

.progress span {
  font-size: 14px;
  color: #666;
}

.progress-bar {
  height: 8px;
  background: white;
  border-radius: 4px;
  margin-top: 8px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: #4CAF50;
  border-radius: 4px;
  transition: width 0.3s;
}

.card-area {
  display: flex;
  justify-content: center;
  padding: 40px 0;
}

.card {
  width: 240px;
  height: 320px;
  position: relative;
  perspective: 1000px;
  cursor: pointer;
}

.card-front, .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 32px rgba(0,0,0,0.2);
  transition: transform 0.6s;
}

.card-front {
  background: white;
}

.card-back {
  background: linear-gradient(135deg, #4CAF50, #8BC34A);
  transform: rotateY(180deg);
  color: white;
}

.card.flipped .card-front {
  transform: rotateY(180deg);
}

.card.flipped .card-back {
  transform: rotateY(0deg);
}

.emoji {
  font-size: 120px;
}

.word {
  font-size: 48px;
  font-weight: bold;
}

.pronunciation {
  font-size: 24px;
  opacity: 0.8;
  margin-top: 8px;
}

.actions {
  text-align: center;
  margin-top: 30px;
}

.btn-next {
  background: #4CAF50;
  color: white;
  border: none;
  padding: 16px 48px;
  font-size: 18px;
  border-radius: 30px;
  cursor: pointer;
  font-weight: bold;
}

.hint {
  text-align: center;
  margin-top: 30px;
  color: #666;
}
</style>
