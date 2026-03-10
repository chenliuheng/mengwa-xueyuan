<template>
  <div class="word-match-game">
    <div class="header">
      <button @click="$router.push('/english')">← 返回</button>
      <h2>🎯 单词消消乐</h2>
      <div class="score">
        <span>⭐ {{ score }}</span>
        <span>⏱️ {{ time }}</span>
      </div>
    </div>
    
    <div class="game-board" v-if="!gameOver">
      <div 
        v-for="(card, index) in cards" 
        :key="index"
        class="card"
        :class="{ matched: card.matched, selected: card.selected }"
        @click="selectCard(index)"
      >
        <span v-if="!card.matched">{{ card.emoji }}</span>
        <span v-else class="matched-icon">✅</span>
      </div>
    </div>
    
    <div class="game-over" v-else>
      <h2>🎉 游戏结束！</h2>
      <p>得分：{{ score }}</p>
      <button @click="restartGame">再玩一次</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const words = [
  { word: 'apple', emoji: '🍎' },
  { word: 'dog', emoji: '🐶' },
  { word: 'cat', emoji: '🐱' },
  { word: 'car', emoji: '🚗' },
  { word: 'sun', emoji: '🌞' },
  { word: 'moon', emoji: '🌙' },
  { word: 'star', emoji: '⭐' },
  { word: 'fish', emoji: '🐟' }
]

const cards = ref([])
const selected = ref([])
const score = ref(0)
const time = ref(60)
const gameOver = ref(false)
let timer = null

const initGame = () => {
  // 创建配对卡片
  const pairs = [...words, ...words]
  // 洗牌
  for (let i = pairs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pairs[i], pairs[j]] = [pairs[j], pairs[i]]
  }
  
  cards.value = pairs.map((item, index) => ({
    ...item,
    id: index,
    matched: false,
    selected: false
  }))
  
  score.value = 0
  time.value = 60
  gameOver.value = false
  selected.value = []
  
  // 开始计时
  timer = setInterval(() => {
    time.value--
    if (time.value <= 0) {
      gameOver.value = true
      clearInterval(timer)
    }
  }, 1000)
}

const selectCard = (index) => {
  const card = cards.value[index]
  
  // 不能选中已匹配或已选中的
  if (card.matched || card.selected) return
  // 最多选2张
  if (selected.value.length >= 2) return
  
  card.selected = true
  selected.value.push(index)
  
  if (selected.value.length === 2) {
    const [idx1, idx2] = selected.value
    const card1 = cards.value[idx1]
    const card2 = cards.value[idx2]
    
    if (card1.word === card2.word) {
      // 配对成功
      card1.matched = true
      card2.matched = true
      score.value += 20
      selected.value = []
      
      // 检查是否全部消除
      if (cards.value.every(c => c.matched)) {
        gameOver.value = true
        clearInterval(timer)
        score.value += time.value * 2 // 剩余时间加分
      }
    } else {
      // 配对失败，稍后翻转回去
      setTimeout(() => {
        card1.selected = false
        card2.selected = false
        selected.value = []
      }, 800)
    }
  }
}

const restartGame = () => {
  initGame()
}

onMounted(() => {
  initGame()
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<style scoped>
.word-match-game {
  min-height: 100vh;
  background: linear-gradient(135deg, #E3F2FD, #90CAF9);
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
  font-size: 18px;
  color: #1565C0;
}

.score {
  display: flex;
  gap: 16px;
}

.score span {
  font-size: 18px;
  font-weight: bold;
  color: #FF9800;
}

.game-board {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  max-width: 400px;
  margin: 0 auto;
}

.card {
  aspect-ratio: 1;
  background: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  cursor: pointer;
  transition: transform 0.2s, background 0.2s;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.card:active {
  transform: scale(0.95);
}

.card.selected {
  background: #FFE082;
  border: 3px solid #FF9800;
}

.card.matched {
  background: #C8E6C9;
  opacity: 0.6;
}

.matched-icon {
  font-size: 24px;
}

.game-over {
  text-align: center;
  padding: 60px 20px;
}

.game-over h2 {
  font-size: 32px;
  color: #4CAF50;
  margin-bottom: 16px;
}

.game-over p {
  font-size: 24px;
  margin-bottom: 30px;
}

.game-over button {
  background: #4CAF50;
  color: white;
  border: none;
  padding: 16px 48px;
  font-size: 18px;
  border-radius: 30px;
  cursor: pointer;
}
</style>
